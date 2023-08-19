"use client";

import React, { useEffect, useState } from "react";
import { Buttons, H2Style, H3Style } from "../ui/Styles";
import { motion } from "framer-motion";
import fetchRepoData from "../server/fetchRepoMeta";
import Link from "next/link";

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
                className="bg-black border-2 border-gray-600 text-white rounded-lg shadow-md p-6"
              >
                <Link href={`/projects/${project}`}>
                  {repoData[index] ? ( // Check if repoData[index] is available
                    <div>
                      <h4 className="text-xl font-semibold mb-2 red-text">
                        {repoData[index].name}
                      </h4>
                      <p className="text-gray-200 mb-4">
                        {repoData[index].description}
                      </p>
                      <p className="text-gray-400">Click to View</p>
                    </div>
                  ) : (
                    <p className="text-white text-md">Loading...</p> // Display a loading message while data is being fetched
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="grid place-content-center center py-8">
        <Link className={Buttons} href="/projects">View in Details</Link>

        </div>
      </div>
    </section>
  );
};

export default Projects;
