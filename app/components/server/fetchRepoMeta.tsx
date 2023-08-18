import { projects } from "../home/Projects";

export const fetchMeta = async (project: string) => {
  
  const link = "https://api.github.com/repos/XronTrix10/" + project;

  const response = await fetch(link, { cache: "force-cache" });

  try {
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error fetching data:", response.statusText);
    }
  } catch (err) {
    console.error("Error:", err);
  }
};

const fetchRepoMeta = async () => {
  const repoData = [];

  for (const project of projects) {
    const data = await fetchMeta(project);
    repoData.push(data);
  }

  return repoData;
};

export default fetchRepoMeta;
