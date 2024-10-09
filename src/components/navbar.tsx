"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex justify-between items-center px-12 py-4 border-b">
      <div className="flex items-center gap-4">
        <Image
          src="/nomadic_lifter_logo.png"
          alt="logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <a href="/" className="text-lg font-bold">
          NomadicLifter
        </a>
      </div>
      <div className="hidden md:flex gap-4">
        <a href="/posts" className="hover:underline">
          Posts
        </a>
        <a href="/rag" className="hover:underline">
          Ask a question
        </a>
      </div>
      <button
        className="block md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {menuOpen && (
        <motion.div
          className="z-10 box mx-auto absolute top-16 right-0 w-64 bg-slate-100 shadow-md p-4 flex flex-col items-center md:hidden max-width-md"
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <a href="/posts" className="py-2 hover:underline">
            Posts
          </a>
          <a href="/rag" className="py-2 hover:underline">
            Ask a question
          </a>
        </motion.div>
      )}
    </div>
  );
}
