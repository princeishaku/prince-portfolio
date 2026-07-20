"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  FaSun,
  FaMoon,
} from "react-icons/fa";


export default function ThemeToggle() {

  const {
    theme,
    setTheme,
  } = useTheme();


  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (

    <button
      onClick={() =>
        setTheme(
          theme === "dark"
            ? "light"
            : "dark"
        )
      }

      className="
      rounded-full
      p-3
      text-xl
      transition
      hover:bg-slate-200
      dark:hover:bg-slate-700
      "
    >

      {
        theme === "dark"
          ?
          <FaSun />
          :
          <FaMoon />
      }

    </button>

  );
}