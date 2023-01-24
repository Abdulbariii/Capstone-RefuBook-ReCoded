/* eslint-disable no-shadow */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  collection,
  doc,
  updateDoc,
  writeBatch,
  getDocs,
} from 'firebase/firestore';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../features/userSlice';
import { auth, db } from '../../firebase';

export default function Form({ setEditForm, photo, imageUrl }) {
  const { t } = useTranslation('common');
  const user = useSelector((state) => state.user);
  const [currentUser] = useAuthState(auth);
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [biography, setBiography] = useState(user.biography);
  const [location, setLocation] = useState(user.location);
  const dispatch = useDispatch();
  // updating user's profile
  const updateProfile = async (e) => {
    e.preventDefault();
    const docRef = doc(db, 'users', currentUser.uid);
    await updateDoc(docRef, {
      name,
      surname,
      biography,
      location,
      photo: imageUrl && imageUrl,
    });
    dispatch(
      updateUser({
        name,
        surname,
        biography,
        location,
        photo: imageUrl && imageUrl,
      })
    );

    // to update username and imageProfile of blogs
    const updateBlog = async () => {
      const batch = writeBatch(db);
      const data = collection(db, 'blogs');
      const querySnapshot = await getDocs(data);
      querySnapshot.forEach((doc) => {
        if (doc.data().uid === currentUser.uid) {
          batch.update(doc.ref, {
            Username: `${name} ${surname}`,
            userImg: photo || imageUrl,
          });
        }
      });

      batch.commit();
    };
    updateBlog();

    await setEditForm(false);
  };

  return (
    <motion.form
      data-testid="form"
      onSubmit={updateProfile}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="flex flex-col w-4/6 lg:w-3/6"
    >
      <div className="lg:flex lg:flex-row lg:justify-between lg:gap-6">
        <div className="lg:flex lg:flex-col lg:w-1/2">
          <h2 className="text-left text-[#4699C2] font-bold py-2">{t('Name')}</h2>
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
          <h2 className="text-left text-[#4699C2] font-bold py-2">{t('Surname')}</h2>
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

      <h2 className="text-left text-[#4699C2] font-bold py-2">{t('Biography')}</h2>
      <div className="border border-gray-300 rounded-md">
        <textarea
          value={biography}
          onChange={(e) => setBiography(e.target.value)}
          className="opacity-50 px-4 focus:opacity-100 w-full py-4"
        >
          {user.biography}
        </textarea>
      </div>

      <h2 className="text-left text-[#4699C2] font-bold py-2">{t('Location')}</h2>
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
          value={t('Save')}
          className="bg-[#4699C2] cursor-pointer text-white fong-bold w-24 py-3 rounded-full mx-4 font-bold hover:bg-[#026FC2] hover:shadow-lg focus:bg-[#026FC2] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#026FC2] active:shadow-lg transition duration-150 ease-in-out"
        />
        <input
          onClick={() => {
            setEditForm(false);
          }}
          type="reset"
          value={t('Cancel')}
          className="bg-[#4699C2] cursor-pointer lg:bg-white hover:bg-[#026FC2] hover:text-white hover:shadow-lg focus:bg-[#026FC2] focus:shadow-lg focus:outline-none focus:ring-0 focus:text-white active:bg-[#026FC2] active:shadow-lg transition duration-150 ease-in-out text-white lg:text-[#4699C2] lg:border lg:border-[#4699C2] fong-bold w-24 py-3 rounded-full font-bold"
        />
      </div>
    </motion.form>
  );
}
