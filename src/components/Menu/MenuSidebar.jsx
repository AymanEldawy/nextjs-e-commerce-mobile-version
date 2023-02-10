import { fetchWord } from '@/lang/fetchWord';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';

import { LanguageContext } from './../../context/LangContext';
import { ChevronIcon } from './../Icons/ChevronIcon';

export const MenuSidebar = ({ closeMenu, menuOpened }) => {
  const user = null;
  const [openLanguageMenu, setOpenLanguageMenu] = useState(false);
  const { lang, changeLang } = useContext(LanguageContext);
  const router = useRouter();
  console.log(router);
  const links = [
    { name: 'My Profile', path: '/profile' },
    { name: 'My Addresses', path: '/addresses' },
    { name: 'My Cards', path: '/saved-cards' },
    { name: 'Terms&conditions', path: '/terms' },
    { name: 'My favorite', path: '/wishlist' },
  ];
  return (
    <>
      {menuOpened ? (
        <div
          className="w-full h-screen fixed bg-[#E3E3E39E] z-20 top-0 left-0"
          onClick={closeMenu}
        ></div>
      ) : null}
      <aside
        className={`fixed flex flex-col w-[291px] top-0 z-30 bg-white h-screen transition-all duration-300 ${
          menuOpened ? 'left-0' : '-left-80'
        }`}
      >
        <div className="h-40 bg-primary flex items-end">
          <p className="text-white p-4 pb-6 text-lg text-center font-medium w-full">
            Sign in or Create an account
          </p>
        </div>
        <ul>
          {links?.map((link) => (
            <li
              key={link?.name}
              className={`${
                router.pathname == link?.path ? '-mt-[1px] text-primary' : ''
              } px-4 md:px-8 font-medium`}
            >
              <Link
                href={link?.path}
                className="border-b border-[#D6D6D6] block py-3"
              >
                {link?.name}
              </Link>
            </li>
          ))}
          <li className="px-4 md:px-8 font-medium">
            <button
              className="border-b border-[#D6D6D6] py-3 w-full flex gap-4 items-center"
              onClick={() => setOpenLanguageMenu((prev) => !prev)}
            >
              {fetchWord('languages', lang)}
              <span
                className={`scale-75 -rotate-90 mt-2 duration-200 transition-transform
               ${openLanguageMenu ? '!rotate-90' : ''}`}
              >
                <ChevronIcon />
              </span>
            </button>
            <ul
              className={`bg-gray-100 max-h-0 overflow-hidden transition-all duration-300 ${
                openLanguageMenu ? '!max-h-24' : ''
              }`}
            >
              <li
                className="p-2 px-4 cursor-pointer"
                onClick={(e) => changeLang('ar')}
              >
                العربية
              </li>
              <div className="border border-gray-200" />
              <li
                className="p-2 px-4 cursor-pointer"
                onClick={(e) => changeLang('en')}
              >
                English
              </li>
            </ul>
          </li>
        </ul>
        {!!user ? (
          <button className="text-secondary flex text-left text-md px-4 md:px-8 mt-4 font-medium">
            {fetchWord('sign_out', lang)}
          </button>
        ) : null}
        <p className="text-sm mt-auto pb-4 px-4 md:px-8">
          Created by: <span className="text-primary">Why Not Tech</span>
        </p>
      </aside>
    </>
  );
};
