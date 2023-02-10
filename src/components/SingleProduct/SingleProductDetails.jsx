import React, { useState } from 'react';

import { TabsContent } from '../Tabs/TabsContent';
import { CardWishlist } from './../Card/CardWishlist';
import { Reviews } from './../Reviews/Reviews';
import { TabsList } from './../Tabs/TabsList';
import { ProductDescription } from './ProductDescription';
import { ProductSizes } from './ProductSizes';
import { RelatedProducts } from './RelatedProducts';
import { SingleProductImg } from './SingleProductImg';
import { SingleProductInfo } from './SingleProductInfo';
import { SingleProductSizes } from './SingleProductSizes';
import { SingleProductColors } from './SingleProductColors';
import { AddToCardButton } from './../Card/AddToCardButton';
import { SingleProductTotal } from './SingleProductTotal';

export const SingleProductDetails = ({ product }) => {
  const [selectedTab, setSelectedTab] = useState('description');
  const handelChangeTab = (item) => setSelectedTab(item);
  console.log(selectedTab);
  return (
    <div className="">
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
      <div className="flex justify-between items-center mt-8 px-4 mb-4">
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
