import React from "react";
import Link from "next/link";
import { Buttons } from "@/app/components/ui/Styles";
import Navbar from "@/app/components/Navbar";
import { fetchMeta } from "@/app/components/server/fetchRepoMeta";
import Notfound from "./Notfound";
import { projects } from "@/app/components/server/fetchRepoMeta";

export const revalidate = 3600 * 4; // revalidate the data at most every 4 hours

export async function generateMetadata({
  params,
}: {
  params: { repo: string };
}) {
  return {
    title: `${params.repo} | Xron Trix`,
    description: `Project Details for ${params.repo}`,
  };
}

const Page = async ({ params }: { params: { repo: string } }) => {
  let project = false;
  let html = "";
  let meta;

  if (projects.includes(params.repo)) {
    project = true;

    try {
      meta = await fetchMeta(params.repo); // deduplication

      const link = `https://raw.githubusercontent.com/XronTrix10/${params.repo}/${meta.default_branch}/README.md`;

      const response = await fetch(link); // Revalidate every 4 hours

      const content = await response.text();
      const showdown = require("showdown");
      const converter = new showdown.Converter();
      html = converter.makeHtml(content);
    } catch (error) {
      console.error("Error fetching Markdown content:", error);
    }
  }

  return (
    <main className="w-full">
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

      {project ? (
        <div className="py-20 relative z-10 isolate">
          <Navbar land={""}></Navbar>

          <div className="md:min-h-[90vh] px-6 md:px-[15%] shadow-inner">
            <div className="flex flex-row justify-between w-full text-white mt-6">
              <div className="bg-[#18181886] rounded-xl items-center flex flex-row gap-2 py-2 px-4">
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
                <div className="bg-[#96949457] px-2 rounded-lg">
                  {meta.stargazers_count}
                </div>
              </div>
              <div className="bg-[#18181886] rounded-xl items-center flex flex-row gap-2 py-2 px-4">
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
                <div className="bg-[#96949457] px-2 rounded-lg">
                  {meta.forks}
                </div>
              </div>
            </div>
            <h1 className="text-center my-10 red-text text-xl">
              Showing README of {params.repo}
            </h1>
            <div className="bg-[#18181886] rounded-xl p-4 md:p-16 md:text-justify">
              {/* <Getmarkdown repo={params.repo} /> */}
              <article
                dangerouslySetInnerHTML={{ __html: html }}
                className="max-w-none prose prose-sm md:prose-md prose-li:font-thin prose-headings:font-thin prose-strong:font-thin prose-img:rounded-lg prose-headings:text-white text-gray-200 prose-a:text-indigo-500 prose-li:marker:text-white prose-li:text-left prose-blockquote:text-white prose-code:text-gray-400 prose-pre:bg-black prose-strong:text-white overflow-hidden"
              />
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
