"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Buttons, H2Style, H3Style } from "../ui/Styles";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonialsData = [
  {
    img: "/certs/tcm.jpeg",
    company: "TCM Security",
    title: "Practical Ethical Hacking - The Complete Course",
  },
  {
    img: "/certs/udemy.png",
    company: "Udemy",
    title: "Ultimate Ethical Hacking Bootcamp",
  },
  {
    img: "/certs/coursera.jpeg",
    company: "Coursera",
    title: "IBM Cybersecurity Analyst Professional Certificate",
  },
  {
    img: "/certs/ztm.jpg",
    company: "Zero to Mastery",
    title: "Complete Ethical Hacking Bootcamp Zero to Mastery",
  },
];

const TestimonialSlider = () => {
  const [ref, inView, entry] = useInView({
    triggerOnce: true, // Animation will trigger only once when it comes into view
    threshold: 0.5, // Percentage of element visible to trigger the animation
  });

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex(
      (prevIndex) => (prevIndex + 1) % testimonialsData.length
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="certificates">
      <div ref={ref} className="py-[10rem] w-full min-h-screen text-center">
        <h2 className={H2Style}>Certificates</h2>
        <h3 className={`${H3Style} px-10 mx-10`}>
          The Skills and Certificates I Acquired
        </h3>

        <div className="container px-1 flex flex-row place-content-center my-6">
          <motion.button
            initial={{ opacity: 0, x: 100 }} // Initial animation values
            animate={{
              opacity: inView ? 1 : 0,
              x: inView ? 0 : 100,
            }} // Target animation values
            transition={{ duration: 0.6, delay: 0.7 }} // Animation duration
            className="text-white/70 hover:text-white text-[4rem] md:px-4 py-2 md:mx-[4rem]"
            onClick={prevTestimonial}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-left"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 100 }} // Initial animation values
            animate={{
              opacity: inView ? 1 : 0,
              scale: inView ? 1 : 0.6,
              y: inView ? 0 : 100,
            }} // Target animation values
            transition={{ duration: 0.7 }} // Animation duration
            className="w-[70%] md:w-1/3 text-center"
          >
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className={`${
                  index === currentTestimonialIndex ? "block" : "hidden"
                } p-6 rounded-lg mb-6`}
              >
                <div className="w-auto grid place-content-center my-8">
                  <Image
                    src={testimonial.img}
                    alt="Company"
                    height="100"
                    width="100"
                    className="rounded-[1.3em] w-[80px] md:w-[100px]"
                  ></Image>
                </div>
                <p className="mb-4 red-text">{testimonial.company}</p>
                <div className="flex items-center">
                  <div>
                    <h2 className="text-center text-[1.2rem] md:text-[1.5rem]">
                      {testimonial.title}
                    </h2>
                  </div>
                </div>
              </div>
            ))}

            <Link href="#contact" className={Buttons}>
              View Certificate{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-scroll"
              >
                <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" />
                <path d="M19 17V5a2 2 0 0 0-2-2H4" />
              </svg>
            </Link>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: -100 }} // Initial animation values
            animate={{
              opacity: inView ? 1 : 0,
              x: inView ? 0 : -100,
            }} // Target animation values
            transition={{ duration: 0.6, delay: 0.7 }} // Animation duration
            className="text-white/70 hover:text-white text-[4rem] md:px-4 py-2 md:mx-[4rem]"
            onClick={nextTestimonial}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default function Certificates() {
  return <TestimonialSlider />;
}
