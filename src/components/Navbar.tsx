import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import mawrk from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full z-50 bg-[#372d3b] text-white border-b-4 border-yellow-400 font-primary fixed top-0 left-0 right-0">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + Text */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={mawrk} alt="Logo" className="h-10 w-auto" />
          <span className="text-3xl text-yellow-300 font-primary">mawrk</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex space-x-6 text-lg font-primary">
          <li>
            <a href="#about" className="text-yellow-200 hover:text-yellow-600 transition-colors duration-200">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-yellow-200 hover:text-yellow-600 transition-colors duration-200">
              Projects
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6 text-yellow-300" /> : <Menu className="h-6 w-6 text-yellow-300" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-3 text-lg font-primary">
            <li>
              <a href="#about" className="text-yellow-200 hover:text-yellow-600 transition-colors duration-200">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="text-yellow-200 hover:text-yellow-600 transition-colors duration-200">
                Projects
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
