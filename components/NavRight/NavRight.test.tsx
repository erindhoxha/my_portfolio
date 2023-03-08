import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavRight from './NavRight';

describe('NavRight', () => {
  it('renders NavRight', () => {
    render(<NavRight />);
    expect(screen.getByText(/work/i)).toBeInTheDocument();
    expect(screen.getByText(/blog/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });
});
