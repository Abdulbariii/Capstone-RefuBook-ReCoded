
import React, { useState, useEffect } from 'react';
import SwiperCore, { EffectCoverflow, Pagination, Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { onSnapshot, collection, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';



SwiperCore.use([EffectCoverflow, Pagination]);

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sortBy, setSortBy] = useState("Newest")
  useEffect(() => {
    const blogsRef = collection(db, "blogs");
    const querySnapshot = query(blogsRef, orderBy("date", sortBy === "Newest" ? "desc" : "asc"))
    const unsubscribe = onSnapshot(querySnapshot, (snapshot) => {
      const data = snapshot.docs.map((doc) => (
        {
          id: doc.id,
          ...doc.data()
        }));
      setBlogs(data);
    });
    return () => unsubscribe();
  }, [sortBy]);

  const handleSearch = (e) => setSearchValue(e.target.value);
  const handleSort = (e) => setSortBy(e.target.value);

  const filterBlogs = blogs.filter((blog) => {
    return ((blog.Title).toLowerCase()).includes(searchValue.toLowerCase())
  })

  const showedBlogs = filterBlogs.length > 0 ? filterBlogs : blogs;

  const shuffledBlogs = [...blogs].sort(() => 0.5 - Math.random());
  const randomBlogs = shuffledBlogs.slice(0, 7);

  return (
    <div className='bg-white w-full h-full lg:pt-36 lg:pb-16 lg:px-48  py-16'>

      <div className='flex justify-end items-center gap-9 lg:mb-0 mb-6 pr-1 '>
        <div className='text-[#4F4F4F] text-[14px]'>
          <span>Sort By: </span>
          <select onChange={handleSort} className="bg-[#D6F8FF] rounded-sm">
            <option >Newest</option>
            <option >Oldest</option>
          </select>

        </div>

        <div className='w-40 flex justify-end items-center relative '>
          <input placeholder='Search...' onChange={handleSearch} className="rounded-3xl border-2 outline-0 pl-2 focus:py-1  " onKeyUp={(event) => {
            if (event.key === 'Enter') {
              if (searchValue) {
                window.location.href = "#destinationDiv"
              }
            }
          }} />
          <button type='button' onClick={() => {
            if (searchValue) {
              window.location.href = "#destinationDiv"
            }
          }}
            tabIndex={0} className='absolute mr-2.5 ' >
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.96223 7.49428C8.58331 6.76558 8.96938 5.83813 8.96938 4.81132C8.96938 2.54239 7.08937 0.6875 4.77293 0.6875C2.45649 0.6875 0.593262 2.54239 0.593262 4.81132C0.593262 7.08024 2.47327 8.93513 4.77293 8.93513C5.81365 8.93513 6.75365 8.57078 7.49223 7.94144L9.69078 10.1824C9.8185 10.3126 10.0277 10.3143 10.1575 10.1862V10.1862C10.2871 10.0583 10.2885 9.84957 10.1605 9.72002L7.96223 7.49428ZM4.77293 8.28923C2.84256 8.28923 1.26469 6.73245 1.26469 4.81132C1.26469 2.89018 2.84256 1.34996 4.77293 1.34996C6.70329 1.34996 8.28116 2.90674 8.28116 4.81132C8.28116 6.71589 6.72008 8.28923 4.77293 8.28923Z" fill="#4699C2" />
            </svg>
          </button>
        </div>

      </div>
      {(blogs.length > 3) && <div className="flex justify-center items-center ">
        <Swiper
          breakpoints={{

            0: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            750: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          freeMode
          pagination={{
            clickable: true,
          }}

          modules={[FreeMode, Pagination, Navigation]}
        >
          {randomBlogs.slice(0, 9).map((blog) => {
            return (
              <SwiperSlide key={blog.id}>

                < div className=" w-64 group bg-white rounded-lg  shadow-[2px_4px_8px_rgba(0,0,0,0.3)] mx-auto ml-9  lg:my-16 mb-16">
                  <div className='w-64 h-[219.27px]'> <img src={blog.Image} alt="blog pic" className=" rounded-t-lg w-full h-full object-cover" /></div>
                  <div className="bg-white rounded-lg ">
                    <div className="p-4">
                      <h2 className="font-bold text-lg mb-3 text-black text-left overflow-hidden h-8 truncate group-hover:whitespace-normal group-hover:h-full  lg:group-hover:overflow-y-visible">{blog.Title}</h2>
                      <p className="text-black text-left font-normal mb-4 overflow-hidden h-6  group-hover:h-full  lg:group-hover:overflow-y-visible ">

                        {blog.Description}
                      </p>
                      <div className="flex items-center justify-start gap-2">
                        <div className='w-10 h-10 rounded-full '> <img className="rounded-full w-full h-full" src={blog.userImg} alt="Avatar" /></div>
                        <div className="text-base font-medium">
                          <p className="text-sky-500 leading-none">{blog.Username}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>)
          })}


        </Swiper>
      </div>}

      {/* the bottom cards */}
      <div id="destinationDiv" className="flex justify-center items-center flex-wrap mt-16 gap-y-6  ">
        {showedBlogs.map((blog) => {
          return (
            <div className=" lg:w-48 w-44 group bg-white rounded-lg  shadow-[2px_4px_8px_rgba(0,0,0,0.3)] lg:m-4 m-1 ">

              <div className='lg:w-48 w-44 h-[104.9px] '> <img src={blog.Image} alt="blog pic" className=" rounded-t-lg w-full h-full object-cover " /></div>
              <div className="bg-white rounded-lg ">
                <div className="p-4">
                  <h2 className="font-[900] text-[12.75px] mb-2 text-black text-left overflow-hidden h-8 truncate group-hover:whitespace-normal group-hover:h-full  lg:group-hover:overflow-y-visible">{blog.Title}</h2>
                  <p className="text-black text-[12.75px] text-left font-normal mb-2 overflow-hidden h-6  group-hover:h-full   lg:group-hover:overflow-y-visible ">
                    {blog.Description}
                  </p>
                  <div className="flex items-center justify-start gap-2">
                    <div className='w-8 h-8 rounded-full '> <img className="rounded-full w-full h-full" src={blog.userImg} alt="Avatar" /></div>
                    <div className=" font-medium">
                      <p className="text-[13.45px] text-sky-500 leading-none">{blog.Username}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </div >)
}






