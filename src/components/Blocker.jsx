import React from 'react';

const Blocker = ({ description, reportedBy }) => {
  return (
    <div className="border-l-4 border-red-600 bg-white p-6 my-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <h3 className="text-xl font-bold text-red-800 mb-4">Blocker</h3>
      <div className="space-y-3">
        <div className="flex items-start">
          <span className="font-semibold text-gray-700 w-24">Issue:</span>
          <span className="text-gray-600">{description}</span>
        </div>
        <div className="flex items-start">
          <span className="font-semibold text-gray-700 w-24">Reported By:</span>
          <span className="text-gray-600">{reportedBy}</span>
        </div>
      </div>
    </div>
  );
};

export default Blocker;