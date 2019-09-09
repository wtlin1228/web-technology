import React from 'react';
import { FormattedMessage, FormattedDate, FormattedTime, } from 'react-intl';
import logo from './logo.svg';
import './App.css';

function App({ setLocale }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <button onClick={() => setLocale('en')}>英文</button>
          <button onClick={() => setLocale('zh-Hant')}>中文</button>
          <button onClick={() => setLocale('ja')}>日文</button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormattedMessage id="app.learn" values={{ name: 'React' }} />
        </a>
        <div>
          <FormattedDate
            value={new Date()}
            year="numeric"
            month="long"
            day="numeric"
            weekday="long"
          />
        </div>
        <div>
          <FormattedTime value={new Date()} />
        </div>
      </header>
    </div>
  );
}

export default App;
