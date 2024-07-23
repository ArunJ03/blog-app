import React, { useState, useEffect } from 'react';
import Post from '../PostComponent/PostComponent';
import './BlogComponent.css'

const BlogComponent = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Blog 1', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias dolores velit quibusdam optio nisi officia, doloribus facilis asperiores laborum itaque culpa necessitatibus blanditiis rerum, totam nobis est id consectetur voluptate.' },
    { id: 2, title: 'Blog 2', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias dolores velit quibusdam optio nisi officia, doloribus facilis asperiores laborum itaque culpa necessitatibus blanditiis rerum, totam nobis est id consectetur voluptate.' },
    { id: 3, title: 'Blog 3', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias dolores velit quibusdam optio nisi officia, doloribus facilis asperiores laborum itaque culpa necessitatibus blanditiis rerum, totam nobis est id consectetur voluptate.' },
  ]);

  const [newPost, setNewPost] = useState({ title: '', content: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPostData = { id: posts.length + 1, title: newPost.title, content: newPost.content };
    setPosts([...posts, newPostData]);
    setNewPost({ title: '', content: '' });
  };

  return (
    <div>
      <h1>Blog</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={newPost.title} onChange={(event) => setNewPost({ ...newPost, title: event.target.value })} />
        <br />
        <label>Content:</label>
        <textarea value={newPost.content} onChange={(event) => setNewPost({ ...newPost, content: event.target.value })} />
        <br />
        <button type="submit">Create Post</button>
      </form>
      <ul>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default BlogComponent;