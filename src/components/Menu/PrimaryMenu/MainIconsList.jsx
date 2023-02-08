import React, { useContext } from 'react';
import Link from 'next/link';
import { SearchIcon } from './../../Icons/SearchIcon';
import { HeartIcon } from './../../Icons/HeartIcon';
import { WorldIcon } from './../../Icons/WorldIcon';
import { CartIcon } from './../../Icons/CartIcon';
import { LanguageContext } from './../../../context/LangContext';
export const MainIconsList = () => {
  const { changeLang } = useContext(LanguageContext);
  return (
    <ul className="flex items-center gap-2 lg:gap-4 mr-8 rtl:ml-8 rtl:mr-auto">
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
      <li className=" scale-75 ">
        <button onClick={changeLang}>
          <WorldIcon />
        </button>
      </li>
      <li className=" scale-75 ">
        <Link href="/cart" className="relative">
          <CartIcon />
          <span className="text-[10px] bg-red-500 text-white absolute -top-1 -right-2 rounded-lg px-1">
            3
          </span>
        </Link>
      </li>
    </ul>
  );
};
