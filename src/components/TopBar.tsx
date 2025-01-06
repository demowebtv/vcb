'use client';

import React from "react";

const TopBar = () => {
  return (
      <div className={"container w-full m-auto bg-tran z-[1] relative pt-3 px-4"}>
      <div className="w-full justify-between items-center inline-flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
          <div className="flex-col justify-start items-start flex overflow-hidden">
            <img src="/images/logo.svg" />
          </div>
        </div>
        <div className="justify-end items-center gap-3 flex">
          <div className="justify-start items-start flex">
                <a href="tel:1900 545413" className="max-md:px-2 px-4 bg-white rounded-[5px] justify-center items-center gap-3 flex"> <img src="/icons/phone.svg" className="w-[17.69px] h-6 relative"/>
              <span className="text-black/80 text-base font-medium leading-normal max-md:hidden">1900 545413</span></a>
          </div>
          <div className="justify-end items-center flex">
            <div className="flex-col justify-start items-start inline-flex">
              <div className="self-stretch justify-start items-center inline-flex">
                <img src="/icons/vi.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default TopBar;
