"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Brain, Code2, Menu, X } from "lucide-react";
import { text } from "stream/consumers";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);
  const pathname = usePathname();
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/education", label: "Education" },
    { path: "/experience", label: "Experience" },
    { path: "/contact", label: "Contact" },
  ];
  return (
    <motion.nav
      className="fixed top-0 w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xl w-full" />

        <div className="relative w-full px-2 sm:px-4 lg:px-8 text-white">
          <div className="flex h-16 items-center justify-between w-full text-white">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 sm:space-x-3 text-white min-w-0"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r from-gray-100 to-white-100 flex items-center justify-center text-black font-bold text-base sm:text-lg">
                MB
              </div>
              <span className="truncate text-lg sm:text-xl font-bold">
                Madhusudhan Byru
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-3 sm:space-x-6 text-white">
              {navLinks.map((link) => (
                <motion.div
                  key={link.path}
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ display: "inline-block" }}
                >
                  <Link
                    href={link.path}
                    className={`nav-link !text-white px-2 py-1 rounded-md text-base sm:text-lg ${pathname === link.path ? "bg-white/15 backdrop-blur-sm" : ""}`}
                    aria-current={pathname === link.path ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
              <button
                ref={buttonRef}
                onClick={() => setIsMenuOpen((open) => !open)}
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? (
                  <X className="w-7 h-7" />
                ) : (
                  <Menu className="w-7 h-7" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden absolute top-16 left-0 w-full bg-black/90 backdrop-blur-xl shadow-lg z-50"
            >
              <div className="flex flex-col py-4 px-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`block py-2 px-3 rounded text-base font-semibold transition-colors duration-150 ${pathname === link.path ? "bg-white/10 text-white" : "text-gray-200 hover:bg-white/5"}`}
                    aria-current={pathname === link.path ? "page" : undefined}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
