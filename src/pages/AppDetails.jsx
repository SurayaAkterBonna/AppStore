import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaInfoCircle } from 'react-icons/fa';
import AppChart from '../components/AppChart';
import APP_DATA from '../assets/data';
import { formatNumber } from '../utils/helpers';
import { useInstallation } from '../hooks/useInstallation';

const DownloadIcon = ({ className = "w-5 h-5 mr-2" }) => (
  <img 
    src="/assets/icon-downloads.png"
    alt="Downloads" 
    className={className} 
  />
);

const StarIcon = ({ className = "w-5 h-5 mr-2" }) => (
  <img 
    src="/assets/icon-ratings.png"
    alt="Rating" 
    className={className} 
  />
);

const ReviewIcon = ({ className = "w-5 h-5 mr-2" }) => (
  <img 
    src="/assets/icon-review.png"
    alt="Reviews" 
    className={className} 
  />
);

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const appId = parseInt(id);
  const app = APP_DATA.find((a) => a.id === appId);
  const { isInstalled, installApp } = useInstallation();
  
  const installed = isInstalled(appId);

  if (!app) {
    return (
      <div className="text-center py-20">
        <img
          src="public/assets/App-Error.png"
          alt="App Not Found"
          className="w-48 mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold text-red-500">App Not Found</h1>
        <p className="text-xl text-gray-600 mt-4">
          The application with ID "{id}" could not be located.
        </p>
        <button
          onClick={() => navigate('/apps')}
          className="mt-6 btn-primary"
        >
          Go to All Apps
        </button>
      </div>
    );
  }

  const handleInstall = () => {
    installApp(app);
  };

  return (
    <div className="space-y-12">
      <section className="bg-white p-8 rounded-xl shadow-lg flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8">
        <div className="flex-shrink-0 flex justify-center lg:block">
          <img
            src={app.image}
            alt={app.title}
            className="w-36 h-36 rounded-3xl object-cover shadow-xl border border-gray-100"
          />
        </div>

        <div className="flex-grow">
          <h1 className="text-4xl font-extrabold text-gray-900">{app.title}</h1>
          <p className="text-xl text-gray-600 mt-1">By {app.companyName}</p>

          <div className="flex items-center space-x-6 mt-4 text-gray-700 font-medium">
            <div className="flex items-center">
              <DownloadIcon />
              <span>{formatNumber(app.downloads)} Downloads</span>
            </div>
            <div className="flex items-center">
              <StarIcon />
              <span>{app.ratingAvg} Average Rating</span>
            </div>
            <div className="flex items-center">
              <ReviewIcon />
              <span>{formatNumber(app.reviews)} Reviews</span>
            </div>
          </div>

          

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`mt-6 px-8 py-3 rounded-full text-white font-semibold transition duration-150 shadow-md ${
              installed
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {installed ? 'Installed' : 'Install '}
          </button>
        </div>
      </section>

      <section className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
          Ratings
        </h2>
        <div className="h-80 w-full">
          <AppChart data={app.ratings} /> 
        </div>
      </section>

      <section className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
          <FaInfoCircle className="w-6 h-6 mr-2 text-indigo-500" />
          Description
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
          {app.description}
          <br /><br />
          The app is frequently updated with new features and stability improvements. We are committed to providing the best user experience across all devices. Download today and see why millions have made this their go-to app!
        </p>
      </section>
    </div>
  );
};

export default AppDetails;