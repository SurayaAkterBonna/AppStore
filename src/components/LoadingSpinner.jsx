import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-opacity-25 rounded-full animate-spin border-t-blue-700"></div>
      <p className="ml-4 text-lg text-gray-600">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;