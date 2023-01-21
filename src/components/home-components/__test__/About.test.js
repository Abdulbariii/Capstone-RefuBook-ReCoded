import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../About';
import { BrowserRouter } from "react-router-dom";

const MockAbout = () => {
    return (
        <BrowserRouter>
            <About />
        </BrowserRouter>
    )
}

describe("About component", () => {
    it("render about", () => {
        render(<MockAbout />)
    });

    it('learn more button links to correct route', () => {
        render(<MockAbout />)
        const buttonElement = screen.getByRole('link', { name: /Learn more/i });
        expect(buttonElement.getAttribute('href')).toBe('/about');
        expect(buttonElement).toBeInTheDocument()
    });

})


