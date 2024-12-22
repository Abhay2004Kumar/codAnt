import React, { useState } from "react";
import { AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { FaBitbucket, FaMicrosoft } from "react-icons/fa";

const SignInForm2 = () => {
  const [activeTab, setActiveTab] = useState("SAAS");

  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
      {/* Logo & Title */}
      <h1 className="text-3xl font-bold mb-4">CodeAnt AI</h1>
      <h2 className="text-xl font-medium mb-6">Welcome to CodeAnt AI</h2>

      {/* Tabs Section */}
      <div className="flex justify-center w-full mb-6">
        <button
          onClick={() => setActiveTab("SAAS")}
          className={`flex-1 py-2 text-center font-medium rounded-md ${
            activeTab === "SAAS"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          SAAS
        </button>
        <button
          onClick={() => setActiveTab("Self Hosted")}
          className={`flex-1 py-2 text-center font-medium rounded-md ${
            activeTab === "Self Hosted"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Self Hosted
        </button>
      </div>

      {/* Sign-In Buttons */}
      <div className="space-y-4 w-full">
        <button className="flex items-center justify-center w-full py-3 border rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700">
          <AiFillGithub className="text-black h-5 w-5 mr-3" />
          Sign in with GitHub
        </button>
        <button className="flex items-center justify-center w-full py-3 border rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700">
          <FaBitbucket className="text-blue-500 h-5 w-5 mr-3" />
          Sign in with Bitbucket
        </button>
        <button className="flex items-center justify-center w-full py-3 border rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700">
          <FaMicrosoft className="text-blue-600 h-5 w-5 mr-3" />
          Sign in with Azure DevOps
        </button>
        <button className="flex items-center justify-center w-full py-3 border rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700">
          <AiFillGitlab className="text-red-500 h-5 w-5 mr-3" />
          Sign in with GitLab
        </button>
      </div>

      {/* Privacy Policy */}
      <p className="text-sm text-gray-500 mt-6">
        By signing up, you agree to the{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Privacy Policy
        </a>.
      </p>
    </div>
  );
};

export default SignInForm2;
