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

      <main className="min-h-screen pt-28 pb-32 px-6 sm:px-10 md:px-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.06em] leading-none text-black mb-16"
        >
          About
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
      </main>
      <Footer />
    </>
  );
}
