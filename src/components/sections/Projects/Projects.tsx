import ProjectsClient from "./Projects-Client";
import fetchRepoData from "@/src/server/fetch-repodata";
import { Suspense } from "react";

const Projects = async () => {
  const data = await fetchRepoData();

  return (
    <Suspense fallback={<ProjectsClient repoData={[]} />}>
      <ProjectsClient repoData={data} />
    </Suspense>
  );
};

export default Projects;
