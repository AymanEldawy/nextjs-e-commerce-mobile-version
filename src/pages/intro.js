import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const introData = [
  {
    title: 'Shopping and place your order ',
    img: 'images/intro/intro-1.svg',
    description:
      'Get a little lift from these Sam Edelman sandals featuring ruched on l straps and leather lace-up ties, while a braided jute sole makes a fresh.',
  },
  {
    title: '24/24 customer service',
    img: 'images/intro/intro-2.svg',
    description:
      'Get a little lift from these Sam Edelman sandals featuring ruched on l straps and leather lace-up ties, while a braided jute sole makes a fresh.',
  },
  {
    title: 'Several payment methods',
    img: 'images/intro/intro-3.svg',
    description:
      'Get a little lift from these Sam Edelman sandals featuring ruched on l straps and leather lace-up ties, while a braided jute sole makes a fresh.',
  },
  {
    title: 'Fast delivery ',
    img: 'images/intro/intro-4.svg',
    description:
      'Get a little lift from these Sam Edelman sandals featuring ruched on l straps and leather lace-up ties, while a braided jute sole makes a fresh.',
  },
];
const Intro = () => {
  const router = useRouter();
  const [stage, setStage] = useState(0);
  const [stageContent, setStageContent] = useState(introData[stage]);
  const nextStage = () => {
    if (stage < 3) setStage((old) => old + 1);
    else router.push('/');
  };
  useEffect(() => {
    setStageContent(introData[stage]);
  }, [stage]);
  return (
    <div className="mobile-container">
      <div className="intro">
        <figure>
          <Image
            src={stageContent?.img}
            alt={stageContent?.title}
            width={200}
            height={200}
          />
        </figure>
        <div className="flex items-center gap-2 mb-10">
          <span
            className={`h-3 w-3 rounded-full bg-[#DDDDDD] ${
              stage >= 0 ? '!bg-primary' : ''
            } `}
          ></span>
          <span
            className={`h-3 w-3 rounded-full bg-[#DDDDDD] ${
              stage >= 1 ? '!bg-primary' : ''
            } `}
          ></span>
          <span
            className={`h-3 w-3 rounded-full bg-[#DDDDDD] ${
              stage >= 2 ? '!bg-primary' : ''
            } `}
          ></span>
          <span
            className={`h-3 w-3 rounded-full bg-[#DDDDDD] ${
              stage >= 3 ? '!bg-primary' : ''
            } `}
          ></span>
        </div>
        <h2 className="text-primary mb-5 font-semibold">
          {stageContent?.title}
        </h2>
        <p className="text-[#666666] text-xs mb-5 text-center">
          {stageContent?.description}
        </p>
        <button
          onClick={nextStage}
          className="h-12 text-center bg-primary block w-full rounded-md text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Intro;
