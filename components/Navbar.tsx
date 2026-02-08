"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Works", href: "/projects" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isContactOpen, setIsContactOpen] = useState(false);

  const closeModal = useCallback(() => setIsContactOpen(false), []);

  useEffect(() => {
    if (!isContactOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isContactOpen, closeModal]);

  if (pathname === "/") return null;

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 backdrop-blur-md border-b border-black/5"
      >
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-black"
          aria-label="Home"
        >
          BMH
        </Link>

        <ul className="flex items-center gap-8" role="navigation">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-gray transition-colors duration-200 hover:text-black"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={() => setIsContactOpen(true)}
              className="text-sm font-medium text-gray transition-colors duration-200 hover:text-black"
              aria-label="Open contact modal"
            >
              Contact
            </button>
          </li>
        </ul>
      </motion.nav>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-label="Contact information"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-6 p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray hover:text-black transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <h2 className="text-2xl font-semibold tracking-tight text-black mb-4">
                Let&apos;s Connect!
              </h2>
              <p className="text-base text-gray leading-relaxed mb-6">
                I&apos;d love to connect! Feel free to reach out to me on LinkedIn
                or shoot me an email.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="https://www.linkedin.com/in/bella-maria-hill"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border border-black/10 text-sm font-medium text-black hover:bg-neutral-50 transition-colors"
                >
                  <Linkedin size={18} />
                  Connect on LinkedIn
                </a>
                <a
                  href="mailto:bmhill@usc.edu"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border border-black/10 text-sm font-medium text-black hover:bg-neutral-50 transition-colors"
                >
                  <Mail size={18} />
                  bmhill@usc.edu
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
