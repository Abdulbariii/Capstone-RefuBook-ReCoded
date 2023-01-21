import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Notification from '../Notification';



describe("Notification component", () => {
    afterEach(cleanup);
    it(' to render Notification component correctly', () => {
        render(<Notification />);
    });
    it('Notification component renders correctly with state "sent"', () => {
        const { getByText } = render(<Notification state="sent" name="email" />);
        expect(getByText('email is sent')).toBeInTheDocument();
        expect(getByText('email is sent').parentElement).toHaveClass('text-green-400');
        expect(getByText('email is sent').parentElement).toHaveClass('flex');
        expect(getByText('email is sent').parentElement).toHaveClass('items-center');
        expect(getByText('email is sent').parentElement).toHaveClass('justify-center');
    });

})