/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import { dataListBypass, dataListOtherBypass } from "constants/listbypass";
import React, { useState } from "react";

export const ListBypass = () => {
  return (
    <div className="">
      <ul className="space-y-5">
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

export const ListOtherBypass = () => {
  const [isHide, setIsHide] = useState<boolean>(true);

  const toggleButton = () => {
    setIsHide(!isHide);
  };

  return (
    <div>
      <button
        onClick={toggleButton}
        className="bg-blue-500 py-2 px-4 rounded-lg"
      >
        {isHide ? "Open Other Apps" : "Hide"}
      </button>
      <div className={clsx("transition-all duration-100 ml-4")}>
        {!isHide && (
          <ul className="space-y-5">
            {dataListOtherBypass.map((item, index) => (
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
        )}
      </div>
    </div>
  );
};
