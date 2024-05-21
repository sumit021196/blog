import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogList from './components/BlogList';
import AddBlog from './components/AddBlog';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, { ...post, id: posts.length }]);
  };

  return (
    <div className="App">
      <Header />
      <AddBlog addPost={addPost} />
      <BlogList posts={posts} />
      <Footer />
    </div>
  );
};

export default App;

