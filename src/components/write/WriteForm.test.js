import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import WriteForm from './WriteForm';
import { useSelector } from 'react-redux';

const mockedSetBlogPending = jest.fn();
const mockedSetBlogPosted = jest.fn();

jest.mock('react-redux', () => ({
    useSelector: jest.fn()
}));

describe('WriteForm', () => {

    it('should render correctly', () => {
        useSelector.mockImplementation((selector) => selector({
            isAuthenticated: true
        }));
        render(<WriteForm setBlogPending={mockedSetBlogPending} setBlogPosted={mockedSetBlogPosted} />);
        const input = screen.getByTestId('my-input');
        fireEvent.change(input, { target: { value: 'Blog Title' } });
        expect(input.value).toBe('Blog Title');
    });
});
