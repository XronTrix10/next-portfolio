"use client";

import React, { useEffect, useState } from "react";
import { fetchMeta } from "@/app/components/server/fetchRepoMeta";

const GetMarkdown = (props: { repo: string }) => {
  const [htmlContent, setHtmlContent] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const meta = await fetchMeta(props.repo);
        const link = `https://raw.githubusercontent.com/XronTrix10/${props.repo}/${meta.default_branch}/README.md`;

        const response = await fetch(link, { cache: "force-cache" });

        if (response.ok) {
          const content = await response.text();
          const showdown = require("showdown");
          const converter = new showdown.Converter();
          const html = converter.makeHtml(content);

          setHtmlContent(html);
        } else {
          console.error("Failed to fetch Markdown content");
        }
      } catch (error) {
        console.error("Error fetching Markdown content:", error);
      }
    };

    fetchData();
  }, [props.repo]);

  return (
    <article className="prose text-black overflow-hidden">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </article>
  );
};

export default GetMarkdown;
