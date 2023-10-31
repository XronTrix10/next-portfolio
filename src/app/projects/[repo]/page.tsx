import React from "react";
import Link from "next/link";
import Notfound from "./Notfound";
import { Star, GitFork } from "lucide-react";
import Navbar from "@/src/components/Navbar";
import { projects, fetchMeta } from "@/src/components/server/fetchRepoMeta";

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
              <Star size={24} />
                Star
                <div className="bg-[#96949457] px-2 rounded-lg">
                  {meta.stargazers_count}
                </div>
              </div>
              <div className="bg-[#18181886] rounded-xl items-center flex flex-row gap-2 py-2 px-4">
              <GitFork size={24} />
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
                id="btn"
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
