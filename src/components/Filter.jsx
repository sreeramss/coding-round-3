// src/components/Filter.jsx
import React from "react";

const Filter = ({ onFilterChange }) => (
  <div className="sm:flex sm:space-x-4 mb-4">
   <div>
   <select 
   onChange={(e) => onFilterChange("date", e.target.value)}
   className="bg-[#efefef] sm:bg-[#1b3252] border sm:border-none sm:text-white text-[12px] rounded-md h-[30px] w-full sm:w-[100px] p-1 mb-4 sm:mb-0 " name="" id="">
      <option value="">Filter by Date</option>
      <option value="">2023-2024</option>
      <option value="">2024-2025</option>
    </select>
   </div>
    <div>
    <select
      onChange={(e) => onFilterChange("search", e.target.value)}
      className="bg-[#efefef] sm:bg-[#1b3252] border sm:border-none sm:text-white text-[12px] rounded-md h-[30px] w-full sm:w-[100px] p-1 "
    >
      <option value="">Filter By Type</option>
      <option value="Yoga">Yoga</option>
      <option value="Meditation">Meditation</option>
      <option value="Detox">Detox</option>
    </select>
    </div>
  </div>
);

export default Filter;
