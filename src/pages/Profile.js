import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import UserImage from '../components/profile/UserImage';
import ProfilePosts from '../components/profile/ProfilePosts';

import Form from '../components/profile/Form';

export default function Profile() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  console.log(user);

  if (!user) navigate('/');
  if (user) {
    const [editForm, setEditForm] = useState();
    return (
      <div className=" min-h-screen flex justify-around my-20 flex-col items-center relative">
        <div className="fixed z-[-10]  lg:top-0 left-0 bottom-0 lg:right-auto right-0 lg:w-[50%] w-full lg:h-full h-[40%] bg-[#e5faff]  rounded-t-[50%]  lg:rounded-l-[24px]  lg:rounded-r-full  " />
        <UserImage
          userImg={user && user.photoURL}
          displayName={user && user.displayName}
          editForm={editForm}
          setEditForm={setEditForm}
        />
        {editForm ? <Form setEditForm={setEditForm} /> : <ProfilePosts />}
      </div>
    );
  }
}
