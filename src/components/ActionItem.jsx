import React from 'react';

const ActionItem = ({ description, assignee, dueDate }) => {
  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 my-6 rounded-lg shadow-md border border-orange-200">
      <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
        Action Required
      </h3>
      <div className="space-y-3">
        <div className="flex items-start">
          <span className="font-semibold text-orange-700 w-28">Description:</span>
          <span className="text-orange-600">{description}</span>
        </div>
        <div className="flex items-center">
          <span className="font-semibold text-orange-700 w-28">Assignee:</span>
          <span className="text-orange-600">{assignee}</span>
        </div>
        <div className="flex items-center">
          <span className="font-semibold text-orange-700 w-28">Due Date:</span>
          <span className="text-orange-600">{dueDate}</span>
        </div>
      </div>
    </div>
  );
};

export default ActionItem;