"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
export default function ContactBubble() {
  const [showHint, setShowHint] = useState(true);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const bubbleRef = useRef<HTMLDivElement>(null);

  // Hide hint after 3.5s
  useEffect(() => {
    if (showHint) {
      const timer = setTimeout(() => setShowHint(false), 3500);
      return () => clearTimeout(timer);
    }
  }, [showHint]);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(event: MouseEvent) {
      // If the click is on the toggle button, do nothing
      const button = document.getElementById("contact-bubble-toggle-btn");
      if (
        bubbleRef.current &&
        !bubbleRef.current.contains(event.target as Node) &&
        (!button || !button.contains(event.target as Node))
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const response = await fetch("https://formspree.io/f/xyknergd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{
              x: { type: "spring", stiffness: 80, damping: 18 },
              opacity: { duration: 0.3 },
              duration: 0.7,
            }}
            style={{
              position: "absolute",
              bottom: 24,
              right: 80,
              zIndex: 60,
              pointerEvents: "none",
              minWidth: 180,
              maxWidth: 260,
              overflow: "hidden",
            }}
            className="bg-blue-500 text-white px-5 py-2 rounded-full shadow-lg font-semibold text-base select-none flex items-center"
          >
            <span className="whitespace-nowrap animate-marquee-ticker">
              You can contact me here
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={bubbleRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="mb-3 w-80 max-w-xs bg-gray-800 rounded-2xl shadow-2xl p-5 border border-white/10"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-lg text-white">Contact Me</span>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close contact form"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="rounded-lg px-3 py-2 bg-gray-800 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="rounded-lg px-3 py-2 bg-gray-800 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="rounded-lg px-3 py-2 bg-gray-800 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="rounded-lg px-3 py-2 bg-gray-800 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={3}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-left"
                style={{ alignSelf: "flex-start" }}
              >
                {isSubmitting ? (
                  "Sending Please Wait ..."
                ) : (
                  <>
                    <span className="px-2">Send Message</span>
                    <Send className="mr-2 w-6 h-6" />
                  </>
                )}
              </button>
              {submitStatus === "success" && (
                <div className="text-green-400 text-center text-sm mt-2">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="text-red-400 text-center text-sm mt-2">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
            <div className="mt-3 text-xs text-gray-400 text-center">
              Or email:{" "}
              <a href="mailto:byrumadhusudhan@gmail.com" className="underline">
                byrumadhusudhan@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        id="contact-bubble-toggle-btn"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.97 }}
        animate={{
          scale: [1, 1.12, 1],
          boxShadow: [
            "0 4px 24px 0 rgba(0,0,0,0.25)",
            "0 8px 32px 0 rgba(0,0,0,0.35)",
            "0 4px 24px 0 rgba(0,0,0,0.25)",
          ],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center text-3xl focus:outline-none border-4 border-white/10"
        aria-label="Contact Me Bubble"
        style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.25)" }}
      >
        <MessageCircle className="w-8 h-8" />
      </motion.button>
    </div>
  );
}
