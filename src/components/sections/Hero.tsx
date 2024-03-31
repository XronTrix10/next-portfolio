"use client";

import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="bg-transparent w-full" id="hero">
      <div className="-z-5 relative isolate md:px-6 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-30 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="-z-20 relative left-[calc(50%-11rem)] aspect-[955/978] md:aspect-[955/508] w-[36.125rem] -translate-x-1/2 xl:-translate-x-1/3 bg-gradient-to-tr from-red-600 to-[#002fff] opacity-30 sm:left-[calc(50%-30rem)] xl:left-[calc(50%-40rem)] sm:-top-[5rem] 2xl:top-[5rem] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(32% 0, 16% 14%, 0 44%, 0 97%, 36% 97%, 54% 83%, 74% 63%, 90% 51%, 98% 33%, 100% 20%, 80% 0%, 60% 0)",
            }}
          />
        </div>
      </div>

      <div className="z-10 text-left px-10 sm:px-16 md:px-[15%] pt-[65%] sm:pt-[40%] md:pt-[22%] lg:pt-[15%] 2xl:pt-[17%] min-h-screen relative">
        <div className="my-2 mb-8 lg:mb-5 z-20">
          <h4 className="md:text-lg 2xl:text-xl z-20">Hi, I&apos;am</h4>
          <motion.h1
            initial={{ opacity: 0, x: -100 }} // Initial animation values
            animate={{ opacity: 1, x: 0 }} // Target animation values
            transition={{ duration: 0.5 }} // Animation duration
            className="text-[3.5rem] md:text-[5rem] 2xl:text-[7rem] z-20"
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
          <h4 className="md:text-lg 2xl:text-xl mb-12">
            I am a self learner, resolute, tech enthusiast and passionate developer. I love doing things differently.
          </h4>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }} // Initial animation values
          animate={{ opacity: 1, x: 0 }} // Target animation values
          transition={{ duration: 0.7, delay: 1.4 }} // Animation duration
        >
          <Link spy={true} smooth={true} to="contact" id="btn">
            Connect <i className="uil uil-user-plus"></i>
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
