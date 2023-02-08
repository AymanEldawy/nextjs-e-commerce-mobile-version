import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ChevronIcon } from './../Icons/ChevronIcon';
import { LanguageContext } from './../../context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
export const MenuSidebar = ({ closeMenu, menuOpened }) => {
  const { lang } = useContext(LanguageContext);
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
          className="w-full h-screen absolute bg-[#E3E3E39E] z-20 top-0 left-0"
          onClick={closeMenu}
        ></div>
      ) : null}
      <aside
        className={`absolute w-[291px] top-0 z-30 bg-white h-screen transition-all duration-300 ${
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
            <button className="border-b border-[#D6D6D6] py-3 w-full flex gap-4 items-center">
              {fetchWord('languages', lang)}
              <span className="scale-75 -rotate-90 mt-2">
                <ChevronIcon />
              </span>
            </button>
          </li>
        </ul>
        <button className="text-secondary text-md px-4 md:px-8 mt-4 font-medium">
          {fetchWord('sign_out', lang)}
        </button>
      </aside>
    </>
  );
};
