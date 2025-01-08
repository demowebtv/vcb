'use client';
import Link from 'next/link'
import React from 'react';
const DataTable = [
    {
        name: 'Trần văn A',
        number: '4000',
        phone: '0989.888.888',
        email: 'tranvana@gmail.com',
        date: '01/10/2024',
        status: 'chờ phê duyệt'
    },
    {
        name: 'Trần văn A',
        number: '4000',
        phone: '0989.888.888',
        email: 'tranvana@gmail.com',
        date: '01/10/2024',
        status: 'Thành công'
    },
    {
        name: 'Trần văn A',
        number: '4000',
        phone: '0989.888.888',
        email: 'tranvana@gmail.com',
        date: '01/10/2024',
        status: 'Thành công'
    },
    {
        name: 'Trần văn A',
        number: '4000',
        phone: '0989.888.888',
        email: 'tranvana@gmail.com',
        date: '01/10/2024',
        status: 'Thành công'
    },
    {
        name: 'Trần văn A',
        number: '4000',
        phone: '0989.888.888',
        email: 'tranvana@gmail.com',
        date: '01/10/2024',
        status: 'Từ chối'
    },
    {
        name: 'Trần văn A',
        number: '4000',
        phone: '0989.888.888',
        email: 'tranvana@gmail.com',
        date: '01/10/2024',
        status: 'chờ phê duyệt'
    },

];
const AccreditClient = () => {
    return (
        <div className="relative min-h-[calc(100vh_-_150px)] h-auto z-[0] pt-[24px]">
            <div className="container mx-auto w-full max-xl:px-3">
                <div className="max-xl:p-4 max-xl:bg-gradient-to-l max-xl:from-[#eaf6ff] max-xl:to-[#f3ffe9] max-xl:rounded-xl w-full flex-col justify-start items-start gap-3 inline-flex">
                    <div className="text-black/80 text-[32px] max-xl:text-2xl font-extrabold ">Uỷ quyền</div>
                    <div className="justify-start items-start gap-3 inline-flex">
                            <p className="text-black/80 text-base font-bold leading-normal">Số cổ phần được ủy quyền</p>
                            <p className="text-[#065c44] text-base font-semibold  leading-normal">400.000</p>
                    </div>
                    <div className="max-xl:flex hidden w-full justify- items-center gap-4 ">
                        <button className="btn btn-secondary px-5 border-black/10 max-xl:w-[48%]">
                            <div className="text-center text-[#074c31] text-base font-semibold  leading-normal">Hủy ủy quyền</div>
                        </button>
                        <Link href="/them-uy-quyen" className="btn btn-primary px-5 max-xl:w-[48%]">
                            <div className="grow shrink basis-0 text-center text-black/80 text-base font-semibold  leading-normal">Thêm mới</div>
                        </Link>
                    </div>
                </div>
                {/*Table*/}
                <div className="table-custom-style mt-6 w-full flex-col justify-start items-start gap-4 inline-flex">
                    <div className="w-full justify-between items-center inline-flex">
                        <div className="pr-4 py-3 justify-start items-start gap-4 flex">
                            <button className="btn btn-primary px-4 py-2 bg-[#a1c038] rounded-[100px] justify-start items-start flex">
                                <span className="text-black/80 text-xl font-medium  leading-[30px]">Ủy quyền</span>
                            </button>
                            <button className="btn btn-accent px-4 py-2 bg-[#f6f6f6] rounded-[100px] justify-start items-start flex">
                                <div className="text-black/80 text-xl font-medium  leading-[30px]">Được ủy quyền</div>
                            </button>
                        </div>
                        <div className="max-xl:hidden w-auto self-stretch justify-end items-center gap-4 flex">
                            <button className="btn btn-secondary px-5 border-black/10 ">
                                    <div className="text-center text-[#074c31] text-base font-semibold  leading-normal">Hủy ủy quyền</div>
                            </button>
                            <Link href="/them-uy-quyen" className="btn btn-primary px-5">
                                    <div className="grow shrink basis-0 text-center text-black/80 text-base font-semibold  leading-normal">Thêm mới</div>
                            </Link>
                        </div>
                    </div>
                    <div className="table-wrapper">
                        <table className="table-responsive">
                            <thead className="table-header">
                            <tr>
                                <th className="col-1-1">
                                    <span>STT</span>
                                </th>
                                <th className="col-1-3">Người được uỷ quyền</th>
                                <th className="col-1-3">
                                    <span className="d-mobile-none">Số cổ phần uỷ quyền</span>
                                    <span className="d-desktop-none">Cổ phần uỷ quyền</span>
                                </th>
                                <th className="col-1-3 d-mobile-none">
                                    <span className="d-mobile-none">Số điện thoại</span>
                                    <span className="d-desktop-none">Điện thoại</span>
                                </th>
                                <th className="col-1-5 d-mobile-none">
                                    <span className="d-mobile-none">Email</span>
                                </th>
                                <th className="col-1-3 d-mobile-none">
                                    <span className="d-mobile-none">Ngày cập nhật</span>
                                </th>
                                <th className="col-1-5">
                                    <span>Trạng thái</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody>

                                {DataTable.map(({ name, number,phone,email,date,status },index) => (
                                    <tr key={index}>
                                        <td className="col-1-1 text-black/80"><label className="cursor-pointer label justify-center">
                                            <input type="checkbox"
                                                   className="checkbox checkbox-primary"/>
                                            <span className="pl-3">{index+1}</span>
                                        </label></td>
                                        <td className="col-1-3 text-black/80">{name}</td>
                                        <td className="col-1-3 text-black/80">{number}</td>
                                        <td className="col-2-3 text-black/80 d-mobile-none">{phone}</td>
                                        <td className="col-2-3 text-black/80 d-mobile-none">{email}</td>
                                        <td className="col-1-3 text-black/80 d-mobile-none">{date}</td>
                                        <td className="col-1-5 text-black/80"><span className={`${status =='chờ phê duyệt'?'text-[#ffcc00]':(status =='Thành công'?'text-[#85b94d]':'text-[#cc0000]')} break-words`}>{status}</span></td>
                                    </tr>
                                ))}


                            </tbody>
                        </table>
                    </div>
                </div>
                {/*End table*/}
                {/*Pagination*/}
                <div className="my-12 w-full h-12 justify-center items-center gap-2.5 inline-flex">
                    <div className="max-xl:hidden grow shrink basis-0 h-3.5 justify-start items-center flex">
                        <div className="grow shrink basis-0 h-[0px] bg-white border border-black/20"></div>
                        <div className="w-[5px] flex-col justify-start items-start inline-flex">
                            <img src="icons/pre.svg" className="w-[5px] h-3.5 relative" />
                        </div>
                    </div>
                    <div className="justify-start items-center gap-3 flex">
                        <button className="px-4 py-3 bg-white rounded-lg shadow-[0px_0px_0px_1px_rgba(0,0,0,0.10)] justify-center items-center gap-2 flex overflow-hidden">
                            <img src="icons/arrow-l.svg" className="w-[7.15px] h-5 relative origin-top-left" />
                            <div className=" max-xl:hidden text-center text-[#074c31] text-base font-semibold  leading-normal">Trang trước</div>
                        </button>
                        <p className="btn btn-primary">
                            1
                        </p>
                        <p className="btn btn-primary btn-outline text-[#074c31]">
                            2
                        </p>
                        <p className="btn btn-primary btn-outline text-[#074c31]">
                            ...
                        </p>
                        <p className="btn btn-primary btn-outline text-[#074c31]">
                            5
                        </p>
                        <p className="btn btn-primary btn-outline text-[#074c31]">
                            6
                        </p>
                        <button className="px-4 py-3 bg-white rounded-lg shadow-[0px_0px_0px_1px_rgba(0,0,0,0.10)] justify-center items-center gap-2 flex overflow-hidden">
                            <div className="max-xl:hidden text-center text-[#074c31] text-base font-semibold  leading-normal">Trang sau</div>
                            <img src="icons/arrow-r.svg" className="w-[7.15px] h-5 relative" />
                        </button>
                    </div>
                    <div className="max-xl:hidden grow shrink basis-0 h-3.5 justify-start items-center flex">
                        <div className="w-[5px] flex-col justify-start items-start inline-flex">
                            <img src="icons/next.svg" className="w-[5px] h-3.5 relative" />
                        </div>
                        <div className="grow shrink basis-0 h-[0px] bg-white border border-black/20"></div>
                    </div>
                </div>
                {/*End Pagination*/}
            </div>
        </div>
    );
};

export default AccreditClient;
