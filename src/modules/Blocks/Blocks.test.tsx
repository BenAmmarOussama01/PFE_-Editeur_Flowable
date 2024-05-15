import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Blocks from './Blocks';

describe('<Blocks />', () => {
  test('it should mount', () => {
    render(<Blocks />);
    
    const blocks = screen.getByTestId('Blocks');

    expect(blocks).toBeInTheDocument();
  });
});