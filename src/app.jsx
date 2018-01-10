import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import App from './MediumTutorial/components/App.jsx';

// // import './firebase/firebase';
// import './axios/axios';

/* global document */

ReactDOM.render(
  (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('app'),
);
