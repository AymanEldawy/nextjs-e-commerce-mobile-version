import React, { useState } from 'react';

export const NotificationItem = ({ item }) => {
  const [on, setOn] = useState(false);
  return (
    <div
      key={item}
      className="flex justify-between items-center bg-white p-4 shadow-sm rounded-md"
    >
      <h4 className="text-[#363636] font-medium">{item}</h4>
      <button
        className={`flex rounded-2xl w-12 h-6 items-center px-1 cursor-pointer ${
          on ? 'bg-primary justify-end' : 'bg-gray-400'
        }`}
        onClick={() => setOn((prev) => !prev)}
      >
        <span className="bg-white rounded-full h-4 w-4 block transition-transform duration-300"></span>
      </button>
    </div>
  );
};
