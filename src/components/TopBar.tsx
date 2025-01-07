'use client';
import React, { useState } from 'react'
import MobileMenu from './MobileMenu';
const Menu = [
    {
        icon: 'icons/Home.svg',
        text: 'Trang chủ',
    },{
        icon: 'icons/uq.svg',
        text: 'Ủy quyền',
    },{
        icon: 'icons/Vote.svg',
        text: 'Biểu quyết và bầu cử',
    },{
        icon: 'icons/question.svg',
        text: 'Gửi câu hỏi',
    },{
        icon: 'icons/chart.svg',
        text: 'Xem kết quả',
    },

];
const TopBar = ({ isLogin }: {isLogin: boolean}) => {
    const [isShowMenu, setIsShowMenu] = useState<boolean>(false)
    const handleClickMobile=()=>{
        setIsShowMenu(!isShowMenu)
    }
    return (
      (isLogin? (
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
      </div>) :(
          <>
          <div className="h-[72px] w-full bg-white xl:shadow-[inset_0px_-1px_0px_0px_rgba(0,0,0,0.10)]">
              <div className="container m-auto pt-3 pb-[11px]">
                  <div className="justify-between items-start flex max-xl:px-10">
                      <div className="h-[55.60px] flex-col justify-start items-start inline-flex">
                         <img className="h-10 relative" src="images/logo.svg" />
                      </div>
                      <div className="max-xl:hidden flex-col justify-center items-end inline-flex">
                          <div className="justify-start items-start inline-flex">
                              {Menu.map(({ icon, text }) => (
                              <div className="self-stretch pr-6 group" key={text}>
                                  <a href="#" className="flex-col justify-start items-start flex">
                                      <p className="py-3.5 justify-start items-center gap-1 inline-flex">
                                          <img src={icon} className="w-6 h-6 relative  overflow-hidden" />
                                          <span className="text-black/80 text-base font-semibold leading-normal">{text}</span>
                                      </p>
                                      <p className={`h-[5px] w-full relative bg-[#85b94d] rounded-sm ${text==='Trang chủ'?'visible':'invisible'} group-hover:visible`} />
                                  </a>
                              </div>
                              ))}
                          </div>
                      </div>
                      <div className="max-xl:hidden py-[3.80px] justify-start items-center gap-4 flex">
                          <div className="self-stretch flex-col justify-start items-start inline-flex">
                              <div className="h-12 py-3 rounded-xl justify-center items-center inline-flex overflow-hidden">
                                  <div className="w-6 h-6 relative">
                                      <div className="w-6 h-6 left-0 top-0 absolute bg-[#22703f] rounded-full" />
                                      <img src="icons/profile.svg" className="w-[15.20px] h-[19.20px] left-[4.80px] top-[2.40px] absolute  overflow-hidden" />
                                  </div>
                                  <div className="pl-2 flex-col justify-start items-start inline-flex">
                                          <p className="text-center text-black text-sm font-semibold leading-tight">Nguyễn The Tung</p>
                                  </div>
                                  <div className="w-1 h-12" />
                              </div>
                          </div>
                          <div className="self-stretch flex-col justify-center items-start inline-flex">
                              <div className="h-12 py-3 rounded-xl justify-center items-center inline-flex overflow-hidden">
                                  <div className="flex-col justify-start items-center inline-flex">
                                      <div className="h-6 justify-center items-center inline-flex">
                                          <a href={'#'} className="w-6 h-6 relative">
                                              <img src='icons/en.svg' className="w-6 h-6 left-0 top-0 absolute" />
                                          </a>
                                      </div>
                                  </div>
                                  <div className="pl-2 flex-col justify-start items-start inline-flex">
                                      <a href={'#'} className="flex-col justify-start items-center flex">
                                          <span className="text-center text-black text-sm font-semibold leading-tight">English</span>
                                      </a>
                                  </div>
                                  <div className="w-1 h-12" />
                              </div>
                          </div>
                          <div className="self-stretch flex-col justify-center items-start inline-flex">
                              <div className="flex-col justify-start items-start flex">
                                  <div className="h-12 py-3 rounded-xl justify-center items-center inline-flex overflow-hidden">
                                      <div className="flex-col justify-start items-center inline-flex">
                                          <div className="h-6 justify-center items-center inline-flex">
                                              <div className="w-6 h-6 relative">
                                                  <img src="icons/logout.svg" className="w-5 h-[20.84px] left-[1.86px] top-[1.16px] absolute" />
                                              </div>
                                          </div>
                                      </div>
                                      <div className="pl-2 flex-col justify-start items-start inline-flex">
                                          <a href={'#'} className="flex-col justify-start items-center flex">
                                              <span className="text-center text-black text-sm font-semibold  leading-tight">Đăng xuất</span>
                                          </a>
                                      </div>
                                      <div className="w-1 h-12" />
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="xl:hidden">
                          <div className="justify-start items-end flex" onClick={() => handleClickMobile()}>
                              <div className="w-12 h-12 p-3 bg-[#a1c038] mr-6 rounded-3xl justify-center items-center inline-flex">
                                  <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex overflow-hidden">
                                      <a href='#' className="w-6 h-6 flex-col justify-center items-center flex overflow-hidden">
                                          <img src='icons/mlogin.svg' className="w-6 h-6 relative  overflow-hidden" />
                                      </a>
                                  </div>
                              </div>
                              <div className="self-stretch justify-start items-center inline-flex">
                                  <img src='icons/bar.svg' className="w-[22.01px] h-[17.60px] relative" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
              {isShowMenu && <MobileMenu goClick={handleClickMobile} />}
          </>
          ))
  );
};

export default TopBar;
