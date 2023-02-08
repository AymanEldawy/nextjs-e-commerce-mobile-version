import React from 'react';
import { SearchIcon } from './../Icons/SearchIcon';
import { HeartIcon } from './../Icons/HeartIcon';
import Link from 'next/link';
import { Brand } from './../Global/Brand';
import { BarsIcon } from './../Icons/BarsIcon';
export const MenuMobile = ({ openMenu }) => {
  return (
    <div className="flex justify-between items-center">
      <button className="" onClick={openMenu}>
        <BarsIcon />
      </button>
      <div className="w-28">
        <Brand width="100px" />
      </div>
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
    </div>
  );
};
