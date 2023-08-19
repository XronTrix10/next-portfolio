"use client";

import React from "react";
import Link from "next/link";
import { Buttons } from "../ui/Styles";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="bg-transparent w-full" id="hero">
      <div className="text-left px-10 sm:px-16 md:px-[15%] pt-[65%] sm:pt-[40%] md:pt-[22%] lg:pt-[15%] 2xl:pt-[17%] min-h-screen">
        <div className="my-2 mb-8 lg:mb-5">
          <h2 className="md:text-lg 2xl:text-xl">Hi, I&apos;am</h2>
          <motion.h1
            initial={{ opacity: 0, x: -100 }} // Initial animation values
            animate={{ opacity: 1, x: 0 }} // Target animation values
            transition={{ duration: 0.5 }} // Animation duration
            className="text-[3.5rem] md:text-[5rem] 2xl:text-[7rem]"
          >
            <span className="text-gray-500 xron-shade hover:text-gray-400">
              Xron{" "}
            </span>
            <span className="red-text trix-shade">Trix</span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -100 }} // Initial animation values
          animate={{ opacity: 1, x: 0 }} // Target animation values
          transition={{ duration: 0.7, delay: 0.7 }} // Animation duration
          className="my-7"
        >
          <h2 className="md:text-lg 2xl:text-xl mb-12">
            I am a learner, cyber security enthusiast, script kiddie, coder and
            technology lover
          </h2>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, x: -100 }} // Initial animation values
        animate={{ opacity: 1, x: 0 }} // Target animation values
        transition={{ duration: 0.7, delay: 1.4 }} // Animation duration
        >
        <Link href="#contact" className={Buttons}>
          Connect{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-user-plus-2"
          >
            <path d="M14 19a6 6 0 0 0-12 0" />
            <circle cx="8" cy="9" r="4" />
            <line x1="19" x2="19" y1="8" y2="14" />
            <line x1="22" x2="16" y1="11" y2="11" />
          </svg>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
