import React, { useState } from 'react';

const Meeting = ({ attendees, time, agenda, outcome }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-l-4 border-blue-600 bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <button 
        type="button"
        onClick={() => setIsExpanded(isExpanded)}
        className="w-full text-left focus:outline-none"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-blue-800">Meeting Details</h3>
        </div>
      </button>

      <div 
        className={`grid transition-all duration-300 ease-in-out ${
          !isExpanded ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-3">
            <div className="flex items-start">
              <span className="font-semibold text-gray-700 min-w-[96px] flex-shrink-0">Attendees:</span>
              <span className="text-gray-600">{attendees}</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-gray-700 min-w-[96px] flex-shrink-0">Time:</span>
              <span className="text-gray-600">{time}</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-gray-700 min-w-[96px] flex-shrink-0">Agenda:</span>
              <span className="text-gray-600">{agenda}</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-gray-700 min-w-[96px] flex-shrink-0">Outcome:</span>
              <span className="text-gray-600">{outcome}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meeting;