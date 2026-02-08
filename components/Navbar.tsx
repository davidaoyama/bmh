"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
];

const EMAIL = "bmhill@usc.edu";

const Navbar = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-white/80 backdrop-blur-md border-b border-black/5"
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
            onClick={handleCopyEmail}
            className="text-sm font-medium text-gray transition-colors duration-200 hover:text-black cursor-pointer"
          >
            {copied ? "Copied!" : "Contact"}
          </button>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
