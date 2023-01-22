/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';
import { useDispatch } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { db, auth } from './firebase';

import { setUser } from './features/userSlice';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Community from './pages/Community';
import Profile from './pages/Profile';
import SingleBlog from './pages/SingleBlog';

import Footer from './components/Footer';
import Blog from './pages/Blog';
import Write from './pages/Write';
import Chat from './components/chat/Chat';

import './App.css';
import Navbar from './components/navigation/Navbar';
import i18n from './i18n';
import { useTranslation } from 'react-i18next';

function App() {
  const dispatch = useDispatch();
  const [currentUser] = useAuthState(auth);

  console.log(currentUser && currentUser.uid);

  useEffect(() => {
    const getUser = async () => {
      if (!currentUser) return;
      const docRef = await doc(db, 'users', currentUser.uid);
      try {
        await onSnapshot(docRef, (doc) => {
          const userData = {
            ...doc.data(),
            id: doc.id,
          };
          dispatch(setUser(userData));
        });
      } catch (e) {
        console.log(e);
      }
    };
    getUser();
  }, [currentUser, dispatch]);

  const [direction, setDirection] = useState('ltr');
  document.documentElement.dir = direction;

  return (
    <div className="App font-roboto ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/write" element={<Write />} />
        <Route path="/singleblog/:id" element={<SingleBlog />} />
        <Route path="/community" element={<Community />} />
      </Routes>
      <Chat />
      <Footer setDirection={setDirection} />
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { doc, onSnapshot } from 'firebase/firestore';
// import { db, auth } from './firebase';

// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import SignUp from './pages/SignUp';
// import Login from './pages/Login';
// import Profile from './pages/Profile';
// import Blog from './pages/Blog';
// import Write from './pages/Write';
// import './App.css';
// import Navbar from './components/navigation/Navbar';

// function App() {
//   const [user, setUser] = useState([]);
//   const [currentUser] = useAuthState(auth);

//   useEffect(() => {
//     const getUser = async () => {
//       const docRef = await doc(db, 'users', currentUser.uid);
//       try {
//         await onSnapshot(docRef, (doc) => {
//           setUser({
//             ...doc.data(),
//             id: doc.id,
//           });
//         });
//       } catch (e) {
//         console.log(e);
//       }
//     };
//     getUser();
//   }, [currentUser]);

//   return (
//     <div className="App">
//       <Navbar userInfo={user} />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/profile" element={<Profile user={user && user} />} />
//         <Route path="/write" element={<Write />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
