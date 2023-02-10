import React from 'react';

import { ReviewCard } from './ReviewCard';
import { ReviewForm } from './ReviewForm';

export const Reviews = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
      {/* <ReviewForm /> */}
    </div>
  );
};
