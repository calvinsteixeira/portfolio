import { IconType } from "react-icons";

interface IProject {
  title: string;
  coverUrl: string;  
  deployUrl: string;
  githubUrl: string;
  tecnologies: IProjectTecnologie[]
}

interface IProjectTecnologie {
  icon: IconType;  
  name: string;
}

export type { IProject, IProjectTecnologie }