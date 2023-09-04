import React, { Suspense } from "react";
import "../markdown.module.css";
import Getmarkdown from "../Getmarkdown";
import Link from "next/link";
import { Buttons } from "@/app/components/ui/Styles";
import Navbar from "@/app/components/Navbar";
import { fetchMeta } from "@/server/fetchRepoMeta";
import Notfound from "./Notfound";

export function generateMetadata({ params }: { params: { repo: string } }) {
  return {
    title: `${params.repo} | Xron Trix`,
    description: `Project Details for ${params.repo}`,
  };
}

const projects: string[] = [
  "Telegram-Leecher",
  "Python-Passwd",
  "esp8266-BTS7960B",
  "CryptoLocker",
  "Pentesting-Notes",
  "next-portfolio",
];

function CustomAnimation() {
  return (
    <div
      id="animate"
      className="animate-pulse flex h-[40rem] flex-col justify-between"
    >
      <div className="">
        <div className="h-10 mr-36 bg-[#414141] text-xl font-semibold mb-6 red-text rounded-lg"></div>
        <div className="h-4 m-2 bg-[#414141] text-md rounded-lg"></div>
        <div className="h-4 mr-6 ml-2 bg-[#414141] text-md rounded-lg"></div>
        <div className="h-4 mr-10 m-2 bg-[#414141] text-md rounded-lg"></div>
      </div>
    </div>
  );
}

interface MetaData {
  stargazers_count: number;
  forks: number;
}

const Page = async ({ params }: { params: { repo: string } }) => {
  let meta: MetaData | null = null;

  if (projects.includes(params.repo)) {
    meta = await fetchMeta(params.repo);
  }

  return (
    <main className="w-full bg-black text-white">
      {meta !== null ? (
        <div className="py-20">
          <Navbar land={""}></Navbar>

          <div className="min-h-screen px-6 md:px-[15%] shadow-inner">
            <div className="flex flex-row justify-between w-full text-white mt-6">
              <div className="bg-[#242424] rounded-xl items-center flex flex-row gap-2 py-2 px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                Star
                <div className="bg-[#5c5c5c] px-2 rounded-lg">
                  {meta.stargazers_count}
                </div>
              </div>
              <div className="bg-[#242424] rounded-xl items-center flex flex-row gap-2 py-2 px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-git-fork"
                >
                  <circle cx="12" cy="18" r="3" />
                  <circle cx="6" cy="6" r="3" />
                  <circle cx="18" cy="6" r="3" />
                  <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" />
                  <path d="M12 12v3" />
                </svg>
                Fork
                <div className="bg-[#5c5c5c] px-2 rounded-lg">{meta.forks}</div>
              </div>
            </div>
            <h1 className="text-center my-10 red-text text-xl">
              Showing README of {params.repo}
            </h1>
            <div className="bg-[#fefff0] rounded-xl p-4 md:p-10 text-center md:text-justify">
              <Suspense fallback={<CustomAnimation />}>
                <Getmarkdown repo={params.repo} />
              </Suspense>
            </div>
            <div className="text-center m-9">
              <Link
                href={`https://github.com/XronTrix10/${params.repo}`}
                className={Buttons}
              >
                View in Github
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <Notfound text={"I Don't Have the Project that you are looking for"} />
      )}
    </main>
  );
};

export default Page;
