"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation will trigger only once when it comes into view
    threshold: 0.5, // Percentage of element visible to trigger the animation
  });

  return (
    <section className="bg-transparent w-full md:min-h-screen mb-16" id="about">
      <div className="relative inset-0">
        <div
          className="absolute inset-x-0 transform-gpu overflow-hidden blur-3xl -top-30 md:-top-[2rem]"
          aria-hidden="true"
        >
          <div
            className="-z-10 relative aspect-[1155/678] xl:aspect-[600/700] -translate-x-1/3 bg-gradient-to-tr from-[#5643f8] to-[#f80000] opacity-30 w-[28.125rem] md:w-[24rem] left-[75%] md:left-[62%] 2xl:-translate-x-1/3"
            style={{
              clipPath:
                "polygon(51% 7%, 87% 9%, 100% 50%, 70% 99%, 10% 100%, 0% 50%)",
            }}
          />
        </div>
      </div>

      <div
        ref={ref}
        className="z-10 text-center py-[8rem] px-12 md:px-16 lg:px-[18rem] xl:px-[25rem] relative"
      >
        <h2>About Me</h2>
        <h3>My introduction</h3>

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }} // Initial animation values
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.6 }} // Target animation values
          transition={{ duration: 0.7 }} // Animation duration
          className="md:text-lg 2xl:text-xl mb-12 my-4 2xl:px-24 text-center"
        >
          <p>
            I chose to specialize in cybersecurity out of passion, especially
            after experiencing a hack on my social media account (thanks to that
            hacker). Apart from my college studies, I dedicate most of my time
            to exploring new ideas and learning new things. I love experimenting
            with new concepts
          </p>
          <p className="mt-5">
            Outside of my professional life, I have a passion for gaming, table
            tennis, bodybuilding, watching cartoons, and photography. My heart
            truly comes alive when I listen to EDM
          </p>
        </motion.div>
        <a href="CV/cv.txt" download="" id="btn">
          Download CV <i className="uil uil-file-download"></i>
        </a>
      </div>
    </section>
  );
}

export default About;
