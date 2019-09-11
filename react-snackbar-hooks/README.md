# React Snackbar Hooks

## 最終目標是在任意地方加上這段程式碼就可以使用 Snackbar

```JavaScript
const { addAlert } = useSnackBars()
...
addAlert({...})
```

## step by step
1. create project with `create-react-app`

2. install material-ui for quick-start UI

`yarn add @material-ui/core`
`yarn add @material-ui/icons`

3. create `SnakeBarProvider`，並且使用 useContext 來實作，記得要將 SnackBarContext export

(以下程式碼為精簡版)

```JavaScript
import React, { createContext } from 'react';

export const SnackBarContext = createContext();

function SnackBarProvider({ children }) {
  
  function setAlert() {
    ...
  }

  const value = { setAlert };

  return (
    <SnackBarContext.Provider value={value}>
      {children}
      <Snackbar />
    </SnackBarContext.Provider>
  );
}

export default SnackBarProvider;
```

4. create `useSnackBar`，這邊很簡單只有四行

```JavaScript
import { useContext } from 'react';

import { SnackBarContext } from './SnackBarProvider';

const useSnackBar = () => useContext(SnackBarContext);

export default useSnackBar;
```

5. 用我們做的 Provider 把 App 包起來

```JavaScript
// index.js
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
```

6. 接著就可以開心的使用 `const { setAlert } = useSnackBar();`，太棒了！

```JavaScript
// App.js
import React from 'react';

// snackBar
import useSnackBar from './snackBar/useSnakeBar';

// material ui
import Button from '@material-ui/core/Button';

// css
import './App.css';

function App() {
  const { setAlert } = useSnackBar();
  
  function handleClick(message) {
    setAlert({
      vertical: 'top',
      horizontal: 'center',
      type: 'success'
    });
  }
  
  return (
    <div className="App">
      <div className="buttons">
        <div><Button onClick={() => handleClick('from button 1')} variant="contained" color="primary">Button 1</Button></div>
        <div><Button onClick={() => handleClick('from button 2')} variant="contained" color="secondary">Button 2</Button></div>
      </div>
    </div>
  );
}

export default App;
```