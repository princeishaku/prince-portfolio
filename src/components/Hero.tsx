"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-cyan-400 text-lg"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-extrabold mt-4"
        >
          Prince Ishaku
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-4xl text-slate-300 mt-6"
        >
          Data Scientist • Machine Learning Engineer • Python Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-3xl mx-auto mt-8 text-slate-400 text-lg"
        >
          I build machine learning models, FastAPI applications,
          predictive analytics solutions, and production-ready AI projects
          using Python, Scikit-learn, SQL, and modern web technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-5 mt-12"
        >
          <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition">
            View Projects
            <FaArrowRight />
          </button>

          <button className="border border-cyan-500 px-8 py-4 rounded-xl hover:bg-cyan-500 transition">
            Download Resume
          </button>
        </motion.div>

        <div className="flex justify-center gap-8 mt-12 text-3xl">
          <FaGithub className="hover:text-cyan-400 cursor-pointer transition" />
          <FaLinkedin className="hover:text-cyan-400 cursor-pointer transition" />
        </div>

      </div>
    </section>
  );
}