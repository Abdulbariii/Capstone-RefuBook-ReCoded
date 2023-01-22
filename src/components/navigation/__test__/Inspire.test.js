import React from 'react';
import { render, screen } from '@testing-library/react';
import Inspire from '../Inspire';
import { BrowserRouter } from "react-router-dom";

const MockInspire = () => {
    return (
        <BrowserRouter>
            <Inspire />
        </BrowserRouter>
    )
}


describe('Inspire', () => {
    it(' to render Inspire component correctly', () => {
        render(<MockInspire />);
    });
    it('renders the correct heading text', () => {
        render(<MockInspire />);
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
    });

    it('renders the Sign up button', () => {
        render(<MockInspire />);
        const signupButton = screen.getByText('Sign up');
        expect(signupButton).toBeInTheDocument();
    });
});
