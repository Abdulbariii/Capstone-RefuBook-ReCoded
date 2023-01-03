import React from 'react'
import ShowAllButton from './ShowAllButton';
import CountryButton from './CountryButton';
import Members from './Members'

const Team = () => {
    return (
        <div className='flex flex-col flex-nowrap bg-[#EAFBFF]'>
            <div className='flex flex-col flex-nowrap justify-around'>
                <div>
                    <h1 className='text-[#025594] text-5xl font-bold mt-10 my-3'>Our Team</h1>
                </div>
                <div className='my-3'>
                    <ShowAllButton/>
                </div>
            </div>
            <div className='flex flex-wrap px-16 '>
                <div>
                    <Members/>
                </div>
                <div>
                    <Members/>
                </div>
                <div>
                    <Members/>
                </div>
                <div>
                    <Members/>
                </div>
                <div>
                    <Members/>
                </div>
                <div>
                    <Members/>
                </div>
                
                
            </div>
            <div className='mb-3'>
                <div>
                    <CountryButton className='text-4xl' CountryName="Iraq"/>
                </div>
                <div>
                    <CountryButton CountryName="Turkey"/>
                </div>
                <div>
                    <CountryButton CountryName="Lebanon"/>
                </div>
            </div>
        </div>
    );
}

export default Team;