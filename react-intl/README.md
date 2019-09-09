# React intl

## 使用 react-intl 實作多語系網站

```javascript
// index.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import './index.css';
import App from './App';

import en from './i18n/en.js';
import zh from './i18n/zh.js';
import ja from './i18n/ja.js';

const Root = () => {
  const [locale, setLocale] = useState(navigator.language);
  let messages;

  // 根據使用者選擇的語系 locale 切換使用不同的 messages
  if (locale.includes('zh')) {
    messages = zh;
  } else if (locale.includes('ja')) {
    messages = ja;
  } else {
    messages = en;
  }

  return (
    <IntlProvider
      locale={locale}
      key={locale}
      defaultLocale="en"
      messages={messages}
    >
      <App setLocale={setLocale} />
    </IntlProvider>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
```

```javascript
// App.js
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
```


## 使用方法

1. `$ yarn install`
2. `$ yarn start`