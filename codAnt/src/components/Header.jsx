import React from "react";

const Header = () => {
  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-bold">Repositories</h2>
        <p className="text-sm text-gray-500">33 total repositories</p>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-300">
          Refresh All
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          + Add Repository
        </button>
      </div>
    </div>
  );
};

export default Header;
