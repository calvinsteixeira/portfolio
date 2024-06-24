import { Icon } from "next/dist/lib/metadata/types/metadata-types";

interface IProject {
  title: string;
  cover: ImageBitmap;  
  deployUrl: string;
  githubUrl: string;
  tecnologies: IProjectTecnologie[]
}

interface IProjectTecnologie {
  icon: Icon;  
  name: string;
}

export type { IProject, IProjectTecnologie }