"use client";

import React from "react";
import { Buttons, H2Style, H3Style } from "../ui/Styles";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const [ref, inView, entry] = useInView({
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
        <h2 className={`${H2Style} z-20`}>About Me</h2>
        <h3 className={H3Style}>My introduction</h3>

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }} // Initial animation values
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.6 }} // Target animation values
          transition={{ duration: 0.7 }} // Animation duration
          className="md:text-lg 2xl:text-xl mb-12 my-4 2xl:px-20 text-center"
        >
          <p>
            I chose to specialize in cybersecurity by passion, and also after
            being hacked once in social media ( Thanks to that hacker ). Except
            college studies, I spend most of the time on crazy things in my
            brain, learning new stuff. I am a self and fast learner.
          </p>
          <p className="mt-5">
            Outside of my proffessional life, I love gaming, table tennis, body
            building, watching cartoons and photography. My music taste is EDM.
          </p>
        </motion.div>
        <a href="CV/cv.txt" download="" className={Buttons}>
          Download CV{" "}
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
            className="lucide lucide-file-down"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <path d="M12 18v-6" />
            <path d="m9 15 3 3 3-3" />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default About;
