import { Categories } from '@/data/cardData';
import Image from 'next/image';
import React, { useState } from 'react';

export const CategoryList = ({ title }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="mb-4">
      <h3 className="text-tprimary mb-4 font-semibold text-base">{title}</h3>
      <div className="grid grid-cols-5 gap-4">
        {Categories?.map((category, index) => (
          <figure
            key={category?.slug}
            className="flex flex-col gap-1 items-center justify-center"
            onClick={() => setSelectedCategory(index)}
          >
            <Image
              className="rounded-full"
              src={category?.img}
              alt={category?.slug}
              height={58}
              width={58}
            />
            <figcaption
              className={`text-[11px] font-medium ${
                selectedCategory === index ? 'text-primary' : ''
              }`}
            >
              {category?.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};
