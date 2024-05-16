import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DecisionTable from './DecisionTable';

describe('<DecisionTable />', () => {
  test('it should mount', () => {
    render(<DecisionTable />);
    
    const decisionTable = screen.getByTestId('DecisionTable');

    expect(decisionTable).toBeInTheDocument();
  });
});