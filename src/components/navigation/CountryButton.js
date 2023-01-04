import React from 'react'

export default function ShowAllButton({CountryName}) {
  return (
    <button
        type="button"
        className="inline-block mb-6 w-32 py-1.5  bg-[#BDBDBD] lg:bg-[#EAFBFF] text-white lg:text-[#025594] font-bold text-sm rounded-[50px] lg:shadow-none shadow-md hover:bg-[#026FC2] lg:hover:text-white hover:shadow-lg focus:bg-[#026FC2] focus:shadow-lg focus:outline-none lg:focus:text-white focus:ring-0 active:bg-[#026FC2] active:shadow-lg transition duration-150 ease-in-out">
        {CountryName}
    </button>
  )
}