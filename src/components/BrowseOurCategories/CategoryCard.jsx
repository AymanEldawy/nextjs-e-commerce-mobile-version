import { fetchWord } from '@/lang/fetchWord';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';

import { LanguageContext } from './../../context/LangContext';

export const CategoryCard = ({
  category,
  selectedCategory,
  setSelectedCategory,
}) => {
  const { lang } = useContext(LanguageContext);
  return (
    <div
      className="flex flex-col gap-1 justify-center items-center"
      onClick={() => setSelectedCategory(category)}
    >
      <figure className="overflow-hidden p-2">
        {/* <Link href="/categories"> */}
        <Image
          className="rounded-full"
          src={category?.img}
          alt={category?.name}
          height={210}
          width={210}
        />
        {/* </Link> */}
      </figure>
      <button
        className={`font-medium text-xs ${
          selectedCategory?.name === category?.name
            ? 'text-primary border-b-2 pb-1 border-primary px-2'
            : ''
        }`}
      >
        {category.name}
      </button>
    </div>
  );
};
