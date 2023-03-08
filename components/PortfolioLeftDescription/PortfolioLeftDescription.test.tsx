import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PortfolioLeftDescription from './PortfolioLeftDescription';

describe('PortfolioLeftDescription', () => {
  it('renders PortfolioLeftDescription', () => {
    render(
      <PortfolioLeftDescription
        title=""
        role="front-end, ui/ux"
        link="wilsonart.co.nz"
        href="https://wilsonart.co.nz"
        location="auckland, nz"
      />
    );
    expect(screen.getByText(/front-end, ui\/ux/i)).toBeInTheDocument();
    expect(screen.getByText(/wilsonart.co.nz/i)).toBeInTheDocument();
    expect(screen.getByText(/auckland, nz/i)).toBeInTheDocument();
  });
});
