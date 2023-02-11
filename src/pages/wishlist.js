import React, { useContext } from 'react';
import { Layout } from './../components/Layout/Layout';
import { fetchWord } from '@/lang/fetchWord';
import { LanguageContext } from './../context/LangContext';
import { FeaturedProductGrid } from './../components/BrowseOurCategories/FeaturedProductGrid';
import { products } from '@/data/cardData';

const Wishlist = () => {
  const { lang } = useContext(LanguageContext);
  const inWishlist = products?.filter((product) => product?.inWishlist);
  return (
    <Layout title="My favorite" back hideBottomMenu>
      <div className="mt-12">
        <FeaturedProductGrid products={inWishlist} pageSize={12} />
      </div>
    </Layout>
  );
};
export default Wishlist;
