import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { CategoriesIcon } from './../Icons/CategoriesIcon';
import { HomeMobileIcon } from './../Icons/HomeMobileIcon';
import { ShoppingCartIcon } from './../Icons/ShoppingCartIcon';
import { UserProfileIcon } from './../Icons/UserProfileIcon';

export const FixedMenuBottom = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div
      className="fixed bottom-0 left-0 w-[375px] bg-white p-4 rounded-t-lg rounded-b-hidden"
      style={{
        boxShadow: '0px -10px 40px 0px #89217026',
      }}
    >
      <ul className="flex gap-4 justify-between items-center px-4">
        <li>
          <Link
            href="/"
            className="flex flex-col gap-4 justify-center items-center"
          >
            <HomeMobileIcon
              color={router?.pathname === '/' ? '#5E452A' : ' #292D3280'}
            />
            <span
              className={`text-xs ${
                router?.pathname === '/' ? 'block' : 'hidden'
              }`}
            >
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/categories"
            className="flex flex-col gap-4 justify-center items-center"
          >
            <CategoriesIcon
              color={
                router?.pathname === '/categories' ? '#5E452A' : ' #292D3280'
              }
            />
            <span
              className={`text-xs ${
                router?.pathname === '/categories' ? 'block' : 'hidden'
              }`}
            >
              Categories
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/cart"
            className="flex flex-col gap-4 justify-center items-center"
          >
            <ShoppingCartIcon
              color={router?.pathname === '/cart' ? '#5E452A' : ' #292D3280'}
            />
            <span
              className={`text-xs ${
                router?.pathname === '/cart' ? 'block' : 'hidden'
              }`}
            >
              Cart
            </span>
          </Link>
        </li>

        <li>
          <Link
            href="/profile"
            className="flex flex-col gap-4 justify-center items-center"
          >
            <UserProfileIcon
              color={router?.pathname === '/profile' ? '#5E452A' : ' #292D3280'}
            />
            <span
              className={`text-xs ${
                router?.pathname === '/profile' ? 'block' : 'hidden'
              }`}
            >
              Profile
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
