'use client';
import React from 'react'
const Menu = [
    {
        icon: 'icons/Home.svg',
        text: 'Trang chủ',
        link: '/Home'
    },{
        icon: 'icons/uq.svg',
        text: 'Ủy quyền',
        link: 'uy-quyen'
    },{
        icon: 'icons/Vote.svg',
        text: 'Biểu quyết và bầu cử',
        link: '#'
    },{
        icon: 'icons/question.svg',
        text: 'Gửi câu hỏi',
        link: '#'
    },{
        icon: 'icons/chart.svg',
        text: 'Xem kết quả',
        link: '#'
    },

];

const MobileMenu = ({goClick}:{goClick?: () => void}) => {
    return (
        <>
        <div className="h-screen w-full fixed bg-white text-5xl top-0 text-center bg-slate-300/50 -mb-20 z-[10]">
            <div className="h-[72px] w-full bg-white xl:shadow-[inset_0px_-1px_0px_0px_rgba(0,0,0,0.10)] z-[20] relative">
                <div className="container m-auto pt-3 pb-[11px]">
                    <div className="justify-between items-start flex max-xl:px-3">
                        <div className="h-[55.60px] flex-col justify-start items-start inline-flex">
                            <img className="h-10 relative" src="images/logo.svg" />
                        </div>
                            <div className="justify-start items-end flex" onClick={() => goClick?.()}>
                                <div className="w-12 h-12 p-3 bg-[#a1c038] mr-6 rounded-3xl justify-center items-center inline-flex">
                                    <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex overflow-hidden">
                                        <a href='#' className="w-6 h-6 flex-col justify-center items-center flex overflow-hidden">
                                            <img src='icons/logout.svg' className="w-6 h-6 relative  overflow-hidden" />
                                        </a>
                                    </div>
                                </div>
                                <div className="self-stretch justify-start items-center inline-flex">
                                    <img src='icons/close.svg' className="w-[25px] relative" />
                                </div>
                            </div>
                    </div>

                </div>
            </div>
            <div className='m_nav flex flex-col gap-2 pt-3'>
                {Menu.map(({ icon, text,link }) => (
                    <li
                        className={`group flex w-full font-medium px-10 bg-[#a1c03812]`}
                        key={text}
                    >
                        <a href={link} className="py-3.5 justify-start items-center gap-1 inline-flex" onClick={() => goClick?.()}>
                            <img src={icon} className="w-6 h-6 relative  overflow-hidden" />
                            <span className="text-black/80 text-base font-semibold leading-normal pl-1">{text}</span>
                        </a>
                    </li>
                ))}
            </div>
        </div>
        </>
  );
};

export default MobileMenu;
