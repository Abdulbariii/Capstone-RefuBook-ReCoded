import React from 'react'

export default function Form() {
  return (
    <form className='flex flex-col w-4/6'>
        <h2 className='text-left text-[#4699C2] font-bold py-2'>Name: </h2>
        <div className='border border-gray-300 rounded-md'>
            <input type='text' className='opacity-0 w-full py-2'/>
        </div>

        <h2 className='text-left text-[#4699C2] font-bold py-2'>Surname: </h2>
        <div className='border border-gray-300 rounded-md'>
            <input type='text' className='opacity-0 w-full py-2'/>
        </div>

        <h2 className='text-left text-[#4699C2] font-bold py-2'>Biograhpy: </h2>
        <div className='border border-gray-300 rounded-md'>
            <textarea required className='opacity-0 w-full py-4'>
            testing
            </textarea>
        </div>

        <h2 className='text-left text-[#4699C2] font-bold py-2'>Location: </h2>
        <div className='border border-gray-300 rounded-md'>
            <input className='opacity-0 w-full py-2'/>
        </div>

        <div className='flex flex-row justify-around py-4'>
            <input type='submit' value='SAVE' className='bg-[#4699C2] hover:bg-blue-700 text-white fong-bold w-24 py-3 rounded-full'/>
            <input type='reset' value='CANCEL' className='bg-[#4699C2] hover:bg-blue-700 text-white fong-bold w-24 py-3 rounded-full'/>
        </div>
    </form>
  )
}