import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import YearDate from './YearDate';

describe('YearDate', () => {
  it('renders YearDate', () => {
    render(<YearDate year="2023" />);
    expect(screen.getByText(/2023/i)).toBeInTheDocument();
  });
});
