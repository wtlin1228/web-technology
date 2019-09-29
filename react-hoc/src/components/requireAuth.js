import React, { useEffect } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  const ComposedComponent = (props) => {
    const { history, auth } = props;

    useEffect(() => {
      if (!auth) {
        history.push('/');
      }
    }, [history, auth]);

    return (
      <ChildComponent {...props} />
    );
  }

  const mapStateToProps = (state) => {
    return {
      auth: state.auth
    }
  }

  return connect(mapStateToProps)(ComposedComponent);
};
