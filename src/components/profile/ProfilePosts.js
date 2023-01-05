import React, { useState } from 'react';

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

  const [next, setNext] = useState(6);
  const [prev, setPrev] = useState(0);
  return (
    <div className="flex justify-center items-center px-56 gap-10 flex-wrap">
      {posts.slice(prev, next).map((post) => (
        <div className="w-64 h-40 p-5 cursor-pointer rounded-2xl shadow-xl bg-white flex flex-col justify-around items-start">
          <h1 className="text-2xl font-medium">{post.title}</h1>
          <p className="text-lg">{post.desription}</p>
          <div className="flex  pt-5  justify-start items-center">
            <img
              className="object-cover h-11 w-11 rounded-full mr-5"
              alt="userProfile"
              src={post.image}
            />
            <p className="text-lg text-[#4699C2] "> {post.username}</p>
          </div>
        </div>
      ))}

      {!posts.length <= 6 ? (
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
    </div>
  );
}
