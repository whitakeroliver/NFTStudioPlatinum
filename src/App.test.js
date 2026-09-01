// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NFTStudioPlatinum title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NFTStudioPlatinum/i);
    expect(titleElement).toBeInTheDocument();
});
