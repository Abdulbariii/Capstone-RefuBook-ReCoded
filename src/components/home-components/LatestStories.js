import React from 'react';

import StoryImg1 from '../../assets/images/girl.jpg';
import StoryImg2 from '../../assets/images/Allia.jpg';

function LatestStories() {
  const latestStories = [
    {
      id: 1,
      language: 'Language',
      story:
        "When we arrived, I was overwhelmed, everything was different. I couldn't speak any English and the culture was so different.",
      img: StoryImg1,
      author: 'Sara Booker',
      authorInfo: 'Refugee in Turkey',
      authorAvator: StoryImg1,
    },
    {
      id: 2,
      language: 'Language',
      story:
        'The last thing I remember of Syria, before we left, was when my mother was taking me from our place to our grandparents',
      img: StoryImg2,
      author: 'Alia Mohammed',
      authorInfo: 'Refugee in Lebnon',
      authorAvator: StoryImg2,
    },
  ];

  return (
    <section className="bg-[#4699C2] lg:px-40 px-14  py-10">
      <div className="font-sans font-normal  text-white lg:text-left text-center ">
        <p className=" lg:text-[3.375rem] text-[1.015rem] lg:tracking-[-1] tracking-[-0.3] mb-4">
          Latest Stories
        </p>
        <p className="lg:text-lg text-sm tracking-tighter lg:w-[25rem] w-[16.25rem] lg:m-0 m-auto ">
          Home is behind, the world ahead and there are many paths to tread
          through shadows to the edge.
        </p>
      </div>

            <div className='font-sans font-normal  text-white lg:text-left text-center '>
                <p className=' lg:text-[3.375rem] text-[1.015rem] lg:tracking-[-1] tracking-[-0.3] mb-4'>Latest Stories</p>
                <p className='lg:text-lg text-sm tracking-tighter lg:w-[25rem] w-[16.25rem] lg:m-0 m-auto pb-4 '>Home is behind, the world ahead and there are many paths to tread through shadows to the edge.</p>
            </div>

            {latestStories.slice(0, 2).map(({ id, language, story, img, author, authorInfo, authorAvator }) => (

                <div key={id} className='flex lg:flex-row flex-col lg:gap-20 lg:justify-between lg:py-10  py-6 lg:items-stretch items-center'>
                    <div className='lg:w-[30.52rem] lg:h-[18.958rem] w-[15.823rem] h-[8.938rem] bg-neutral-900  rounded-sm mb-4'>
                        <img src={img} alt="" className='w-full h-full object-cover rounded-sm ' />
                    </div>

                    <div className='lg:w-[25.189rem] w-[15.823rem] text-left flex flex-col gap-5'>
                        <div><span className='bg-[#FEDB9B] py-2 px-4 font-sans font-bold text-[10px] text-[#4699C2] rounded-sm'>{language}</span></div>
                        <p className='text-left lg:w-[25.19rem] w-[14.438rem]  font-sans font-light lg:text-3xl text-lg tracking-[-0.1px] text-white'>
                            {story}
                        </p>
                        <div className='flex gap-3 pt-2' >
                            <img src={authorAvator} alt="" className=' object-cover lg:w-[2.199rem] lg:h-[2.167rem] w-[1.875rem] h-[1.75rem] bg-[#FEDB9B] rounded-full mt-1' />
                            <div>
                                <p className="font-sans font-bold text-sm lg:tracking-[-0.32px] tracking-[-0.1px] text-white">{author}</p>
                                <p className='text-[#E9E9E9] font-light text-xs tracking-[-0.27px]'>{authorInfo}</p>
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </section>
    )
}

export default LatestStories;
