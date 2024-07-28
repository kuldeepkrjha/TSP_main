import React from 'react';
import './Article.css';

const Articles = () => {
  return (
    <section className="pt-10">
    <div className='relative z-10 items-center justify-between text-center'>
    <h2 className='font-black animate-bounce text-3xl text-gray-300'>Latest Articles</h2>
    </div>
      
      <div className="article-grid">
        <article>
          <h3>Empowering Tribal Women through Entrepreneurship</h3>
          <p>Learn how government initiatives are supporting tribal women in starting their own businesses.</p>
          <a href="#">Read more</a>
        </article>
        <article>
          <h3>Sustainable Farming Practices in Tribal Areas</h3>
          <p>Explore the latest data and practices in sustainable farming adopted by tribal communities.</p>
          <a href="#">Read more</a>
        </article>
      </div>
    </section>
  );
};

export default Articles;
