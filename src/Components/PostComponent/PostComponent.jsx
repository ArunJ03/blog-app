import React from 'react';
import './PostComponent.css'

const Post = ({ post }) => {
  return (
    <li>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </li>
  );
};

export default Post;