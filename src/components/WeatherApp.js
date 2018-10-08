import React, { Component } from 'react';

import Titles from './Titles';
import Form from './Form';
import Weather from './Weather';


class WeatherApp extends Component {

  state = {
    icon: undefined,
    weather: undefined,
    humidity: undefined,
    temperature: undefined,
    country: undefined,
    region: undefined,
    error: undefined
  };

  getWeather = async (e) => {

    e.preventDefault();
    const API_KEY = '4e88d8fe55a849978c491414180710';

    const city = e.target.elements.city.value;

    if (city) {

      e.target.elements.city.value = '';
      const api_call = await fetch(`https://api.apixu.com/v1/current.json?key=${API_KEY}&q=${city}`);
      const data = await api_call.json();
      
      if (data.error) {
        this.setState({
          icon: undefined,
          weather: undefined,
          humidity: undefined,
          temperature: undefined,
          country: undefined,
          region: undefined,
          error: 'No matching location found'
        });
        return;
      }

      this.setState({
        icon: data.current.condition.icon,
        weather: data.current.condition.text,
        humidity: data.current.humidity + '%',
        temperature: data.current.temp_c + '° C',
        country: data.location.country,
        region: data.location.region,
        error: ''
      });

    } else {

      this.setState({
        icon: undefined,
        weather: undefined,
        humidity: undefined,
        temperature: undefined,
        country: undefined,
        region: undefined,
        error: 'Please enter a city name to get started'
      });

    }

  }

  render() {
    return (
      <div className='weather-app'>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather getDetails={this.state} />
      </div>
    );
  }

}

export default WeatherApp;
