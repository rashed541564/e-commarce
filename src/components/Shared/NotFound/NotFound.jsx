import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1C2B35] text-white px-4">
      <div className="text-7xl animate-bounce mb-6">😵‍💫</div>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8 text-center max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-white text-[#1C2B35] font-semibold rounded-2xl shadow-md hover:bg-gray-100 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
