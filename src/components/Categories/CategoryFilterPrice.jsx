import Slider from 'nouislider';
import React, { useEffect, useState } from 'react';

import 'nouislider/dist/nouislider.css';

function doSomething(values, handle, unencoded, tap, positions, noUiSlider) {
  console.log(values, handle, unencoded, tap, positions, noUiSlider);
}

export const CategoryFilterPrice = ({ title }) => {
  let [start, setStart] = useState(50);
  let [end, setEnd] = useState(260);
  const changeValue = (values) => {
    console.log('run..');
    setStart(parseInt(values[0]));
    setEnd(parseInt(values[1]));
  };
  useEffect(() => {
    const slide = Slider.create(document.getElementById('sliderDouble'), {
      start: [start, end],
      connect: [false, true, false],
      step: 1,
      range: { min: 0, max: 600 },
    });
    slide.on('change.one', changeValue);
  }, []);
  return (
    <div className="my-4 pb-4 price-slide">
      <h3 className="text-tprimary mb-4 font-semibold text-base">{title}</h3>
      <div className="flex flex-col">
        <div className="flex text-sm justify-between text-[#D9D9D9] mb-[6px]">
          <span>{start}$</span>:<span>{end}$</span>
        </div>
        <div className="relative">
          <div className="input-slider-container">
            <div
              className="slider input-slider--yellow"
              id="sliderDouble"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
