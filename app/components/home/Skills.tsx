import React from "react";
import { H2Style, H3Style, Load, Done } from "../ui/Styles";

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
  return (
    <section
      className="bg-transparent w-full min-h-screen text-center my-6"
      id="skills"
    >
      <h2 className={H2Style}>My Skills</h2>

      <h3 className={`${H3Style} mx-8 md:mx-0`}>
        The Skills That I Learnt and Still Learning
      </h3>

      <div className="flex flex-wrap gap-8 justify-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-[65%] sm:w-[35%] xl:w-[20%]  max-w-sm overflow-hidden border-2 border-gray-500 rounded-xl p-5 py-7 hover:shadow-[0px_8px_30px_0px_gray]"
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
          </div>
        ))}
      </div>

      <div className="my-8 mt-12 text-center grid">
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
