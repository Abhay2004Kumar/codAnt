import React from "react";
import InfoPanel from "../../components/InfoPanel";
import SignInForm from "../../components/SignInForm/SignInForm";

const SignInPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header Section */}
    

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start w-full max-w-6xl mx-auto mt-10 lg:mt-16 px-4 lg:px-0 space-y-10 lg:space-y-0 lg:space-x-16">
        {/* Left Section (Info Panel) */}
        <div className="flex-1">
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <InfoPanel />
          </div>
        </div>

        {/* Right Section (Sign-In Form) */}
        <div className="flex-shrink-0 w-full max-w-md">
          <SignInForm/>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
