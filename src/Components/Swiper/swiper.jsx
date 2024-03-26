

import { Autoplay, Navigation, Pagination, Scrollbar, A11y, EffectCube, EffectCoverflow, EffectCreative, EffectFlip, EffectCards } from 'swiper/modules';


import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import '../Swiper/swiper.css'


import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Card from '../Card/card';
import Card2 from '../Card2/card2';
import Card3 from '../Card3/card3';
import Card4 from '../Card4/card4';
import Card5 from '../Card5/card5';


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
      <SwiperSlide><Card2 /></SwiperSlide>
      <SwiperSlide><Card3/></SwiperSlide>
      <SwiperSlide><Card4 /></SwiperSlide>
      <SwiperSlide><Card5/></SwiperSlide>


    </Swiper>
  );
};

