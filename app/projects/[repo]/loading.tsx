import Navbar from "@/app/components/Navbar";
import { Buttons } from "@/app/components/ui/Styles";
import Link from "next/link";
import React from "react";

const loading = () => {
  return (
    <main className="w-full bg-black text-white py-20">
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
              stroke-width="2.25"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-star"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Star
            <div className="bg-[#5c5c5c] px-2 rounded-lg">10</div>
          </div>
          <div className="bg-[#242424] rounded-xl items-center flex flex-row gap-2 py-2 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.25"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-git-fork"
            >
              <circle cx="12" cy="18" r="3" />
              <circle cx="6" cy="6" r="3" />
              <circle cx="18" cy="6" r="3" />
              <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" />
              <path d="M12 12v3" />
            </svg>
            Fork
            <div className="bg-[#5c5c5c] px-2 rounded-lg">10</div>
          </div>
        </div>
        <h1 className="text-center my-10 red-text text-xl">
          Showing README of ...
        </h1>
        <div className="animate-pulse bg-[#fefff0] min-h-[30vh] rounded-xl text-center md:text-justify">
          <div className="p-4">
            <div className="h-8 mr-24 bg-[#696969] text-xl font-semibold mb-6 red-text rounded-lg"></div>
            <div className="h-4 m-2 mt-10 bg-[#696969] text-md rounded-lg"></div>
            <div className="h-4 mr-6 ml-2 bg-[#696969] text-md rounded-lg"></div>
            <div className="h-4 mr-10 m-2 bg-[#696969] text-md rounded-lg"></div>
          </div>
        </div>
        <div className="text-center m-9">
          <Link href="/" className={Buttons}>
            Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default loading;
