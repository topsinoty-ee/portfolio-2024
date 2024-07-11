/** @format */

import React from 'react';
import { Button } from '../components/Button';
import { withNavbar } from '../Layout/withNavbar';

const ErrorPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-9xl text-red-500">404</div>
      <div className="text-3xl font-semibold">Oops! Something went wrong.</div>
      <div className="text-lg text-gray-700 mt-4">
        We apologize for the inconvenience. Our team has been notified and we're
        working to fix the issue.
      </div>
      <Button
        href="/"
        className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
        Go Home
      </Button>
    </div>
  );
};

export default withNavbar(ErrorPage, 'Error 404 ��');
