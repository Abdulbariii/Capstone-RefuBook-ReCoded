import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <section className=" absolute top-0 left-0 right-0 font-sans m-auto flex justify-between items-center  p-9 lg:px-40 px-14 ">
      <div className="text-[#026FC2] flex items-center justify-center">
        <svg
          className="lg:w-[25px] w-[16px]"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4028 12.1722C17.4028 10.2515 18.9627 8.69446 20.8834 8.69446C22.8041 8.69446 24.3639 10.2515 24.3639 12.1722C24.3639 14.093 22.8041 15.65 20.8834 15.65C18.9627 15.65 17.4028 14.093 17.4028 12.1722Z"
            fill="#026FC2"
          />
          <path
            d="M0 12.1722C0 10.2515 1.55983 8.69446 3.48056 8.69446C5.40128 8.69446 6.96111 10.2515 6.96111 12.1722C6.96111 14.093 5.40128 15.65 3.48056 15.65C1.55983 15.65 0 14.093 0 12.1722Z"
            fill="#026FC2"
          />
          <path
            d="M8.70142 20.8667C8.70142 18.946 10.2612 17.3889 12.182 17.3889C14.1027 17.3889 15.6625 18.946 15.6625 20.8667C15.6625 22.7874 14.1027 24.3445 12.182 24.3445C10.2612 24.3445 8.70142 22.7874 8.70142 20.8667Z"
            fill="#21567E"
          />
          <path
            d="M8.70142 3.47778C8.70142 1.55705 10.2612 0 12.182 0C14.1027 0 15.6625 1.55705 15.6625 3.47778C15.6625 5.3985 14.1027 6.95556 12.182 6.95556C10.2612 6.95556 8.70142 5.3985 8.70142 3.47778Z"
            fill="#21567E"
          />
        </svg>
        <p className="text-[#4699C2] text-base leading-[18.75px] lg:text-xl lg:leading-[23.44px] font-bold mr-3 ml-1.5 ">
          Refubook
        </p>
      </div>

      <div className="text-[#9DAFBD] font-normal flex justify-end items-center flex-1  lg:gap-12  gap-4   text-xs lg:text-sm leading-[14.06px] lg:leading-4 tracking-[-0.5px]">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/signup" className="hidden lg:block">
          <button
            type="button"
            className="inline-block   px-7 py-1.5  bg-[#4699C2] text-white font-bold text-sm rounded-[50px] shadow-md hover:bg-[#026FC2] hover:shadow-lg focus:bg-[#026FC2] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#026FC2] active:shadow-lg transition duration-150 ease-in-out"
          >
            Sign up
          </button>
        </NavLink>
      </div>
    </section>
  );
}
