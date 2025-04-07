import mawrk from '../assets/Logo ni Mark.png';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full z-50 bg-[#372d3b] text-white border-b-4 border-yellow-400 font-primary">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + Text */}
        <div className="flex items-center space-x-3">
          <img src={mawrk} alt="Logo" className="h-10 w-auto" />
          <span className="text-3xl text-yellow-300 font-primary">mawrk</span>
        </div>

        {/* Navigation links */}
        <ul className="hidden md:flex space-x-6 text-lg font-primary">
          <li><a href="#about" className="text-yellow-200 hover:text-yellow-600 transition-colors duration-200 font-primary">About</a></li>
          <li><a href="#projects" className="text-yellow-200 hover:text-yellow-600 transition-colors duration-200 font-primary">Projects</a></li>
          <li><a href="#contact" className="text-yellow-200 hover:text-yellow-600 transition-colors duration-200 font-primary">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
