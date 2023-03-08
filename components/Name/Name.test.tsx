import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Name from './Name';

describe('Name', () => {
  it('renders Name', () => {
    render(<Name />);
    expect(screen.getByText(/erind hoxha/i)).toBeInTheDocument();
    expect(screen.getByText(/front-end, ui\/ux/i)).toBeInTheDocument();
    expect(screen.getByText(/Currently working at/i)).toBeInTheDocument();
    expect(screen.getByText(/kablamo/i)).toBeInTheDocument();
    expect(screen.getByText(/sydney, australia/i)).toBeInTheDocument();
  });
});
