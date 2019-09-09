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
