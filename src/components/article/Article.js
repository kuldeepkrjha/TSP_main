import React from 'react';
import './Article.css';

const Articles = () => {
  return (
    <section className="articles">
      <h2>Latest Articles</h2>
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
