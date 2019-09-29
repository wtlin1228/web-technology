import React, { useState } from 'react';
import { connect } from 'react-redux';
import { saveComment, fetchComments } from 'actions';

const CommentBox =  ({ saveComment, fetchComments }) => {
  const [comment, setComment] = useState('');
  
  function handleChange(e) {
    setComment(e.target.value);
  }
  
  function handleSubmit(e) {
    e.preventDefault();

    saveComment(comment);

    setComment('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea 
          value={comment}
          onChange={handleChange}
        />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button 
        className='fetch-comments'
        onClick={fetchComments}
      >
        Fetch Comments
      </button>
    </div>
  );
};

export default connect(
  null, 
  { 
    saveComment,
    fetchComments
  }
)(CommentBox);