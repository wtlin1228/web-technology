import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

const GoogleAuth = ({ isSignedIn, signIn, signOut }) => {
  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '542147342680-n13gao8oi6215cj38n36si8ai6c2uvg0.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        const auth = window.gapi.auth2.getAuthInstance();
        onAuthChange(auth.isSignedIn.get());
        auth.isSignedIn.listen(onAuthChange);
      });
    });
  }, []);

  function onAuthChange(isSignedIn) {
    if (isSignedIn) {
      signIn(window.gapi.auth2.getAuthInstance().currentUser.get().getId());
    } else {
      signOut();
    }
  }

  function onSignInClick() {
    window.gapi.auth2.getAuthInstance().signIn();
  }

  function onSignOutClick() {
    window.gapi.auth2.getAuthInstance().signOut();
  }

  function renderAuthButton() {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button 
          className='ui red google button'
          onClick={onSignOutClick} >
          <i className='google icon' />
          Sign Out
        </button>
      );
    } else {
      return (
        <button 
          className='ui red google button'
          onClick={onSignInClick} >
          <i className='google icon' />
          Sign In with Google
        </button>
      );
    }
  }

  return (
    <div>
      {renderAuthButton()}
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    isSignedIn: store.auth.isSignedIn
  }
}

export default connect(mapStateToProps, {
  signIn, 
  signOut
})(GoogleAuth);