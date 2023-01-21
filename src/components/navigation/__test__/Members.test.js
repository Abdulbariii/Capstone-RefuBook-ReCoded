import React from 'react';
import { render } from '@testing-library/react';
import Members from '../Members';

describe('Members', () => {
    it(' to render Members component correctly', () => {
        render(<Members />);
    });
});
