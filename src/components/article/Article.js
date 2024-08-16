import React from 'react';
// import './Article.css';
import { InfiniteMovingCardsDemo } from '../ui/infinite-moving-cards/InfiniteMovingCardsDemo';
import VideoBackground from '../ui/Video/VideoBackground';

const videoProps = [
  { src: '/assets/image/video2.mp4', type: 'video/mp4' }
];


const Articles = () => {
  return (
    <section className="pt-10">
    <VideoBackground videos={videoProps}> </VideoBackground>
    <div className='relative items-center justify-between text-center'>
    <h2
  className='font-black animate-bounce text-3xl text-gray-300'
  style={{
    textShadow: '0 0 8px rgba(0, 0, 0, 0.8), 0 0 16px rgba(0, 0, 0, 0.6)',
  }}
>
  Latest Articles
</h2>


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
    name: "Revitalizing Traditional Crafts in Tribal Regions",
    quote:
      "Discover how traditional tribal crafts are being revitalized and integrated into the modern market.",
    title: "Read More",
    url: "/"
  },
  {
    name: "Healthcare Initiatives for Tribal Populations",
    quote:
      "Uncover the healthcare initiatives aimed at improving the well-being of tribal populations.",
    title: "Read More",
    url: "/"
  },
  {
    name: "Educational Opportunities for Tribal Youth",
    quote:
      "Learn about the educational programs and opportunities that are transforming the lives of tribal youth.",
    title: "Read More",
    url: "/"
  },
];
