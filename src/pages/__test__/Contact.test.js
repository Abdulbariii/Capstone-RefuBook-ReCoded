import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Contact from '../Contact';

it('renders contact form', () => {
    render(<Contact />)
});

