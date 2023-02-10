import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Confirmed = () => {
  return (
    <div className="mobile-container">
      <div className="intro flex flex-col justify-center items-center h-full">
        <figure>
          <Image
            src="images/intro/intro-1.svg"
            alt="Success"
            width={200}
            height={200}
          />
        </figure>
        <h2 className="text-primary mb-2 font-semibold mt-8 text-4xl">
          Success!
        </h2>
        <p className="text-[#363636] text-sm mb-5 text-center max-w-[210px]">
          Your order will be delivered soon. Thank you for choosing our app!
        </p>
        <Link href="/" className="w-full">
          <button className="h-12 text-center mt-6 bg-primary block w-full rounded-md text-white">
            Continue shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Confirmed;
