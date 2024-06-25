import React from "react";
import { Project } from "@/components/index";
import { dbProjects } from "@/data/data";
import { IProject } from "@/data/types";

type Props = {};

export default function Projetos({}: Props) {
  return (
    <main className="mainContainer pb-24">
      {dbProjects.map((project: IProject, index: number) => {
        return (
          <Project
            key={index}
            title={project.title}
            coverUrl={project.coverUrl}
            deployUrl={project.deployUrl}
            githubUrl={project.githubUrl}
            tecnologies={project.tecnologies}
          />
        );
      })}
    </main>
  );
}
