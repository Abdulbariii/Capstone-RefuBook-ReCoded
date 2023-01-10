import React from 'react';
import { Routes, Route } from 'react-router';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Blog from './pages/Blog';
import Footer from './components/Footer';
import Write from './pages/Write';
import './App.css';
import Navbar from './components/navigation/Navbar';

function App() {
  return (
    <div className="App">
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
