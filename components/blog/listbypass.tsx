/* eslint-disable @next/next/no-img-element */
import { Transition } from "@headlessui/react";
import clsx from "clsx";
import { dataListBypass, dataListOtherBypass } from "constants/listbypass";
import React, { Fragment, useState } from "react";

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
    setIsHide((prev) => !prev);
  };

  return (
    <Fragment>
      <button
        onClick={toggleButton}
        className="bg-blue-500 py-2 px-4 rounded-lg"
      >
        {isHide ? "Open Other Apps" : "Hide"}
      </button>
      <Transition
        as={Fragment}
        show={!isHide}
        enter="transform transition duration-[400ms]"
        enterFrom="opacity-0 translate-y-5 scale-50"
        enterTo="opacity-100 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="opacity-100 scale-100 "
        leaveTo="opacity-0 scale-95"
      >
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
      </Transition>
    </Fragment>
  );
};
