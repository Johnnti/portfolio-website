"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="p-5">
        <nav className="flex justify-end text-lg space-x-6">
          <motion.a whileHover={{ scale: 1.1 }} href="#" className="hover:text-orange-400">Profile</motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="#" className="hover:text-orange-400">Resume</motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="#" className="hover:text-orange-400">Projects</motion.a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col justify-center items-center flex-grow text-center">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl font-bold">
          John Nti Anokye
        </motion.h1>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="text-2xl mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg">
          Computer Science Student
        </motion.h2>

        {/* Profile Image */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.5 }} className="mt-10">
          <Image className="rounded-full border-4 border-orange-400 shadow-lg" src="/jna.jpg" alt="John Nti Anokye" width={200} height={200} />
        </motion.div>

        {/* Social Links */}
        <div className="flex justify-center mt-10 space-x-6">
          <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/Johnnti">
            <Image src="/github-mark.svg" alt="GitHub" width={50} height={50} className="hover:opacity-80" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/john-nti-anokye/">
            <Image src="/linkedin.svg" alt="LinkedIn" width={50} height={50} className="hover:opacity-80" />
          </motion.a>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-sm">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
          &copy; {new Date().getFullYear()} John Nti Anokye. All rights reserved.
        </motion.p>
      </footer>
    </div>
  );
}
