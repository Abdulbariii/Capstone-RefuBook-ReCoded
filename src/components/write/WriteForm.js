/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSelector } from 'react-redux';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { motion } from 'framer-motion';
import { v4 as uuid } from 'uuid';

import { storage, db, auth } from '../../firebase';

function WriteForm({ setBlogPending, setBlogPosted }) {
  
  const { t } = useTranslation('common');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [blog, setBlog] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const userInfo = useSelector((state) => state.user);

  // const imageList = ref(storage, `${title}/`);
  const [user] = useAuthState(auth);
  const addData = async (
    img,
    blogTitle,
    desc,
    blogPost,
    username,
    profileImg,
    userid,
    blogIdpost
  ) => {
    const docRef = await addDoc(collection(db, 'blogs'), {
      Image: img,
      Title: blogTitle,
      Description: desc,
      Blog: blogPost,
      Username: username,
      userImg: profileImg,
      uid: userid,
      date: serverTimestamp(),
      blogId: blogIdpost,
    });
    console.log('Document written with ID: ', docRef.id);
  };

  const blogSumbit = (e) => {
    e.preventDefault();
    setBlogPending(true);
    const imageRef = ref(storage, `${title}/${selectedFile.name}`);

    uploadBytes(imageRef, selectedFile).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url);
        setBlogPending(false);
        // add them to fire base
        addData(
          url,
          title,
          description,
          blog,
          user && `${userInfo.name} ${userInfo.surname}`,
          user && userInfo.photo,
          user && user.uid,
          uuid()
        );
        setBlogPosted(true);
        setTimeout(() => {
          setBlogPosted(false);
        }, 2000);
      });
    });
  };
  return (
    <motion.form
      onSubmit={blogSumbit}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="flex flex-col w-4/6 lg:w-3/6"
    >
      <div className="lg:flex lg:flex-row lg:justify-between lg:gap-6">
        <div className="lg:flex lg:flex-col lg:w-1/2">
          <h2 className="text-left text-[#4699C2] font-bold py-2">
            {t('BlogTitle')}{' '}
          </h2>
          <div className="border border-gray-300 rounded-md">
            <input
              data-testid='my-input'
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full py-2 opacity-50 focus:opacity-100 p-2"
            />
          </div>
        </div>

        <div className="lg:flex lg:flex-col lg:w-1/2">
          <h2 className="text-left text-[#4699C2] font-bold py-2">
          {t('Desc')}{' '}
          </h2>
          <div className="border border-gray-300 rounded-md">
            <input
              type="text"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="opacity-50 focus:opacity-100 w-full py-2 p-2"
            />
          </div>
        </div>
      </div>

      <h2 className="text-left text-[#4699C2] font-bold py-2">{t('Blog')}</h2>
      <div className="border border-gray-300 rounded-md">
        <textarea
          required
          value={blog}
          onChange={(e) => setBlog(e.target.value)}
          className="opacity-50 focus:opacity-100 w-full py-4 px-2"
        >
          blog
        </textarea>
      </div>

      <div className="lg:flex lg:flex-col lg:w-1/2">
        <h2 className="text-left text-[#4699C2] font-bold py-2">{t('Img')} </h2>

        <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
          className="opacity-50  bg-[#4699C2]"
        />
      </div>

      <div className="flex flex-row justify-center py-4">
        <input
          type="submit"
          value={t('Post')}
          className="bg-[#4699C2] cursor-pointer text-white fong-bold w-24 py-3 rounded-full mx-4 font-bold hover:bg-[#026FC2] hover:shadow-lg focus:bg-[#026FC2] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#026FC2] active:shadow-lg transition duration-150 ease-in-out"
        />
        <input
          type="reset"
          value={t('Cancel')}
          className="bg-[#4699C2] cursor-pointer lg:bg-white hover:bg-[#026FC2] hover:text-white hover:shadow-lg focus:bg-[#026FC2] focus:shadow-lg focus:outline-none focus:ring-0 focus:text-white active:bg-[#026FC2] active:shadow-lg transition duration-150 ease-in-out text-white lg:text-[#4699C2] lg:border lg:border-[#4699C2] fong-bold w-24 py-3 rounded-full font-bold"
        />
      </div>
    </motion.form>
  );
}

export default WriteForm;
