import React from 'react';

const Blocker = ({ description, reportedBy }) => {
  return (
    <div className="my-6 bg-gradient-to-r from-red-50 to-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 relative">
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 to-rose-600"></div>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <span className="text-3xl animate-pulse">🚨</span>
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="text-xl font-bold text-red-800">{description}</h3>
            <p className="text-sm text-red-600 flex items-center">
              <span className="mr-2">👤</span>
              Reported by: {reportedBy || 'Unknown'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blocker;