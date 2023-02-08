import React, { useContext } from 'react';
import Link from 'next/link';
import { HomeIcon } from './../Icons/HomeIcon';
import { ChevronIcon } from './../Icons/ChevronIcon';
import { LanguageContext } from './../../context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
export const Breadcrumb = ({ paths }) => {
  const { lang } = useContext(LanguageContext);
  const spratsPath = paths.split('/');
  return (
    <div className="flex gap-3 items-center my-6">
      <Link href="/">
        <HomeIcon />
      </Link>
      {spratsPath?.map((path, index) => (
        <>
          <span className="rotate-180 rtl:rotate-0">
            <ChevronIcon />
          </span>
          {index === spratsPath?.length - 1 ? (
            fetchWord(path, lang) || [path]
          ) : (
            <Link className="capitalize" href={`/${path}`}>
              {fetchWord(path, lang) || path}
            </Link>
          )}
        </>
      ))}
    </div>
  );
};
