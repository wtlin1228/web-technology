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
