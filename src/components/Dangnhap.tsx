'use client';

import React from "react";

const Dangnhap = () => {

  return (
      <div className="relative min-h-[calc(100vh_-_150px)] h-auto z-[0]">
          <img className="bg-cover fixed top-0 w-full h-screen w-full" src="images/login_bg.png" style={{ objectFit: 'cover', objectPosition: 'top' }}/>
          <div className={`fixed top-0 w-full z-[0]`}>
          <div className="bg-login w-full mx-auto max-w-[486px] h-screen bg-black/40 rounded-[1171px] blur-[250px]" />
          </div>
          <div className={`relative top-0 w-full z-[1] pb-10 `}>
              <div className='container mx-auto px-4 pt-10 text-base-100 sm:px-6 lg:px-8 text-center'>
                  <div className="flex-col justify-center items-center gap-6 inline-flex">
                        <img src="images/dhcd.svg" className="max-w-[400px] w-full" />
                      <div className="text-center text-white text-sm font-medium leading-tight">Xin kính chào Quý khách</div>
                      <div className="text-left flex-col justify-start items-start gap-6 flex">
                          <div className="self-stretch flex-col justify-start items-center flex">
                              <div className="w-full max-w-[405px] w-full px-[12.80px] py-[0.80px] rounded-xl border border-white justify-start items-start gap-[0px] inline-flex">
                                  <div className="grow shrink basis-0 self-stretch pt-3 pb-[12.80px] rounded-sm flex-col justify-start items-start inline-flex overflow-hidden">
                                      <input
                                          type='text'
                                          placeholder="Mã cổ đông"
                                          className={`input h-full p-0 w-full border-none bg-transparent text-base text-[#FFF] placeholder-white shadow-none focus:border-none focus:border-transparent focus:outline-none focus:outline-none focus:ring-0 focus:ring-transparent`}
                                      />
                                  </div>
                                  <div className="self-stretch pl-1 flex-col justify-center items-start inline-flex">
                                      <div className="h-[46.40px] py-[13.20px] justify-start items-center inline-flex">
                                          <button className="bg-transparent border-none shadow-none btn btn-sm btn-circle min-h-0 h-[25px] hover:bg-transparent">
                                              <img alt="" width={40} height={40} className="inline-block h-[18px]" src="/icons/i.svg" />
                                          </button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="self-stretch h-[48.40px] flex-col justify-start items-center flex">
                              <div className="w-full max-w-[405px] px-[12.80px] py-[0.80px] rounded-xl border border-white justify-start items-start gap-[0px] inline-flex">
                                  <div className="grow shrink basis-0 self-stretch pt-3 pb-[12.80px] rounded-sm flex-col justify-start items-start inline-flex overflow-hidden">
                                      <input
                                          type='password'
                                          placeholder="Mật khẩu"
                                          className={`input h-full p-0 w-full border-none bg-transparent text-base text-[#FFF] placeholder-white shadow-none focus:border-none focus:border-transparent focus:outline-none focus:outline-none focus:ring-0 focus:ring-transparent`}
                                      />
                                  </div>
                                  <div className="self-stretch pl-1 flex-col justify-center items-start inline-flex">
                                      <div className="h-[46.40px] py-[13.20px] justify-start items-center inline-flex">
                                          <button className="bg-transparent border-none shadow-none btn btn-sm btn-circle min-h-0 h-[25px] hover:bg-transparent">
                                              <img alt="" width={40} height={40} className="inline-block h-[18px]" src="/icons/pw.svg" />
                                          </button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="self-stretch h-[48.40px] flex-col justify-start items-center flex">
                              <div className="w-full max-w-[405px] px-[12.80px] py-[0.80px] rounded-xl border border-white justify-start items-start gap-[0px] inline-flex">
                                  <div className="grow shrink basis-0 self-stretch pt-3 pb-[12.80px] rounded-sm flex-col justify-start items-start inline-flex overflow-hidden">
                                      <input
                                          type='text'
                                          placeholder="Mã kiểm tra"
                                          className={`input h-full p-0 w-full border-none bg-transparent text-base text-[#FFF] placeholder-white shadow-none focus:border-none focus:border-transparent focus:outline-none focus:outline-none focus:ring-0 focus:ring-transparent`}
                                      />
                                  </div>
                                  <div className="self-stretch pl-1 flex-col justify-center items-start inline-flex">
                                      <div className="h-[46.40px] py-[5.20px] justify-start items-center inline-flex">
                                          <div className="justify-start items-center gap-2 flex">
                                              <div className="h-9 flex-col justify-center items-start inline-flex">
                                                  <img className="w-[111.60px] h-9 relative rounded-md" src="images/capcha.png" />
                                              </div>
                                              <div className="flex-col justify-start items-start inline-flex">
                                                  <div className="rounded-[10px] justify-center items-center inline-flex overflow-hidden">
                                                      <div className="flex-col justify-start items-center inline-flex">
                                                          <button className="bg-transparent border-none shadow-none btn btn-sm btn-circle min-h-0 h-[25px] hover:bg-transparent">
                                                              <img alt="" width={40} height={40} className="inline-block h-[18px]" src="/icons/rs.svg" />
                                                          </button>
                                                      </div>
                                                      <div className="w-1 h-5" />
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="self-stretch justify-end items-start inline-flex">
                              <div className="flex-col justify-start items-center inline-flex">
                                  <a href={'#'} className="text-center text-white text-base font-medium underline leading-normal">Quên mật khẩu?</a>
                              </div>
                          </div>
                      </div>

                      <button className="self-stretch h-12 py-3 bg-gold-to-blue rounded-xl justify-center items-center flex text-white">
                                  Đăng nhập
                      </button>
                      <div className=" flex-col justify-start items-center inline-flex">
                          <div className="h-[72px] flex-col justify-start items-start flex">
                              <div className="self-stretch justify-center items-start gap-6 inline-flex">
                                  <div className="w-full max-w-[159.20px] self-stretch flex-col justify-start items-start inline-flex">
                                      <div className="self-stretch h-[72px] rounded-xl flex-col justify-center items-center flex overflow-hidden">
                                          <div className="w-10 h-10 p-2 bg-white/80 rounded-full backdrop-blur-lg justify-center items-center inline-flex">
                                              <a href={'#'} ><img alt="" className="w-6 h-6 relative" src="/icons/book1.svg" /></a>
                                          </div>
                                          <div className="self-stretch h-8 pt-2 flex-col justify-start items-start flex">
                                                  <a href={'#'} className="self-stretch text-center text-white text-base font-semibold leading-normal">Tài liệu họp</a>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="w-full max-w-[159.20px] self-stretch flex-col justify-start items-start inline-flex">
                                      <div className="self-stretch h-[72px] rounded-xl flex-col justify-center items-center flex overflow-hidden">
                                          <div className="w-10 h-10 p-2 bg-white/80 rounded-full backdrop-blur-lg justify-center items-center inline-flex">
                                              <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                                                      <a href={'#'} ><img alt="" className="w-6 h-6 relative" src="/icons/book.svg" /></a>
                                              </div>
                                          </div>
                                          <div className="self-stretch h-8 pt-2 flex-col justify-start items-start flex">
                                              <div className="self-stretch h-6 pl-[8.54px] pr-[8.55px] flex-col justify-start items-center flex">
                                                  <a href={'#'} className="text-center text-white text-base font-semibold leading-normal">Hướng dẫn sử dụng</a>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                      </div>
                      </div>
      </div>
  );
};

export default Dangnhap;
