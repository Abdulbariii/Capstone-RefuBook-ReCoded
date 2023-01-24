/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getDocs, collection, query, where } from 'firebase/firestore';

import { db, auth } from '../../firebase';
import DescriptionImage1 from '../../assets/images/girl.jpg';
import DescriptionImage2 from '../../assets/images/Allia.jpg';

function LatestStories() {
  const [latestStories, setLatestStories] = useState();
  const { t } = useTranslation('common');

  useEffect(() => {
    const getBlogs = async () => {
      const q = query(collection(db, 'blogs'));

      const querySnapshot = await getDocs(q);

      const blogsFetched = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots

        blogsFetched.push(doc.data());
      });

      setLatestStories(blogsFetched.slice(0, 2));
    };
    getBlogs();
  }, []);

  return (
    <section className="bg-[#4699C2] lg:px-40 px-14  py-10">
      <div className="font-sans font-normal  text-white lg:text-left text-center ">
        <p className=" lg:text-[3.375rem]  text-[1.5rem] lg:tracking-[-1] tracking-[-0.3] mb-4">
          {t('LatestStories')}
        </p>
        <p className="lg:text-lg text-sm tracking-tighter lg:w-[26rem] w-[16.25rem] lg:m-0 m-auto pb-4 ">
        {t('LatestStoriesText')}
        </p>
      </div>

      {latestStories &&
        latestStories.map((stories) => (
          <Link key={stories.blogId} to={`/singleblog/${stories.blogId}`}>
            <div
              className="flex lg:flex-row flex-col lg:gap-20 lg:justify-between lg:py-10  py-6 lg:items-stretch items-center"
            >
              <div className="lg:w-[30.52rem] lg:h-[18.958rem] w-[15.823rem] h-[8.938rem] bg-neutral-900  rounded-sm mb-4">
                <img
                  src={stories.Image}
                  alt=""
                  className="w-full h-full object-cover rounded-sm "
                />
              </div>

              <div className="lg:w-[25.189rem] w-[15.823rem] text-left flex flex-col gap-5">
                <div>
                  <span className="bg-[#FEDB9B] py-2 px-4 font-sans font-bold text-[10px] text-[#4699C2] rounded-sm">
                    {t('Language')}
                  </span>
                </div>
                <p className="text-left lg:w-[25.19rem] w-[14.438rem]  font-sans font-light lg:text-3xl text-lg tracking-[-0.1px] text-white">
                  {stories.Description}
                </p>
                <div className="flex gap-3 pt-2 items-center">
                  <img
                    src={stories.userImg}
                    alt=""
                    className=" object-cover lg:w-[2.199rem] lg:h-[2.167rem] w-[1.875rem] h-[1.75rem] bg-[#FEDB9B] rounded-full mt-1"
                  />
                  <div>
                    <p className="font-sans font-bold text-sm lg:tracking-[-0.32px] tracking-[-0.1px] text-white">
                      {stories.Username}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </section>
  );
}

export default LatestStories;
