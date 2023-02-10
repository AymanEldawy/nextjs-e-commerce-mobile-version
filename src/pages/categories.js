import { products } from '@/data/cardData';
import { fetchWord } from '@/lang/fetchWord';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';

import { Breadcrumb } from '../components/Breadcrumb/Breadcrumb';
import { CategorySidebar } from '../components/Categories/CategorySidebar';
import { Layout } from '../components/Layout/Layout';
import { CategoriesGrid } from './../components/Categories/CategoriesGrid';
import { LanguageContext } from './../context/LangContext';

const Categories = (props) => {
  const { lang } = useContext(LanguageContext);
  const router = useRouter();
  useEffect(() => {
    console.log(props);
    console.log(router);
    // setTitle('Categories');
  }, []);
  return (
    <Layout hideBottomMenu title="Categories" back> 
      <CategorySidebar />
      {/* <CategoriesGrid items={products} itemsPerPage={12} /> */}
    </Layout>
  );
};

export default Categories;
