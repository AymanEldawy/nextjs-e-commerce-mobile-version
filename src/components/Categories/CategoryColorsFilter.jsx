import React, { useState } from "react";

import { CheckIcon } from "./../Icons/CheckIcon";

export const CategoryColorsFilter = ({ title }) => {
  const [selectedGroupColors, setSelectedGroupColors] = useState([]);
  const colors = ["main", "gray", "brown", "sky-blue"];
  const toggleGroup = (item) => {
    if (selectedGroupColors.includes(item)) {
      setSelectedGroupColors((prev) => prev.filter((s) => s !== item));
    } else {
      setSelectedGroupColors((prev) => [...prev, item]);
    }
  };

  return (
    <div className="my-4 pb-4">
      <h3 className="text-tprimary mb-4 font-semibold text-base">{title}</h3>
      <div className="flex gap-2">
        <button
          onClick={() => toggleGroup("main")}
          className="flex items-center justify-center rounded-full h-8 w-8 bg-primary"
        >
          {selectedGroupColors.includes("main") ? <CheckIcon /> : null}
        </button>
        <button
          onClick={() => toggleGroup("gray")}
          className="flex items-center justify-center rounded-full h-8 w-8 bg-[#59666F]"
        >
          {selectedGroupColors.includes("gray") ? <CheckIcon /> : null}
        </button>
        <button
          onClick={() => toggleGroup("brown")}
          className="flex items-center justify-center rounded-full h-8 w-8 bg-[#513532]"
        >
          {selectedGroupColors.includes("brown") ? <CheckIcon /> : null}
        </button>
        <button
          onClick={() => toggleGroup("sky-blue")}
          className="flex items-center justify-center rounded-full h-8 w-8 bg-[#76EAD7]"
        >
          {selectedGroupColors.includes("sky-blue") ? <CheckIcon /> : null}
        </button>
      </div>
    </div>
  );
};
