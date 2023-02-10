import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export const CardImg = ({ id, src, alt = 'alt', inCategory }) => {
  return (
    <figure className={`w-[300] h-[170] flex items-center justify-center `}>
      <Link href={`/products/${id}`}>
        <Image src={src} alt={alt} height={300} width={288} />
      </Link>
    </figure>
  );
};
