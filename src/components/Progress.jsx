import React from 'react';

const Progress = ({ task, percentage, notes }) => {
  const percentageNum = parseInt(percentage.replace('%', ''));
  const progressWidth = `${percentageNum}%`;
  
  // Determine colors based on percentage
  const getProgressColors = (percent) => {
    if (percent <= 25) {
      return {
        text: 'text-blue-600',
        bg: 'bg-gradient-to-r from-blue-50 to-blue-100',
        bar: 'bg-gradient-to-r from-blue-400 to-blue-600'
      };
    } else if (percent > 25 && percent <= 75) {
      return {
        text: 'text-amber-600',
        bg: 'bg-gradient-to-r from-amber-50 to-amber-100',
        bar: 'bg-gradient-to-r from-amber-400 to-amber-600'
      };
    } else {
      return {
        text: 'text-emerald-600',
        bg: 'bg-gradient-to-r from-emerald-50 to-emerald-100',
        bar: 'bg-gradient-to-r from-emerald-400 to-emerald-600'
      };
    }
  };

  const colors = getProgressColors(percentageNum);
  
  return (
    <div className={`p-6 my-6 rounded-lg shadow-md ${colors.bg}`}>
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        Progress Tracker
      </h3>
      <div className="space-y-4">
        <div className="text-gray-800">{task}</div>
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${colors.text} ${colors.bg}`}>
              Progress
            </div>
            <div className="text-right">
              <span className={`text-xs font-semibold inline-block ${colors.text}`}>
                {percentage}
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
            <div style={{ width: progressWidth }}
                 className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center transition-all duration-300 ${colors.bar}`}>
            </div>
          </div>
        </div>
        <div className={`text-sm ${colors.text}`}>{notes}</div>
      </div>
    </div>
  );
};

export default Progress;