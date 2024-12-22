import React from "react";

import Sidebar from "../components/Sidebar";

import RepositoryList from "../components/RepositoryList";

const RepositoryScreen = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar/>

      {/* Main Content */}
      <div className="flex flex-col flex-grow p-4 ">
          <RepositoryList/>
       
      </div>
    </div>
  );
};

export default RepositoryScreen;
