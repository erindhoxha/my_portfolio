import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Blogs from "./Blogs";

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

describe("Home", () => {
  it("renders blogs", () => {
    render(<Blogs />);
    expect(
      screen.getByText(/new css property: aspect-ratio/i),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/create an animated icon on ai for web/i),
    ).toBeInTheDocument();
  });
});
