"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-slate-50"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 md:flex-row">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <p className="mb-3 text-lg text-blue-600">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
            Prince Ishaku
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-slate-600">
            Machine Learning Engineer
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            I build end-to-end machine learning applications using
            Python, Scikit-learn, FastAPI, and modern deployment
            workflows. My focus is on solving real-world business
            problems through data-driven solutions.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              View Projects
            </a>

            <a
              href="/resume/Prince_Ishaku_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex gap-6 text-3xl text-slate-700">
            <Link
              href="https://github.com/princeishaku"
              target="_blank"
            >
              <FaGithub className="transition hover:text-blue-600" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/prince-mshelia-5aaaa2116"
              target="_blank"
            >
              <FaLinkedin className="transition hover:text-blue-600" />
            </Link>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-1 justify-center"
        >
          <img
            src="/images/profile.jpg"
            alt="Prince Ishaku"
            className="h-80 w-80 rounded-full border-8 border-white object-cover shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}