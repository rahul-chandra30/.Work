import React from 'react';

const Milestone = ({ date, title, details }) => {
  return (
    <div className="my-6 bg-gradient-to-r from-emerald-50 via-teal-50 to-green-50 rounded-lg shadow-lg p-6 relative overflow-hidden transition-all duration-300 hover:shadow-xl border-l-4 border-emerald-500">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Milestone</h3>
      <div className="space-y-4">
        <div className="flex items-start space-x-4">
          <span className="text-2xl">🌟</span>
          <div className="flex-1">
            <div className="font-semibold text-emerald-700">{title}</div>
            <p className="text-sm text-emerald-600 mt-1">{date}</p>
          </div>
        </div>
        <div className="ml-12">
          <p className="text-gray-700">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default Milestone;