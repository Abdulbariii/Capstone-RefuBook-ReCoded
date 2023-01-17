
import React, { useState, useEffect, useRef } from 'react';
import SwiperCore, { EffectCoverflow, Pagination, Navigation, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { doc, onSnapshot, collection, orderBy, query } from 'firebase/firestore';
import { db, auth } from '../firebase';



SwiperCore.use([EffectCoverflow, Pagination]);

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    const blogsRef = collection(db, "blogs");
    // const querySnapshot = query(blogsRef, orderBy("date", "desc"))
    const unsubscribe = onSnapshot(blogsRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setBlogs(data);
    });
    return () => unsubscribe();
  }, []);

  console.log("dataaaa")
  console.log(blogs)
  const shuffledBlogs = [...blogs].sort(() => 0.5 - Math.random());
  const randomBlogs = shuffledBlogs.slice(0, 4);


  const filterBlogs = blogs.filter((blog) => {
    return ((blog.Title).toLowerCase()).includes(searchValue.toLowerCase())
  })
  console.log(filterBlogs)

  return (
    <div className='bg-white w-full h-full lg:pt-36 lg:pb-16 lg:px-48  py-32'>
      <div>
        <div className='w-2/3 flex justify-end items-center relative'>
          <input ref={inputRef} placeholder='Search...' onChange={(e) => { setSearchValue(e.target.value); }} className="rounded-3xl border-2 outline-0 pl-2 focus:py-1  " onKeyUp={(event) => {
            if (event.key === 'Enter') {
              searchValue ? location.href = "#destinationDiv" : "";
            }
          }} />
          <button onClick={() => {
            searchValue ? location.href = "#destinationDiv" : "";
            // inputRef.current.value = "";
          }}
            tabIndex={0} className='absolute mr-2.5 ' >
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.96223 7.49428C8.58331 6.76558 8.96938 5.83813 8.96938 4.81132C8.96938 2.54239 7.08937 0.6875 4.77293 0.6875C2.45649 0.6875 0.593262 2.54239 0.593262 4.81132C0.593262 7.08024 2.47327 8.93513 4.77293 8.93513C5.81365 8.93513 6.75365 8.57078 7.49223 7.94144L9.69078 10.1824C9.8185 10.3126 10.0277 10.3143 10.1575 10.1862V10.1862C10.2871 10.0583 10.2885 9.84957 10.1605 9.72002L7.96223 7.49428ZM4.77293 8.28923C2.84256 8.28923 1.26469 6.73245 1.26469 4.81132C1.26469 2.89018 2.84256 1.34996 4.77293 1.34996C6.70329 1.34996 8.28116 2.90674 8.28116 4.81132C8.28116 6.71589 6.72008 8.28923 4.77293 8.28923Z" fill="#4699C2" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <Swiper
          breakpoints={{

            0: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            1024: {
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
          {blogs.map((blog) => {
            return (
              <SwiperSlide key={blog.id}>
                {/* console.log(blog.date) */}
                < div className=" w-64 group bg-white rounded-lg  shadow-[2px_4px_8px_rgba(0,0,0,0.3)] mx-auto ml-9  lg:my-16 mb-16">
                  <img src={blog.Image} alt="blog pic" className="w-64  h-[219.27px] rounded-t-lg" />
                  <div className="bg-white rounded-lg ">
                    <div className="p-6">
                      <h2 className="font-bold text-lg mb-3 text-black text-left">{blog.Title}</h2>
                      <p className="text-black text-left font-normal mb-4 overflow-hidden h-6  group-hover:h-full   lg:group-hover:overflow-y-visible ">

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


      </div>

      {/* the bottom carts */}
      {/* <div className=" flex lg:flex-row lg:gap-16 flex-col items-center gap-8 justify-center">  */}
      <div id="destinationDiv" className="flex justify-center items-start flex-wrap mt-16 gap-y-6  ">
        {filterBlogs.length > 0 ? filterBlogs.map((blog) => {
          return (
            // <div className=" w-48 group bg-white ">
            <div className=" w-48 lg:w-1/5 group bg-white rounded-lg  shadow-[2px_4px_8px_rgba(0,0,0,0.3)] lg:m-4 m-1 ">

              <img src={blog.Image} alt="blog pic" className="w-[193.3px] h-[104.9px] rounded-t-lg" />
              <div className="bg-white rounded-lg ">
                <div className="p-6">
                  <h2 className="font-bold text-lg mb-2 text-black text-left">{blog.Title}</h2>
                  <p className="text-black text-left font-normal mb-2 overflow-hidden h-6  group-hover:h-full   lg:group-hover:overflow-y-visible ">
                    {blog.Description}
                  </p>
                  <div className="flex items-center justify-start gap-2">
                    <div className='w-8 h-8 rounded-full '> <img className="rounded-full w-full h-full" src={blog.userImg} alt="Avatar" /></div>
                    <div className="text-base font-medium">
                      <p className="text-sky-500 leading-none">{blog.Username}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }) : randomBlogs.map((blog) => {
          return (
            // <div className=" w-48 group bg-white ">
            <div className=" w-64 lg:w-1/5 group bg-white rounded-lg  shadow-[2px_4px_8px_rgba(0,0,0,0.3)] lg:m-4 m-1 ">

              <img src={blog.Image} alt="blog pic" className="w-[193.3px] h-[104.9px] rounded-t-lg" />
              <div className="bg-white rounded-lg ">
                <div className="p-6">
                  <h2 className="font-bold text-lg mb-2 text-black text-left">{blog.Title}</h2>
                  <p className="text-black text-left font-normal mb-2 overflow-hidden h-6  group-hover:h-full   lg:group-hover:overflow-y-visible ">
                    {blog.Description}
                  </p>
                  <div className="flex items-center justify-start gap-2">
                    <div className='w-8 h-8 rounded-full '> <img className="rounded-full w-full h-full" src={blog.userImg} alt="Avatar" /></div>
                    <div className="text-base font-medium">
                      <p className="text-sky-500 leading-none">{blog.Username}</p>
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











// import React, { useState, useEffect } from 'react';
// import SwiperCore, { EffectCoverflow, Pagination, Navigation, FreeMode } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';
// import { doc, onSnapshot, collection, orderBy, query } from 'firebase/firestore';
// import { db, auth } from '../firebase';



// SwiperCore.use([EffectCoverflow, Pagination]);

// export default function Blogs() {
//   const [blogs, setBlogs] = useState([]);
//   const [searchValue, setSearchValue] = useState("");

//   useEffect(() => {
//     const blogsRef = collection(db, "blogs");
//     // const querySnapshot = query(blogsRef, orderBy("date", "desc"))
//     const unsubscribe = onSnapshot(blogsRef, (snapshot) => {
//       const data = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data()
//       }));
//       setBlogs(data);
//     });
//     return () => unsubscribe();
//   }, []);

//   console.log("dataaaa")
//   console.log(blogs)
//   const shuffledBlogs = [...blogs].sort(() => 0.5 - Math.random());
//   const randomBlogs = shuffledBlogs.slice(0, 4);

//   const filterBlogs = blogs.filter((blog) => {
//     return ((blog.Title).toLowerCase()).includes(searchValue.toLowerCase())
//   })
//   console.log(filterBlogs)

//   return (
//     <div className='bg-white w-full h-full lg:pt-36 lg:pb-16 lg:px-48  py-32'>
//       <div>
//         <div className='w-2/3 flex justify-end items-center relative'>
//           <input placeholder='Search...' onChange={(e) => setSearchValue(e.target.value)} className="rounded-3xl border-2 outline-0 pl-2 focus:py-1  " />
//           <span className='absolute mr-2 w-10'>go</span>
//           {/* <svg className='absolute mr-2 w-10' width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path fillRule="evenodd" clipRule="evenodd" d="M7.96223 7.49428C8.58331 6.76558 8.96938 5.83813 8.96938 4.81132C8.96938 2.54239 7.08937 0.6875 4.77293 0.6875C2.45649 0.6875 0.593262 2.54239 0.593262 4.81132C0.593262 7.08024 2.47327 8.93513 4.77293 8.93513C5.81365 8.93513 6.75365 8.57078 7.49223 7.94144L9.69078 10.1824C9.8185 10.3126 10.0277 10.3143 10.1575 10.1862V10.1862C10.2871 10.0583 10.2885 9.84957 10.1605 9.72002L7.96223 7.49428ZM4.77293 8.28923C2.84256 8.28923 1.26469 6.73245 1.26469 4.81132C1.26469 2.89018 2.84256 1.34996 4.77293 1.34996C6.70329 1.34996 8.28116 2.90674 8.28116 4.81132C8.28116 6.71589 6.72008 8.28923 4.77293 8.28923Z" fill="#4699C2" />
//           </svg> */}
//         </div>
//       </div>
//       <div className="flex justify-center items-center ">
//         <Swiper
//           breakpoints={{

//             0: {
//               slidesPerView: 1.5,
//               spaceBetween: 30,
//             },
//             1024: {
//               slidesPerView: 3,
//               spaceBetween: 50,
//             },
//           }}
//           freeMode
//           pagination={{
//             clickable: true,
//           }}

//           modules={[FreeMode, Pagination, Navigation]}
//         >
//           {filterBlogs.length > 0 ? filterBlogs.map((blog) => {
//             return (
//               <SwiperSlide key={blog.id}>

//                 < div className=" w-64 group bg-white rounded-lg  shadow-[2px_4px_8px_rgba(0,0,0,0.3)] mx-auto ml-9  lg:my-16 mb-16">
//                   <img src={blog.Image} alt="blog pic" className="w-64  h-[219.27px] rounded-t-lg" />
//                   <div className="bg-white rounded-lg ">
//                     <div className="p-6">
//                       <h2 className="font-bold text-lg mb-3 text-black text-left">{blog.Title}</h2>
//                       <p className="text-black text-left font-normal mb-4 overflow-hidden h-6  group-hover:h-full   lg:group-hover:overflow-y-visible ">

//                         {blog.Description}
//                       </p>
//                       <div className="flex items-center justify-start gap-2">
//                         <div className='w-10 h-10 rounded-full '> <img className="rounded-full w-full h-full" src={blog.userImg} alt="Avatar" /></div>
//                         <div className="text-base font-medium">
//                           <p className="text-sky-500 leading-none">{blog.Username}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>)
//           }) : blogs.map((blog) => {
//             return (
//               <SwiperSlide key={blog.id}>

//                 < div className=" w-64 group bg-white rounded-lg  shadow-[2px_4px_8px_rgba(0,0,0,0.3)] mx-auto ml-9  lg:my-16 mb-16">
//                   <img src={blog.Image} alt="blog pic" className="w-64  h-[219.27px] rounded-t-lg" />
//                   <div className="bg-white rounded-lg ">
//                     <div className="p-6">
//                       <h2 className="font-bold text-lg mb-3 text-black text-left">{blog.Title}</h2>
//                       <p className="text-black text-left font-normal mb-4 overflow-hidden h-6  group-hover:h-full   lg:group-hover:overflow-y-visible ">

//                         {blog.Description}
//                       </p>
//                       <div className="flex items-center justify-start gap-2">
//                         <div className='w-10 h-10 rounded-full '> <img className="rounded-full w-full h-full" src={blog.userImg} alt="Avatar" /></div>
//                         <div className="text-base font-medium">
//                           <p className="text-sky-500 leading-none">{blog.Username}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>)
//           })}


//         </Swiper>


//       </div>

//       {/* the bottom carts */}
//       {/* <div className=" flex lg:flex-row lg:gap-16 flex-col items-center gap-8 justify-center">  */}
//       <div className="flex justify-center items-start flex-wrap mt-16 gap-y-6  ">
//         {randomBlogs.map((blog) => {
//           return (
//             // <div className=" w-48 group bg-white ">
//             <div className=" w-[10rem] lg:w-1/5 group bg-white rounded-lg  shadow-[2px_4px_8px_rgba(0,0,0,0.3)] lg:m-4 m-1 ">

//               <img src={blog.Image} alt="blog pic" className="w-[193.3px] h-[104.9px] rounded-t-lg" />
//               <div className="bg-white rounded-lg ">
//                 <div className="p-6">
//                   <h2 className="font-bold text-lg mb-2 text-black text-left">{blog.Title}</h2>
//                   <p className="text-black text-left font-normal mb-2 overflow-hidden h-6  group-hover:h-full   lg:group-hover:overflow-y-visible ">
//                     {blog.Description}
//                   </p>
//                   <div className="flex items-center justify-start gap-2">
//                     <div className='w-8 h-8 rounded-full '> <img className="rounded-full w-full h-full" src={blog.userImg} alt="Avatar" /></div>
//                     <div className="text-base font-medium">
//                       <p className="text-sky-500 leading-none">{blog.Username}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )
//         })}

//       </div>
//     </div >)
// }





===================================================


import React, { useState, useEffect } from 'react';
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { useFirestore } from 'react-redux-firebase'

SwiperCore.use([EffectCoverflow, Pagination]);

export default function Blogs() {
  const { firestore } = useFirestore();
  const [blogs, setBlogs] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const blogsRef = firestore.collection("blogs");
    const querySnapshot = blogsRef.orderBy("date", "desc")
    const unsubscribe = querySnapshot.onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setBlogs(data);
    });
    return () => unsubscribe();
  }, []);

  const filterBlogs = blogs.filter((blog) => {
    return ((blog.Title).toLowerCase()).includes(searchValue.toLowerCase())
  });
  
  const showedBlogs = searchValue ? filterBlogs : blogs;

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  }

  const handleSubmit = (event) => {
    if (event.key === 'Enter') {
      searchValue ? location.href = "#destinationDiv" : "";
    }
  }

  return (
    <div className='bg-white w-full h-full lg:pt-36 lg:pb-16 lg:px-48  py-32'>
      <div>
        <div className='w-2/3 flex justify-end items-center relative'>
          <input placeholder='Search...' onChange={handleSearch} className="rounded-3xl border-2 outline-0 pl-2 focus:py-1  " onKeyUp={handleSubmit} />
          <button onClick={handleSubmit}
            tabIndex={0} className='absolute mr-2.5 ' >
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.96223 7.49428C8.58331 6.76558 8.96938 5.83813 8.96938 4.81132C8.96938 2.54239 7.08937 0.6875 4.77293 0.6875C2.45649 0.6875 0.593262 2.54239 0.593262 4.81132C0.593262 7.08024 2.47327 8.93513 4.77293 8.93513C5.81365 8.93513 6.75365 8.57078 7.49223 7
