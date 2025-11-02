import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center bg-white rounded-xl shadow-lg p-10">
      <img
        src="public/assets/error-404.png" 
        alt="404 Error"
        className="w-80 h-auto mb-6"
      />
      <h1 className="text-5xl font-extrabold text-gray-900 mb-3">
        <span></span>Oops, page not found!
      </h1>
      <p className="text-xl text-gray-600 max-w-lg">
        The page you are looking for is not available.
      </p>
      <button
        onClick={() => navigate('/')}
        className="mt-8 btn-primary"
      >
        Go Back!
      </button>
    </div>
  );
};

export default ErrorPage;