"use client";

import React from "react";
import { H2Style, H3Style, Load, Done } from "../ui/Styles";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  {
    title: "Coding Skills",
    items: [
      {
        name: "C",
        done: true,
      },
      {
        name: "C++",
        done: true,
      },
      {
        name: "Python",
        done: true,
      },
      {
        name: "Java",
        done: true,
      },
      {
        name: "Bash",
        done: false,
      },
      {
        name: "Javascript",
        done: false,
      },
      {
        name: "Assembly",
        done: false,
      },
    ],
  },
  {
    title: "Pen Testing",
    items: [
      {
        name: "CTF Player",
        done: false,
      },
      {
        name: "Bug Hunting",
        done: false,
      },
      {
        name: "Cryptography",
        done: true,
      },
      {
        name: "Malware Analysis",
        done: false,
      },
      {
        name: "Reverse Engineering",
        done: false,
      },
    ],
  },
  {
    title: "Other Skills",
    items: [
      {
        name: "Web Dev",
        done: true,
      },
      {
        name: "IOT Dev",
        done: true,
      },
      {
        name: "Android Dev",
        done: false,
      },
      {
        name: "Photoshop",
        done: false,
      },
      {
        name: "Video Editing",
        done: true,
      },
      {
        name: "UI / UX Design",
        done: false,
      },
      {
        name: "Microsoft Office",
        done: true,
      },
    ],
  },
];

function Skills() {
  const [ref, inView, entry] = useInView({
    triggerOnce: true, // Animation will trigger only once when it comes into view
    threshold: 0.2, // Percentage of element visible to trigger the animation
  });

  return (
    <section
      className="bg-transparent w-full min-h-screen text-center my-6"
      id="skills"
    >
      <div className="relative isolate md:px-6 lg:px-8">
        <div
          className="absolute inset-x-0 top-[10rem] -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%)] aspect-[1155/678] h-[75rem] md:h-[20%] w-[17rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff2323] to-[#002fff] opacity-30 sm:w-[45rem]"
            style={{
              clipPath:
                "polygon(30% 8%, 0% 20%, 14% 54%, 0 97%, 36% 97%, 54% 83%, 80% 100%, 100% 80%, 100% 48%, 100% 20%, 80% 0%, 60% 0)",
            }}
          />
        </div>
      </div>

      <div className="relative z-20">
        <h2 className={H2Style}>My Skills</h2>
        <h3 className={`${H3Style} mx-8 md:mx-0`}>
          The Skills That I Learnt and Still Learning
        </h3>

        <div ref={ref} className="flex flex-wrap gap-8 justify-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              // whileTap={{ scale: 0.9 }}
              className="z-10 w-[65%] sm:w-[35%] xl:w-[20%] 2xl:w-[16%] bg-[#18181886] max-w-sm overflow-hidden border-2 border-gray-500 rounded-xl p-5 py-7 md:shadow-none hover:border-white"
            >
              <div className="px-6 py-4 text-center">
                <div className="font-bold text-xl red-text mb-5">
                  {skill.title}
                </div>
                <div className="text-base grid text-center">
                  {skill.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-row items-center gap-2 mx-auto my-[10px]"
                    >
                      {item.name} {item.done ? <Done /> : <Load />}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="my-8 mt-12 text-center grid relative">
        <div className="flex flex-row items-center gap-2 mx-auto my-2 hover:text-[#fc0303] hover:font-bold">
          Confident <Done />
        </div>
        <div className="flex flex-row items-center gap-2 mx-auto my-2 hover:text-[#fc0303] hover:font-bold">
          Still Learning <Load />
        </div>
      </div>
    </section>
  );
}

export default Skills;
