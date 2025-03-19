import React from 'react';

const Shoutout = ({ person, reason }) => {
  return (
    <div className="my-6 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-lg shadow-lg p-6 relative overflow-hidden transition-all duration-300 hover:shadow-xl border border-amber-200">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Shoutout</h3>
      <div className="relative">
        <div className="flex items-start space-x-4">
          <span className="text-2xl">📣</span>
          <div className="flex-1">
            <div className="font-semibold text-amber-700">{person}</div>
            <p className="text-gray-700 mt-2">{reason}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shoutout;