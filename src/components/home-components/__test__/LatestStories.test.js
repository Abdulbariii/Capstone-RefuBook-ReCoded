import React from 'react';
import { render, screen } from '@testing-library/react';
import LatestStories from '../LatestStories';

describe('LatestStories', () => {
    it('renders the latest stories', () => {
        render(<LatestStories />);
        expect(screen.getByText('Latest Stories')).toBeInTheDocument();


    });
});
