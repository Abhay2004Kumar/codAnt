import React, { useState } from "react";
import { AiFillGitlab } from "react-icons/ai"; // GitLab Icon
import { RiKey2Fill } from "react-icons/ri"; // SSO Icon

const SignInForm = () => {
  const [activeTab, setActiveTab] = useState("Self Hosted");

  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
      {/* Logo & Title */}
      <h1 className="text-3xl font-bold mb-6">CodeAnt AI</h1>
      <h2 className="text-xl font-medium mb-6">Welcome to CodeAnt AI</h2>

      {/* Tabs Section */}
      <div className="flex justify-center w-full mb-6">
        <button
          onClick={() => setActiveTab("SAAS")}
          className={`flex-1 py-2 text-center font-medium rounded-t-md ${
            activeTab === "SAAS"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          SAAS
        </button>
        <button
          onClick={() => setActiveTab("Self Hosted")}
          className={`flex-1 py-2 text-center font-medium rounded-t-md ${
            activeTab === "Self Hosted"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Self Hosted
        </button>
      </div>

      {/* Buttons Section */}
      <div className="space-y-4 w-full">
        <button className="flex items-center justify-center w-full py-3 border rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700">
          <AiFillGitlab className="text-red-500 h-5 w-5 mr-3" />
          Self Hosted GitLab
        </button>
        <button className="flex items-center justify-center w-full py-3 border rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700">
          <RiKey2Fill className="text-blue-500 h-5 w-5 mr-3" />
          Sign in with SSO
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

export default SignInForm;
