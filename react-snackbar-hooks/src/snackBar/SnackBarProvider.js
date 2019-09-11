import React, { createContext, useState } from 'react';

// material ui
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export const SnackBarContext = createContext();

function SnackBarProvider({ children }) {
  // where you want to show the snackbar
  const [vertical, setVertical] = useState('bottom');
  const [horizontal, setHorizontal] = useState('left');
  const [message, setMessage] = useState('default message');
  const [open, setOpen] = useState(false);

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  function setAlert({ vertical, horizontal, message, type }) {
    setVertical(vertical);
    setHorizontal(horizontal);
    setMessage(message);
    setOpen(true);
  }

  const value = { setAlert };

  return (
    <SnackBarContext.Provider value={value}>
      {children}
      <Snackbar
        anchorOrigin={{
          vertical,
          horizontal,
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{message}</span>}
        action={[
          <Button key="undo" color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button>,
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            // className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </SnackBarContext.Provider>
  );
}

export default SnackBarProvider;