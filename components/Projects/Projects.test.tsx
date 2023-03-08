import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Projects, { projects } from './Projects';

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

describe('Projects', () => {
  it('renders Projects', () => {
    render(<Projects />);
    projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
    expect(screen.getByText(/wilsonart/i)).toBeInTheDocument();
  });
});
