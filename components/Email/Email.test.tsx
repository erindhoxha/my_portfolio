import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Email from './Email';

describe('Email', () => {
  it('renders Email', () => {
    render(<Email />);
    expect(screen.getByText(/hello@erind.dev/i)).toBeInTheDocument();
  });
});
