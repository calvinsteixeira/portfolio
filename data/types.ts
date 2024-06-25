import { dbIconProjects } from "./data";

interface IProject {
  title: string;
  coverUrl: string;  
  deployUrl: string;
  githubUrl: string;
  tecnologies: IProjectTecnologie[]
}

interface IProjectTecnologie {
  iconName: keyof typeof dbIconProjects;  
  techName: string;
}

export type { IProject, IProjectTecnologie }