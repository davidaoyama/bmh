"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-[#fff3ff]/80 backdrop-blur-md border-b border-black/5"
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
            {link.href.startsWith("#") ? (
              <a
                href={link.href}
                className="text-sm font-medium text-gray transition-colors duration-200 hover:text-black"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className="text-sm font-medium text-gray transition-colors duration-200 hover:text-black"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
