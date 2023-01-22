import React from 'react';
import ProfileAccs from '../components/community/ProfileAccs';

export default function Community() {
  return (
    <div className="min-h-screen  flex justify-start flex-col items-start gap-11 py-32 px-2 lg:px-20">
      <div className="fixed z-[-10]  lg:top-0 left-0 bottom-0 lg:right-auto right-0 lg:w-[50%] w-full lg:h-full h-[40%] bg-[#e5faff]  rounded-t-[50%]  lg:rounded-l-[24px]  lg:rounded-r-full  " />
      <h1 className="text-[#025594] text-5xl font-bold mt-10 my-3">
        Meet our community
      </h1>

      <ProfileAccs />
    </div>
  );
}
