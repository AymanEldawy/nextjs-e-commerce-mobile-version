import React, { useContext } from "react";
import Image from "next/image";
import { ClockIcon } from "./../Icons/ClockIcon";
import { MasterCardIcon } from "./../Icons/MasterCardIcon";
import { fetchWord } from "./../../lang/fetchWord";
import { LanguageContext } from "./../../context/LangContext";
import { useRouter } from "next/router";
export const DeliveryAddress = ({ nextEditStageHandler }) => {
  const { lang } = useContext(LanguageContext);
  const router = useRouter();
  return (
    <div className="mt-12">
      <h3 className="text-primary font-medium text-base mb-4">
        {fetchWord("Delivery Address", lang)}
      </h3>
      <div className="flex items-center gap-2">
        <Image src="/images/map.png" alt="map" height={50} width={50} />
        <p className="text-sm font-medium">25/3 address details, city</p>
        <button
          className="text-[#DB3022] ml-auto rtl:mr-auto rtl:ml-0 text-sm font-normal"
          onClick={() => nextEditStageHandler('EDIT_ADDRESS')}
        >
          {fetchWord("change", lang)}
        </button>
      </div>
      <div className="flex gap-2 my-5">
        <ClockIcon />
        <p className="text-sm font-medium text-[#0D0D0E]">
          Delivered in next 7 days
        </p>
      </div>
      <div className="flex justify-between mt-4">
        <div className="">
          <h3 className=" font-medium text-base mb-4">
            {fetchWord("Payment", lang)}
          </h3>
          <div className="flex gap-4 items-center ">
            <span className="shadow-md px-2 rounded-md flex items-center">
              <MasterCardIcon />
            </span>
            **** **** **** 3947
          </div>
        </div>
        <button
          className="text-[#DB3022] ml-auto rtl:mr-auto rtl:ml-0 text-sm font-normal"
          onClick={() => nextEditStageHandler('EDIT_PAYMENT')}
        >
          {fetchWord("change", lang)}
        </button>
      </div>
    </div>
  );
};
