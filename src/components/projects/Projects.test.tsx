import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { Project } from '../../models/Project';
import Projects from './Projects';
import { ProjectTag } from '../../models/ProjectTag';
import userEvent from '@testing-library/user-event';

const projects: Project[] = [
  {
    name: 'Project 1',
    thumbnail_img: '1.png',
    thumbnail_gif: '1.gif',
    demo_link: 'demo1.link',
    code_link: 'code1.link',
    description: "description 1",
    tags: [ProjectTag.CSharp]
  },
  {
    name: 'Project 2',
    thumbnail_img: '',
    thumbnail_gif: '',
    demo_link: '',
    code_link: '',
    description: '',
    tags: [ProjectTag.TypeScript, ProjectTag.React]
  },
  {
    name: 'Project 3',
    thumbnail_img: '',
    thumbnail_gif: '',
    demo_link: '',
    code_link: '',
    description: '',
    tags: [ProjectTag.JavaScript, ProjectTag.React]
  },
  {
    name: 'Project 4',
    thumbnail_img: '',
    thumbnail_gif: '',
    demo_link: '',
    code_link: '',
    description: '',
    tags: [ProjectTag.TypeScript, ProjectTag.CSharp]
  }
]

describe('Projects component', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    render(<Projects projects={projects} />);
  })
  afterEach(cleanup)

  it('displays project name for each project ', () => {
    // Assert
    for (const project of projects) {
      expect(screen.getByText(project.name)).not.toBeNull();
    }
  })

  describe('ProjectFilter', () => {
    it('when React filter button is clicked, then only React projects are displayed', async () => {
      // Arrange
      const button = screen.queryAllByText(ProjectTag.React)[0];
      
      // Act
      await user.click(button);

      // Assert
      const reactProjects = projects.filter(x => x.tags.includes(ProjectTag.React));
      for (const project of reactProjects) {
        expect(screen.getByText(project.name)).not.toBeNull();
      }
      
      const otherProjects = projects.filter(x => !x.tags.includes(ProjectTag.React));
      for (const project of otherProjects) {
        const projectMatch = screen.queryByText(project.name);
        expect(projectMatch).toBeNull();
      }
    })

    it('when React button is clicked, then C# filter button is clicked, then only projects with C# tags are displayed', async () => {
      // Act - React clicked
      await user.click(screen.queryAllByText(ProjectTag.React)[0]);

      // Assert - only React projects are displayed
      const reactProjects = projects.filter(x => x.tags.includes(ProjectTag.React));
      for (const project of reactProjects) {
        expect(screen.getByText(project.name)).not.toBeNull();
      }
      
      const nonReactProjects = projects.filter(x => !x.tags.includes(ProjectTag.React));
      for (const project of nonReactProjects) {
        const projectMatch = screen.queryByText(project.name);
        expect(projectMatch).toBeNull();
      }

      // Act - click C#
      await user.click(screen.queryAllByText(ProjectTag.CSharp)[0]);

      // Assert - only C# projects are displayed
      const CSharpProjects = projects.filter(x => x.tags.includes(ProjectTag.CSharp));
      for (const project of CSharpProjects) {
        expect(screen.getByText(project.name)).not.toBeNull();
      }
      
      const nonCSharpProjects = projects.filter(x => !x.tags.includes(ProjectTag.CSharp));
      for (const project of nonCSharpProjects) {
        const projectMatch = screen.queryByText(project.name);
        expect(projectMatch).toBeNull();
      }
    })

    it('when C# filter button is clicked twice, then all projects are displayed', async () => {
      // Arrange
      const button = screen.queryAllByText(ProjectTag.CSharp)[0];
      
      // Act
      await user.click(button);
      await user.click(button);

      // Assert
      for (const project of projects) {
        expect(screen.getByText(project.name)).not.toBeNull();
      }
    })

    it('when TypeScript filter button is clicked, then All Projects button is clicked, then all projects are displayed', async () => {
      // Act - click TypeScript
      await user.click(screen.queryAllByText(ProjectTag.TypeScript)[0]);

      // Assert - only TypeScript displayed
      const typeScriptProjects = projects.filter(x => x.tags.includes(ProjectTag.TypeScript));
      for (const project of typeScriptProjects) {
        expect(screen.getByText(project.name)).not.toBeNull();
      }
      
      const otherProjects = projects.filter(x => !x.tags.includes(ProjectTag.TypeScript));
      for (const project of otherProjects) {
        const projectMatch = screen.queryByText(project.name);
        expect(projectMatch).toBeNull();
      }

      // Act - click all projects
      await user.click(screen.queryAllByText("All Projects")[0]);
      
      // Assert - all projects displayed
      for (const project of projects) {
        expect(screen.getByText(project.name)).not.toBeNull();
      }
    })
  })
})