import React from 'react';
import './Partner.scss';
import { TbNorthStar } from "react-icons/tb";


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const Reviews = () => {

  
  return(
    <div className='reviews-container'>
      <Swiper
        effect={'coverflow'}
        loop={true}
        grabCursor={true}
        slidesPerView={3}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 640px
          240: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px
          812: {
            slidesPerView: 3,
          },
       }}
        
      >
        {reviews.map((item) => (
        <SwiperSlide key={item.id} className="previous-swiper-slide">
         <div className="reviews-card-content">
          <div className="reviews-card-star">
           <p><TbNorthStar color="#b01cff" size={20}/></p>
          </div>
          <div className="reviews-card-first-part">
           <p className='reviews-card-text'>{item.text}</p>
          </div>
          <div className="reviews-card-second-part">
            <p className='reviews-card-info'>{item.author}</p>
            <p className='reviews-card-info' id='card-company'>{item.company}</p>
            </div>
          </div>
      

        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  )
}

const reviews= [
  {
    "text": "Delighted with the service we have received - always quick, efficient, and extremely helpful. Would definitely recommend!",
    "author": "Jordan Coleman",
    "company": "Founder, Hills Speed",
    "id":1
  },
  {
    "text": "Exceptional service! The team is highly professional and goes above and beyond to meet our needs. I recommend their services to everyone.",
    "author": "Alice Rodriguez",
    "company": "Marketing Manager, Solana",
    "id":2
  },
  {
    "text": "Outstanding support from start to finish. Quick response times and a friendly team that truly cares about their clients. Highly recommended!",
    "author": "Michael Chen",
    "company": "Co-Founder, Moon Health",
    "id":3
  },
  {
    "text": "Impressed with the level of expertise and dedication. They consistently deliver top-notch service. I wouldn't hesitate to refer them to others.",
    "author": "Emily Wilson",
    "company": "Founder, Verra UK",
    "id":4
  },
  {
    "text": "Professionalism at its best! The team at this company is reliable, efficient, and always ready to assist. I am a satisfied customer and will continue to work with them.",
    "author": "Daniel James",
    "company": "Co-Founder, Leeds & Co",
    "id":5
  }
]


export default Reviews;









