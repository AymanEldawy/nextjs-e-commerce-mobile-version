import { fetchWord } from '@/lang/fetchWord';
import Image from 'next/image';
import React, { useContext } from 'react';

import { LanguageContext } from './../../context/LangContext';

export const ProductSizes = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="flex flex-col mt-4 justify-center items-center px-4">
      <figure className="mb-8">
        <Image
          className=""
          src="/images/feet.png"
          alt="Feet Size"
          height={470}
          width={200}
        />
      </figure>

      <div className="relative overflow-x-auto flex-1">
        <table className="min-w-full text-center border-collapse border border-black">
          <thead className="bg-[#E9E9E9] border-b">
            <tr>
              <th
                scope="col"
                className="text-center text-[10px] font-medium text-gray-900 px-3 py-2 border border-black"
              >
                {fetchWord('Length', lang)}
              </th>
              <th
                scope="col"
                className="text-center text-[10px] font-medium text-gray-900 px-3 py-2 border border-black"
              >
                {fetchWord('Size', lang)}
              </th>
              <th
                scope="col"
                className="text-center text-[10px] font-medium text-gray-900 px-3 py-2 border border-black"
              >
                {fetchWord('Width_Size', lang)}
              </th>
              <th
                scope="col"
                className="text-center text-[10px] font-medium text-gray-900 px-3 py-2 border border-black"
              >
                {fetchWord('Width_Size_D', lang)}
              </th>
              <th
                scope="col"
                className="text-center text-[10px] font-medium text-gray-900 px-3 py-2 border border-black"
              >
                {fetchWord('Width_Size_EE', lang)}
              </th>
            </tr>
          </thead>
          <tbody>
            {Array(5)
              .fill(1)
              ?.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? '' : 'bg-[#F4F4F4]'}
                >
                  <td className="text-xs font-medium text-gray-900 px-3 py-2 whitespace-nowrap text-center border-l border-r border-black">
                    33
                  </td>
                  <td className="text-xs font-medium text-gray-900 px-3 py-2 whitespace-nowrap text-center border-r border-black">
                    33
                  </td>
                  <td className="text-xs font-medium text-gray-900 px-3 py-2 whitespace-nowrap text-center border-r border-black">
                    33
                  </td>
                  <td className="text-xs font-medium text-gray-900 px-3 py-2 whitespace-nowrap text-center border-r border-black">
                    33
                  </td>
                  <td className="text-xs font-medium text-gray-900 px-3 py-2 whitespace-nowrap text-center border-r border-black">
                    34
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
