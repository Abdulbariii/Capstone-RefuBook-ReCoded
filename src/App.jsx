import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { db, auth } from './firebase';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Blog from './pages/Blog';
import Write from './pages/Write';
import './App.css';
import Navbar from './components/navigation/Navbar';

function App() {
  const [user, setUser] = useState([]);
  const [currentUser] = useAuthState(auth);

  useEffect(() => {
    const getUser = async () => {
      const docRef = await doc(db, 'users', currentUser.uid);
      try {
        await onSnapshot(docRef, (doc) => {
          setUser({
            ...doc.data(),
            id: doc.id,
          });
        });
      } catch (e) {
        console.log(e);
      }
    };
    getUser();
  }, [currentUser]);

  return (
    <div className="App">
      <Navbar userInfo={user} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile user={user && user} />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </div>
  );
}

export default App;
