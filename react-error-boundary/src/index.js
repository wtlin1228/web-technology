import React from 'react';
import ReactDOM from 'react-dom';

import * as Sentry from '@sentry/browser';

import App from './components/App';

// Sentry.init({dsn: YOUR_SENTRY_DSN});

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);