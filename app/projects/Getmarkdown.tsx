

import React from "react";
import { fetchMeta } from "@/app/components/server/fetchRepoMeta";




const Getmarkdown = async (props: { repo: string }) => {

  let htmlContent;
  try {
    const meta = await fetchMeta(props.repo);
    const link = `https://raw.githubusercontent.com/XronTrix10/${props.repo}/${meta.default_branch}/README.md`;

    const response = await fetch(link, { cache: "force-cache" });

    if (response.ok) {
      const content = await response.text();

      var showdown = require("showdown"),
        converter = new showdown.Converter(),
        text = content,
        html = converter.makeHtml(text);

      htmlContent = html
    } else {
      console.error("Failed to fetch Markdown content");
    }
  } catch (error) {
    console.error("Error fetching Markdown content:", error);
  }

  return (
    <article
      className="prose text-black overflow-hidden"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    >
    </article>
  );
};

export default Getmarkdown;
