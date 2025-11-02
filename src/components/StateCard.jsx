import React from 'react';
import { FaChartLine, FaUsers, FaStar } from 'react-icons/fa';
import { formatNumber } from '../utils/helpers';

const StateCard = ({ title, value, unit, icon, color }) => {
  const IconComponent = icon === 'downloads' ? FaChartLine : icon === 'users' ? FaUsers : FaStar;

  return (
    <div className={`bg-white p-6 rounded-xl shadow-lg flex items-center justify-between transition-all duration-300 hover:shadow-xl border-l-4 ${color}`}>
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-3xl font-bold text-gray-900 mt-1">
          {formatNumber(value)}
          <span className="text-xl font-normal text-gray-500 ml-1">{unit}</span>
        </p>
      </div>
      <div className={`p-3 rounded-full ${color.replace('border-l-4', 'bg-opacity-10')}`}>
        <IconComponent className={`w-8 h-8 ${color.replace('border-l-4', 'text')}`} />
      </div>
    </div>
  );
};


export default StateCard;