/* eslint-disable @next/next/no-img-element */
import { dataListBypass } from "constants/listbypass";
import React from "react";

export const ListBypass = () => {
  return (
    <div className="">
      <ul>
        {dataListBypass.map((item, index) => (
          <li key={index} className="">
            <a
              href={item.link}
              className=" inline-flex gap-3 items-center m-0 p-0"
            >
              Open&nbsp;
              {item.image && (
                <img src={item.image} alt="icons" className="m-0 p-0" />
              )}
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
