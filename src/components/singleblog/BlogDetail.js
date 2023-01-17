import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { db } from '../../firebase';
import twitter from '../../assets/images/Twitter.svg';

import facebook from '../../assets/images/Shape.svg';
import ReadAlso from './ReadAlso';

export default function BlogDetail({ setBlogLoading, blogLoading }) {
  const { id } = useParams();
  const location = useLocation();
  const [blogsPost, setBlogsPost] = useState();

  useEffect(() => {
    const getBlogs = async () => {
      setBlogLoading(true);
      const q = query(collection(db, 'blogs'), where('blogId', '==', id));

      //   await onSnapshot(q, (docc) => {
      //     console.log(docc.data());
      //     setBlogsPost([...blogsPost, docc.data()]);
      //   });

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.data());
        setBlogsPost(doc.data());
      });

      setBlogLoading(false);
    };
    getBlogs();
  }, [id]);

  console.log(blogsPost);

  return (
    <div className="flex lg:w-full flex-wrap lg:flex-nowrap pl-0 lg:h-full justify-around lg:pl-72  items-start">
      {blogsPost && (
        <motion.div
          initial={{ opacity: 0, translateX: -160 }}
          animate={{ opacity: 1, translateX: 1 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="flex w-[556px] px-10 lg:px-0 max-w-5xl justify-center items-start flex-col gap-10"
        >
          <h1 className="text-2xl  self-center font-bold text-black">
            {blogsPost.Title}
          </h1>

          <div className="h-[440px] w-full relative">
            <img
              alt="blog-img"
              className="w-full shadow-lg  h-full object-cover "
              src={blogsPost.Image}
            />
            <div className="flex flex-col gap-12 absolute right-2 bottom-2">
              <TwitterShareButton
                windowWidth={600}
                windowHeight={500}
                url={`https://refubook-org.netlify.app${location.pathname}`}
                title={blogsPost.Title}
                hashtag={['Refubook', 'capstone']}
              >
                <img
                  className="w-10 cursor-pointer h-10 object-contain"
                  alt="twitter"
                  src={twitter}
                />
              </TwitterShareButton>

              <FacebookShareButton
                windowWidth={600}
                windowHeight={500}
                url={`https://refubook-org.netlify.app${location.pathname}`}
                quote={blogsPost.Title}
                hashtag="#refubook"
              >
                <img
                  className="w-10 cursor-pointer h-10 object-contain"
                  alt="facebook"
                  src={facebook}
                />
              </FacebookShareButton>
            </div>
          </div>
          <div className="flex gap-3 self-center">
            <p className="text-black text-lg ">By</p>
            <img
              alt="user"
              src={blogsPost.userImg}
              className="object-cover w-6 h-6 rounded-full "
            />
            <p className="text-[#4699C2] text-lg">{blogsPost.Username}</p>
          </div>
          <h3 className="text-xl text-black font-medium self-start text-start">
            {blogsPost.Description}
          </h3>
          <article className="text-black text-lg self-start text-justify">
            {blogsPost.Blog}
          </article>
        </motion.div>
      )}
      <ReadAlso
        blogLoading={blogLoading}
        id={id}
        uidBlog={blogsPost && blogsPost.uid}
      />
    </div>
  );
}
