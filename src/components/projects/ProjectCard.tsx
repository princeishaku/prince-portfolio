"use client";

import Image from "next/image";
import { Project } from "@/types/project";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-2xl bg-white shadow-lg"
    >
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={500}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
          {project.category}
        </span>

        <h3 className="mt-4 text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-3 text-slate-600">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded bg-slate-100 px-3 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-4">

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border px-4 py-2 transition hover:bg-slate-100"
          >
            <FaGithub />
            GitHub
          </a>

        </div>

      </div>
    </motion.div>
  );
}