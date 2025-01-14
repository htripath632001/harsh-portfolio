// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-red-600 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Harsh's Portfolio</Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;