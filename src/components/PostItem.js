import React from 'react';

const PostItem = ({ post, onDelete, onEdit, onLike, onDislike }) => {
  return (
    <div className="post">
      <p>{post.text}</p>
      <div className="actions">
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
      <div className="likes-dislikes">
        <button onClick={onLike}>Like ({post.likes})</button>
        <button onClick={onDislike}>Dislike ({post.dislikes})</button>
      </div>
    </div>
  );
};

export default PostItem;
