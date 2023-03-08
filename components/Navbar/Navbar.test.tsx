import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders Navbar', () => {
    render(<Navbar />);
    expect(screen.getByText(/erindhoxha.dev_/i)).toBeInTheDocument();
    expect(screen.getByText(/front-end, ui\/ux/i)).toBeInTheDocument();
  });
});
