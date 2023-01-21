import React from 'react';
import { render, screen } from '@testing-library/react';
import Inspire from '../Inspire';


describe('Inspire', () => {
    it(' to render Inspire component correctly', () => {
        render(<Inspire />);
    });
    it('renders the correct heading text', () => {
        render(<Inspire />);
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
    });

    it('renders the Sign up button', () => {
        render(<Inspire />);
        const signupButton = screen.getByText('Sign up');
        expect(signupButton).toBeInTheDocument();
    });
});
