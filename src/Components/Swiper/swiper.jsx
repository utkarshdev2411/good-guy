// import React from 'react'
// import './services.css';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import Card from '../Card/card';
// const Services = () => {
//   return (
//     <div className='services'>
//       <Swiper
//         spaceBetween={1}
//         slidesPerView={9}
//         grabCursor={true}
//         className="portfolio-slider"
//       >
//         <SwiperSlide><Card/> </SwiperSlide>

//         <SwiperSlide><Card/> </SwiperSlide>

//         <SwiperSlide><Card/>  </SwiperSlide>

//         <SwiperSlide><Card/> </SwiperSlide>

//         <SwiperSlide><Card/>  </SwiperSlide>

//         <SwiperSlide><Card/> </SwiperSlide>

//       </Swiper>

//     </div>
//   )
// }

// export default Services
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Card from '../Card/card';

export default () => {
  return (
    <Swiper
          modules={[Navigation, Pagination,  A11y]}

      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
     
    >
      <SwiperSlide><Card/></SwiperSlide>
      <SwiperSlide><Card/></SwiperSlide>
      <SwiperSlide><Card/></SwiperSlide>
      <SwiperSlide><Card/></SwiperSlide>
  
      
    </Swiper>
  );
};

