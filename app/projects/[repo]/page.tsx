import React, { Suspense } from "react";
import { fetchMeta } from "@/app/components/server/fetchRepoMeta";
import "../markdown.module.css";
import Getmarkdown from "../Getmarkdown";

export function generateMetadata({ params }: { params: { repo: string } }) {
  return {
    title: `${params.repo} | Xron Trix`,
    description: `Project Details for ${params.repo}`,
  };
}

// var markdownContent: null = null;

// async function fetchMarkdownContent(repo: string) {
//   try {
//     const meta = await fetchMeta(repo);
//     const link = `https://raw.githubusercontent.com/XronTrix10/${repo}/${meta.default_branch}/README.md`;

//     const response = await fetch(link, { cache: "force-cache" });

//     if (response.ok) {
//       const content = await response.text();

//       var showdown = require("showdown"),
//         converter = new showdown.Converter(),
//         text = content,
//         html = converter.makeHtml(text);

//       markdownContent = html;
//     } else {
//       console.error("Failed to fetch Markdown content");
//     }
//   } catch (error) {
//     console.error("Error fetching Markdown content:", error);
//   }
// }

const Page = ({ params }: { params: { repo: string } }) => {
  // fetchMarkdownContent(params.repo);

  return (
    <main className="w-full bg-black text-white py-20">
      <div className="min-h-screen px-10 md:px-[15%] shadow-inner">
        <h1 className="text-center my-10 red-text text-xl">
          Showing README of {params.repo}
        </h1>
        <div className="bg-[#fefff0] rounded-lg p-4 md:p-10">
          <Suspense fallback={<p className="text-xl text- p-16">Loading...</p>}>
            <Getmarkdown repo={params.repo} />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default Page;
