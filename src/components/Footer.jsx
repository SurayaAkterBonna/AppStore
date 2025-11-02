import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-16 border-t-4 " >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
         
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img
                src="/assets/logo.png"
                alt="AppSphere Logo"
                className="h-10 w-auto" 
              />
              <span className="text-2xl font-extrabold text-white tracking-tight">
                Hero.IO
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Your comprehensive hub for discovering, installing, and managing the best mobile applications.
            </p>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold text-indigo-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition duration-150 text-sm">Home</Link></li>
              <li><Link to="/apps" className="text-gray-400 hover:text-white transition duration-150 text-sm">All Apps</Link></li>
              <li><Link to="/my-installation" className="text-gray-400 hover:text-white transition duration-150 text-sm">My Installs</Link></li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold text-indigo-400 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-150 text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-150 text-sm">Terms of Service</a></li>
            </ul>
          </div>


          <div>
            <h3 className="text-lg font-semibold text-indigo-400 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="mailto:contact@appsphere.com" className="text-gray-400 hover:text-indigo-400 transition duration-150"><FaEnvelope className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-150"><FaTwitter className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-150"><FaFacebook className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-150"><FaLinkedin className="w-6 h-6" /></a>
            </div>
          </div>
        </div>

      
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} AppSphere. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;