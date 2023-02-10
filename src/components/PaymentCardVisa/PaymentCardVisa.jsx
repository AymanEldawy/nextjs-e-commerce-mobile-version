import React from 'react';
import { MasterCardIcon } from './../Icons/MasterCardIcon';
import { SIMIcon } from './../Icons/SIMIcon';

export const PaymentCardVisa = ({ color }) => {
  return (
    <div
      className={`rounded relative overflow-hidden min-w-[130px] ${
        color || 'bg-blue-500'
      }`}
    >
      <div className="p-3 flex-col flex justify-between h-full z-10 relative text-white">
        <div className="flex justify-between  items-center">
          <span className="scale-75">
            <SIMIcon />
          </span>
          <span className="scale-50">
            <MasterCardIcon />
          </span>
        </div>
        <h3 className="text-sm text-white text-center whitespace-nowrap">
          •••• •••• •••• •289
        </h3>
        <div className="flex justify-between z-10 relative items-center">
          <div className="text-[9px] flex-col flex">
            <span className="text-[8px] text-gray-200">Card Holder</span>
            <span>Nico Robin</span>
          </div>
          <span className="text-[10px]">09/25</span>
        </div>
      </div>
    </div>
  );
};
