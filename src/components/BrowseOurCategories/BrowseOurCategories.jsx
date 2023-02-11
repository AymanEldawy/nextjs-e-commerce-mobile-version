import { Categories } from '@/data/cardData';
import { products } from '@/data/cardData';
import React, { useEffect, useState } from 'react';

import { BrowseCategoriesSlide } from './BrowseCategoriesSlide';
import { FeaturedProductGrid } from './FeaturedProductGrid';

export const BrowseOurCategories = ({ title }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  useEffect(() => {
    setCategories(Categories);
    setSelectedCategory(categories[0]);
  }, []);
  console.log(Categories);
  return (
    <div className="mt-4">
      <div className="container !p-0">
        <h4 className="font-semibold text-lg text-[#363636] rtl:text-xl">{title}</h4>
        <div className="relative overflow-hidden mb-4">
          <BrowseCategoriesSlide
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <FeaturedProductGrid products={products} />
      </div>
    </div>
  );
};
