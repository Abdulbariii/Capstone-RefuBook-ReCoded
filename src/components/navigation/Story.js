import React from 'react';

export default function Story() {
  return (
    <div className='flex flex-col flex-nowrap justify-center align-center bg-white'>
        <div className=''>
          <h1 className='mt-8 text-5xl md:mt-2 mb-8 text-blue-700 font-bold'>Our Story</h1>
        </div>
        <div className='mx-16 md:mx-72  mb-16'>
          <p className='text-xl'>
            It is a long established fact that a reader will 
            be distracted by the readable content of a page when 
            looking at its layout. The point of using Lorem Ipsum 
            is that it has a more-or-less normal distribution 
            of letters, as opposed to using Content here, content here, 
            making it look like readable English.
          </p>
        </div>
    </div>
  )
}