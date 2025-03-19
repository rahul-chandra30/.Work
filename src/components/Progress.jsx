import React from 'react';

const Progress = ({ task, percentage, notes }) => {
  // Handle both string (e.g., "75%") and number (e.g., 75) inputs
  const percentageNum = typeof percentage === 'string' 
    ? parseInt(percentage.replace('%', ''), 10) 
    : parseInt(percentage, 10) || 0; // Fallback to 0 if invalid
  const progressWidth = `${percentageNum}%`;
  const isMilestone = notes.startsWith('Milestone:');
  const milestoneText = isMilestone ? notes.slice('Milestone:'.length).trim() : null;

  const colors = percentageNum <= 25 
    ? { 
        bar: 'bg-gradient-to-r from-cyan-500 to-blue-500',
        text: 'text-blue-600',
        bg: 'bg-gradient-to-r from-blue-50 to-white'
      }
    : percentageNum <= 75 
    ? { 
        bar: 'bg-gradient-to-r from-amber-500 to-yellow-500',
        text: 'text-amber-600',
        bg: 'bg-gradient-to-r from-amber-50 to-white'
      }
    : { 
        bar: 'bg-gradient-to-r from-emerald-500 to-teal-500',
        text: 'text-emerald-600',
        bg: 'bg-gradient-to-r from-emerald-50 to-white'
      };

  return (
    <div className={`progress my-6 p-6 rounded-lg shadow-md ${colors.bg}`}>
      <h3 className="text-xl font-bold text-gray-800 mb-4">📊 {task}</h3>
      <div className="space-y-4">
        <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full ${colors.bar} flex items-center justify-between px-2 text-white text-sm transition-all duration-300`}
            style={{ width: progressWidth }}
          >
            <span>🎯</span>
            <span>{percentageNum}%</span> {/* Display as percentage */}
            <span>🏁</span>
          </div>
        </div>
        {isMilestone ? (
          <div className="flex items-center space-x-2 text-gray-700">
            <span className="text-2xl">🌟</span>
            <p><strong>Milestone:</strong> {milestoneText}</p>
          </div>
        ) : (
          <p className={`${colors.text} text-sm`}>{notes}</p>
        )}
      </div>
    </div>
  );
};

export default Progress;