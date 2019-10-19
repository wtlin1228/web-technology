# React Error Boundary

自製一個 Error boundary, 然後針對 error 再去發給自己的 issue system, ex: Sentry

# Sentry 的小筆記

## Packages
+ @sentry/browser (5.2.0)
+ @sentry/minimal (^5.2.0) (好像是為了給 attachStacktrace 用)
+ redux-sentry-middleware (^0.0.15)


## Install
[Sentry 提供的安裝文件](https://docs.sentry.io/error-reporting/quickstart/?platform=browsernpm)


## Setup
在 `index.js` 裡面設定
```javascript=
import * as Sentry from '@sentry/browser';
import createSentryMiddleware from "redux-sentry-middleware";

Sentry.init({
  dsn: process.env['REACT_APP_SENTRY_DSN'], // from .env
  release: process.env['REACT_APP_SENTRY_RELEASES_VERSION'], // from .env
  environment: process.env['REACT_APP_SENTRY_RELEASES_ENV'], // from .env
  requestBodies: 'small',
  attachStacktrace: true, // 好像需要 @sentry/minimal
});

const sentryMiddleware = createSentryMiddleware(Sentry);

const createStoreWithMiddleware = applyMiddleware(..., sentryMiddleware)(createStore);
```

如果想在 **Sentry Log** 看到某些時刻的紀錄，可以使用 `addBreadcrumb`
```javascript=
// example
Sentry.addBreadcrumb({
  category: 'request success',
  message: 'get user information success',
  level: Sentry.Severity.Info,
  data: {
    response: JSON.stringify(response),
    method, // GET, POST, ...
    path,   // /api/user/users/1/
  }
});
```
如此一來，當 `error` 發生的時候，**Sentry SDK** 就會將這些 **Breadcrumb** 一起送出去

如果沒有 `error` 產生，但還是想要發 **Log** 到 **Sentry Server**，可以使用 `captureMessage`，其實這個 function 只是幫忙丟出一個 `error` 而已，可以看看他的源碼

```javascript=
/**
 * Captures a message event and sends it to Sentry.
 *
 * @param message The message to send to Sentry.
 * @param level Define the level of the message.
 * @returns The generated eventId.
 */
function captureMessage(message, level) {
  var syntheticException;
  try {
    throw new Error(message);
  }
  catch (exception) {
    syntheticException = exception;
  }
  return callOnHub('captureMessage', message, level, {
    originalException: message,
    syntheticException: syntheticException,
  });
}
```
