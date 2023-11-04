import { ProjectTag } from "./ProjectTag";

export interface Project {
  name: string,
  thumbnail_img: string,
  thumbnail_gif: string,
  demo_link: string,
  code_link: string,
  description: string,
  tags: ProjectTag[]
}
