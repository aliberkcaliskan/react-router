import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import React from "react";
import '../../index.css';
import SwiperCore, {Mousewheel,Controller} from 'swiper';
import 'swiper/css';


SwiperCore.use([Mousewheel,Controller]);


export default function Home() {
    const swiper = useSwiper();
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      mousewheel
      loop
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={require('../../images/slider/1.jpg')} alt="ilkslider" /></SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};