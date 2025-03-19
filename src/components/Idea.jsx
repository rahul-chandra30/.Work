import React from 'react';

const Idea = ({ concept, priority, notes }) => {
  const priorityStyles = {
    High: {
      badge: 'bg-gradient-to-r from-red-500 to-rose-500 text-white',
      border: 'border-l-red-500',
      bg: 'bg-gradient-to-r from-red-50 to-rose-50'
    },
    Medium: {
      badge: 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white',
      border: 'border-l-amber-500',
      bg: 'bg-gradient-to-r from-amber-50 to-yellow-50'
    },
    Low: {
      badge: 'bg-gradient-to-r from-emerald-500 to-green-500 text-white',
      border: 'border-l-emerald-500',
      bg: 'bg-gradient-to-r from-emerald-50 to-green-50'
    }
  };
  const style = priorityStyles[priority] || priorityStyles.Medium;

  return (
    <div className={`my-6 rounded-lg shadow-lg ${style.bg} border-l-4 ${style.border} p-6 transition-all duration-300 hover:shadow-xl`}>
      <h3 className="text-xl font-bold text-gray-800 mb-4">Idea</h3>
      <div className="flex items-start space-x-4">
        <span className="text-2xl">💡</span>
        <div className="flex-1">
          <div className="font-semibold text-gray-800">{concept}</div>
          <span className={`inline-block px-3 py-1 mt-2 text-sm font-semibold rounded-full shadow-sm ${style.badge}`}>
            {priority}
          </span>
          <p className="text-gray-700 mt-3">{notes}</p>
        </div>
      </div>
    </div>
  );
};

export default Idea;