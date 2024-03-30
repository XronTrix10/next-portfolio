"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "../../server/fetch-repodata";
import Loading from "../../components/loaders/ProjectLoader";

type RepositoryData = {
  name: string;
  description: string;
  svn_url: string;
  stargazers_count: number;
  default_branch: string;
};

const ProjectsClient = (props: {repoData: RepositoryData[]}) => {

  function getShortDescription(index: number): string {
    const words = props.repoData[index].description.split(" ");
    if (words.length > 8) {
      const first8Words = words.slice(0, 8).join(" ");
      return first8Words + "....";
    }
    return props.repoData[index].description;
  }

  return (
    <section id="projects" className="bg-transparent w-full md:min-h-screen">
      <div className="relative isolate md:px-6 lg:px-8">
        <div
          className="absolute inset-x-0 top-[10rem] md:top-[16rem] -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%)] aspect-[1155/678] h-[75rem] md:h-[12%] w-[17rem] -translate-x-1/2 bg-gradient-to-tl from-[#ff2323] to-[#002fff] opacity-30 sm:w-[35rem]"
            style={{
              clipPath:
                "polygon(30% 8%, 0% 20%, 14% 54%, 0 97%, 36% 97%, 54% 83%, 80% 100%, 100% 80%, 100% 48%, 100% 20%, 80% 0%, 60% 0)",
            }}
          />
        </div>
      </div>

      <div className="text-center my-[6rem] px-12 md:px-16 lg:px-[18rem] xl:px-[25rem] relative z-10">
        <h2>Projects</h2>
        <h3>My all Projects</h3>
      </div>
      <div className="w-full md:px-[15%]">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-14 md:px-5 2xl:px-[8rem] relative z-10">
            {projects.map((project, index) => (
              <Link href={`/projects/${project}`} key={index}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  key={index}
                  className="bg-[#18181886] border border-gray-600 text-white rounded-xl shadow-md p-6 hover:border-gray-300"
                >
                  {props.repoData[index] ? ( // Check if repoData[index] is available
                    <div className="flex h-40 flex-col justify-between">
                      <div className="">
                        <h4 className="text-lg 2xl:text-xl font-semibold mb-4 red-text">
                          {props.repoData[index].name}
                        </h4>
                        <p className="text-gray-200 text-sm">
                          {getShortDescription(index)}
                        </p>
                      </div>
                      <div className="bottom-0 flex flex-row justify-between">
                        <p className="text-gray-500 left-0 hover:text-white">
                          Click to View
                        </p>
                        <i className="uil uil-github-alt text-lg"></i>
                      </div>
                    </div>
                  ) : (
                    <Loading />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsClient;
