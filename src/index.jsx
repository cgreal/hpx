import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


import 'react-app-polyfill/stable';
// import { Provider } from 'react-redux';
// import store from './core/store';
import Root from './core/Root';
import './assets/styles/bootstrap-grid.scss'; // Import Bootstrap Grid's

// import configAxios from './core/config/axios-config';
// import { isIE } from './core/utils';

ReactDOM.render(
	<Root />,
	document.getElementById('root')
);
