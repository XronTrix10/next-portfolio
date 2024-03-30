"use client";

import React from "react";
import { CheckCircle, Loader } from "lucide-react";
import { useInView } from "react-intersection-observer";

const skills = [
  {
    title: "Next.js",
    logo: "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png",
    details: "",
    confidence: 1,
  },
  {
    title: "React.js",
    logo: "https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png",
    details: "",
    confidence: 1,
  },
  {
    title: "TailwindCSS",
    logo: "https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg",
    details: "",
    confidence: 1,
  },
  {
    title: "Node.js",
    logo: "https://ih1.redbubble.net/image.404031065.2191/tst,small,507x507-pad,600x600,f8f8f8.u1.jpg",
    details: "",
    confidence: 0,
  },
  {
    title: "TypeScript",
    logo: "https://seekvectors.com/files/download/TYPE%20SCRIPT%20LOGO.png",
    details: "",
    confidence: 1,
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
        <h2>My Skills</h2>
        <h3 className="mx-8 md:mx-0">
          The Top Skills That I Adopted and Still Adding
        </h3>

        <div
          ref={ref}
          className="grid grid-cols-6 gap-y-10 justify-center px-72 my-24"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex ${
                index < 3 ? "col-span-2" : "col-span-3"
              } mx-auto items-center bg-[#18181886] h-16 rounded-full`}
            >
              <div className="h-20 w-20 group rounded-full border border-gray-600 bg-white grid place-items-center">
                <img
                  src={skill.logo}
                  alt={skill.title}
                  className="rounded-full group-hover:opacity-30 duration-200"
                />
                {skill.confidence === 0 ? (
                  <Loader
                    className="absolute hidden group-hover:flex text-gray-700 duration-200"
                    size={40}
                    strokeWidth={2.4}
                  />
                ) : (
                  <CheckCircle
                    className="absolute hidden group-hover:flex text-gray-700 duration-200"
                    size={40}
                    strokeWidth={2.4}
                  />
                )}
              </div>
              <div className="h-16 rounded-lg  flex justify-center items-center ml-2 mr-5">
                <h6 className="text-lg">{skill.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="my-8 mt-12 text-center grid relative">
        <div className="flex flex-row items-center gap-2 mx-auto my-2 hover:text-[#fc0303] hover:font-bold">
          Confident <CheckCircle size={20} />
        </div>
        <div className="flex flex-row items-center gap-2 mx-auto my-2 hover:text-[#fc0303] hover:font-bold">
          Still Learning <Loader size={20} />
        </div>
      </div>
    </section>
  );
}

export default Skills;
