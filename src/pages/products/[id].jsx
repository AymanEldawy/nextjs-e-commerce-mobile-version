import { getItemById } from "@/data/cardData";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { ChevronIcon } from "./../../components/Icons/ChevronIcon";
import { Layout } from "./../../components/Layout/Layout";
import { SingleProductDetails } from "./../../components/SingleProduct/SingleProductDetails";

const ProductDetails = () => {
  const [product, setProduct] = useState();
  const router = useRouter();
  const { id } = router?.query;
  useEffect(() => {
    setProduct(getItemById(id));
  }, []);
  return (
    <div className="mobile-container-full relative">
      <button
        className=" rtl:rotate-0 scale-90 w-5 absolute top-4 left-4 rtl:left-auto rtl:right-4"
        onClick={() => router?.back()}
      >
        <ChevronIcon />
      </button>
      <SingleProductDetails product={product} />
    </div>
  );
};

export default ProductDetails;
