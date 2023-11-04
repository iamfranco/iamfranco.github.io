import { cleanup, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from "vitest";
import ProjectFilter from "./ProjectFilter";
import { ProjectTag } from "../../../models/ProjectTag";

const onFilterClick = vi.fn();

describe('ProjectFilter component', () => {
  const user = userEvent.setup();
  const projectTags = Object.values(ProjectTag);
  const initialProjectFilter = <ProjectFilter filterTag={null} onFilterClick={onFilterClick} />;

  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  })

  it('displays every tag of ProjectTag, and initially do not have active class', () => {
    render(initialProjectFilter);

    for (const tag of projectTags) {
      const button = screen.getByText(tag);
      expect(button).not.toBeNull();
      expect(button.className).not.toContain('active');
    }
  })

  it('when user clicks on project tag button, then onFilterClick is called with the project tag', async () => {
    render(initialProjectFilter);

    for (const tag of projectTags) {
      // Arrange
      const button = screen.getByText(tag);

      // Act
      await user.click(button);

      // Assert
      expect(onFilterClick).toBeCalledWith(tag);
    }
  })

  it('has a button for "All Projects" and initially has active class', () => {
    render(initialProjectFilter);

    const button = screen.getByText('All Projects');
    expect(button).not.toBeNull();
    expect(button.className).toContain('active');
  })

  it('when user clicks on "All Projects" button, then onFilterClick is called with null', async () => {
    // Arrange
    render(initialProjectFilter);
    const button = screen.getByText("All Projects");

    // Act
    await user.click(button);

    // Assert
    expect(onFilterClick).toBeCalledWith(null);
  })

  it('given a filterTag selected, then only that tag should have active class', () => {
    for (const activeTag of projectTags) {
      // Arrange Act
      render(<ProjectFilter filterTag={activeTag} onFilterClick={onFilterClick} />);

      // Assert
      const button = screen.getByText(activeTag);
      expect(button.className).toContain('active');

      const otherTags = projectTags.filter(x => x!=activeTag);
      for (const otherTag of otherTags) {
        expect(screen.getByText(otherTag).className).not.toContain('active');
      }

      const allProjectsButton = screen.getByText('All Projects');
      expect(allProjectsButton.className).not.toContain('active');

      cleanup();
    }
  })
})