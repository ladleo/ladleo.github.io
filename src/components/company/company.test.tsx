import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Company from './company';

describe('<Company />', () => {
  test('it should mount', () => {
    render(<Company />);

    const company = screen.getByTestId('Company');

    expect(company).toBeInTheDocument();
  });
});
