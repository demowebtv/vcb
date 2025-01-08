'use client';

import React from "react";

const Footer = () => {
return (
    <div className={"relative w-full m-auto bg-tran z-[1] relative p-3 bg-neutral-50 mt-3"}>
      <div className="container mx-auto w-full xl:justify-around xl:items-center xl:inline-flex max-xl:flex-col">
          <div className="gap-3 flex max-xl:pb-3 max-xl:mb-2 max-xl:w-full max-xl:justify-center max-xl:border-b-[1px] border-black/10">
            <img src="/images/logo.svg" className="h-10" />
          </div>

          <div className="pb-[0.60px] max-xl:w-full flex-col justify-start items-center gap-1 inline-flex">
              <div className="justify-start items-center gap-6 inline-flex">
                  <div className="text-center text-[#6da544] text-base font-semibold leading-normal">Tài liệu họp</div>
                  <div className="text-center text-[#6da544] text-base font-semibold leading-normal">Hướng dẫn sử dụng</div>
              </div>
              <div className="text-center text-black/80 text-xs font-semibold leading-[18px]">© 2025 Bản quyền thuộc về Ngân hàng TMCP Ngoại thương Việt Nam (Vietcombank)</div>
          </div>

      </div>
    </div>
);
};

export default Footer;
