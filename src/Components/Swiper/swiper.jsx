

import { Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectCube, EffectCoverflow, EffectCreative, EffectFlip, EffectCards } from 'swiper/modules';


import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import '../Swiper/swiper.css'


import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Card from '../Card/card';

export default () => {
  return (


    <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectCoverflow
      ]} effect="coverflow"
      rewind={true}

      spaceBetween={1}
      slidesPerView={1}

      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: true,
      }}


    >
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>
      <SwiperSlide><Card /></SwiperSlide>


    </Swiper>
  );
};

