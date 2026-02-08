"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const experiences = [
  {
    id: 1,
    role: "PR Manager",
    company: "Agency One",
    period: "2023 — Present",
    description:
      "Lead media relations and campaign strategy for consumer and lifestyle brands.",
  },
  {
    id: 2,
    role: "Marketing Coordinator",
    company: "Studio Two",
    period: "2021 — 2023",
    description:
      "Managed social media channels and coordinated product launch campaigns.",
  },
  {
    id: 3,
    role: "PR Intern",
    company: "Creative Co.",
    period: "2020 — 2021",
    description:
      "Supported senior publicists with media outreach, event coordination, and press materials.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const, delay: i * 0.12 },
  }),
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-28 pb-32 px-6 sm:px-10 md:px-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.06em] leading-none text-black mb-16"
        >
          Experience
        </motion.h1>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={fadeUp}
              custom={i}
              className="border-t border-black/10 py-10 md:py-14 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-12"
            >
              <div>
                <p className="text-xs uppercase tracking-widest text-gray mb-2">
                  {exp.period}
                </p>
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                  {exp.role}
                </h2>
                <p className="text-sm text-gray mt-1">{exp.company}</p>
              </div>

              <p className="text-base sm:text-lg text-gray leading-relaxed tracking-[-0.02em] md:pt-6">
                {exp.description}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-black/10" />
        </div>
      </main>
    </>
  );
}
