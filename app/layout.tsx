import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ThemeProvider from "@/components/theme/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Prince Ishaku | Machine Learning Engineer",
  description:
    "Machine Learning Engineer building production-ready AI applications using Python, FastAPI and modern technologies.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      suppressHydrationWarning
    >

      <body className={inter.className}>

        <ThemeProvider>

          {children}

        </ThemeProvider>

      </body>

    </html>
  );
}