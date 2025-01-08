'use client';
import React from 'react';
const AccreditForm = () => {
    return (
        <div className="relative min-h-[calc(100vh_-_150px)] h-auto z-[0] pt-[24px]">
            <div className="container mx-auto w-full max-xl:px-3">
                <div className="w-full flex-col justify-start items-start gap-3 inline-flex">
                    <div className="text-black/80 text-[32px] font-extrabold ">Uỷ quyền</div>
                    <div className="justify-start items-start gap-3 inline-flex">
                            <p className="text-black/80 text-base font-bold leading-normal">Số cổ phần được ủy quyền</p>
                            <p className="text-[#065c44] text-base font-semibold  leading-normal">400.000</p>
                    </div>
                </div>
                <div className="mt-8 w-full flex-col justify-start items-start gap-6 inline-flex">
                    <div className="w-full basis-0 flex-col justify-start items-start gap-4 inline-flex">
                                <div className="self-stretch h-5 flex-col justify-start items-start flex">
                                    <div
                                        className="self-stretch text-black/80 text-[13px] font-bold uppercase leading-tight">THông
                                        tin người nhận ủy quyền
                                    </div>
                                </div>

                                <div className="w-full grid grid-cols-2 max-xl:grid-cols-1 gap-4">
                                    <div >
                                    <input
                                        type="text"
                                        placeholder="CCCD/ Hộ chiếu"
                                        className="w-full px-5 text-black/40 text-2xl font-bold placeholder:text-black/40 placeholder:text-2xl placeholder:font-bold  h-[72px] rounded-lg border border-[#e7e7e7] focus:outline-none" />
                                    </div><div>
                                        <input
                                        type="text"
                                        placeholder="Họ và tên"
                                        className="w-full px-5 text-black/40 text-2xl font-bold placeholder:text-black/40 placeholder:text-2xl placeholder:font-bold  h-[72px] rounded-lg border border-[#e7e7e7] focus:outline-none" />
                                </div><div>
                                        <input
                                        type="text"
                                        placeholder="Số điện thoại"
                                        className="w-full px-5 text-black/40 text-2xl font-bold placeholder:text-black/40 placeholder:text-2xl placeholder:font-bold  h-[72px] rounded-lg border border-[#e7e7e7] focus:outline-none" />
                                </div><div>
                                    <input
                                        type="text"
                                        placeholder="Số cổ phần Ủy quyền"
                                        className="w-full px-5 text-black/40 text-2xl font-bold placeholder:text-black/40 placeholder:text-2xl placeholder:font-bold  h-[72px] rounded-lg border border-[#e7e7e7] focus:outline-none" />
                                </div><div>
                                        <input
                                        type="text"
                                        placeholder="Email"
                                        className="w-full px-5 text-black/40 text-2xl font-bold placeholder:text-black/40 placeholder:text-2xl placeholder:font-bold  h-[72px] rounded-lg border border-[#e7e7e7] focus:outline-none" />
                                </div>
                                    <div className="w-full flex items-center max-xl:items-start gap-1"><span
                                        className="text-[#d80027] text-base font-medium  leading-normal">* </span><span
                                        className="text-black/60 text-base font-medium  leading-normal">Nếu thông tin sai, vui lòng đến Ủy ban chứng khoán để thay đổi thông tin</span>
                                    </div>
                                </div>
                            </div>
                    <div className="self-stretch p-3 bg-neutral-50 rounded-xl justify-start items-center gap-3 inline-flex  max-xl:flex-col">
                        <div className="max-xl:w-full pl-4 pr-6 py-3 bg-white rounded-lg shadow-[0px_0px_0px_1px_rgba(0,0,0,0.10)] justify-center max-xl:justify-start items-center flex overflow-hidden">
                            <label htmlFor="file" className="cursor-pointer flex" >
                            <div className="w-9 h-6 pr-3 flex-col justify-start items-start inline-flex">
                                    <img src="icons/upload.svg"/>
                            </div>
                            <div className="flex-col justify-start items-start inline-flex">
                                <div
                                    className="self-stretch text-[#074c31] text-base font-semibold  leading-normal">Giấy
                                    Đăng ký Kinh doanh
                                </div>
                            </div>
                            <input id="file" type="file" className="hidden"/>
                            </label>
                        </div>
                        <div
                            className="max-xl:w-full pl-4 pr-6 py-3 bg-white rounded-lg shadow-[0px_0px_0px_1px_rgba(0,0,0,0.10)] justify-center max-xl:justify-start items-center flex overflow-hidden">
                            <label htmlFor="file1" className="cursor-pointer flex">
                            <div className="w-9 h-6 pr-3 flex-col justify-start items-start inline-flex">
                                    <img src="icons/upload.svg"/>
                            </div>
                            <div className="flex-col justify-start items-start inline-flex">
                                <div
                                    className="self-stretch text-[#074c31] text-base font-semibold  leading-normal">Giấy
                                    Ủy quyền
                                </div>
                            </div>
                                <input id="file1" type="file" className="hidden"/></label>
                        </div>
                        <div
                            className="max-xl:w-full pl-4 pr-6 py-3 bg-white rounded-lg shadow-[0px_0px_0px_1px_rgba(0,0,0,0.10)] justify-center max-xl:justify-start items-center flex overflow-hidden">
                            <label htmlFor="file2" className="cursor-pointer flex">
                            <div className="w-9 h-6 pr-3 flex-col justify-start items-start inline-flex">
                                    <img src="icons/upload.svg"/>
                            </div>
                            <div className="flex-col justify-start items-start inline-flex">
                                <div
                                    className="self-stretch text-[#074c31] text-base font-semibold  leading-normal">CCCD/
                                    Hộ chiếu
                                </div>
                            </div>
                                <input id="file2" type="file" className="hidden"/>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="w-full justify-center items-start gap-4 inline-flex py-6">
                    <button className="btn btn-secondary min-w-[180px] border-[#ebebeb] btn-outline">
                       <span className="text-[#074c31]">Huỷ bỏ</span>
                    </button>
                    <button className="btn btn-primary min-w-[180px]">
                        <span  className="text-black/80">Ủy quyền</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AccreditForm;
