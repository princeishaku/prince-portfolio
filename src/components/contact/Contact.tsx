"use client";

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-100 py-24"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-bold">
          Contact Me
        </h2>

        <p className="mt-4 text-slate-600">
          I'm available for internships, freelance work,
          and machine learning projects.
        </p>

        <div className="mt-10 space-y-4">
          <p className="flex justify-center items-center gap-2">
            <FaEnvelope />
            princeishaku50@gmail.com
          </p>

          <p>
            <a
              href="https://github.com/princeishaku"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:underline"
            >
              <FaGithub />
              GitHub
            </a>
          </p>

          <p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:underline"
            >
              <FaLinkedin />
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}