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
  choosePhoto
}) {

  const [photo, setPhoto] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);


  useEffect(() => {

    const uploadFile = () => {
      const name = new Date().getTime() + photo.name;
      const storageRef = ref(storage, `Avatars/${name}`);
      const uploadTask = uploadBytesResumable(storageRef, photo);

      uploadTask.on('state_changed',
        (snapshot) => {
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
    if (photo) {
      uploadFile()
      setImageUrl(URL.createObjectURL(photo))
    }

  }, [photo])

  return (
    <div className="flex mb-10 lg:mb-0 justify-center items-center flex-col ">
      <div className="relative ">
        <img
          className="w-[160px] h-[160px] rounded-full relative"
          alt=""
          src={photo ? imageUrl : userImg}
          onLoad={async () => { await choosePhoto(imageUrl) }}
        />
        <button
          type="button"
          onClick={() => {
            setEditForm(true);
          }}
          className="absolute bottom-0 cursor-pointer flex justify-center items-center right-0 w-10 h-10 rounded-full bg-[#4699C2]"
        >
          {editForm ?
            <>
              <input
                type="file"
                id="select-image"
                onChange={(e) => { setPhoto(e.target.files[0]); }}
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
