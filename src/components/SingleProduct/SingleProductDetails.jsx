import React, { useState } from 'react';

import { TabsContent } from '../Tabs/TabsContent';
import { AddToCardButton } from './../Card/AddToCardButton';
import { CardWishlist } from './../Card/CardWishlist';
import { Reviews } from './../Reviews/Reviews';
import { TabsList } from './../Tabs/TabsList';
import { ProductDescription } from './ProductDescription';
import { ProductSizes } from './ProductSizes';
import { RelatedProducts } from './RelatedProducts';
import { SingleProductColors } from './SingleProductColors';
import { SingleProductImg } from './SingleProductImg';
import { SingleProductInfo } from './SingleProductInfo';
import { SingleProductSizes } from './SingleProductSizes';
import { SingleProductTotal } from './SingleProductTotal';

export const SingleProductDetails = ({ product }) => {
  const [selectedTab, setSelectedTab] = useState('description');
  const handelChangeTab = (item) => setSelectedTab(item);
  console.log(selectedTab);
  return (
    <div className="mb-36">
      <div className="flex flex-col">
        <CardWishlist />
        <SingleProductImg img={product?.img} alt={product?.title} />
        <SingleProductInfo product={product} />
      </div>
      <div className="">
        <SingleProductSizes sizes="" />
        <SingleProductColors sizes="" />
      </div>
      <TabsList
        items={['description', 'Size Guide', 'reviews']}
        handelChangeTab={setSelectedTab}
        selectedTab={selectedTab}
      />
      <TabsContent selectedTab={selectedTab}>
        <div tabName="description" className={0}>
          <ProductDescription />
        </div>
        <div tabName="Size Guide" className={1}>
          <ProductSizes />
        </div>
        <div tabName="reviews" className={2}>
          <Reviews />
        </div>
      </TabsContent>
      <div className="mobile-container-full flex justify-between items-center !px-4 !fixed !h-20 left-0 bottom-0 z-30  p-2 bg-[#F9F9F9]">
        <SingleProductTotal
          price={product?.price}
          discount={product?.discount}
        />
        <AddToCardButton classes="mb-0 h-10 !w-40" />
      </div>
      {/* <RelatedProducts /> */}
    </div>
  );
};
