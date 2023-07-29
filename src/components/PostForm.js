import React from 'react';

const PostForm = ({ newPost, onPostChange, onPostSubmit, isEditing }) => {
  return (
    <div className="post-container">
      <textarea
        value={newPost}
        onChange={onPostChange}
        placeholder="Type your post here..."
      ></textarea>
      <div className="button-container">
        <button onClick={onPostSubmit}>{isEditing ? 'Edit' : 'Share'}</button>
      </div>
    </div>
  );
};

export default PostForm;
