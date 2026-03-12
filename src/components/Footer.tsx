"use client";

import Link from "next/link";
import { Code2, Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const pageLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Certificates", path: "/certificates" },
    { name: "Contact", path: "/contact" },
  ];

  // Split links into columns of 3
  const column1 = pageLinks.slice(0, 3);
  const column2 = pageLinks.slice(3, 6);
  const column3 = pageLinks.slice(6, 9);

  return (
    <footer className="relative mt-24 w-full">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />

      <div className="relative mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 py-8 sm:py-12 w-full">
          {/* Branding */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <Code2
                className="w-7 h-7 sm:w-8 sm:h-8 text-white"
                aria-hidden="true"
              />
              <span className="text-lg sm:text-xl font-bold text-white">
                Madhusudhan Byru
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-gray-400">
              AI/ML Engineer based in USA.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4 mt-8 sm:mt-0">
            <h3 className="text-xs sm:text-sm font-semibold text-white">
              Contact
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="mailto:byrumadhusudhan@gmail.com"
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  aria-label="Email Madhusudhan Byru"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  byrumadhusudhan@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919390032400"
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  aria-label="Call Madhusudhan Byru"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  +1 573-465-5032
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">Social</h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/madhusudhanbyru37"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="mailto:byrumadhusudhan@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
