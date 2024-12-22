import React from "react";
import { AiFillFolder, AiOutlineSetting, AiOutlineQuestionCircle } from "react-icons/ai";
import { CiCloudOn } from "react-icons/ci";
import ant from "../assets/project/ant.png"

const Sidebar = () => {
  return (
    <div className="h-full bg-white shadow-lg p-4 w-64">
      <div className="flex items-center space-x-3 mb-8">
        <img
          src={ant} // Replace with your logo path
          alt="Logo"
          className="w-10 h-10"
        />
        <h1 className="text-xl font-bold">CodeAnt AI</h1>
      </div>
      <div className="space-y-4">
        <button className="flex items-center space-x-3 text-blue-500 font-medium hover:bg-gray-100 p-2 rounded">
          <AiFillFolder className="w-5 h-5" />
          <span>Repositories</span>
        </button>
        
        <button className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 p-2 rounded">
          <AiOutlineSetting className="w-5 h-5" />
          <span>AI Code Review</span>
        </button>
        <button className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 p-2 rounded">
          <CiCloudOn className="w-5 h-5" />
          <span>Cloud Security</span>
        </button>
       
        <button className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 p-2 rounded">
          <AiOutlineQuestionCircle className="w-5 h-5" />
          <span>How to Use</span>
        </button>
      </div>
      <div className="mt-auto">
        <div className="space-y-2">
          <button className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 p-2 rounded">
            <span>Support</span>
          </button>
          <button className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 p-2 rounded">
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
