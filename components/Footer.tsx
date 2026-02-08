"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Linkedin, Twitter } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const, delay: i * 0.1 },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const Footer = () => {
  return (
    <footer id="contact" className="px-6 sm:px-10 md:px-20 pb-10 pt-16">
      <div className="w-full h-px bg-black/10 mb-16" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-30px" }}
        variants={staggerContainer}
        className="flex flex-col md:flex-row justify-between gap-12"
      >
        <motion.div variants={fadeUp} custom={0} className="space-y-6">
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-[-0.04em] text-black">
            Get in touch
          </h3>

          <div className="space-y-3">
            <a
              href="mailto:hello@bmh.com"
              className="flex items-center gap-3 text-sm sm:text-base text-gray hover:text-black transition-colors duration-300"
            >
              <Mail size={16} />
              hello@bmh.com
            </a>
            <a
              href="tel:+11234567890"
              className="flex items-center gap-3 text-sm sm:text-base text-gray hover:text-black transition-colors duration-300"
            >
              <Phone size={16} />
              +1 (123) 456-7890
            </a>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} custom={1} className="space-y-6">
          <h4 className="text-xs uppercase tracking-widest text-gray">
            Social
          </h4>
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray hover:text-black transition-colors duration-300"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray hover:text-black transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-gray hover:text-black transition-colors duration-300"
            >
              <Twitter size={20} />
            </a>
          </div>
        </motion.div>
      </motion.div>

      <div className="mt-16 pt-6 border-t border-black/5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray">
          &copy; {new Date().getFullYear()} BMH. All rights reserved.
        </p>
        <p className="text-xs text-gray">
          PR &amp; Marketing
        </p>
      </div>
    </footer>
  );
};

export default Footer;
