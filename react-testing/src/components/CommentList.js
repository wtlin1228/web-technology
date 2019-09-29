import React from 'react';
import { connect } from 'react-redux';

const CommentList = ({ comments }) => {
  function renderComments() {
    return comments.map(comment => {
      return (
        <li key={comment}>{comment}</li>
      );
    })  
  }

  return (
    <ul>
      {renderComments()}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  };
};

export default connect(mapStateToProps)(CommentList);