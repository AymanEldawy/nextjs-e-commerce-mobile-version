import { fetchWord } from '@/lang/fetchWord';
import React, { useContext } from 'react';

import { LanguageContext } from './../../context/LangContext';
import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';
import { CategoryColorsFilter } from './CategoryColorsFilter';
import { CategoryFilterPrice } from './CategoryFilterPrice';
import { CategoryFilterSizes } from './CategoryFilterSizes';
import { CategoryList } from './CategoryList';

export const CategorySidebar = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <aside className="pt-6 mb-12">
      <CategoryList title={fetchWord('categories', lang)} />
      <div className="border my-2 border-#EFEFEF]" />
      <CategoryFilterPrice title={fetchWord('price', lang)} />
      <div className="border my-2 border-#EFEFEF]" />
      <CategoryColorsFilter title={fetchWord('colors', lang)} />
      <div className="border my-2 border-#EFEFEF]" />
      <CategoryFilterSizes title={fetchWord('Sizes', lang)} />
      <div className="border my-2 border-#EFEFEF]" />
      <div className='flex gap-2 mt-6'>
        <PrimaryButton text="Discard" classes='!p-3 flex-1 !text-primary bg-[#F9F9F9] rounded-md' />
        <PrimaryButton text="Apply" classes="!p-3 flex-1 rounded-md" />
      </div>
      {/* <CategoryMostPopular title={fetchWord('Most_Popular', lang)} /> */}
    </aside>
  );
};
