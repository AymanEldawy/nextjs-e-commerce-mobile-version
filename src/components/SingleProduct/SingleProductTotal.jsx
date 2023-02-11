import { LanguageContext } from './../../context/LangContext';
import { fetchWord } from './../../lang/fetchWord';
import { useContext } from 'react';



export const SingleProductTotal = ({ price, discount }) => {
  const { lang } = useContext(LanguageContext);
  const _discount = discount ? (price * (100 - discount)) / 100 : 0;
  return (
    <div className=" flex flex-col font-xs">
      <small className="text-[12px] text-[#AAAAAA]">
        {fetchWord('total price', lang)}
      </small>
      <span className="text-lg font-medium">
        {_discount ? _discount : price}$
      </span>
    </div>
  );
};
