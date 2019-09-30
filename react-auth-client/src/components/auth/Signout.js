import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { signout } from '../../actions/index';

const SignOut = ({ signout }) => {
  useEffect(() => {
    signout();
  }, []);

  return (
    <div>
      Sorry to see you go
    </div>
  );
};

export default connect(null, { signout })(SignOut);