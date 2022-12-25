import React from 'react';

import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="flex gap-20 text-3xl">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/signup">Signup</NavLink>
    </div>
  );
}
