/* eslint-disable no-unused-vars */
import React from 'react';

import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Refugee from '../../assets/images/Refugee.jpg';

function Title() {
  const { t, i18n } = useTranslation('common');
  return (
    <section className=" lg:px-28 px-14 lg:py-40 py-24 flex lg:flex-row flex-col-reverse justify-between items-center lg:border-r-4 lg:border-b-4 lg:border-[#70cdd6]  ">
      <div className="flex flex-col lg:gap-5 lg:text-left text-center ">
        <p className="font-sans lg:text-7xl text-4xl font-black  tracking-normal text-[#4699C2] lg:leading-[84.38px] leading-10 mt-6 lg:mt-0">
          {t('refubook')}
        </p>
        <p className="font-sans font-medium lg:text-6xl text-2xl leading-[65px] text-[#FC8476] w-[15.25rem]  lg:m-0 m-auto ">
          {t(`Rebuilding Futures`)}
        </p>
        <p className="font-sans lg:text-base text-sm  font-light tracking-normal lg:leading-5 leading-4 lg:w-[22.625rem] w-[16.265rem] ">
          {t('RefugeesFleeWar')}
        </p>
        <div>
          <NavLink to="/signup">
            <button
              type="button"
              className="px-11 py-1.5   mt-5 bg-[#4699C2] text-white font-bold lg:text-lg text-base rounded-[50px] shadow-md hover:bg-[#026FC2] hover:shadow-lg focus:bg-[#026FC2] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#026FC2] active:shadow-lg transition duration-150 ease-in-out"
            >
              {t('signup')}
            </button>
          </NavLink>
        </div>
      </div>
      <div>
        <img src={Refugee} alt="" className="lg:ml-32 lg:w-[700px] " />
      </div>
    </section>
  );
}

export default Title;
