import React from "react";
import Link from "next/link";
import Navbar from "@/src/components/navbar/Navbar";
import { Star, GitFork } from "lucide-react";

const loading = () => {
  return (
    <main className="w-full bg-black text-white py-20">
      <Navbar land={""}></Navbar>

      <div className="relative isolate md:px-6 lg:px-8">
        <div
          className="fixed inset-x-0 top-[5rem] -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className={`relative left-[calc(50%)] aspect-[1155/678] h-[65vh] 2xl:h-[80vh] w-[17rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff2323] to-[#002fff] opacity-30 sm:w-[45rem]`}
            style={{
              clipPath:
                "polygon(20% 0%, 0% 20%, 9% 50%, 0% 80%, 20% 100%, 50% 78%, 80% 100%, 100% 80%, 90% 50%, 100% 20%, 80% 0%, 56% 0)",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 min-h-screen px-6 md:px-[15%] shadow-inner">
        <div className="flex flex-row justify-between w-full text-white mt-6">
          <div className="bg-[#242424] rounded-xl items-center flex flex-row gap-2 py-2 px-4">
            <Star size={24} />
            Star
            <div className="bg-[#5c5c5c] px-2 rounded-lg">10</div>
          </div>
          <div className="bg-[#242424] rounded-xl items-center flex flex-row gap-2 py-2 px-4">
            <GitFork size={24} />
            Fork
            <div className="bg-[#5c5c5c] px-2 rounded-lg">10</div>
          </div>
        </div>
        <h1 className="text-center my-10 red-text text-xl">
          Showing README of ...
        </h1>
        <div className="animate-pulse bg-[#18181886] min-h-[40vh] rounded-xl text-center md:text-justify">
          <div className="p-4 pr-28">
            <div className="h-8 ml-2 mr-14 md:mr-24 bg-[#696969] text-xl font-semibold mb-6 red-text rounded-lg"></div>
            <div className="h-4 m-2 mr-48 mt-10 bg-[#696969] text-md rounded-lg"></div>
            <div className="h-4 mr-6 ml-2 bg-[#696969] text-md rounded-lg"></div>
            <div className="h-4 mr-10 m-2 bg-[#696969] text-md rounded-lg"></div>
          </div>
        </div>
        <div className="text-center m-9">
          <Link href="/" id="btn">
            Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default loading;
