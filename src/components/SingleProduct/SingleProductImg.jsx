import React from 'react';
import Image from 'next/image';
export const SingleProductImg = ({ img, alt }) => {

  return (
    <div className="flex-1">
      <figure>
        <Image src={img} alt={alt} height={450} width={450} className='w-full object-cover' />
      </figure>
    </div>
  );
};
