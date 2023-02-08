import Styles from '@/styles/Home/Home.module.css';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

import { BannerInfo } from './BannerInfo';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export const Banner = () => {
  const setting = {
    autoPlay: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'relative',
  };
  return (
    <div className="relative">
      <div className="gap-2 max-h-[474px] overflow-hidden ">
        <Slider {...setting}>
          <figure className={`${Styles.banner_img} flex-1`}>
            <Image
              className="p-1"
              src="/images/home/hero-1.png"
              alt="logo"
              width="480"
              height="474"
            />
          </figure>
          <figure className={`${Styles.banner_img} flex-1`}>
            <Image
              className="p-1"
              src="/images/home/hero-3.jpg"
              alt="logo"
              width="480"
              height="474"
            />
          </figure>
          <figure className={`${Styles.banner_img} flex-1`}>
            <Image
              className="p-1"
              src="/images/home/hero-3.jpg"
              alt="logo"
              width="480"
              height="474"
            />
          </figure>
        </Slider>
      </div>
      <BannerInfo />
    </div>
  );
};
