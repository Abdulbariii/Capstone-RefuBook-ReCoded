import React from 'react';
import { render } from '@testing-library/react';
import SignUp from '../SignUp';
import { BrowserRouter } from "react-router-dom"

const MockSignUp = () => {
    return (
        <BrowserRouter>
            <SignUp />
        </BrowserRouter>
    )
}
test('matches snapshot', () => {
    const { asFragment } = render(<MockSignUp />);
    expect(asFragment()).toMatchSnapshot();
});
