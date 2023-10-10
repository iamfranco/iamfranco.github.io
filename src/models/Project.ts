export interface Project {
  name: string,
  thumbnail_img: string,
  thumbnail_gif: string,
  demo_link: string,
  code_link: string,
  tags: ProjectTag[]
}

export type ProjectTag = 'React' | 'TypeScript' | 'JavaScript' | 'C#' | 'MongoDB' | 'GraphQL';