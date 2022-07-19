import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import { images } from '../src/img';
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/bundle";

import "swiper/css";




const Hero = () => {
  return (
	<div className="hero">
		<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
		>
			<SwiperSlide>
				<div className="swiper-img-container">
					<Image src={images.logomark} alt="image" layout='fill' objectFit="contain" />
				</div>
			</SwiperSlide>

			<SwiperSlide>
				<div className="swiper-img-container">
					<Image src={images.loitai} alt="image" layout='fill' objectFit="contain" />
				</div>
			</SwiperSlide>
		</Swiper>
	</div>
		
  )
}

export default Hero