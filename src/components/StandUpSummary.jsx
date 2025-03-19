import React from 'react';

const StandUpSummary = ({ date, team, summary }) => {
  const isList = summary.includes(',');
  const summaryItems = isList ? summary.split(',').map(item => item.trim()) : [summary];

  return (
    <div className="my-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg shadow-lg transform hover:scale-102 transition-all duration-300">
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-purple-800 flex items-center">
            <span className="text-2xl mr-2">🎯</span>
            Daily Standup
          </h3>
          <div className="text-sm text-indigo-600 font-medium">{date}</div>
        </div>
        <div className="bg-white/50 rounded-lg p-4">
          <div className="text-purple-700 font-medium mb-2">Team: {team}</div>
          {isList ? (
            <ul className="space-y-2">
              {summaryItems.map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-indigo-500 mt-1">▹</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700">{summary}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StandUpSummary;