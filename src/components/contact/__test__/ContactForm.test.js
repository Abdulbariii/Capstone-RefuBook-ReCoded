
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ContactForm from '../ContactForm';

describe("ContactForm component", () => {
    it("should send email when form is submitted", async () => {
        render(<ContactForm />);
        const emailInput = screen.getByPlaceholderText('@email');
        const messageInput = screen.getByPlaceholderText('Message');
        const submitButton = screen.getByRole("button", { name: /Send/i });


        fireEvent.change(emailInput, { target: { value: 'test@email.com' } });
        fireEvent.change(messageInput, { target: { value: 'Test message' } });
        fireEvent.click(submitButton);
        expect(emailInput.value).toBe('test@email.com');
        expect(messageInput.value).toBe('Test message');


    });
});





