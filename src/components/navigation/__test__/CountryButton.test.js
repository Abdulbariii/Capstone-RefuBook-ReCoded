import React from 'react'
import { render, screen } from '@testing-library/react'
import CountryButton from '../CountryButton'

describe('CountryButton', () => {
    it('renders the country name passed as a prop', () => {
        const countryName = 'Iraq'
        render(<CountryButton CountryName={countryName} />)
        const buttonText = screen.getByText(countryName)
        expect(buttonText).toBeInTheDocument()
    })
})
