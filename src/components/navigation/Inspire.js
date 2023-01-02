import React from 'react'
import Inspireimg from './Inspireimg'

export default function Inspire() {
  return (
    <div className='flex flex-col flex-nowrap justify-center py-16 border-4'>
        <div className='pb-10'>
          <Inspireimg/>
        </div>
        <div>
          <h1 className='text-[#026FC2] text-4xl pb-10 mx-10'>
            Share your story, help others and get help from others
          </h1>
        </div>
        <div className='mx-16 lg:mx-96 text-[#9DAFBD] mb-5'>
          <p>
          But Brooke Chaffin and Catherine Connors are looking
          to change that with the introduction of Maverick, 
          a social network that connects young girls with female 
          mentors to express their creativity in a safe space.
          </p>
        </div>
        <div>
        <button
              type="button"
              className="inline-block   px-7 py-1.5  bg-[#4699C2] text-white font-bold text-sm rounded-[50px] shadow-md hover:bg-[#026FC2] hover:shadow-lg focus:bg-[#026FC2] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#026FC2] active:shadow-lg transition duration-150 ease-in-out">
              Sign up
        </button>
        </div>
    </div>
  )
}