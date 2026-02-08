"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";

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

export default function ProjectsPage() {
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
          My works.
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="visible"
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
              <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-neutral-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

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
      </main>
      <Footer />
    </>
  );
}
