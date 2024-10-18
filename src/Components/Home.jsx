import React from 'react';
import HomeIcon from '../assets/Home.jpg';

const Home = () => {
  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-2 gap-12 h-screen px-6 pt-4 items-center overflow-hidden"
      style={{ marginTop: '-70px' }} // Adjust the margin to move everything upward
    >
      {/* Left Text Section */}
      <div className="flex flex-col justify-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight ml-10">
          Welcome to the MDC Community!
        </h1>
        <p className="text-xl md:text-2xl font-medium text-gray-700 mb-6 ml-10 pt-5">
          At Meta Developers Club, we are passionate about innovation, technology, and collaboration. 
          Our goal is to empower students and developers by providing resources, mentorship, and opportunities to grow. 
          Whether you're a beginner or an experienced developer, join us to enhance your skills, share knowledge, and 
          be part of a thriving tech community.
        </p>
        <div className="flex space-x-6 ml-10">
          <button className="bg-indigo-500 text-white font-semibold py-2 px-11 rounded-md hover:bg-indigo-700">
            Sign Up
          </button>
          <button className="border border-gray-400 text-gray-700 font-semibold py-2 px-10 rounded-md hover:bg-gray-200">
            View More
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex justify-center items-center">
        <img 
          src={HomeIcon} 
          alt="MDC Coding Workshop" 
          className="w-full max-w-lg md:max-w-xl lg:max-w-2xl h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Home;

