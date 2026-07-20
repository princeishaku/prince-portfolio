"use client";

import { motion } from "framer-motion";
import { FaGithub, FaCodeBranch, FaExternalLinkAlt } from "react-icons/fa";

export default function GitHub() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <FaGithub className="mx-auto mb-6 text-6xl text-slate-900" />

          <h2 className="text-4xl font-bold">
            Explore My GitHub
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            My GitHub showcases end-to-end machine learning projects,
            deployment workflows, clean project organization, and
            continuous learning across regression, classification,
            clustering, and fraud detection.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6">

            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="text-4xl font-bold text-blue-600">
                5+
              </h3>

              <p className="mt-2 text-slate-600">
                Public ML Projects
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="text-4xl font-bold text-blue-600">
                FastAPI
              </h3>

              <p className="mt-2 text-slate-600">
                Production APIs
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="text-4xl font-bold text-blue-600">
                Render
              </h3>

              <p className="mt-2 text-slate-600">
                Cloud Deployment
              </p>
            </div>

          </div>

          <a
            href="https://github.com/princeishaku"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center gap-3 rounded-xl bg-slate-900 px-8 py-4 text-lg font-medium text-white transition hover:bg-slate-800"
          >
            <FaCodeBranch />

            Visit GitHub Profile

            <FaExternalLinkAlt />
          </a>

        </motion.div>

      </div>
    </section>
  );
}