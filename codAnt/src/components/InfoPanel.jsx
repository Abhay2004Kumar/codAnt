import React from "react";
import ant from "../assets/project/ant.png"; // Replace with the actual icon path

const InfoPanel = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 space-y-6">
      {/* Title Section */}
      <div className="flex items-center space-x-3">
        <img
          src={ant}
          alt="AI Logo"
          className="w-8 h-8"
        />
        <h3 className="text-lg font-semibold text-gray-800">
          AI to Detect & Autofix Bad Code
        </h3>
      
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="flex flex-col">
          <span className="text-xl font-bold text-gray-900">30+</span>
          <span className="text-sm text-gray-500">Language Support</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-gray-900">10K+</span>
          <span className="text-sm text-gray-500">Developers</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-gray-900">100K+</span>
          <span className="text-sm text-gray-500">Hours Saved</span>
        </div>
      </div>

      {/* Issues Fixed Section */}
      <div className="bg-gray-50 rounded-lg p-4 flex items-center space-x-4 shadow-sm">
        <div className="w-10 h-10 flex items-center justify-center bg-purple-100 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-purple-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </div>
        <div>
          <p className="text-sm text-gray-500">Issues Fixed</p>
          <p className="text-2xl font-bold text-gray-900">500K+</p>
        </div>
        <div className="ml-auto text-blue-600 text-sm font-medium flex items-center space-x-1">
          <span>⬆</span>
          <span>14% This week</span>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;
