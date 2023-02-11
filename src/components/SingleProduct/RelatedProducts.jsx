import { products } from '@/data/cardData';
import { fetchWord } from '@/lang/fetchWord';
import React, { useContext } from 'react';
import Slider from 'react-slick';

import { LanguageContext } from './../../context/LangContext';
import { Card } from './../Card/Card';
import { ChevronIcon } from './../Icons/ChevronIcon';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const CustomArrow = ({ direction, onClick, lang }) => (
  <button
    className={`absolute rounded-full scale-50 border-[1px] border-black !flex items-center justify-center !h-11 !w-11 -top-14 z-10  ${
      direction === 'next' ? 'right-0 rtl:left-0' : 'right-8 rtl:left-8'
    } ${!!onClick ? '!border-primary ' : ''}`}
    style={{
      transform:
        direction === 'next'
          ? lang === 'en'
            ? 'scale(.5) rotate(180deg)'
            : 'scale(.5) rotate(0)'
          : lang === 'ar'
          ? 'scale(.5) rotate(180deg)'
          : '',
    }}
    onClick={onClick}
    disabled={!onClick}
  >
    <ChevronIcon color={!!onClick ? '#f1a002' : '#363636'} />
  </button>
);

export const RelatedProducts = () => {
  const { lang } = useContext(LanguageContext);
  const setting = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="next" lang={lang} />,
    prevArrow: <CustomArrow lang={lang} />,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '72px',
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="relative py-8">
        <Slider {...setting}>
          {products?.map((product) => (
            <figure key={product?.id} className="p-2">
              <Card item={product} inCategory />
            </figure>
          ))}
        </Slider>
      </div>
    </div>
  );
};
