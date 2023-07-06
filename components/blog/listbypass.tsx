/* eslint-disable @next/next/no-img-element */
import { dataListBypass } from "constants/listbypass";
import React from "react";

export const ListBypass = () => {
  return (
    <div className="pb-8 -mt-4">
      <ul>
        {dataListBypass.map((item, index) => (
          <li key={index} className="h-[30px]">
            <a href={item.link} className=" inline-flex gap-3 items-center">
              Open
              <img src={item.image} alt="icons" />
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
