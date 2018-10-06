import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './styles/style.scss';

const template = (
  <div>
    Some sample text
  </div>
);

const appRoot = document.querySelector('#root');
ReactDOM.render(template, appRoot);