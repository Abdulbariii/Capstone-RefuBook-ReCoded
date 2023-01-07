import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { NavbarAvatar } from "./NavSvg"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

export default function Navbar() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const [user, loading] = useAuthState(auth);

  return (
    <section className='z-[100px] '>

      <div className="lg:hidden absolute top-0 right-0 left-0 flex  items-center cursor-pointer px-8 pt-8">
        <svg className="cursor-pointer " onClick={() => { setBurgerStatus(true) }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.288288 6.72414C0.192192 6.61686 0.12012 6.50575 0.0720721 6.3908C0.0240238 6.27586 0 6.14176 0 5.98851C0 5.85057 0.0240238 5.72031 0.0720721 5.5977C0.12012 5.4751 0.192192 5.36782 0.288288 5.27586C0.384385 5.18391 0.496496 5.11494 0.624625 5.06897C0.752753 5.02299 0.888888 5 1.03303 5H22.967C23.1111 5 23.2472 5.02299 23.3754 5.06897C23.5035 5.11494 23.6156 5.18391 23.7117 5.27586C23.8078 5.36782 23.8799 5.4751 23.9279 5.5977C23.976 5.72031 24 5.85057 24 5.98851C24 6.14176 23.976 6.27586 23.9279 6.3908C23.8799 6.50575 23.8078 6.61686 23.7117 6.72414C23.6156 6.81609 23.5035 6.88506 23.3754 6.93103C23.2472 6.97701 23.1111 7 22.967 7H1.03303C0.888888 7 0.752753 6.97701 0.624625 6.93103C0.496496 6.88506 0.384385 6.81609 0.288288 6.72414ZM0.288288 12.7241C0.192192 12.6169 0.12012 12.5057 0.0720721 12.3908C0.0240238 12.2759 0 12.1418 0 11.9885C0 11.8506 0.0240238 11.7203 0.0720721 11.5977C0.12012 11.4751 0.192192 11.3678 0.288288 11.2759C0.384385 11.1839 0.496496 11.1149 0.624625 11.069C0.752753 11.023 0.888888 11 1.03303 11H22.967C23.1111 11 23.2472 11.023 23.3754 11.069C23.5035 11.1149 23.6156 11.1839 23.7117 11.2759C23.8078 11.3678 23.8799 11.4751 23.9279 11.5977C23.976 11.7203 24 11.8506 24 11.9885C24 12.1418 23.976 12.2759 23.9279 12.3908C23.8799 12.5057 23.8078 12.6169 23.7117 12.7241C23.6156 12.8161 23.5035 12.8851 23.3754 12.931C23.2472 12.977 23.1111 13 22.967 13H1.03303C0.888888 13 0.752753 12.977 0.624625 12.931C0.496496 12.8851 0.384385 12.8161 0.288288 12.7241ZM0.0720721 18.3908C0.12012 18.5057 0.192192 18.6169 0.288288 18.7241C0.384385 18.8161 0.496496 18.8851 0.624625 18.931C0.752753 18.977 0.888888 19 1.03303 19H22.967C23.1111 19 23.2472 18.977 23.3754 18.931C23.5035 18.8851 23.6156 18.8161 23.7117 18.7241C23.8078 18.6169 23.8799 18.5057 23.9279 18.3908C23.976 18.2759 24 18.1418 24 17.9885C24 17.8506 23.976 17.7203 23.9279 17.5977C23.8799 17.4751 23.8078 17.3678 23.7117 17.2759C23.6156 17.1839 23.5035 17.1149 23.3754 17.069C23.2472 17.023 23.1111 17 22.967 17H1.03303C0.888888 17 0.752753 17.023 0.624625 17.069C0.496496 17.1149 0.384385 17.1839 0.288288 17.2759C0.192192 17.3678 0.12012 17.4751 0.0720721 17.5977C0.0240238 17.7203 0 17.8506 0 17.9885C0 18.1418 0.0240238 18.2759 0.0720721 18.3908Z" fill="#4699C2" />
        </svg>

      </div>

      <div className={`${burgerStatus ? 'lg:transform-none translate-x-0' : 'lg:transform-none -translate-x-full'} lg:w-auto w-[60%] lg:absolute lg:bottom-auto lg:right-0  fixed  z-[100] top-0 left-0 bottom-0 lg:flex lg:justify-between lg:items-center lg:rounded-none rounded-3xl lg:bg-transparent bg-white  font-sans lg:py-8 lg:px-24  p-6`}>

        <div className="text-[#026FC2] lg:flex items-center justify-center hidden">
          <p className="text-[#4699C2] text-base leading-[18.75px] lg:text-xl lg:leading-[23.44px] font-bold mr-3 ml-1.5 ">
            Refubook
          </p>
        </div>

        <div className='lg:hidden flex justify-start cursor-pointer'>
          <svg onClick={() => { setBurgerStatus(false) }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M22.5918 13.0851H4.879L10.1989 18.1371C10.467 18.3917 10.6176 18.737 10.6176 19.097C10.6176 19.4571 10.467 19.8024 10.1989 20.057C9.93089 20.3115 9.56741 20.4545 9.18841 20.4545C8.8094 20.4545 8.44593 20.3115 8.17795 20.057L0.418247 12.6869C-0.139416 12.1564 -0.139416 11.2972 0.418247 10.7668L8.17795 3.3976C8.45712 3.13243 8.82237 3 9.18856 3C9.55476 3 9.92064 3.13213 10.1992 3.3973C10.4673 3.65184 10.6179 3.99715 10.6179 4.35721C10.6179 4.71727 10.4673 5.06257 10.1992 5.31712L4.879 10.3698H22.5918C23.3729 10.3808 24 10.9854 24 11.7274C24 12.4694 23.3729 13.074 22.5918 13.0851Z" fill="#4699C2" />
          </svg>
        </div>



        {/* <div className=" text-[#9DAFBD] font-normal  flex flex-col gap-20 items-center  text-xs lg:text-lg leading-[14.06px] lg:leading-4 tracking-[-0.5px]"> */}
        <div className='flex flex-col items-center gap-20 '>
          <div className='lg:hidden block mt-6'>
            <NavbarAvatar />
            <p className='font-sans text-base font-medium text-[#3F3B3B] mt-1'>Svyatoslav Taushev</p>
          </div>
          <div className='text-[#9DAFBD] font-normal lg:w-full w-[124px] flex lg:flex-row flex-col lg:justify-end items-center  justify-between lg:gap-12 gap-10 text-lg  leading-[14.06px] lg:leading-4 tracking-[-0.5px]'>
            {!user && (
              <NavLink
                onClick={() => { setBurgerStatus(false); }}
                className={({ isActive }) =>
                  isActive ? `  font-bold text-[#4699C2] ` : ` `
                }
                to="/"
              >
                Home
              </NavLink>)}
            {user && (
              <NavLink
                onClick={() => { setBurgerStatus(false); }}
                className={({ isActive }) =>
                  isActive ? `  font-bold text-[#4699C2] ` : ` `
                }
                to="/profile"
              >
                Home
              </NavLink>)}


            <NavLink
              onClick={() => { setBurgerStatus(false); }}
              className={({ isActive }) =>
                isActive ? ` font-bold text-[#4699C2] ` : ` `
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              onClick={() => { setBurgerStatus(false); }}
              className={({ isActive }) =>
                isActive ? `  font-bold text-[#4699C2] ` : ` `
              }
              to="/blog"
            >
              Blog
            </NavLink>
            <NavLink
              onClick={() => { setBurgerStatus(false); }}
              className={({ isActive }) =>
                isActive ? ' font-bold text-[#4699C2] ' : ' '
              }
              to="/contact"
            >
              Contact
            </NavLink>
            <div className='hidden lg:block '>
              <NavLink
                onClick={() => { setBurgerStatus(false); }}
                className={({ isActive }) =>
                  isActive ? ` underline text-[#4699C2] ` : ` `
                }
                to="/signup"
              >
                <button
                  type="button"
                  className="inline-block   px-7 py-1.5  bg-[#4699C2] text-white font-bold text-sm rounded-[50px] shadow-md hover:bg-[#026FC2] hover:shadow-lg focus:bg-[#026FC2] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#026FC2] active:shadow-lg transition duration-150 ease-in-out"
                >
                  Sign up
                </button>
              </NavLink></div>
          </div> </div>
      </div>
    </section>
  );
}
