import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Blogs from './Contact';
import Contact from './Contact';

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

describe('Home', () => {
  it('renders Contact', () => {
    render(<Contact />);
    expect(
      screen.getByText(/new css property: aspect-ratio/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/create animated icon on ai for web/i)
    ).toBeInTheDocument();
  });
});
