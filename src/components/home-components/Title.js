import React from 'react'

import { NavLink } from 'react-router-dom';

import { ImageTitle } from "../../assets/images/Image"

function Title() {
  return (
    <section className=" lg:px-24 px-14 lg:py-40 py-24 flex lg:flex-row flex-col-reverse justify-between items-center lg:border-r-4 lg:border-b-4 lg:border-[#70cdd6]  ">
      <div className="flex flex-col lg:gap-5 lg:text-left text-center ">
        <p className="font-sans lg:text-7xl text-4xl font-black  tracking-normal text-[#4699C2] lg:leading-[84.38px] leading-10 mt-6 lg:mt-0">
          Refubook
        </p>
        <p className="font-sans font-medium lg:text-6xl text-2xl leading-[65px] text-[#FC8476] w-[15.25rem]  lg:m-0 m-auto ">
          Express Freely
        </p>
        <p className="font-sans lg:text-base text-sm font-light tracking-normal lg:leading-5 leading-4 lg:w-[22.625rem] w-[16.265rem] ">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
        <div>
          <NavLink to="/signup">
            <button
              type="button"
              className="px-11 py-1.5   mt-5 bg-[#4699C2] text-white font-bold lg:text-lg text-base rounded-[50px] shadow-md hover:bg-[#026FC2] hover:shadow-lg focus:bg-[#026FC2] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#026FC2] active:shadow-lg transition duration-150 ease-in-out" >
              Sign up
            </button>
          </NavLink>
        </div>

      </div>
      <div>
        <ImageTitle />
      </div>
    </section>
  )
}

export default Title


