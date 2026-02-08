"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const, delay: i * 0.1 },
  }),
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-28 pb-12 px-6 sm:px-10 md:px-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.06em] leading-none text-black mb-16"
        >
          About me.
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          {/* Text column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="flex-1"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.06em] leading-[1.1] text-black">
              I help brands tell their story through strategic PR, compelling
              campaigns, and thoughtful marketing that resonates with the right
              audience.
            </h2>
            <p className="mt-8 text-base sm:text-lg text-gray leading-relaxed max-w-xl tracking-[-0.02em]">
              
I was born on the Six Nations of the Grand River reserve in Ontario, Canada, and attribute my admiration for fashion to being surrounded by beautiful Indigenous regalia in my childhood. Throughout my adolescence, I explored how appearances and style intertwined with self-expression and individualism, leading me to the world of personal branding. What started as a fascination with the hows and whys of shaping our unique voices slowly revealed itself as a path into public relations.  
            </p>
            <p className="mt-8 text-base sm:text-lg text-gray leading-relaxed max-w-xl tracking-[-0.02em]">
              Now studying Public Relations and Advertising with a minor in Marketing at USC, I’m drawn to the places where storytelling, culture, and design intersect. For me, communication is most powerful when it reflects not only what someone wants to say, but why it matters. I hope to build a career where I can help shape narratives that create connection. 
            </p>
            <p className="mt-8 text-base sm:text-lg text-gray leading-relaxed max-w-xl tracking-[-0.02em]">
              Outside of professional spaces, I find inspiration in small rituals: wandering through stores to study how brands present themselves, paying attention to shifts in style and taste, and curating playlists that capture moods and moments. These habits keep me grounded in the idea that communication is everywhere, and the best stories often begin long before they are written. 
            </p>
          </motion.div>

          {/* Image column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="relative w-full md:w-[30%] aspect-[4/5] overflow-hidden rounded-sm bg-neutral-100 shrink-0"
          >
            <Image
              src="/images/bella-david-usc.jpg"
              alt="BMH portrait"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 30vw"
            />
          </motion.div>
        </div>

        {/* ——— Education Section ——— */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          custom={0}
          className="mt-24"
        >

          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.04em] mb-10 text-black">
            Education
          </h2>

          <div className="border-t border-black/10 pt-10 md:pt-14 pb-4 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray mb-2">
                2023 — 2027
              </p>
              <div className="flex items-center gap-4 mt-2">
                <div className="relative w-11 h-11 rounded-lg overflow-hidden bg-neutral-100 shrink-0">
                  <Image
                    src="/images/companies/usc.jpeg"
                    alt="USC"
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">
                  USC Annenberg School for Communication and Journalism
                </h3>
              </div>
              <p className="text-sm text-gray mt-1">
                Bachelor of Arts — Public Relations, Advertising, and Applied
                Communication
              </p>
              <p className="text-sm text-gray mt-1">
                Minor in Marketing (USC Marshall School of Business)
              </p>
            </div>

            <div className="md:pt-6">
              <p className="text-xs uppercase tracking-widest text-gray mb-3">
                Activities &amp; Societies
              </p>
              <ul className="space-y-2">
                {[
                  "Student Ambassador (Tour Guide) — Undergraduate Admissions Office",
                  "Communications Intern — USC Good Neighbors Campaign",
                  "Native American Students Assembly",
                  "Troy Camp Counselor",
                  "PRSSA",
                ].map((activity) => (
                  <li
                    key={activity}
                    className="text-base sm:text-lg text-gray leading-relaxed tracking-[-0.02em] flex gap-3"
                  >
                    <span className="text-black/30 mt-1 shrink-0">•</span>
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
