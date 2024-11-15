import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList'; // Correctly import ArticleList
import { posts } from '../data/blog'; // Import the posts data from blog.js

function App() {
  return (
    <div className="App">
      <Header name="Underreacted" />
      <About 
        image="https://via.placeholder.com/215"
        about="Welcome to my personal blog!" 
      />
      <ArticleList posts={posts} /> {/* Pass posts as a prop */}
    </div>
  );
}

export default App;
