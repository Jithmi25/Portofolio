import React from "react";
import { Home, ArrowLeft } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function NotFoundPage() {
  const handleGoBack = () => {
    window.history.back();
  };

  const handleGoHome = () => {
    // In a real app, you would use your router's navigation
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-800 mb-4 animate-bounce">
            404
          </h1>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Message */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
            The page you are looking for might have been moved, deleted, or
            never existed.
          </p>
        </div>

        {/* Illustration */}
        <div className="mb-8">
          <div className="w-64 h-48 sm:w-80 sm:h-56 mx-auto mb-6">
            <DotLottieReact
              src="https://lottie.host/d4d86b79-5663-40f6-a574-df2dbb5de7d4/5s1hLAVkch.lottie"
              loop
              autoplay
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleGoBack}
            className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            <ArrowLeft size={20} />
            Return
          </button>

          <button
            onClick={handleGoHome}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            <Home size={20} />
            Home page
          </button>
        </div>
      </div>
    </div>
  );
}
