'use client';

import React from "react";

const Dangnhap = () => {

    return (
        <div className="relative min-h-[calc(100vh_-_150px)] h-auto z-[0]">
            <img className="bg-cover fixed top-0 w-full h-screen w-full object-cover object-left-top"
                 src="images/login_bg.png"/>
            <div className={`fixed top-0 w-full z-[0]`}>
                <div
                    className="bg-login w-full mx-auto max-w-[486px] h-screen opacity-40 bg-[#287ca9]  rounded-[1171px] blur-[250px]"/>
            </div>
            <div className={`relative top-0 w-full z-[1] pb-10 `}>
                <div className='container mx-auto px-4 pt-10 text-base-100 sm:px-6 lg:px-8 text-center'>
                    <div className="flex-col justify-center items-center gap-6 inline-flex">
                        <img src="images/dhcd.svg" className="max-w-[400px] w-full"/>
                        <div className="text-center text-white text-sm font-medium leading-tight">Xin kính chào Quý
                            khách
                        </div>
                        <div className="text-left flex-col justify-start items-start gap-6 flex">
                            <div className="self-stretch flex-col justify-start items-center flex">
                                <div
                                    className="w-full max-w-[405px] w-full px-[12.80px] py-[0.80px] rounded-lg border border-white justify-start items-start gap-[0px] inline-flex">
                                    <div
                                        className="grow shrink basis-0 self-stretch pt-3 pb-[12.80px] rounded-sm flex-col justify-start items-start inline-flex overflow-hidden">
                                        <input
                                            type='text'
                                            placeholder="Mã cổ đông"
                                            className={`input h-full p-0 w-full border-none bg-transparent text-base text-[#FFF] placeholder-white shadow-none focus:border-none focus:border-transparent focus:outline-none focus:outline-none focus:ring-0 focus:ring-transparent`}
                                        />
                                    </div>
                                    <div className="self-stretch pl-1 flex-col justify-center items-start inline-flex">
                                        <div
                                            className="h-[46.40px] py-[13.20px] justify-start items-center inline-flex">
                                            <button
                                                className="bg-transparent border-none shadow-none btn btn-sm btn-circle min-h-0 h-[25px] hover:bg-transparent">
                                                <img alt="" width={40} height={40} className="inline-block h-[18px]"
                                                     src="/icons/i.svg"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-[48.40px] flex-col justify-start items-center flex">
                                <div
                                    className="w-full max-w-[405px] px-[12.80px] py-[0.80px] rounded-lg border border-white justify-start items-start gap-[0px] inline-flex">
                                    <div
                                        className="grow shrink basis-0 self-stretch pt-3 pb-[12.80px] rounded-sm flex-col justify-start items-start inline-flex overflow-hidden">
                                        <input
                                            type='password'
                                            placeholder="Mật khẩu"
                                            className={`input h-full p-0 w-full border-none bg-transparent text-base text-[#FFF] placeholder-white shadow-none focus:border-none focus:border-transparent focus:outline-none focus:outline-none focus:ring-0 focus:ring-transparent`}
                                        />
                                    </div>
                                    <div className="self-stretch pl-1 flex-col justify-center items-start inline-flex">
                                        <div
                                            className="h-[46.40px] py-[13.20px] justify-start items-center inline-flex">
                                            <button
                                                className="bg-transparent border-none shadow-none btn btn-sm btn-circle min-h-0 h-[25px] hover:bg-transparent">
                                                <img alt="" width={40} height={40} className="inline-block h-[18px]"
                                                     src="/icons/pw.svg"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-[48.40px] flex-col justify-start items-center flex">
                                <div
                                    className="w-full max-w-[405px] px-[12.80px] py-[0.80px] rounded-lg border border-white justify-start items-start gap-[0px] inline-flex">
                                    <div
                                        className="grow shrink basis-0 self-stretch pt-3 pb-[12.80px] rounded-sm flex-col justify-start items-start inline-flex overflow-hidden">
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
                                                    <img className="w-[111.60px] h-9 relative rounded-md"
                                                         src="images/capcha.png"/>
                                                </div>
                                                <div className="flex-col justify-start items-start inline-flex">
                                                    <div
                                                        className="rounded-[10px] justify-center items-center inline-flex overflow-hidden">
                                                        <div
                                                            className="flex-col justify-start items-center inline-flex">
                                                            <button
                                                                className="bg-transparent border-none shadow-none btn btn-sm btn-circle min-h-0 h-[25px] hover:bg-transparent">
                                                                <img alt="" width={40} height={40}
                                                                     className="inline-block h-[18px]"
                                                                     src="/icons/rs.svg"/>
                                                            </button>
                                                        </div>
                                                        <div className="w-1 h-5"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full justify-end items-start inline-flex">
                                <div className="grow shrink basis-0 h-6 justify-start items-center gap-6 flex">
                                    <div className="justify-start items-center gap-2 flex">
                                        <label className="cursor-pointer label">
                                            <input type="checkbox" defaultChecked
                                                   className="checkbox checkbox-secondary"/>
                                            <div
                                                className="text-center text-white text-base font-medium pl-1 leading-normal">Tại
                                                đại hội
                                            </div>
                                        </label>
                                    </div>
                                    <div className="justify-start items-center gap-2 flex">
                                        <label className="cursor-pointer label">
                                            <input type="checkbox" className="checkbox checkbox-secondary"/>
                                            <div
                                                className="text-center text-white text-base font-medium pl-1 leading-normal">Từ
                                                xa
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <a href={'#'}
                                   className="text-center text-white text-base font-medium underline leading-normal">Quên
                                    mật khẩu?</a>
                            </div>
                        </div>

                        <button
                            className="w-full text-center max-w-[380px] py-3 my-4 mx-2 bg-gold-to-blue rounded-lg justify-center items-center flex text-white">
                            Đăng nhập
                        </button>
                        <div className="w-full justify-center items-center gap-4 flex max-xl:flex-col">
                            <button
                                className="max-xl:w-full max-w-[380px] max-xl:pl-20 min-w-[245px] px-6 py-2 bg-white rounded-lg border border-black/10 justify-center max-xl:justify-start items-center gap-2 flex">
                                <div
                                    className="w-10 h-10 p-2 bg-gradient-to-l from-[#eaf6ff] to-[#f3ffe9] rounded-[360px] justify-center items-center flex">
                                    <img alt="" src="/icons/book1.svg"/>
                                </div>
                                <div
                                    className="text-center text-[#6da544] text-base font-semibold font-['Manrope'] leading-normal">Tài
                                    liệu họp
                                </div>
                            </button>
                            <button
                                className="max-xl:w-full max-w-[380px] px-6 max-xl:pl-20 min-w-[245px] py-2 bg-white rounded-lg border border-black/10 max-xl:justify-start max-xl: justify-center items-center gap-2 flex">
                                <div
                                    className="w-10 h-10 p-2 bg-gradient-to-l from-[#eaf6ff] to-[#f3ffe9] rounded-[360px] justify-center items-center flex">
                                        <img alt=""src="/icons/book.svg"/>
                                </div>
                                <div
                                    className="text-center text-[#6da544] text-base font-semibold font-['Manrope'] leading-normal">Hướng
                                    dẫn sử dụng
                                </div>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dangnhap;
