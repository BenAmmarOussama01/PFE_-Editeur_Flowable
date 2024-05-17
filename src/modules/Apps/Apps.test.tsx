import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Apps from './Apps';

describe('<Apps />', () => {
  test('it should mount', () => {
    render(<Apps />);
    
    const apps = screen.getByTestId('Apps');

    expect(apps).toBeInTheDocument();
  });
});