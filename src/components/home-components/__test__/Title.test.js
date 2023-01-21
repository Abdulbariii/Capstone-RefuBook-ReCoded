
import React from 'react';
import { getByRole, render, screen } from '@testing-library/react';
import Title from '../Title';
import { BrowserRouter } from "react-router-dom"


const MockTitle = () => {
    return (
        <BrowserRouter>
            <Title />
        </BrowserRouter>
    )
}

describe('render Title', () => {
    it(' to render Title component correctly', () => {
        render(<MockTitle />);
    });
    it('should render RefuBook as title', () => {
        render(<MockTitle />)
        const titleElement = screen.getByText(/Refubook/i)
        expect(titleElement).toBeInTheDocument()
    });
    it('should render sign up as button', () => {
        render(<MockTitle />)
        const buttonElement = screen.getByRole("button", { name: /Sign up/i })
        expect(buttonElement).toBeInTheDocument()
        expect(buttonElement).toBeEnabled();
    });


    it('sign-up button links to correct route', () => {
        render(<MockTitle />)
        const buttonElement = screen.getByRole('link', { name: /Sign up/i });
        expect(buttonElement.getAttribute('href')).toBe('/signup');
    });



});

