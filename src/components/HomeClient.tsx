'use client';
import React from 'react';
const HomeClient = () => {
    return (
        <div className="relative min-h-[calc(100vh_-_150px)] h-auto z-[0] pt-[24px]">
            <div className="container mx-auto w-full max-xl:px-3">
                <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-12">
                    <div className='col-span-1'>
                        <div className="w-full gap-3 flex max-xl:flex-col">
                            <div
                                className="w-20 h-20  max-xl:w-28 max-xl:h-28 p-3 bg-gradient-to-l from-[#eaf6ff] to-[#f3ffe9] rounded-[360px] justify-center items-center flex max-xl:m-auto">
                                <img className="w-10 h-10 max-xl:w-16 max-xl:h-16 relative" src="icons/vcb.png"/>
                            </div>
                            <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
                                <div className="w-full px-6 pt-[15px] pb-[17px] bg-neutral-50 rounded-xl">
                                    <div className="w-full pb-6">
                                        <div
                                            className="text-black/60 text-[13px] font-bold  uppercase leading-tight">Chúc
                                            Qúy cổ đông một ngày tốt lành!
                                        </div>
                                        <div className="text-black/80 text-xl font-bold  leading-[30px]">Nguyễn Thế
                                            Tùng
                                        </div>
                                    </div>
                                    <div className="flex-col w-full gap-1.5 flex">
                                        <div
                                            className="pb-[1.60px] justify-between items-start gap-[4.80px] inline-flex">
                                            <div className="text-black/80 text-base font-bold  leading-normal">Mã số cổ
                                                đông
                                            </div>
                                            <div
                                                className="text-[#065c44] text-base font-semibold  leading-normal">VCB000123
                                            </div>
                                        </div>
                                        <div
                                            className="pb-[1.60px] justify-between items-start gap-[4.80px] inline-flex">
                                            <div className="text-black/80 text-base font-bold  leading-normal">Số cổ
                                                phần sở hữu
                                            </div>
                                            <div
                                                className="text-[#065c44] text-base font-semibold  leading-normal">1000000
                                            </div>
                                        </div>
                                        <div
                                            className="pb-[1.60px] justify-between items-start gap-[4.80px] inline-flex">
                                            <div className="text-black/80 text-base font-bold  leading-normal">Số cổ
                                                phần được ủy quyền
                                            </div>
                                            <div
                                                className="text-[#065c44] text-base font-semibold  leading-normal">400000
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full justify-center items-start gap-4 inline-flex">
                                    <a href={"#"}
                                       className="btn btn-primary min-w-[48%]">
                                        <span
                                            className="text-black/80">Ủy quyền</span>
                                    </a>
                                    <a href={'#'}
                                       className="btn btn-primary min-w-[48%] border-[#ebebeb] btn-outline">
                                        <span
                                            className="text-[#074c31]">Checkin</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div className="w-full basis-0 px-2 pt-2 pb-4 bg-white rounded-2xl border border-black/10">
                            <div className="w-full h-[405px] rounded-lg">
                                <iframe src="https://www.youtube.com/embed/K2UdFovl-XY?si=8KlsvzeC6rtN5twP"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen className="w-full h-full rounded-xl"></iframe>
                            </div>
                            <div className="w-full pt-5">
                                <div
                                    className="text-black/60 text-[13px] font-bold  uppercase leading-tight">Thời
                                    gian còn lại cho đến ngày đại hội
                                </div>
                                <div className="w-full items-start justify-around flex">
                                    <div className="flex flex-col">
                                        <div
                                            className="text-center text-[#065c44] text-[64px] max-xl:text-3xl font-semibold  leading-normal">100
                                        </div>
                                        <div
                                            className="text-center text-black/80 text-2xl max-xl:text-xs font-medium  uppercase leading-normal">ngày
                                        </div>
                                    </div>
                                    <div
                                        className="text-center text-[#074c31] text-[64px] max-xl:text-3xl font-semibold  leading-normal">:
                                    </div>
                                    <div>
                                        <div
                                            className="text-center text-[#065c44] text-[64px] max-xl:text-3xl font-semibold  leading-normal">12
                                        </div>
                                        <div
                                            className="text-center text-black/80 text-2xl  max-xl:text-xs font-medium  uppercase leading-normal">giờ
                                        </div>
                                    </div>
                                    <div
                                        className="text-center text-[#074c31] text-[64px] max-xl:text-3xl font-semibold  leading-normal">:
                                    </div>
                                    <div>
                                        <div
                                            className="text-center text-[#065c44] text-[64px] max-xl:text-3xl font-semibold  leading-normal">45
                                        </div>
                                        <div
                                            className="text-center text-black/80 text-2xl  max-xl:text-xs font-medium  uppercase leading-normal">phút
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-col items-center inline-flex xl:hidden w-full py-5">
                        <div className="w-full justify-evenly items-start gap-6 inline-flex">
                                <div className="rounded-xl flex-col justify-center items-center flex">
                                    <div
                                        className="w-12 h-12 p-3 bg-gradient-to-l from-[#eaf6ff] to-[#f3ffe9] rounded-[360px] justify-center items-center flex max-xl:m-auto">
                                        <img src="icons/book1.svg" className="w-[40px] h-[40px] relative" />
                                    </div>
                                    <div className="self-stretch h-8 pt-2 flex-col justify-start items-start flex">
                                        <a href={'#'} className="self-stretch text-center text-[#6da544] text-base font-semibold  leading-normal">Tài liệu họp</a>
                                    </div>
                                </div>
                            <div className="rounded-xl flex-col justify-center items-center flex">
                                <div
                                    className="w-12 h-12 p-3 bg-gradient-to-l from-[#eaf6ff] to-[#f3ffe9] rounded-[360px] justify-center items-center flex max-xl:m-auto">
                                    <img src="icons/book.svg" className="w-[40px] h-[40px] relative" />
                                </div>
                                <div className="self-stretch h-8 pt-2 flex-col justify-start items-start flex">
                                    <a href={'#'} className="self-stretch text-center text-[#6da544] text-base font-semibold  leading-normal">Hướng dẫn sử dụng</a>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default HomeClient;
