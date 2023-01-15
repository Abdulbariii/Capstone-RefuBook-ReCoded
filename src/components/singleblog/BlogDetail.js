import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../firebase';

export default function BlogDetail({ setBlogLoading }) {
  const { id } = useParams();
  const [blogsPost, setBlogsPost] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      setBlogLoading(true);
      const q = query(collection(db, 'blogs'), where('blogId', '==', id));

      //   await onSnapshot(q, (docc) => {
      //     console.log(docc.data());
      //     setBlogsPost([...blogsPost, docc.data()]);
      //   });

      const querySnapshot = await getDocs(q);

      const blogsFetched = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.data());
        blogsFetched.push(doc.data());
      });

      setBlogsPost(blogsFetched);
      setBlogLoading(false);
    };
    getBlogs();
  }, []);

  return (
    <div>
      {blogsPost &&
        blogsPost.map((post) => (
          <div className="flex w-[556px] justify-center items-start flex-col gap-10">
            <h1 className="text-2xl  self-center font-bold text-black">
              {post.Title}
            </h1>
            <img
              alt="blog-img"
              className="h-[440px] w-full object-cover"
              src={post.Image}
            />
            <div className="flex gap-3 self-center">
              <p className="text-black text-lg ">By</p>
              <img
                alt="user"
                src={post.userImg}
                className="object-cover w-6 h-6 rounded-full "
              />
              <p className="text-[#4699C2] text-lg">{post.Username}</p>
            </div>
            <h3 className="text-xl text-black font-medium self-start text-start">
              {post.Description}
            </h3>
            <article className="text-black text-lg self-start text-justify">
              {post.Blog}
            </article>
          </div>
        ))}
    </div>
  );
}
