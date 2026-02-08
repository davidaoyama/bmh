"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";

// Show only first 2 projects on the home page
const previewProjects = projects.slice(0, 3);

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

      <main className="min-h-screen">
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
              className="relative w-56 h-56 md:w-96 md:h-96 overflow-hidden rounded-full bg-neutral-200 shrink-0"
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
            href="mailto:bmhill@usc.edu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-2 text-sm sm:text-base text-gray hover:text-black transition-colors duration-200"
          >
            <Mail size={16} />
            bmhill@usc.edu
          </motion.a>

          {/* ——— Pill Navbar ——— */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-10 w-full max-w-2xl flex items-center justify-center gap-3 bg-white/60 backdrop-blur-xl rounded-full shadow-lg shadow-black/5 border border-white/50 px-6 py-3"
            role="navigation"
            aria-label="Main navigation"
          >
            {[
              { label: "About Me", href: "/about" },
              { label: "My Experiences", href: "/experience" },
              { label: "My Works", href: "/projects" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex-1 text-center px-8 py-3 text-lg font-medium text-gray rounded-full transition-all duration-200 hover:bg-white/80 hover:text-black hover:shadow-sm"
              >
                {link.label}
              </Link>
            ))}
          </motion.nav>
        </section>

        {/* ——— Projects Preview Section ——— */}
        <section id="projects" className="px-6 sm:px-10 md:px-20 pb-20">
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
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
          >
            {previewProjects.map((project, i) => (
              <motion.article
                key={project.id}
                variants={fadeUp}
                custom={i}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group cursor-pointer"
              >
                <Link href={`/projects/${project.slug}`}>
                  {/* Thumbnail */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-neutral-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
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
                </Link>
              </motion.article>
            ))}
          </motion.div>

          {/* See all works link */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            variants={fadeUp}
            custom={0}
            className="mt-12 text-right"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-base sm:text-lg font-medium text-black transition-transform duration-200 hover:scale-105 hover:translate-x-1"
            >
              See all of my works
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </section>

        <div className="px-6 sm:px-10 md:px-20">
          <div className="w-full h-px bg-black/10" />
        </div>

        {/* ——— About Me Brief ——— */}
        <section className="px-6 sm:px-10 md:px-20 py-24">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={0}
              className="flex-1"
            >
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.04em] mb-6 text-black">
                About Me
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl font-medium tracking-[-0.04em] leading-[1.2] text-black max-w-2xl">
                My whole life revolves around storytelling.
              </p>
              <p className="mt-6 text-base text-gray leading-relaxed max-w-xl tracking-[-0.02em]">
                Growing up Indigenous, my aunties would gather around tables
                lined with handmade delicacies, filling entire rooms with
                laughter. In our culture, sharing memories is a living
                tradition&mdash;and it was around these tables that my passion for
                communication first took shape.
              </p>
              <p className="mt-4 text-base text-gray leading-relaxed max-w-xl tracking-[-0.02em]">
                Today, I&apos;m a PR &amp; Advertising major driven by that same
                belief: stories have the power to connect, move, and build
                community. What started as an appreciation for storytelling has
                grown into hands-on experience across brand strategy, digital
                marketing, and content creation.
              </p>
              <p className="mt-4 text-base text-gray leading-relaxed max-w-xl tracking-[-0.02em]">
                My goal is to help build brands and products that feel human.
              </p>

            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              custom={1}
              className="relative w-full md:w-[20%] aspect-[3/4] overflow-hidden rounded-sm bg-neutral-100 shrink-0"
            >
              <Image
                src="/images/bella-dodgers.jpg"
                alt="BMH portrait"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 28vw"
              />
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            variants={fadeUp}
            custom={0}
            className="mt-12 text-right"
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-base sm:text-lg font-medium text-black transition-transform duration-200 hover:scale-105 hover:translate-x-1"
            >
              Learn more about me
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </section>

        <div className="px-6 sm:px-10 md:px-20">
          <div className="w-full h-px bg-black/10" />
        </div>

        {/* ——— Experience Brief ——— */}
        <section className="px-6 sm:px-10 md:px-20 py-24">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            custom={0}
            className="text-3xl sm:text-4xl font-semibold tracking-[-0.04em] mb-10 text-black"
          >
            Experience
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
          >
            {[
              {
                role: "Assistant Director of Fundraising",
                company: "Troy Camp",
                period: "Aug 2025 — Present",
                logo: "/images/companies/troy-camp.jpeg",
              },
              {
                role: "Undergraduate Admissions Student Ambassador",
                company: "University of Southern California",
                period: "Oct 2023 — Present",
                logo: "/images/companies/usc.jpeg",
              },
              {
                role: "Communications Intern",
                company: "USC Good Neighbors Campaign",
                period: "Mar 2025 — Aug 2025",
                logo: "/images/companies/usc.jpeg",
              },
            ].map((exp, i) => (
              <motion.div
                key={exp.role}
                variants={fadeUp}
                custom={i}
                className="border border-black/10 rounded-lg p-5"
              >
                <div className="relative w-9 h-9 rounded-md overflow-hidden bg-neutral-100 shrink-0 mb-4">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    fill
                    className="object-cover"
                    sizes="36px"
                  />
                </div>
                <h3 className="text-base font-semibold tracking-tight text-black leading-snug">
                  {exp.role}
                </h3>
                <p className="text-sm text-gray mt-1">{exp.company}</p>
                <p className="text-xs uppercase tracking-widest text-gray mt-3">
                  {exp.period}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            variants={fadeUp}
            custom={0}
            className="mt-10 text-right"
          >
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 text-base sm:text-lg font-medium text-black transition-transform duration-200 hover:scale-105 hover:translate-x-1"
            >
              View full experience
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </section>

        <Footer />
      </main>
    </>
  );
}
