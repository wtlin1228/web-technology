import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeAuth } from 'actions';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

const App =  ({ auth, changeAuth }) => {
  function renderButton() {
    if (auth) {
      return (
        <button onClick={() => changeAuth(false)}>
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={() => changeAuth(true)}>
          Sign In
        </button>
      );
    }    
  }

  function renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post A Comment</Link>
        </li>
        <li>{renderButton()}</li>
      </ul>
    );
  }

  return (
    <div>
      {renderHeader()}
      <Route path="/post" component={CommentBox} />
      <Route exact path="/" component={CommentList} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(
  mapStateToProps,
  {
    changeAuth
  }
)(App);