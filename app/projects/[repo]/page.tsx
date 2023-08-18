"use client";

import React, { Suspense, useEffect, useState } from "react";
import { fetchMeta } from "@/app/components/server/fetchRepoMeta";
import "../markdown.module.css"

const page = ({ params }: { params: { repo: string } }) => {

  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    async function fetchMarkdownContent() {
      try {
        const meta = await fetchMeta(params.repo);
        const link = `https://raw.githubusercontent.com/XronTrix10/${params.repo}/${meta.default_branch}/README.md`;

        const response = await fetch(link, { cache: "force-cache" });

        if (response.ok) {
          const content = await response.text();

          var showdown = require("showdown"),
            converter = new showdown.Converter(),
            text = content,
            html = converter.makeHtml(text);

          setMarkdownContent(html);
        } else {
          console.error("Failed to fetch Markdown content");
        }
      } catch (error) {
        console.error("Error fetching Markdown content:", error);
      }
    }

    fetchMarkdownContent();
  }, []);

  return (
    <main className="w-full bg-black text-white py-20">
      <div className="min-h-screen px-[15%] shadow-inner">
        <h1 className="text-center my-10 red-text text-[2rem]">
          Showing README of {params.repo}
        </h1>
        <div className="bg-[#fefff0] rounded-lg p-10">
          <Suspense fallback={<p>Loading...</p>}>
          <article className={`prose text-black`} dangerouslySetInnerHTML={{ __html: markdownContent }} />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default page;
