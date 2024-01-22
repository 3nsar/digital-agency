import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { MdDoubleArrow } from 'react-icons/md';

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='reviews-container'>
      <Swiper
        effect='coverflow'
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className='mySwiper'
      >
        {reviews.map((item) => (
          <SwiperSlide key={item.author} className='previous-swiper-slide'>
            <div className='review-card'>
              <p>{item.text}</p>
              <p>{item.author}</p>
              <p>{item.company}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const reviews= [
  {
    "text": "Delighted with the service we have received - always quick, efficient, and extremely helpful. Would definitely recommend!",
    "author": "Jordan Coleman",
    "company": "Founder, Hills Speed"
  },
  {
    "text": "Exceptional service! The team is highly professional and goes above and beyond to meet our needs. I recommend their services to everyone.",
    "author": "Alice Rodriguez",
    "company": "Marketing Manager, Solana"
  },
  {
    "text": "Outstanding support from start to finish. Quick response times and a friendly team that truly cares about their clients. Highly recommended!",
    "author": "Michael Chen",
    "company": "Co-Founder, Moon Health"
  },
  {
    "text": "Impressed with the level of expertise and dedication. They consistently deliver top-notch service. I wouldn't hesitate to refer them to others.",
    "author": "Emily Wilson",
    "company": "Founder, Verra UK"
  },
  {
    "text": "Professionalism at its best! The team at this company is reliable, efficient, and always ready to assist. I am a satisfied customer and will continue to work with them.",
    "author": "Daniel James",
    "company": "Co-Founder, Leeds & Co"
  }
]

export default Reviews;









