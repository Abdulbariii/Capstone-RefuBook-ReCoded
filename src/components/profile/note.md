import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { auth, db } from '../../firebase';


export default function Form({ setEditForm }) {
  const [user, setUser] = useState([]);
  const [currentUser] = useAuthState(auth);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [biograhpy, setBiography] = useState('');
  const [location, setLocation] = useState('');

  // fetching user information from firestore
  useEffect(() => {
    const getUser = async () => {
      const docRef = await doc(db, 'users', currentUser.uid)
      try {
        await onSnapshot(docRef, (doc) => {
          setUser({
            ...doc.data(), id: doc.id
          })
          setName(doc.data().firstName)
          setSurname(doc.data().surname)
          setBiography(doc.data().biograhpy)
          setLocation(doc.data().location)
        })

      } catch (e) {
        console.log(e)
      }

    }
    getUser()
  }, [])

  // updating user's profile
  const updateProfile = async (e) => {
    e.preventDefault();
    const docRef = doc(db, 'users', currentUser.uid);
    await updateDoc(docRef, {
      firstName: name,
      surname,
      biograhpy,
      location
    })
  }

  console.log(user)
  console.log(name)
  return (
    <motion.form
      onSubmit={updateProfile}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="flex flex-col w-4/6 lg:w-3/6"
    >
      <div className="lg:flex lg:flex-row lg:justify-between lg:gap-6">
        <div className="lg:flex lg:flex-col lg:w-1/2">
          <h2 className="text-left text-[#4699C2] font-bold py-2">Name: </h2>
          <div className="border border-gray-300 rounded-md">
            <input
              type="text"
              placeholder={name}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full py-2 px-4 opacity-50 focus:opacity-100"
            />
          </div>
        </div>

        <div className="lg:flex lg:flex-col lg:w-1/2">
          <h2 className="text-left text-[#4699C2] font-bold py-2">Surname: </h2>
          <div className="border border-gray-300 rounded-md">
            <input
              type="text"
              placeholder={surname}
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              className="opacity-50 px-4 focus:opacity-100 w-full py-2"
            />
          </div>
        </div>
      </div>

      <h2 className="text-left text-[#4699C2] font-bold py-2">Biograhpy: </h2>
      <div className="border border-gray-300 rounded-md">
        <textarea
          value={biograhpy}
          onChange={(e) => setBiography(e.target.value)}
          className="opacity-50 px-4 focus:opacity-100 w-full py-4"
        >
          {biograhpy}
        </textarea>
      </div>

      <h2 className="text-left text-[#4699C2] font-bold py-2">Location: </h2>
      <div className="border border-gray-300 rounded-md">
        <input
          placeholder={location}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="opacity-50 px-4 focus:opacity-100 w-full py-2"
        />
      </div>

      <div className="flex flex-row justify-center py-4">
        <input
          type="submit"
          value="SAVE"
          className="bg-[#4699C2] text-white fong-bold w-24 py-3 rounded-full mx-4 font-bold hover:bg-[#026FC2] hover:shadow-lg focus:bg-[#026FC2] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#026FC2] active:shadow-lg transition duration-150 ease-in-out"
        />
        <input
          onClick={() => {
            setEditForm(false);
          }}
          type="reset"
          value="CANCEL"
          className="bg-[#4699C2] cursor-pointer lg:bg-white hover:bg-[#026FC2] hover:text-white hover:shadow-lg focus:bg-[#026FC2] focus:shadow-lg focus:outline-none focus:ring-0 focus:text-white active:bg-[#026FC2] active:shadow-lg transition duration-150 ease-in-out text-white lg:text-[#4699C2] lg:border lg:border-[#4699C2] fong-bold w-24 py-3 rounded-full font-bold"
        />
      </div>
    </motion.form>
  );
}





/////////////////////////////////////////////////////////////////



import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { auth, db } from '../../firebase';


export default function Form({ setEditForm }) {
  const [user, setUser] = useState([]);
  const [currentUser] = useAuthState(auth);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [biograhpy, setBiography] = useState('');
  const [location, setLocation] = useState('');

  // fetching user information from firestore
  useEffect(() => {
    const getUser = async () => {
      const docRef = await doc(db, 'users', currentUser.uid)
      try {
        await onSnapshot(docRef, (doc) => {
          setUser({
            ...doc.data(), id: doc.id
          })
        })

      } catch (e) {
        console.log(e)
      }

    }
    getUser()
  }, [])

  // updating user's profile
  const updateProfile = async (e) => {
    e.preventDefault();
    const docRef = doc(db, 'users', currentUser.uid);
    await updateDoc(docRef, {
      firstName: name,
      surname: surname,
      biograhpy: biograhpy,
      location: location
    })
  }

  console.log(user)
  console.log(user.firstName)
  return (
    <motion.form
      onSubmit={updateProfile}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="flex flex-col w-4/6 lg:w-3/6"
    >
      <div className="lg:flex lg:flex-row lg:justify-between lg:gap-6">
        <div className="lg:flex lg:flex-col lg:w-1/2">
          <h2 className="text-left text-[#4699C2] font-bold py-2">Name: </h2>
          <div className="border border-gray-300 rounded-md">
            <input
              type="text"
              placeholder={name}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full py-2 px-4 opacity-50 focus:opacity-100"
            />
          </div>
        </div>

        <div className="lg:flex lg:flex-col lg:w-1/2">
          <h2 className="text-left text-[#4699C2] font-bold py-2">Surname: </h2>
          <div className="border border-gray-300 rounded-md">
            <input
              type="text"
              placeholder={surname}
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              className="opacity-50 px-4 focus:opacity-100 w-full py-2"
            />
          </div>
        </div>
      </div>

      <h2 className="text-left text-[#4699C2] font-bold py-2">Biograhpy: </h2>
      <div className="border border-gray-300 rounded-md">
        <textarea
          value={biograhpy}
          onChange={(e) => setBiography(e.target.value)}
          className="opacity-50 px-4 focus:opacity-100 w-full py-4"
        >
          {biograhpy}
        </textarea>
      </div>

      <h2 className="text-left text-[#4699C2] font-bold py-2">Location: </h2>
      <div className="border border-gray-300 rounded-md">
        <input
          placeholder={location}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="opacity-50 px-4 focus:opacity-100 w-full py-2"
        />
      </div>

      <div className="flex flex-row justify-center py-4">
        <input
          type="submit"
          value="SAVE"
          className="bg-[#4699C2] text-white fong-bold w-24 py-3 rounded-full mx-4 font-bold hover:bg-[#026FC2] hover:shadow-lg focus:bg-[#026FC2] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#026FC2] active:shadow-lg transition duration-150 ease-in-out"
        />
        <input
          onClick={() => {
            setEditForm(false);
          }}
          type="reset"
          value="CANCEL"
          className="bg-[#4699C2] cursor-pointer lg:bg-white hover:bg-[#026FC2] hover:text-white hover:shadow-lg focus:bg-[#026FC2] focus:shadow-lg focus:outline-none focus:ring-0 focus:text-white active:bg-[#026FC2] active:shadow-lg transition duration-150 ease-in-out text-white lg:text-[#4699C2] lg:border lg:border-[#4699C2] fong-bold w-24 py-3 rounded-full font-bold"
        />
      </div>
    </motion.form>
  );
}



////////
userImage



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
      const storageRef = ref(storage, name);
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


  console.log(`test ${imageUrl}`)
  return (
    <div className="flex mb-10 lg:mb-0 justify-center items-center flex-col ">
      <div className="relative ">
        <img
          className="w-[160px] h-[160px] rounded-full relative"
          alt="userProfile"
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


