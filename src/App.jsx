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
import SingleBlog from './pages/SingleBlog';
import Blog from './pages/Blog';
import Footer from './components/Footer';
import Write from './pages/Write';
import './App.css';
import Navbar from './components/navigation/Navbar';

function App() {
  const [user, setUser] = useState([]);
  const [currentUser] = useAuthState(auth);

  console.log(currentUser && currentUser.uid);

  useEffect(() => {
    const getUser = async () => {
      const docRef = await doc(db, 'users', currentUser.uid);
      try {
        await onSnapshot(docRef, (docc) => {
          setUser({
            ...docc.data(),
            id: docc.id,
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
        <Route path="/write" element={<Write user={user && user} />} />
        <Route path="/singleblog/:id" element={<SingleBlog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
