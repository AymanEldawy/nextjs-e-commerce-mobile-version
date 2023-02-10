import Link from 'next/link';
import React from 'react';

import { Brand } from './../Global/Brand';
import { BarsIcon } from './../Icons/BarsIcon';
import { HeartIcon } from './../Icons/HeartIcon';
import { SearchIcon } from './../Icons/SearchIcon';
import { ChevronIcon } from './../Icons/ChevronIcon';
import { useRouter } from 'next/router';

export const MenuMobile = ({ openMenu, title, back, backSteps }) => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center">
      <button className="" onClick={openMenu}>
        <BarsIcon />
      </button>
      <div className="w-28">
        {title ? (
          <h1 className=" whitespace-nowrap text-center text-secondary font-semibold font-base">
            {title}
          </h1>
        ) : (
          <Brand width="100px" />
        )}
      </div>
      {title && back ? (
        <button
          className="rotate-180 rtl:rotate-0 scale-90 w-5"
          onClick={() => {
            if (!!backSteps) backSteps();
            else router?.back();
          }}
        >
          <ChevronIcon />
        </button>
      ) : (
        <ul className="flex items-center gap-2">
          <li className=" scale-75 ">
            <button>
              <SearchIcon />
            </button>
          </li>
          <li className=" scale-75 ">
            <Link href="/wishlist">
              <HeartIcon />
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};
