"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const experiences = [
  {
    id: 1,
    role: "Assistant Director of Fundraising",
    company: "Troy Camp",
    period: "Aug 2025 — Present",
    location: "Los Angeles, CA",
    logo: "/images/companies/troy-camp.jpeg",
    link: "https://troycamp.org",
    bullets: [
      "Support large-scale fundraising operations and event logistics for Troy Camp's annual fundraiser, reaching an audience of 75,000+, contributing to $80K+ raised annually",
      "Create digital fundraising assets, including donor packets and personalized newsletters, leveraging Canva and Adobe Illustrator to deliver cohesive, on-brand messaging",
      "Contribute to programming that serves 700+ LA-local students weekly (grades 3–12), fostering a supportive environment through academic, creative, and recreational programming",
    ],
  },
  {
    id: 2,
    role: "Undergraduate Admissions Student Ambassador",
    company: "University of Southern California",
    period: "Oct 2023 — Present",
    location: "Los Angeles, CA",
    logo: "/images/companies/usc.jpeg",
    link: "https://admission.usc.edu",
    bullets: [
      "Deliver engaging 90- and 60-minute campus tours for high-profile visitors and prospective students; completed 50+ tours to date with consistently positive guest feedback",
      "Respond to high-volume phone/email inquiries regarding tour logistics, admissions, and student life, ensuring accurate and timely information",
      "Onboard and mentor 35+ new ambassadors annually, facilitating structured training, clear messaging standards, and program consistency",
    ],
  },
  {
    id: 3,
    role: "Communications Intern",
    company: "USC Good Neighbors Campaign",
    period: "Mar 2025 — Aug 2025",
    location: "Los Angeles, CA",
    logo: "/images/companies/usc.jpeg",
    link: "https://goodneighbors.usc.edu",
    bullets: [
      "Increased engagement by developing targeted content across multiple communication channels, including a monthly email newsletter featuring compelling impact stories from grant beneficiaries",
      "Organized a high-visibility event hosting 100+ university executives and Los Angeles City Hall leaders, ensuring smooth logistics and stakeholder coordination",
      "Maintained detailed campaign timelines and content calendars on Google Workspace and SharePoint for timely, multi-track execution, while drafting internal and donor-facing messaging in AP Style",
    ],
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
          My experience.
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={fadeUp}
              custom={i}
              className="border border-black/10 rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-9 h-9 rounded-md overflow-hidden bg-neutral-100 shrink-0">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    fill
                    className="object-cover"
                    sizes="36px"
                  />
                </div>
                <p className="text-xs uppercase tracking-widest text-gray">
                  {exp.period}
                </p>
              </div>

              <h2 className="text-lg font-semibold tracking-tight text-black leading-snug">
                {exp.role}
              </h2>
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray mt-1 inline-flex items-center gap-1.5 hover:text-black transition-colors duration-200"
              >
                {exp.company}
                <ExternalLink size={12} />
              </a>

              <ul className="space-y-2 mt-4">
                {exp.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="text-sm text-gray leading-relaxed tracking-[-0.02em] flex gap-2"
                  >
                    <span className="text-black/30 mt-0.5 shrink-0">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
