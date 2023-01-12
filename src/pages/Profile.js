import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import UserImage from '../components/profile/UserImage';
import ProfilePosts from '../components/profile/ProfilePosts';

import Form from '../components/profile/Form';

export default function Profile({ user }) {
  const [currentUser] = useAuthState(auth);
  const navigate = useNavigate();

  const [editForm, setEditForm] = useState();
  const [photo, setPhoto] = useState(null);

  if (!currentUser) navigate('/');
  if (currentUser) {

  console.log(user);

  if (!user) navigate('/');
  if (user) {
    const [editForm, setEditForm] = useState();

    return (
      <div className=" min-h-screen flex justify-around my-20 flex-col items-center relative">
        <div className="fixed left-0  z-[-1]">
          <svg
            width="720"
            height="100%"
            viewBox="0 0 620 789"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 739C0 766.614 22.3858 789 50 789H437.803C450.034 789 461.913 784.59 470.751 776.136C562.983 687.917 620 566.564 620 432.637C620 248.967 512.769 88.8528 354.259 5.37031C347.41 1.7634 339.75 0 332.01 0H50.0001C22.3858 0 0 22.3858 0 50V739Z"
              fill="#E5FAFF"
            />
          </svg>
        </div>
        <UserImage
          choosePhoto={setPhoto}
          userImg={currentUser && user.photo}
          displayName={currentUser && `${user.name} ${user.surname}`}
          editForm={editForm}
          setEditForm={setEditForm}
        />
        {editForm ? <Form setEditForm={setEditForm} photo={photo} user={user} /> : <ProfilePosts />}
      </div>
    );
  }
}
