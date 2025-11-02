import React from 'react';
import AppCard from '../components/AppCard';
import { useInstallation } from '../hooks/useInstallation';
import { FaDownload } from 'react-icons/fa';

const MyInstallation = () => {
  const { installedApps, uninstallApp } = useInstallation();

  return (
    <div className="space-y-10">
     
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
         Your Installed Apps
        </h1>
        <p className="text-lg text-gray-600">
          Explore All Trending Apps on the Market Developed by Us
        </p>
      </div>

      
      <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between">
        <div className="flex items-center text-lg font-bold text-gray-700">
         <span className="text-black-600 font-bold ml-2 mr-2">{installedApps.length}</span>
        <h3>Apps Found</h3> 
        </div>
      </div>

     
      <section>
        {installedApps.length === 0 ? (
          <div className="text-center py-10 bg-white rounded-xl shadow-md">
            <p className="text-2xl font-semibold text-gray-500">No Apps Installed Yet</p>
            <p className="text-gray-500 mt-2">
              Visit the <a href="/apps" className="text-blue-600 hover:underline">All Apps</a> page to start your collection!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {installedApps.map((app) => (
              <AppCard 
                key={app.id} 
                app={app} 
                onUninstall={uninstallApp} 
                isInstalledPage={true} 
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default MyInstallation;