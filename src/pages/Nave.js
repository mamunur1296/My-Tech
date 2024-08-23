import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nave() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsOpen(false);
  };

  const NavItems = () => (
    <>
      <Link
        to="/"
        className={`${
          activeLink === 'Home' ? 'text-green-500' : 'text-gray-900'
        } px-3 py-2 rounded-md text-sm font-medium`}
        onClick={() => handleLinkClick('Home')}
      >
        Home
      </Link>
      <Link
        to="/About"
        className={`${
          activeLink === 'About' ? 'text-green-500' : 'text-gray-900'
        } px-3 py-2 rounded-md text-sm font-medium`}
        onClick={() => handleLinkClick('About')}
      >
        About
      </Link>
      <Link
        to="/Services"
        className={`${
          activeLink === 'Services' ? 'text-green-500' : 'text-gray-900'
        } px-3 py-2 rounded-md text-sm font-medium`}
        onClick={() => handleLinkClick('Services')}
      >
        Services
      </Link>
      <Link
        to="/Contact"
        className={`${
          activeLink === 'Contact' ? 'text-green-500' : 'text-gray-900'
        } px-3 py-2 rounded-md text-sm font-medium`}
        onClick={() => handleLinkClick('Contact')}
      >
        Contact
      </Link>
    </>
  );

  return (
    <nav className="bg-white shadow-md sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo or Brand Name */}
          <div className="flex-shrink-0 flex items-center">
            <span className="font-bold text-xl">Logo</span>
          </div>
          {/* Desktop Links */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavItems />
          </div>
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                // Icon for close menu
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Icon for open menu
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 flex flex-col pt-2 pb-3 space-y-1 sm:px-3">
            <NavItems />
          </div>
        </div>
      )}
    </nav>
  );
}
