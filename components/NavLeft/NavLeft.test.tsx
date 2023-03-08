import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavLeft from './NavLeft';

describe('NavLeft', () => {
  it('renders NavLeft', () => {
    render(<NavLeft />);
    expect(screen.getByText(/github/i)).toBeInTheDocument();
    expect(screen.getByText(/li/i)).toBeInTheDocument();
    expect(screen.getByText(/md/i)).toBeInTheDocument();
  });
});
