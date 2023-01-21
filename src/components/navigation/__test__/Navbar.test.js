import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../Navbar';
import { BrowserRouter } from "react-router-dom"
import { useSelector } from 'react-redux';

const MockNavbar = () => {
    return (
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    )
}
jest.mock('react-redux', () => ({
    useSelector: jest.fn()
}));

describe('Navbar component', () => {
    it('should render correctly', () => {
        useSelector.mockImplementation((selector) => selector({
            isAuthenticated: true
        }));

        render(<MockNavbar />);
        const navbarElement = screen.getByTestId('navbar')
        expect(navbarElement).toBeTruthy();
    });
    it('links to correct route', () => {
        render(<MockNavbar />)
        const HomeNavLink = screen.getByRole('link', { name: /Home/i });
        expect(HomeNavLink.getAttribute('href')).toBe('/');
        expect(HomeNavLink).toBeInTheDocument()
        const AboutNavLink = screen.getByRole('link', { name: /About/i });
        expect(AboutNavLink.getAttribute('href')).toBe('/about');
        expect(AboutNavLink).toBeInTheDocument()
        const BlogNavLink = screen.getByRole('link', {
            name: /Blog/i
        });
        expect(BlogNavLink.getAttribute('href')).toBe('/blog');
        expect(BlogNavLink).toBeInTheDocument()
    });
});

