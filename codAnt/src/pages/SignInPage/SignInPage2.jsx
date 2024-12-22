import React from "react";
import InfoPanel from "../../components/InfoPanel";
import SignInForm2 from "../../components/SignInForm/SignInForm2";


const SignInPage2 = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <div className="flex flex-wrap justify-center items-start w-full max-w-6xl mt-8 space-x-8">
        {/* Left Section */}
        <div className="flex flex-col space-y-6 mt-8"> {/* Add mt-4 or adjust as needed */}
          <InfoPanel />
        </div>

        {/* Right Section */}
        <div className="w-full max-w-md mt-8">
         <SignInForm2/>
        </div>
      </div>
    </div>
  );
};

export default SignInPage2;
