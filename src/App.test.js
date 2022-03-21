import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('starwars app', () => {
  it('should show a list of characters including Luke Skywalker', () => {
    render(<App />);
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
  });
  
});
