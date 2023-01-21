import React from 'react';
import { render } from '@testing-library/react';
import Team from '../Team';

jest.mock('./ShowAllButton', () => () => <div>Show All Button</div>);
jest.mock('./CountryButton', () => (props) => <div>{props.CountryName} Button</div>);
jest.mock('./Members', () => () => <div>Members Component</div>);

test('Team should render correctly', () => {
    const { getByText } = render(<Team />);
    expect(getByText('ShowAllButton')).toBeInTheDocument();
    expect(getByText('CountryButton')).toBeInTheDocument();
    expect(getByText('Members')).toBeInTheDocument();
});

