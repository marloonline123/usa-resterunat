
import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-restaurant-cream">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-restaurant-red mb-4">404</h1>
        <p className="text-2xl font-bold mb-4">Page Not Found</p>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back to our delicious menu.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 bg-restaurant-blue text-white rounded-lg hover:bg-blue-800 transition-colors"
        >
          <Home className="mr-2 h-5 w-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
