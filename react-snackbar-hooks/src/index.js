import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import SnackBarProvider from './snackBar/SnackBarProvider';

ReactDOM.render(
  <SnackBarProvider>
    <App />
  </SnackBarProvider>, 
  document.getElementById('root')
);
