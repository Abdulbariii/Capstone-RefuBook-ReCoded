/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db, auth } from '../../firebase';
import truncate from '../../utility/TruncateText';

export default function ReadAlso({ uidBlog, id, blogLoading }) {
  const [blogsPost, setBlogsPost] = useState([]);

  const [currentUser] = useAuthState(auth);

  useEffect(() => {
    const getBlogs = async () => {
      const q = query(collection(db, 'blogs'), where('uid', '==', uidBlog));

      const querySnapshot = await getDocs(q);
      console.log(querySnapshot);
      const blogsFetched = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.data());
        doc.data().blogId !== id && blogsFetched.push(doc.data());
      });

      setBlogsPost(blogsFetched.slice(0, 2));
    };
    getBlogs();
  }, [id, uidBlog]);

  console.log(blogsPost && blogsPost);

  return (
    <div className="mt-32 ">
      {!blogLoading && (
        <h1 className="text-lg font-bold text-start text-black">
          Read also :{' '}
        </h1>
      )}

      {blogsPost &&
        blogsPost.map((blog) => (
          <Link to={`/singleblog/${blog.blogId}`}>
            <div className="w-72 h-96   bg-[#ffffff] flex flex-col  mt-9  mb-11">
              <img
                src={blog.Image}
                alt="blog pic"
                className=" object-cover h-56"
              />
              <div className=" rounded-lg hover:bg-[#4699c227] p-6  transition-all   shadow-2xl ">
                <h2 className="font-bold text-start text-lg mb-2 text-black">
                  {blog.Title}
                </h2>
                <p className="text-sm mb-2 text-start justify-start">
                  {blog.Description}
                </p>

                <div className="flex items-center">
                  <img
                    className="w-10 h-10 object-cover rounded-full mr-4"
                    src={blog.userImg}
                    alt="Avatar"
                  />
                  <div className="text-lg">
                    <p className="text-sky-500 leading-none">{blog.Username}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
