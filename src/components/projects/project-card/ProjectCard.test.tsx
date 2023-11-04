import { cleanup, render, screen } from "@testing-library/react";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import ProjectCard from "./ProjectCard";
import { Project } from "../../../models/Project";

describe('ProjectCard component', () => {

  describe('project with all fields populated', () => {
    const project: Project =
    {
      name: 'Project 1',
      thumbnail_img: '1.png',
      thumbnail_gif: '1.gif',
      demo_link: 'demo1.link',
      code_link: 'code1.link',
      description: "description 1",
      tags: ['React', 'TypeScript']
    };

    beforeAll(() => {
      render(<ProjectCard project={project} />)
    })

    afterAll(cleanup)
  
    it('contains project demo image', () => {
      const demoImage = screen.getByRole('img');
      expect(demoImage.getAttribute('src')).toBe(project.thumbnail_img);
    })

    it('project demo iamge has parent anchor with correct href to demo link', () => {
      const demoImage = screen.getByRole('img');
      const parentAnchor = demoImage.closest('a');
      expect(parentAnchor).not.toBeNull();

      if (parentAnchor == null) return;
      expect(parentAnchor.getAttribute('href')).toBe(project.demo_link);
    })
  
    it('contains project name with correct href to demo link', () => {
      const projectName = screen.getByText(project.name);
      expect(projectName.getAttribute('href')).toBe(project.demo_link);
    })
  
    it('contains each tag of the project', () => {
      for (const tag of project.tags) {
        expect(screen.getByText(tag)).not.toBeNull();
      }
    })
  
    it('contains project description', () => {
      expect(screen.getByText(project.description)).not.toBeNull();
    })
  
    it('contains project code button with correct href to code link', () => {
      const codeButton = screen.getByText('Code');
      expect(codeButton.getAttribute('href')).toBe(project.code_link);
    })

    it('contains project demo button with correct href to demo link', () => {
      const demoButton = screen.getByText('Demo');
      expect(demoButton.getAttribute('href')).toBe(project.demo_link);
    })
  })

  describe('project with code link but without demo link', () => {
    const project: Project =
    {
      name: 'Project 1',
      thumbnail_img: '1.png',
      thumbnail_gif: '1.gif',
      demo_link: '',
      code_link: 'code1.link',
      description: "description 1",
      tags: ['React', 'TypeScript']
    };

    beforeAll(() => {
      render(<ProjectCard project={project} />)
    })

    afterAll(cleanup)

    it('project demo iamge has parent anchor with correct href to code link', () => {
      const demoImage = screen.getByRole('img');
      const parentAnchor = demoImage.closest('a');
      expect(parentAnchor).not.toBeNull();

      if (parentAnchor == null) return;
      expect(parentAnchor.getAttribute('href')).toBe(project.code_link);
    })
  
    it('contains project name with correct href to code link', () => {
      const projectName = screen.getByText(project.name);
      expect(projectName.getAttribute('href')).toBe(project.code_link);
    })

    it('contains project code button with correct href to code link', () => {
      const codeButton = screen.getByText('Code');
      expect(codeButton.getAttribute('href')).toBe(project.code_link);
    })

    it('does NOT contains project demo button', () => {
      const demoButton = screen.queryByText('Demo');
      expect(demoButton).toBeNull();
    })
  })
})