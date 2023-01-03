import React from 'react'

export default function ShowAllButton({CountryName}) {
  return (
    <button
        type="button"
        className="inline-block mb-6 px-7 py-1.5  bg-[#BDBDBD] text-white font-bold text-sm rounded-[50px] shadow-md hover:bg-[#026FC2] hover:shadow-lg focus:bg-[#026FC2] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#026FC2] active:shadow-lg transition duration-150 ease-in-out">
        {CountryName}
    </button>
  )
}