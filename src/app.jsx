import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import AppRouter from './routers/AppRouter.jsx';

// // import './firebase/firebase';
// import './axios/axios';

ReactDOM.render(<AppRouter />, document.getElementById('app'));
