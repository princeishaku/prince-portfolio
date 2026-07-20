"use client";

import Link from "next/link";
import { useState } from "react";
import {
  HiMenu,
  HiX,
} from "react-icons/hi";

import ThemeToggle from "@/components/ui/ThemeToggle";


const navLinks = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];


export default function Navbar() {

  const [open, setOpen] = useState(false);


  return (

    <header
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      bg-white/90
      text-slate-900
      shadow
      backdrop-blur
      dark:bg-slate-900/90
      dark:text-white
      "
    >

      <nav
        className="
        mx-auto
        flex
        max-w-7xl
        items-center
        justify-between
        px-6
        py-4
        "
      >

        {/* Logo */}

        <Link
          href="/"
          className="text-2xl font-bold"
        >
          Prince
          <span className="text-blue-600">
            .
          </span>
        </Link>


        {/* Desktop Menu */}

        <div
          className="
          hidden
          items-center
          gap-8
          md:flex
          "
        >

          {
            navLinks.map((link)=>(
              <Link
                key={link.name}
                href={link.href}
                className="
                transition
                hover:text-blue-600
                "
              >
                {link.name}
              </Link>
            ))
          }


          <ThemeToggle />


          <a
            href="/resume/Prince_Ishaku_Resume.pdf"
            target="_blank"
            className="
            rounded-lg
            bg-blue-600
            px-5
            py-2
            text-white
            transition
            hover:bg-blue-700
            "
          >
            Resume
          </a>

        </div>


        {/* Mobile Controls */}

        <div className="flex items-center gap-4 md:hidden">

          <ThemeToggle />


          <button
            onClick={()=>setOpen(!open)}
            className="text-3xl"
          >

            {
              open
              ?
              <HiX />
              :
              <HiMenu />
            }

          </button>

        </div>


      </nav>


      {/* Mobile Menu */}

      {
        open && (

          <div
            className="
            border-t
            bg-white
            px-6
            py-5
            dark:bg-slate-900
            "
          >

            <div
              className="
              flex
              flex-col
              gap-5
              "
            >

              {
                navLinks.map((link)=>(
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={()=>setOpen(false)}
                    className="
                    hover:text-blue-600
                    "
                  >
                    {link.name}
                  </Link>
                ))
              }


              <a
                href="/resume/Prince_Ishaku_Resume.pdf"
                target="_blank"
                className="
                rounded-lg
                bg-blue-600
                px-5
                py-3
                text-center
                text-white
                "
              >
                Download Resume
              </a>

            </div>

          </div>

        )
      }


    </header>

  );
}