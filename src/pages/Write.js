import React, { useState } from 'react';
import WriteForm from '../components/write/WriteForm';
import Notification from '../components/contact/Notification';

export default function Write({ user }) {
  const [blogPosted, setBlogPosted] = useState(false);
  const [blogPending, setBlogPending] = useState(false);

  return (
    <div className=" flex flex-col justify-center  items-center min-h-screen">
      {blogPending ? <Notification name="blog" state="pending" /> : null}
      {blogPosted ? <Notification name="blog" state="sent" /> : null}
      <div className="font-sans font-normal  mb-20 mt-20    lg:text-left text-center ">
        <p className="  lg:text-[3.375rem] text-[#4699C2] text-[1.015rem] lg:tracking-[-1] tracking-[-0.3] mb-4">
          Post blogs in here
        </p>
        <p className="lg:text-lg text-sm tracking-tighter lg:w-[25rem] w-[16.25rem] lg:m-0 m-auto pb-4 ">
          Home is behind, the world ahead and there are many paths to tread
          through shadows to the edge.
        </p>
      </div>

      <WriteForm
        user={user && user}
        setBlogPending={setBlogPending}
        setBlogPosted={setBlogPosted}
      />
    </div>
  );
}
