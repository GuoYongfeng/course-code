import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MyComponent from './components/MyComponent/index.js';

import 'bootstrap/dist/css/bootstrap.css';

let rootEle = document.getElementById('app');

ReactDOM.render(<MyComponent />, rootEle)
