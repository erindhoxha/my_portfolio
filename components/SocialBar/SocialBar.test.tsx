import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SocialBar from './SocialBar';

describe('SocialBar', () => {
  it('renders SocialBar', () => {
    render(<SocialBar />);
    expect(screen.getByText(/github/i)).toBeInTheDocument();
    expect(screen.getByText(/instagram/i)).toBeInTheDocument();
    expect(screen.getByText(/twitter/i)).toBeInTheDocument();
    expect(screen.getByText(/codepen/i)).toBeInTheDocument();
  });
});
