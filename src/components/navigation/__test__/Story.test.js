import React from 'react';
import { render } from '@testing-library/react';
import Story from '../Story';

describe("Story component", () => {
    it(' to render Story component correctly', () => {
        render(<Story />);
    });
    it('renders heading and paragraph', () => {
        const { getByText } = render(<Story />);
        const heading = getByText(/Our Story/i);
        expect(heading).toBeInTheDocument();

    });
})

