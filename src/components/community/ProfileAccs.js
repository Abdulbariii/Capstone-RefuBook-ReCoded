/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
  FreeMode,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import {
  onSnapshot,
  collection,
  orderBy,
  query,
  getDocs,
} from 'firebase/firestore';
import { db } from '../../firebase';
import truncate from '../../utility/TruncateText';

export default function ProfileAccs() {
  const [accs, setAccs] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getBlogs = async () => {
      const q = query(collection(db, 'users'));

      //   await onSnapshot(q, (docc) => {
      //     console.log(docc.data());
      //     setBlogsPost([...blogsPost, docc.data()]);
      //   });

      const querySnapshot = await getDocs(q);

      const userFetched = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots

        userFetched.push(doc.data());
      });

      setAccs(userFetched);
    };
    getBlogs();
  }, []);

  console.log(accs);

  return (
    <div className="w-full h-full flex flex-wrap justify-start items-start gap-16 ">
      {accs.map((acc) => (
        <div className="w-60 h-64 p-5  bg-[#fff] shadow-xl flex-col rounded-xl  flex justify-center items-center gap-6">
          <img
            className="w-40 h-40 rounded-full object-cover"
            alt="user"
            src={acc.photo}
          />
          <h1 className="text-2xl ">{acc.name}</h1>
        </div>
      ))}
    </div>
  );
}
