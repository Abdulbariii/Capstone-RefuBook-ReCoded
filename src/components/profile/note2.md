import React, { useState, useEffect } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../../firebase';
import EditPen from '../../assets/EditPen';
import Camera from '../../assets/Camera';


export default function UserImage({
  editForm,
  setEditForm,
  displayName,
  userImg,
  chooseMessage
}) {

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const uploadFile = () => {
      // const name = new Date().getTime() + selectedImage.name;
      const storageRef = ref(storage, selectedImage.name);
      const uploadTask = uploadBytesResumable(storageRef, selectedImage);

      uploadTask.on('state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}'% done`);
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error)
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUrl(downloadURL)
          });
        }
      );
    }
    selectedImage && uploadFile()
  }, [selectedImage])




  console.log(selectedImage)
  return (
    <div className="flex mb-10 lg:mb-0 justify-center items-center flex-col ">
      <div className="relative ">
        <img
          className="w-[160px] h-[160px] rounded-full relative"
          alt="userProfile"
          src={userImg}
        />
        <button
          type="button"
          onClick={() => {
            setEditForm(true);
            chooseMessage(imageUrl)
          }}
          className="absolute bottom-0 cursor-pointer flex justify-center items-center right-0 w-10 h-10 rounded-full bg-[#4699C2]"
        >
          {editForm ?
            <>
              <input
                type="file"
                id="select-image"
                onChange={(e) => { setSelectedImage(e.target.files[0]) }}
                className='opacity-0'
              />
              <label htmlFor="select-image" className='absolute cursor-pointer'>
                <Camera />
              </label>

            </>
            : <EditPen />}
        </button>
      </div>

      <h1 className="text-xl mt-2 font-medium">{displayName}</h1>
    </div >
  );
}



//profile



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
  const [message, setMessage] = useState(null);
  const chooseMessage = (message) => {
    setMessage(message);
  };
  console.log(`message${message}`)
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
          chooseMessage={chooseMessage}
          userImg={user && user.photoURL}
          displayName={user && user.displayName}
          editForm={editForm}
          setEditForm={setEditForm}
        />
        {editForm ? <Form setEditForm={setEditForm} imgUrl={message} /> : <ProfilePosts />}
      </div>
    );
  }
}
