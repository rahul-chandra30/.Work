import React from 'react';

const Task = ({ title, assignee, status }) => {
  return (
    <div className="border-l-4 border-green-600 bg-green-50 p-6 my-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <h3 className="text-xl font-bold text-green-800 mb-4">Task</h3>
      <div className="space-y-3">
        <div className="flex items-start">
          <span className="font-semibold text-gray-700 w-24">Title:</span>
          <span className="text-gray-600">{title}</span>
        </div>
        <div className="flex items-start">
          <span className="font-semibold text-gray-700 w-24">Assignee:</span>
          <span className="text-gray-600">{assignee}</span>
        </div>
        <div className="flex items-start">
          <span className="font-semibold text-gray-700 w-24">Status:</span>
          <span className="text-gray-600">{status}</span>
        </div>
      </div>
    </div>
  );
};

export default Task;