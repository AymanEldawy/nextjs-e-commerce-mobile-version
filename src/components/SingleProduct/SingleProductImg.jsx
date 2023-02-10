import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
export const SingleProductImg = ({ img, alt }) => {
  const setting = {
    autoPlay: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    className: 'relative',
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerPadding: '72px',
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="flex-1">
      <figure>
        <Image src={img} alt={alt} height={450} width={450} className='w-full object-cover' />
      </figure>
      {/* <div className="mt-4">
        <Slider {...setting}>
          <figure className="p-1">
            <Image src={img} alt={alt} height={250} width={250} />
          </figure>
          <figure className="p-1">
            <Image src={img} alt={alt} height={250} width={250} />
          </figure>
          <figure className="p-1">
            <Image src={img} alt={alt} height={250} width={250} />
          </figure>
          <figure className="p-1">
            <Image src={img} alt={alt} height={250} width={250} />
          </figure>
        </Slider>
      </div> */}
    </div>
  );
};
