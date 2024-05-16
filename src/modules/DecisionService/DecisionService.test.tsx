import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DecisionService from './DecisionService';

describe('<DecisionService />', () => {
  test('it should mount', () => {
    render(<DecisionService />);
    
    const decisionService = screen.getByTestId('DecisionService');

    expect(decisionService).toBeInTheDocument();
  });
});