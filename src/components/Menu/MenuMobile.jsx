import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { Brand } from './../Global/Brand';
import { BarsIcon } from './../Icons/BarsIcon';
import { ChevronIcon } from './../Icons/ChevronIcon';
import { HeartIcon } from './../Icons/HeartIcon';
import { SearchIcon } from './../Icons/SearchIcon';

export const MenuMobile = ({
  openMenu,
  setOpenedSearch,
  title,
  back,
  backSteps,
  full,
}) => {
  const router = useRouter();
  return (
    <div
      className={`flex justify-between items-center ${
        full ? 'p-4 absolute top-0 left-0 w-full' : ''
      }`}
    >
      <button className="" onClick={openMenu}>
        <BarsIcon color={full ? '#fff' : ''} />
      </button>
      <div className="w-28">
        {title ? (
          <h1
            className={`whitespace-nowrap text-center text-secondary font-semibold font-base ${
              full ? '!text-white' : ''
            }`}
          >
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
            <button onClick={() => setOpenedSearch(true)}>
              <SearchIcon color={full ? '#fff' : ''} />
            </button>
          </li>
          <li className=" scale-75 ">
            <Link href="/wishlist">
              <HeartIcon colorWhite color={full ? '#fff' : ''} />
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};
