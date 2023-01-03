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
                <div className='lg:hidden'>
                    <ShowAllButton/>
                </div>
                <div className='my-3 lg:flex lg:flex-row justify-center sm:hidden md:hidden'>
                    <div>
                        <CountryButton CountryName="View All"/>
                    </div>
                    <div>
                        <CountryButton CountryName="Iraq"/>
                    </div>
                    <div>
                        <CountryButton CountryName="Turkey"/>
                    </div>
                    <div>
                        <CountryButton CountryName="Lebanon"/>
                    </div>
                    

                </div>
            </div>
            <div className='flex flex-wrap justify-center px-16 lg:mb-10'>
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
            <div className='mb-3 lg:hidden'>
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