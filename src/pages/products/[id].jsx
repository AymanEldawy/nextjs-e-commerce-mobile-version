import { getItemById } from '@/data/cardData';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { Layout } from './../../components/Layout/Layout';
import { SingleProductDetails } from './../../components/SingleProduct/SingleProductDetails';

const ProductDetails = () => {
  const [product, setProduct] = useState();
  const router = useRouter();
  const { id } = router?.query;
  useEffect(() => {
    setProduct(getItemById(id));
  }, []);
  return (
    <div className="mobile-container-full">
      <SingleProductDetails product={product} />
    </div>
  );
};

export default ProductDetails;
