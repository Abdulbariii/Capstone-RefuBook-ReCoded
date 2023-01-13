import React from 'react';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";



export default function Blog() {
    return (
        <div>

<Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
        {blogPost.map(blogs=>{
         return <SwiperSlide>
             <div className=" flex lg:flex-row lg:gap-16 flex-col items-center gap-8 justify-center mt-28">

<div className="card1 w-64 group bg-white">
      <img src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8" alt="blog pic" className="rounded-t-lg mt-12" />
  <div className="bg-white rounded-lg shadow-2xl max-h-96">
    <div className="p-6">
      <h2 className="font-bold text-l mb-2 text-black">Title</h2>
      <p className="text-black hidden group-hover:inline-block">
        Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitdada Lorem ipsum dolor sitdad
      </p>
      <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src="src/assests/images/girl.jpg" alt="Avatar"/>
          <div className="text-sm">
            <p className="text-sky-500 leading-none">Bruce Lee</p>
          </div>
    </div>
  </div>
</div>
</div>

          </SwiperSlide>
        })}
        
      </Swiper>



        <div className=" flex lg:flex-row lg:gap-16 flex-col items-center gap-8 justify-center mt-28">

<div className="card1 w-64 group bg-white">
      <img src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8" alt="blog pic" className="rounded-t-lg mt-12" />
  <div className="bg-white rounded-lg shadow-2xl max-h-96">
    <div className="p-6">
      <h2 className="font-bold text-l mb-2 text-black">Title</h2>
      <p className="text-black hidden group-hover:inline-block">
        Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitdada Lorem ipsum dolor sitdad
      </p>
      <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src="src/assests/images/girl.jpg" alt="Avatar"/>
          <div className="text-sm">
            <p className="text-sky-500 leading-none">Bruce Lee</p>
          </div>
    </div>
  </div>
</div>
</div>


<div className="card2 w-64 group bg-white">
      <img src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8" alt="blog pic" className="rounded-t-lg" />
  <div className="bg-white rounded-lg shadow-2xl max-h-96 -mb-10">
    <div className="p-6">
      <h2 className="font-bold text-l text-black mb-2">Title</h2>
      <p className="text-black hidden group-hover:inline-block">
        Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitdada Lorem ipsum dolor sitdad
      </p>
      <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src="src/assests/images/girl.jpg" alt="Avatar"/>
          <div className="text-sm">
            <p className="text-sky-500 leading-none">Bruce Lee</p>
          </div>
    </div>
  </div>
</div>
</div>


<div className="card3 w-64 group bg-white">
      <img src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8" alt="blog pic" className="rounded-t-lg" />
  <div className="bg-white rounded-lg shadow-2xl max-h-96 -mb-10">
    <div className="p-6">
      <h2 className="font-bold text-l text-black mb-2">Title</h2>
      <p className="text-black hidden group-hover:inline-block">
        Lorem ipsum dolor sitadad Lorem ipsum dolor sitadad Lorem ipsum dolor sitdada Lorem ipsum dolor sitdad
      </p>
      <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src="src/assests/images/girl.jpg" alt="Avatar"/>
          <div className="text-sm">
            <p className="text-sky-500 leading-none">Bruce Lee</p>
          </div>
    </div>
  </div>
</div>
</div>


</div>


<div className=" flex lg:flex-row lg:gap-16 flex-col items-center gap-8 justify-center mt-28">

<div className="minicard1 w-52 group bg-white">
      <img src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8" alt="blog pic" className="rounded-t-lg mt-12" />
  <div className="bg-white rounded-lg shadow-2xl max-h-62">
    <div className="p-6">
      <h2 className="font-bold text-l mb-2 text-black">Title</h2>
      
      <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src="src/assests/images/girl.jpg" alt="Avatar"/>
          <div className="text-sm">
            <p className="text-sky-500 leading-none">Bruce Lee</p>
          </div>
    </div>
  </div>
</div>
</div>

<div className="minicard2 w-52 group bg-white">
      <img src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8" alt="blog pic" className="rounded-t-lg mt-12" />
  <div className="bg-white rounded-lg shadow-2xl max-h-62">
    <div className="p-6">
      <h2 className="font-bold text-l mb-2 text-black">Title</h2>
      
      <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src="src/assests/images/girl.jpg" alt="Avatar"/>
          <div className="text-sm">
            <p className="text-sky-500 leading-none">Bruce Lee</p>
          </div>
    </div>
  </div>
</div>
</div>

<div className="minicard3 w-52 group bg-white">
      <img src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8" alt="blog pic" className="rounded-t-lg mt-12" />
  <div className="bg-white rounded-lg shadow-2xl max-h-62">
    <div className="p-6">
      <h2 className="font-bold text-l mb-2 text-black">Title</h2>
      
      <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src="src/assests/images/girl.jpg" alt="Avatar"/>
          <div className="text-sm">
            <p className="text-sky-500 leading-none">Bruce Lee</p>
          </div>
    </div>
  </div>
</div>
</div>

<div className="minicard4 w-52 group bg-white">
      <img src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8" alt="blog pic" className="rounded-t-lg mt-12" />
  <div className="bg-white rounded-lg shadow-2xl max-h-62">
    <div className="p-6">
      <h2 className="font-bold text-l mb-2 text-black">Title</h2>
      
      <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src="src/assests/images/girl.jpg" alt="Avatar"/>
          <div className="text-sm">
            <p className="text-sky-500 leading-none">Bruce Lee</p>
          </div>
    </div>
  </div>
</div>
</div>


</div>



  
      </div>
    );
  }