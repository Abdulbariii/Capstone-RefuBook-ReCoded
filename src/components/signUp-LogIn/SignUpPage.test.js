/* eslint-disable import/order */
import React from 'react';
import { render } from '@testing-library/react';
import SignUpPage from './SignUpPage';
import { BrowserRouter } from 'react-router-dom';

const MockSignUpPage = () => {
    return (
        <BrowserRouter>
            <SignUpPage />
        </BrowserRouter>
    );
};

describe('SignUpPage', () => {
    test('matches snapshot', () => {
        const { asFragment } = render(<MockSignUpPage />);
        expect(asFragment()).toMatchSnapshot();
    });
    test('rendering sign up page', () => {
        render(<MockSignUpPage />);
    });
});
