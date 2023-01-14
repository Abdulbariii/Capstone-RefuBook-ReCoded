import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { useAuthState } from 'react-firebase-hooks/auth';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db, auth } from '../../firebase';

export default function ProfilePosts() {
  const posts = [
    {
      username: 'Old trafford',
      title: 'Hello',
      desription: 'Lorem ipsum dolor dsgsgs',
      image:
        'https://images.unsplash.com/photo-1642763907630-17bad0853f15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
      username: 'Old trafford',
      title: 'Hello',
      desription: 'Lorem ipsum dolor dsgsgs',
      image:
        'https://images.unsplash.com/photo-1642763907630-17bad0853f15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
      username: 'Old trafford',
      title: 'Hello',
      desription: 'Lorem ipsum dolor dsgsgs',
      image:
        'https://images.unsplash.com/photo-1642763907630-17bad0853f15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
      username: 'Old trafford',
      title: 'Hello',
      desription: 'Lorem ipsum dolor dsgsgs',
      image:
        'https://images.unsplash.com/photo-1642763907630-17bad0853f15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
      username: 'Old trafford',
      title: 'Hello',
      desription: 'Lorem ipsum dolor dsgsgs',
      image:
        'https://images.unsplash.com/photo-1642763907630-17bad0853f15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
      username: 'Old trafford',
      title: 'Hello',
      desription: 'Lorem ipsum dolor dsgsgs',
      image:
        'https://images.unsplash.com/photo-1642763907630-17bad0853f15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
      username: 'Old trafford',
      title: 'Hello',
      desription: 'Lorem ipsum dolor dsgsgs',
      image:
        'https://images.unsplash.com/photo-1642763907630-17bad0853f15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
      username: 'Old trafford',
      title: 'Hello',
      desription: 'Lorem ipsum dolor dsgsgs',
      image:
        'https://images.unsplash.com/photo-1642763907630-17bad0853f15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
      username: 'Old trafford',
      title: 'Hello',
      desription: 'Lorem ipsum dolor dsgsgs',
      image:
        'https://images.unsplash.com/photo-1642763907630-17bad0853f15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
      username: 'Old',
      title: 'Hello',
      desription: 'Lorem ipsum dolor dsgsgs',
      image:
        'https://images.unsplash.com/photo-1642763907630-17bad0853f15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
      username: 'Old trafford',
      title: 'Hello',
      desription: 'Lorem ipsum dolor dsgsgs',
      image:
        'https://images.unsplash.com/photo-1642763907630-17bad0853f15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
      username: 'Old trafford',
      title: 'Hello',
      desription: 'Lorem ipsum dolor dsgsgs',
      image:
        'https://images.unsplash.com/photo-1642763907630-17bad0853f15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
  ];

  const [blogsPost, setBlogsPost] = useState([]);

  const [currentUser] = useAuthState(auth);

  useEffect(() => {
    const getBlogs = async () => {
      const q = query(
        collection(db, 'blogs'),
        where('uid', '==', currentUser.uid)
      );

      //   await onSnapshot(q, (docc) => {
      //     console.log(docc.data());
      //     setBlogsPost([...blogsPost, docc.data()]);
      //   });

      const querySnapshot = await getDocs(q);

      console.log(querySnapshot);
      const blogsFetched = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.data());
        blogsFetched.push(doc.data());
      });

      setBlogsPost(blogsFetched);
    };
    getBlogs();
  }, [currentUser]);

  const [next, setNext] = useState(6);
  const [prev, setPrev] = useState(0);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="flex justify-center items-center px-56 gap-10 flex-wrap"
    >
      {blogsPost &&
        blogsPost.slice(prev, next).map((post) => (
          <div className="w-64 h-40 p-5 cursor-pointer rounded-2xl shadow-xl bg-white flex flex-col justify-around items-start">
            <h1 className="text-2xl font-medium">{post.Title}</h1>
            <p className="text-lg">{post.Description}</p>
            <div className="flex  pt-5  justify-start items-center">
              <img
                className="object-cover h-11 w-11 rounded-full mr-5"
                alt="userProfile"
                src={post.userImg}
              />
              <p className="text-lg text-[#4699C2] "> {post.Username}</p>
            </div>
          </div>
        ))}

      {blogsPost && blogsPost.length > 6 ? (
        <div className="flex gap-5 w-full h-full cursor-pointer justify-center items-center">
          <button
            type="button"
            onClick={() => {
              setNext(6);
              setPrev(0);
            }}
            className={` ${
              prev === 0 ? 'bg-opacity-100' : 'bg-opacity-20'
            } bg-[#4699C2] h-5 w-5 rounded-full`}
          >
            .
          </button>
          <button
            type="button"
            onClick={() => {
              setNext(posts.length <= 12 ? posts.length : 6);
              setPrev(7);
            }}
            className={` ${
              next === 6 ? 'bg-opacity-20' : 'bg-opacity-100'
            } bg-[#4699C2] h-5 w-5 rounded-full`}
          >
            .
          </button>
        </div>
      ) : null}
    </motion.div>
  );
}
