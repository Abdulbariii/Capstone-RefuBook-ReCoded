import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase';

export default function Form({ setEditForm, photo, user }) {
  const [currentUser] = useAuthState(auth);
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [biography, setBiography] = useState(user.biography);
  const [location, setLocation] = useState(user.location);

  // updating user's profile
  const updateProfile = async (e) => {
    e.preventDefault();

    const docRef = doc(db, 'users', currentUser.uid);
    await updateDoc(docRef, {
      name,
      surname,
      biography,
      location,
      photo: photo ? photo : user.photo,
    });

    await setEditForm(false);
  };

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
              placeholder={user.name}
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
              placeholder={user.surname}
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
          value={biography}
          onChange={(e) => setBiography(e.target.value)}
          className="opacity-50 px-4 focus:opacity-100 w-full py-4"
        >
          {user.biography}
        </textarea>
      </div>

      <h2 className="text-left text-[#4699C2] font-bold py-2">Location: </h2>
      <div className="border border-gray-300 rounded-md">
        <input
          placeholder={user.location}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="opacity-50 px-4 focus:opacity-100 w-full py-2"
        />
      </div>

      <div className="flex flex-row justify-center py-4">
        <input
          type="submit"
          value="SAVE"
          className="bg-[#4699C2] cursor-pointer text-white fong-bold w-24 py-3 rounded-full mx-4 font-bold hover:bg-[#026FC2] hover:shadow-lg focus:bg-[#026FC2] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#026FC2] active:shadow-lg transition duration-150 ease-in-out"
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
