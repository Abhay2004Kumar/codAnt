import React from "react";
import fpic from "../assets/project/file.svg";

const RepositoryList = () => {
  const repositories = [
    { name: "design-system", type: "Public", size: "7320 KB", updated: "1 day ago", language: "React" },
    { name: "codeant-ci-app", type: "Private", size: "5871 KB", updated: "2 days ago", language: "JavaScript" },
    { name: "analytics-dashboard", type: "Private", size: "4521 KB", updated: "5 days ago", language: "Python" },
    { name: "mobile-app", type: "Public", size: "3096 KB", updated: "3 days ago", language: "Swift" },
    { name: "e-commerce-platform", type: "Private", size: "6210 KB", updated: "6 days ago", language: "Java" },
    { name: "blog-website", type: "Public", size: "1876 KB", updated: "4 days ago", language: "HTML/CSS" },
    { name: "social-network", type: "Private", size: "5432 KB", updated: "7 days ago", language: "PHP" },
  ];

  return (
    <div className="bg-white shadow rounded-lg border border-gray-200">
      {/* Header Section */}
      <div className="bg-white shadow p-4 flex justify-between items-center border-b">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Repositories</h2>
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

      {/* Search Input */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Search Repositories"
          className="w-full border p-2 rounded-md mb-4"
        />
      </div>

      {/* Repository List */}
      <div className="p-4 space-y-4">
        {repositories.map((repo, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-md hover:bg-gray-50"
          >
            <div className="flex-1">
              <h3 className="flex flex-wrap font-medium text-gray-800">{repo.name}</h3>
              <div className="flex items-center text-sm text-gray-500 mt-1 space-x-2">
                <span>{repo.language}</span>
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="flex items-center space-x-1">
                  <img src={fpic} alt="File Icon" className="w-4 h-4" />
                  <span>{repo.size}</span>
                </span>
                <span>· Updated {repo.updated}</span>
              </div>
            </div>
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${
                repo.type === "Public"
                  ? "bg-blue-100 text-blue-600"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {repo.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepositoryList;
