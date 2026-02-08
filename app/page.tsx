"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Linkedin, Twitter } from "lucide-react";
import Navbar from "@/components/Navbar";

// ——— Dummy project data (swap images/titles with real ones later) ———
const projects = [
  {
    id: 1,
    title: "Brand Campaign — Lumina",
    category: "PR Strategy",
    image: "/projects/project-1.jpg",
  },
  {
    id: 2,
    title: "Product Launch — Solstice",
    category: "Marketing",
    image: "/projects/project-2.jpg",
  },
  {
    id: 3,
    title: "Social Media — Verdant",
    category: "Digital",
    image: "/projects/project-3.jpg",
  },
  {
    id: 4,
    title: "Event Branding — Noctis",
    category: "Experiential",
    image: "/projects/project-4.jpg",
  },
];

// ——— Animation variants ———
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

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        {/* ——— Hero Section ——— */}
        <section className="flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-20">
          {/* Name + Avatar row */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-28">
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[10vw] md:text-[13rem] font-semibold tracking-[-0.06em] leading-[0.8] text-black text-left"
            >
              Bella
              <br />
              Maria
              <br/>
              Hill
            </motion.h1>

            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative w-48 h-48 md:w-80 md:h-80 overflow-hidden rounded-full bg-neutral-200 shrink-0"
            >
              <Image
                src="/images/bmh-headshot.webp"
                alt="BMH profile photo"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 192px, 320px"
              />
            </motion.div>
          </div>

          {/* Details below */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 text-lg sm:text-xl md:text-2xl text-gray text-center tracking-[-0.03em]"
          >
            PR &amp; Marketing Professional
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-16 h-px bg-black/15 mt-8 mb-6 origin-center"
          />

          <motion.a
            href="mailto:hello@bmh.com"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-2 text-sm sm:text-base text-gray hover:text-black transition-colors duration-200"
          >
            <Mail size={16} />
            bmhill@usc.edu
          </motion.a>
        </section>

        {/* ——— Projects Section ——— */}
        <section id="projects" className="px-6 sm:px-10 md:px-20 pb-32">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={0}
            className="text-3xl sm:text-4xl font-semibold tracking-[-0.04em] mb-12 text-black"
          >
            Recent Works
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {projects.map((project, i) => (
              <motion.article
                key={project.id}
                variants={fadeUp}
                custom={i}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-neutral-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Card info */}
                <div className="mt-4 mb-2">
                  <p className="text-xs uppercase tracking-widest text-gray mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-base sm:text-lg font-medium tracking-tight text-black truncate">
                    {project.title}
                  </h3>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* ——— About Section ——— */}
        <section
          id="about"
          className="px-6 sm:px-10 md:px-20 py-24 md:py-32"
        >
          <div className="flex flex-col md:flex-row gap-12 md:gap-20">
            {/* Text column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={0}
              className="flex-1"
            >
              <p className="text-xs uppercase tracking-widest text-gray mb-6">
                About
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.06em] leading-[1.1] text-black">
                I help brands tell their story through strategic PR, compelling
                campaigns, and thoughtful marketing that resonates with the
                right audience.
              </h2>
              <p className="mt-8 text-base sm:text-lg text-gray leading-relaxed max-w-xl tracking-[-0.02em]">
                With experience spanning media relations, brand strategy, and
                digital marketing, I craft narratives that connect brands with
                their communities. Every project is an opportunity to create
                something meaningful.
              </p>
            </motion.div>

            {/* Image column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={1}
              className="relative w-full md:w-[45%] aspect-[4/5] overflow-hidden rounded-sm bg-neutral-100 shrink-0"
            >
              <Image
                src="/about.jpg"
                alt="BMH portrait"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </motion.div>
          </div>
        </section>

        {/* ——— Footer ——— */}
        <footer id="contact" className="px-6 sm:px-10 md:px-20 pb-10 pt-16">
          {/* Divider */}
          <div className="w-full h-px bg-black/10 mb-16" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row justify-between gap-12"
          >
            {/* Left — contact info */}
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

            {/* Right — socials */}
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

          {/* Bottom bar */}
          <div className="mt-16 pt-6 border-t border-black/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray">
              &copy; {new Date().getFullYear()} BMH. All rights reserved.
            </p>
            <p className="text-xs text-gray">
              PR &amp; Marketing
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
