"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonialsData = [
  {
    img: "/certs/tcm.jpeg",
    company: "TCM Security",
    title: "Practical Ethical Hacking - The Complete Course",
    cert: true,
  },
  {
    img: "/certs/coursera.jpeg",
    company: "Coursera",
    title: "IBM Cybersecurity Analyst Professional Certificate",
    cert: false,
  },
  {
    img: "/certs/udemy.png",
    company: "Udemy",
    title: "Ultimate Ethical Hacking Bootcamp",
    cert: true,
  },
  {
    img: "/certs/ztm.jpg",
    company: "Zero to Mastery",
    title: "Complete Ethical Hacking Bootcamp Zero to Mastery",
    cert: false,
  },
];

const disabled_link =
  "pointer-events-none border-2 font-bold hover:font-normal border-white/50 text-white/50 hover:shadow-lg p-3 rounded-lg 2xl:text-xl";

const enabled_link =
  "border-2 font-bold hover:font-normal border-[#fc0303] red-text hover:shadow-lg hover:shadow-red-600 hover:bg-red-700 hover:text-white p-3 rounded-lg 2xl:text-xl";

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
      <div className="relative isolate md:px-6 lg:px-8">
        <div
          className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl bottom-[calc(100%-75rem)] md:bottom-[calc(100%-85rem)] md:left-[calc(30%)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] h-[35rem] md:h-[40rem] 2xl:h-[20rem] w-[36.125rem] md:w-[70rem] 2xl:w-[35rem] -translate-x-1/2 md:-translate-x-1/4 bg-gradient-to-tr from-[#5643f8] to-[#f80000] opacity-30 sm:left-[calc(50%-36rem)]"
            style={{
              clipPath: " polygon(70% 50%, 1% 0, 0 100%)",
            }}
          />
        </div>
      </div>

      <div
        ref={ref}
        className="py-[10rem] w-full min-h-screen text-center relative z-10"
      >
        <h2>Certificates</h2>
        <h3 className={`px-10 mx-10`}>
          The Skills and Certificates I Acquired
        </h3>

        <div className="px-1 flex flex-row place-content-center my-6">
          <motion.button
            initial={{ opacity: 0, x: 100 }} // Initial animation values
            animate={{
              opacity: inView ? 1 : 0,
              x: inView ? 0 : 100,
            }} // Target animation values
            transition={{ duration: 0.6, delay: 0.7 }} // Animation duration
            className="text-white/50 hover:text-white text-[4rem] md:px-4 py-2 md:mx-[4rem]"
            onClick={prevTestimonial}
          >
            <i className="uil uil-angle-left"></i>
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
                <div>
                  <h2 className="text-center text-[1.2rem] md:text-[1.5rem]">
                    {testimonial.title}
                  </h2>
                </div>
                <div className="mt-10">
                  <Link
                    href="#contact"
                    className={testimonial.cert ? enabled_link : disabled_link}
                  >
                    Certificate{" "}
                    {testimonial.cert ? (
                      <i className="uil uil-file-alt"></i>
                    ) : (
                      <i className="uil uil-ban"></i>
                    )}
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: -100 }} // Initial animation values
            animate={{
              opacity: inView ? 1 : 0,
              x: inView ? 0 : -100,
            }} // Target animation values
            transition={{ duration: 0.6, delay: 0.7 }} // Animation duration
            className="text-white/50 hover:text-white text-[4rem] md:px-4 py-2 md:mx-[4rem]"
            onClick={nextTestimonial}
          >
            <i className="uil uil-angle-right"></i>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default function Certificates() {
  return <TestimonialSlider />;
}
