"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const { details } = project;

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-28 pb-32 px-6 sm:px-10 md:px-20">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-gray hover:text-black transition-colors duration-200 mb-12"
            aria-label="Back to all projects"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-widest text-gray mb-3">
            {project.category}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.06em] leading-none text-black">
            {project.title}
          </h1>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative w-full aspect-[16/9] overflow-hidden rounded-sm bg-neutral-100 mb-16"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 80vw"
            priority
          />
        </motion.div>

        {/* Details grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-12 md:gap-20"
        >
          {/* Meta sidebar */}
          <div className="md:w-1/3 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray mb-1">
                Type
              </p>
              <p className="text-base font-medium text-black">{details.type}</p>
            </div>

            {details.course && (
              <div>
                <p className="text-xs uppercase tracking-widest text-gray mb-1">
                  Course
                </p>
                <p className="text-base font-medium text-black">
                  {details.course}
                </p>
              </div>
            )}

            {details.professor && (
              <div>
                <p className="text-xs uppercase tracking-widest text-gray mb-1">
                  Professor
                </p>
                <p className="text-base font-medium text-black">
                  {details.professor}
                </p>
              </div>
            )}

            {details.semester && (
              <div>
                <p className="text-xs uppercase tracking-widest text-gray mb-1">
                  Semester
                </p>
                <p className="text-base font-medium text-black">
                  {details.semester}
                </p>
              </div>
            )}

            {details.pdfLink && (
              <a
                href={details.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-gray transition-colors duration-200 mt-4"
                aria-label={`View PDF for ${project.title}`}
              >
                <FileText size={16} />
                View Full PDF
              </a>
            )}
          </div>

          {/* Body text */}
          <div className="md:w-2/3">
            <p className="text-xs uppercase tracking-widest text-gray mb-3">
              About this project
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-medium tracking-[-0.03em] leading-relaxed text-black">
              {details.body}
            </p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </>
  );
}
