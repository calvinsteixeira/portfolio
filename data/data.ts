import { FaReact, RiNextjsLine } from '@/icons'
import { IProject } from "./types";

const dbIconProjects = {
  'FaReact': FaReact,
  'RiNextjsLine': RiNextjsLine 
}

const dbProjects: IProject[] = [{
  title: 'Daily Annotations',
  deployUrl: 'https://google.com.br',
  githubUrl: 'https://google.com.br',  
  coverUrl: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*8udc9ow2rSyUzXST3z26_g.jpeg',
  tecnologies: [{iconName: 'FaReact', techName: 'React JS'}, { iconName: 'RiNextjsLine', techName: 'Next JS' }]
}]

export { dbProjects, dbIconProjects }