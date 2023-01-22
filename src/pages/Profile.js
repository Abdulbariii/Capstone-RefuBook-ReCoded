import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { auth } from '../firebase';
import UserImage from '../components/profile/UserImage';
import ProfilePosts from '../components/profile/ProfilePosts';
import Form from '../components/profile/Form';

export default function Profile() {
  const [currentUser] = useAuthState(auth);
  const navigate = useNavigate();
  const [editForm, setEditForm] = useState();
  const [photo, setPhoto] = useState(null);
  const user = useSelector((state) => state.user);

  if (!currentUser) navigate('/');

  if (currentUser) {
    return (
      <div className=" min-h-screen flex justify-start gap-24 py-20 flex-col items-center relative">
        <div className="fixed z-[-10]  lg:top-0 left-0 bottom-0 lg:right-auto right-0 lg:w-[50%] w-full lg:h-full h-[40%] bg-[#e5faff]  rounded-t-[50%]  lg:rounded-l-[24px]  lg:rounded-r-full  " />
        <UserImage
          choosePhoto={setPhoto}
          userImg={currentUser && user.photo}
          displayName={currentUser && `${user.name} ${user.surname}`}
          editForm={editForm}
          setEditForm={setEditForm}
        />
        {editForm ? (
          <Form setEditForm={setEditForm} photo={photo} user={user} />
        ) : (
          <ProfilePosts />
        )}
      </div>
    );
  }
}

