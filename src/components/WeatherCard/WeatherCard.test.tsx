import React from 'react';
import { render } from '@testing-library/react-native';
import WeatherCard from '../WeatherCard';


describe('WeatherCard', () => {
  it('renders correctly with all props', () => {
    const { getByText } = render(
      <WeatherCard celsius={30} date="Monday" description="Sunny" />
    );

    expect(getByText('Monday')).toBeTruthy();
    expect(getByText('Sunny')).toBeTruthy();
    expect(getByText('30°C')).toBeTruthy();
  });

  it('renders correctly with missing optional props', () => {
    const { getByText, queryByText } = render(
      <WeatherCard date="Tuesday" />
    );

    expect(getByText('Tuesday')).toBeTruthy();
    expect(queryByText(/°C/)).toBeNull(); // Celsius not rendered
    expect(queryByText('Sunny')).toBeNull(); // Description not rendered
  });
});
