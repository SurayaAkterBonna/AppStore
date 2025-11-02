import React, { useState, useEffect } from 'react';
import AppCard from '../components/AppCard';
import APP_DATA from '../assets/data';
import { FaSearch, FaChevronDown } from 'react-icons/fa';
import LoadingSpinner from '../components/LoadingSpinner';

const AllApps = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('High-Low');
  const [filteredApps, setFilteredApps] = useState(APP_DATA);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setIsLoading(true);
    const handler = setTimeout(() => {
      let results = APP_DATA.filter((app) =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      
      results.sort((a, b) => {
        if (sortOrder === 'High-Low') {
          return b.downloads - a.downloads;
        } else {
          return a.downloads - b.downloads;
        }
      });

      setFilteredApps(results);
      setIsLoading(false);
    }, 300); 

    return () => clearTimeout(handler);
  }, [searchTerm, sortOrder]);

  return (
    <div className="space-y-10">
      
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          Our All Applications
        </h1>
        <p className="text-lg text-gray-600">
          Explore All Apps on Market developed by us. We code for Millions
        </p>
      </div>

    
      <div className="flex flex-col md:flex-row justify-between items-center bg-white p-6 rounded-xl shadow-md space-y-4 md:space-y-0">
        <p className="text-lg font-bold text black-700">
         <span className="text-black-700 font-bold mr-2">({filteredApps.length})</span>
          Apps Found
        </p>
        
        <div className="flex items-center space-x-4 w-full md:w-auto">
        
          <div className="relative w-full md:w-72">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search apps"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500 transition duration-150"
            />
          </div>
        </div>
      </div>

      
      <section>
        {isLoading ? (
          <LoadingSpinner />
        ) : filteredApps.length === 0 ? (
          <div className="text-center py-10 bg-white rounded-xl shadow-md">
            <p className="text-2xl font-semibold text-red-500">No App Found</p>
            <p className="text-gray-500 mt-2">
              Try searching with a different title or check your spelling.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">

            {filteredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default AllApps;