import React from 'react';
import { render, screen } from '@testing-library/react';
import LatestStories from '../LatestStories';

describe('LatestStories', () => {
    it('renders the latest stories', () => {
        render(<LatestStories />);
        expect(screen.getByText('Latest Stories')).toBeInTheDocument();
        expect(screen.getByText('Home is behind, the world ahead and there are many paths to tread through shadows to the edge.')).toBeInTheDocument();


    });
});
