"use client";

import React, { useEffect, useState } from "react";
import { Buttons, H2Style, H3Style } from "../ui/Styles";
import { motion } from "framer-motion";
import fetchRepoData from "../../../server/fetchRepoMeta";
import Link from "next/link";
import Loading from "./Loading";

export const projects = [
  "Telegram-Leecher",
  "Python-Passwd",
  "esp8266-BTS7960B",
  "CryptoLocker",
  "Pentesting-Notes",
  "next-portfolio",
];



type RepositoryData = {
  name: string;
  description: string;
  svn_url: string;
  stargazers_count: number;
  default_branch: string;
};

const Projects = () => {
  const [repoData, setRepoData] = useState<RepositoryData[]>([]);

  function getShortDescription(index: number): string {
    const words = repoData[index].description.split(" ");
    if (words.length > 8) {
      const first8Words = words.slice(0, 8).join(" ");
      return first8Words + "....";
    }
    return repoData[index].description;
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchRepoData();
      setRepoData(data);
    };

    fetchData();
  }, []);

  return (
    <section id="projects" className="bg-transparent w-full md:min-h-screen">
      <div className="text-center my-[6rem] px-12 md:px-16 lg:px-[18rem] xl:px-[25rem]">
        <h2 className={H2Style}>Projects</h2>
        <h3 className={H3Style}>My all Projects</h3>
      </div>
      <div className="w-full md:px-[15%]">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
            {projects.map((project, index) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                key={index}
                className="bg-black border-2 border-gray-600 text-white rounded-lg shadow-md p-6 hover:shadow-[0px_5px_15px_0px_gray]"
              >
                <Link href={`/projects/${project}`}>
                  {repoData[index] ? ( // Check if repoData[index] is available
                    <div className="flex h-40 flex-col justify-between">
                      <div className="">
                        <h4 className="text-xl font-semibold mb-2 red-text">
                          {repoData[index].name}
                        </h4>
                        <p className="text-gray-200 text-md">
                          {getShortDescription(index)}
                        </p>
                      </div>
                      <div className="bottom-0 flex flex-row justify-between">
                        <p className="text-gray-500 left-0 hover:text-white">
                          Click to View
                        </p>
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
                          className="lucide lucide-github text-gray-500 right-0 hover:text-white"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <Loading />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
