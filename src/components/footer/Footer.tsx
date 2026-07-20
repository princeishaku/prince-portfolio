import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}

          <div>
            <h2 className="text-3xl font-bold">
              Prince<span className="text-blue-500">.</span>
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Machine Learning Engineer passionate about building
              intelligent applications with Python, FastAPI,
              Scikit-learn and modern deployment technologies.
            </p>
          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <a href="#home" className="hover:text-blue-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-blue-400">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-blue-400">
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-blue-400">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Social */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Connect
            </h3>

            <div className="flex gap-5 text-3xl">

              <Link
                href="https://github.com/princeishaku"
                target="_blank"
              >
                <FaGithub className="transition hover:text-blue-400" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/prince-mshelia-5aaaa2116"
                target="_blank"
              >
                <FaLinkedin className="transition hover:text-blue-400" />
              </Link>

            </div>

            <a
              href="#home"
              className="mt-10 inline-flex items-center gap-3 rounded-lg bg-blue-600 px-5 py-3 transition hover:bg-blue-700"
            >
              <FaArrowUp />
              Back to Top
            </a>

          </div>

        </div>

        <hr className="my-10 border-slate-700" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

          <p className="text-slate-400">
            © {year} Prince Ishaku. All rights reserved.
          </p>

          <p className="text-slate-400">
            Built with Next.js, TypeScript and Tailwind CSS.
          </p>

        </div>

      </div>

    </footer>
  );
}