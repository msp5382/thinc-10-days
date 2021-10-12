import Image from "next/image";
import DropDown from "../public/icons/drop_down.svg";
import { useState } from "react";

const Select = ({ children, value, onChange, title, width }) => {
  return (
    <div style={{ width: width }}>
      <div className="text-2xl items-center">{title}</div>
      <div className="relative">
        <select
          className="h-[39px] appearance-none outline-none w-full text-lg px-2 py-1 flex place bg-[#E7E7E74D] border-[#767676] border-[1.5px] rounded-xl "
          value={value}
          onChange={onchange}
        >
          {children}
        </select>
        <div className="absolute right-2 bottom-1 z-[-1]">
          <Image src={DropDown} />
        </div>
      </div>
    </div>
  );
};

export default Select;
