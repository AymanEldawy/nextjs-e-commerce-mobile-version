import React from 'react';
import Slider from 'react-slick';

import { CategoryCard } from './CategoryCard';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export const BrowseCategoriesSlide = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const setting = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    className: 'relative overflow-auto',
  };
  return (
    <div>
      <Slider {...setting}>
        {categories.map((category) => (
          <CategoryCard
            category={category}
            key={category?.id}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        ))}
      </Slider>
    </div>
  );
};
