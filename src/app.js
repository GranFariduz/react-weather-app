import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './styles/style.scss';
import WeatherApp from './components/WeatherApp';


const appRoot = document.querySelector('#root');
ReactDOM.render(<WeatherApp />, appRoot);