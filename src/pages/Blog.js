import React from 'react';
import Hero from '../components/Hero';

const Blog = () => {
  return (
    <div>
      <Hero 
        titulo="Blog" 
        parrafo="Lee nuestros últimos artículos."
        backgroundImage="/images/blog.jpg"
        height="50vh"
        backgroundPosition='center'
      />
    </div>
  );
};

export default Blog;
