import React from 'react';
// import './Article.css';
import { InfiniteMovingCardsDemo } from '../ui/infinite-moving-cards/InfiniteMovingCardsDemo';



const Articles = () => {
  return (
    <section className="pt-10">
    <div className='relative z-10 items-center justify-between text-center'>
    <h2 className='font-black animate-bounce text-3xl text-gray-300'>Latest Articles</h2>
    </div>
      
      {/* <div className="article-grid"> */}
      <InfiniteMovingCardsDemo testimonials={testimonials} />


      {/* </div> */}
    </section>
  );
};

export default Articles;

const testimonials = [
  {
    name: "Empowering Tribal Women through Entrepreneurship",
    quote:
      "Learn how government initiatives are supporting tribal women in starting their own businesses.",
    
    title: "Read More",
    url : "/"
  },
  {
    name: "Sustainable Farming Practices in Tribal Areas",
    quote:
      "Explore the latest data and practices in sustainable farming adopted by tribal communities.",
    
    title: "Read More",
    url : "/"
  },
  {
    name: "Edgar Allan Poe",
    quote: "All that we see or seem is but a dream within a dream.",
    
    title: "A Dream Within a Dream",
    url: "/"
  },
  {
    name: "Jane Austen",
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
   
    title: "Pride and Prejudice",
    url: "/"
  },
  {
    name: "Herman Melville",
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    
    title: "Moby-Dick",
    url: "/"
  },
];

