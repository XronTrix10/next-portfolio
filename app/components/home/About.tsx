import React from "react";
import { Buttons, H2Style, H3Style } from "../ui/Styles";

function About() {
  return (
    <section className="bg-transparent w-full md:min-h-screen mb-16" id="about">
      <div className="text-center py-[8rem] px-12 md:px-16 lg:px-[18rem] xl:px-[25rem]">
        
        <h2 className={H2Style}>About Me</h2>
        <h3 className={H3Style}>My introduction</h3>

        <div className="md:text-lg 2xl:text-xl mb-12 my-4">
          <p>
            I chose to specialize in cybersecurity by passion, and also after
            being hacked once in social media ( Thanks to the hacker ). Except
            college studies, I spend most of the time in practice of logic
            building in several languages, learning about linux and pen testing.
            I am a self and fast learner. My goal is to be a Red-Teamer.
          </p>
          <p className="mt-5">
            Outside of my proffessional life, I love gaming, table tennis, body
            building, watching cartoons, photography and EDM.
          </p>
        </div>
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
