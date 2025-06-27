import React from 'react';
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';
import Reservation from './Reservation';

const Navbar = () => (
  <nav className="bg-green-800 text-white shadow sticky top-0 z-50">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Lemon Tree Logo" className="h-10 w-10 object-contain" />
        <span className="text-2xl font-bold text-yellow-300">Lemon Tree</span>
      </div>
      
      <div className="space-x-6">
        {['home', 'about', 'menu', 'contact'].map((sec) => (
          <a
            key={sec}
            href={`#${sec}`}
            className="hover:text-yellow-300 transition duration-200"
          >
            {sec.charAt(0).toUpperCase() + sec.slice(1)}
          </a>
        ))}
      </div>
      <Link to="/reservation" element={<Reservation/>} className='bg-yellow-300 text-green-800 p-3 rounded-lg font-medium shadow'>Reserve a table</Link>
    </div>
  </nav>
);


export default Navbar;
