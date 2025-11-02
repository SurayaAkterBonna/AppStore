import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

const Header = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Apps', path: '/apps' },
    { name: 'My Installation', path: '/my-installation' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/assets/logo.png" 
              alt="AppSphere Logo"
              className="h-10 w-auto"
            />
            <span className="text-2xl font-extrabold text-purple-500 tracking-tight">
              Hero.IO
            </span>
          </Link>

         
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-purple-600 transition duration-150 ease-in-out font-medium text-lg ${
                    isActive ? 'text-purple-600' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          
          <a
            href="https://github.com/SurayaAkterBonna"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-5 py-2 text-white bg-purple-500 rounded-lg hover:bg-purple-600 transition duration-150 ease-in-out shadow-md font-medium"
          >
            <FaGithub className="w-5 h-5 mr-2" />
            Contribute
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
