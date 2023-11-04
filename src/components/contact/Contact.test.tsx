import { render, screen } from '@testing-library/react';
import { beforeAll, describe, expect, it } from 'vitest';
import Contact from './Contact';

interface ContactLink {
  href: string;
  text: string;
}

describe('Contact component', () => {
  const contactLinks: ContactLink[] = [
    {
      href: "https://github.com/iamfranco",
      text: "GitHub"
    },
    {
      href: "https://www.linkedin.com/in/kffchan/",
      text: "LinkedIn"
    },
    {
      href: "cv.pdf",
      text: "My CV"
    }
  ]

  beforeAll(() => {
    render(<Contact />);
  })

  it('has links to each contact item, with correct href', () => {
    for (const contactLink of contactLinks) {
      const link = screen.getByText(contactLink.text);
      const linkAnchor = link.closest('a');

      expect(linkAnchor).not.toBeNull();
      if (linkAnchor == null) return;

      expect(linkAnchor.getAttribute('href')).toBe(contactLink.href);
    }
  })
  
})