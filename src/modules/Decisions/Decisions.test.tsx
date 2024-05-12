import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Decisions from './Decisions';

describe('<Decisions />', () => {
  test('it should mount', () => {
    render(<Decisions />);
    
    const decisions = screen.getByTestId('Decisions');

    expect(decisions).toBeInTheDocument();
  });
});