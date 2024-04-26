import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Processes from './Processes';

describe('<Processes />', () => {
  test('it should mount', () => {
    render(<Processes />);
    
    const processes = screen.getByTestId('Processes');

    expect(processes).toBeInTheDocument();
  });
});