import React from "react";
import { Link } from "react-router";

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center p-55">
      <div className="text-center">
        <h1 className="mb-4 text-9xl font-bold text-green-450">404</h1>
        <h2 className="mb-2 text-2xl font-bold">Page Not Found</h2>
        <p className="mb-8 text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/home"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-450 px-6 py-3 text-base font-medium text-white hover:bg-green-700 focus:ring-2 focus:ring-green-450 focus:ring-offset-2 focus:outline-none"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
