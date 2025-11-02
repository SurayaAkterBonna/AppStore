import React from 'react';
import { Link } from 'react-router-dom';
import { formatNumber } from '../utils/helpers';


const DownloadIcon = () => <img src="/assets/icon-downloads.png" alt="Downloads" className="w-4 h-4 mr-1" />;
const StarIcon = () => <img src="/assets/icon-ratings.png" alt="Rating" className="w-4 h-4 mr-1" />;

const AppCard = ({ app, onUninstall, isInstalledPage = false }) => {
  const { id, image, title, downloads, ratingAvg } = app;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 ">
      <Link to={`/app/${id}`} className="block">
        <div className="p-4 sm:p-6">
          <div className="flex flex-col items-center">
            <img
              src={image}
              alt={title}
              className="w-[285px] h-[285px] rounded-2xl object-cover shadow-md"
              loading="lazy"
            />
            <h3 className="mt-4 text-center text-lg font-semibold text-gray-800 truncate w-full">
              {title}
            </h3>
            
            <div className="flex items-center justify-between mt-2 w-full px-2"> {/* Changed to justify-between */}
              <div className="flex items-center text-sm text-gray-500">
                <DownloadIcon /> {/* Using your download icon */}
                <span>{formatNumber(downloads)}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <StarIcon /> {/* Using your star icon */}
                <span>{ratingAvg || 'N/A'}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
      
      {isInstalledPage && onUninstall && (
        <div className="p-4 border-t border-gray-100">
          <button
            onClick={() => onUninstall(id, title)}
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-150 font-medium"
          >
            Uninstall
          </button>
        </div>
      )}
    </div>
  );
};

export default AppCard;