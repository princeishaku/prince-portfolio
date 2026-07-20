"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-slate-900">
            Technical Skills
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Technologies and tools I use to build machine learning
            solutions and modern web applications.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="rounded-xl bg-white p-8 shadow-sm"
            >
              <h3 className="mb-6 text-2xl font-semibold text-slate-900">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-600 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}