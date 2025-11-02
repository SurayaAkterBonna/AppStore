import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import AppCard from '../components/AppCard';
import APP_DATA from '../assets/data';
import MobileHeroImage from '../assets/asset/hero.png'; 

const Home = () => {
  const navigate = useNavigate();

  const stats = [
    { title: 'Total Downloads', value: 29.6, unit: 'M', subtitle: '21% More Than Last Month' },
    { title: 'Total Reviews', value: 906, unit: 'K', subtitle: '46% More Than Last Month' },
    { title: 'Active Apps', value: 132, unit: '+', subtitle: '31 More Will Launch' },
  ];

  const topApps = APP_DATA.slice(0, 8);

  return (
    <div className="space-y-16">
      
      <section className="bg-grey text-center pt-8">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
          We Build 
          <h2>
           <span className="text-purple-600 mr-4">Productive</span>
           Apps
          </h2>
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. 
          Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

        
        <div className="flex justify-center space-x-4 mb-16">
          <a
            href="https://play.google.com/store" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300 font-semibold"
          >
            <FaGooglePlay className="w-5 h-5 mr-2 text-green-600" />
            Google Play
          </a>
          <a
            href="https://www.apple.com/app-store/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300 font-semibold"
          >
            <FaApple className="w-5 h-5 mr-2 text-indigo-700" />
            App Store
          </a>
        </div>

      
        <div className="relative w-full flex justify-center">
          <img
            src={MobileHeroImage}
            alt="App Screenshot"
            className="w-[85%] md:w-[40%] rounded-3xl shadow-2xl relative z-10"
          />
        </div>
      

      
       <section className="bg-purple-500 py-20  max-w-1600px">
        <h3 className="text-4xl font-extrabold text-white text-center mb-12">
          Trusted By Millions, Built For You
        </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto px-6">
           {stats.map((stat) => (
            <div key={stat.title} className="text-center text-white">
              <p className="text-lg opacity-70 mb-2">{stat.title}</p>
              <h4 className="text-7xl font-bold mb-1">
                {stat.value.toLocaleString()}
                <span className="text-7xl font-bold mb-1">{stat.unit}</span>
              </h4>
              <p className="text-md font-medium opacity-80">{stat.subtitle}</p>
            </div>
             ))}
          </div>
        </section>
      </section>
     
      <section className="bg-white rounded-lg shadow-md py-8 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
            Trending Apps
          </h2>
          <p className="text-md text-gray-500">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {topApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/apps')}
            className="px-8 py-3 bg-purple-500 text-white rounded-lg transition duration-300 shadow-lg font-semibold"
          >
            Show All
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
