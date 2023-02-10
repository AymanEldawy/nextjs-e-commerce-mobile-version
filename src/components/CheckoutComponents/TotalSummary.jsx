import React from 'react';
import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';
import { useRouter } from 'next/router';

export const TotalSummary = () => {
  const router = useRouter();
  return (
    <div className="my-8">
      <h3 className=" font-medium text-base mb-4">Total Summary</h3>
      <ul className="flex flex-col gap-3">
        <li className="flex justify-between items-center">
          <span className="text-[#9B9B9B] text-sm">Order:</span>
          <strong>112$</strong>
        </li>
        <li className="flex justify-between items-center">
          <span className="text-[#9B9B9B] text-sm">Delivery:</span>
          <strong>15$</strong>
        </li>
        <li className="flex justify-between items-center">
          <span className="font-medium text-base">Summary:</span>
          <strong>127$</strong>
        </li>
      </ul>
      <PrimaryButton
        text="Place order"
        classes="w-full !p-4 mt-4 rounded-lg mt-16"
        onClick={() => router.push('/confirmed')}
      />
    </div>
  );
};
