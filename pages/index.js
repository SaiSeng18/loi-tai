import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { images } from '../src/img';
import Link from 'next/link';
import Hero from '../components/Hero';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";

export default function Home() {

  return (
    <div className="body">
        <Hero/>

        <div className="card card-1">
          <div className="content-container">
            <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse soluta qui vero culpa consequuntur optio at nobis architecto iste suscipit quam nam placeat eum voluptates cumque labore, fugiat laborum reiciendis.</p>
            <Link href="/shop"><a>Visit Link</a></Link>
          </div>
          

          <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="card-swiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          >
            <SwiperSlide>
              <div className="swiper-img-container">
                <Image src={images.black1} alt="image" layout='fill' objectFit="cover" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-img-container">
                <Image src={images.black2} alt="image" layout='fill' objectFit="cover" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-img-container">
                <Image src={images.black3} alt="image" layout='fill' objectFit="cover" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-img-container">
                <Image src={images.black4} alt="image" layout='fill' objectFit="cover" />
              </div>
            </SwiperSlide>

          </Swiper>
          
        </div>

        <div className="card card-2">

          <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="card-swiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          >
            <SwiperSlide>
              <div className="swiper-img-container">
                <Image src={images.white1} alt="image" layout='fill' objectFit="cover" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-img-container">
                <Image src={images.white2} alt="image" layout='fill' objectFit="cover" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-img-container">
                <Image src={images.white3} alt="image" layout='fill' objectFit="cover" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-img-container">
                <Image src={images.white4} alt="image" layout='fill' objectFit="cover" />
              </div>
            </SwiperSlide>

          </Swiper>

          <div className="content-container">
            <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse soluta qui vero culpa consequuntur optio at nobis architecto iste suscipit quam nam placeat eum voluptates cumque labore, fugiat laborum reiciendis.</p>
            <Link href="/shop"><a>Visit Link</a></Link>
            
          </div>
        </div>
    </div>
  )
}
