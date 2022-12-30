import React from 'react'

import { NavLink } from 'react-router-dom';

function About() {
    return (
        <section className='m-auto  font-["Fira Sans"]  lg:px-40 px-14  py-10  flex flex-col gap-6 items-center text-center  '>
            <div className=''>
                <p className='text-[1.75rem] text-center font-medium text-[#4699C2] '>About</p>
            </div>
            <div>
                <p className='text-sm font-normal text-[#3F3B3B] lg:w-[39.835rem] w-[23.563rem]  ' >In quo quaerimus, non emolumento aliquo, sed ipsius honestatis decore laudandis, id est et quas molestias excepturi sint, obcaecati cupiditate non numquam eius modi tempora incidunt, ut earum rerum hic tenetur a natura ipsa natura incorrupte atque integre iudicante itaque aiunt hanc quasi involuta aperiri.</p>
            </div>

            <div>
                <NavLink to="/about">
                    <button
                        type="button"
                        className="px-7 py-2 mt-5 bg-[#4699C2] text-white font-bold lg:text-lg text-sm rounded-[50px] shadow-md hover:bg-[#026FC2] hover:shadow-lg focus:bg-[#026FC2] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#026FC2] active:shadow-lg transition duration-150 ease-in-out" >
                        Learn more
                    </button></NavLink></div>



        </section>
    )
}

export default About