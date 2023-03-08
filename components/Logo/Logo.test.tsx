import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Logo from './Logo';

describe('Logo', () => {
  it('renders Logo', () => {
    render(<Logo />);
    expect(screen.getByText(/erindhoxha.dev_/i)).toBeInTheDocument();
    expect(screen.getByText(/front-end, ui\/ux/i)).toBeInTheDocument();
  });
});
