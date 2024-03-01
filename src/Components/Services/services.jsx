import React from 'react'
import './services.css' ;
import { Swiper, SwiperSlide } from 'swiper/react';


const Services = () => {
  return (
    <div className='services'>
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><h1>Hello</h1></SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      
    </Swiper>
      
    </div>
  )
}

export default Services
