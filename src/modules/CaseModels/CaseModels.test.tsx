import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CaseModels from './CaseModels';

describe('<CaseModels />', () => {
  test('it should mount', () => {
    render(<CaseModels />);
    
    const caseModels = screen.getByTestId('CaseModels');

    expect(caseModels).toBeInTheDocument();
  });
});