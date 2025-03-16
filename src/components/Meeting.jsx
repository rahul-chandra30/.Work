import React from 'react';

const Meeting = ({ attendees, time, agenda, outcome }) => {
  return (
    <div className="border-l-4 border-blue-600 bg-white p-6 my-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <h3 className="text-xl font-bold text-blue-800 mb-4">Meeting Details</h3>
      <div className="space-y-3">
        <div className="flex items-start">
          <span className="font-semibold text-gray-700 w-24">Attendees:</span>
          <span className="text-gray-600">{attendees}</span>
        </div>
        <div className="flex items-start">
          <span className="font-semibold text-gray-700 w-24">Time:</span>
          <span className="text-gray-600">{time}</span>
        </div>
        <div className="flex items-start">
          <span className="font-semibold text-gray-700 w-24">Agenda:</span>
          <span className="text-gray-600">{agenda}</span>
        </div>
        <div className="flex items-start">
          <span className="font-semibold text-gray-700 w-24">Outcome:</span>
          <span className="text-gray-600">{outcome}</span>
        </div>
      </div>
    </div>
  );
};

export default Meeting;