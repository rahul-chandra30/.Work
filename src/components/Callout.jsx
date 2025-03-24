import React from 'react';

const Callout = ({ type, content }) => {
  const types = {
    tip: {
      bg: 'bg-gradient-to-br from-emerald-50 to-teal-50',
      border: 'border-l-emerald-400',
      text: 'text-emerald-800',
      icon: '💡'
    },
    warning: {
      bg: 'bg-gradient-to-br from-amber-50 to-orange-50',
      border: 'border-l-amber-400',
      text: 'text-amber-800',
      icon: '⚠️'
    },
    error: {
      bg: 'bg-gradient-to-br from-red-50 to-rose-50',
      border: 'border-l-red-400',
      text: 'text-red-800',
      icon: '🚫'
    }
  };

  const style = types[type] || types.tip;

  return (
    <div className={`my-6 ${style.bg} rounded-lg shadow-lg hover:shadow-xl transition-all duration-300`}>
      <div className={`p-6 border-l-4 ${style.border}`}>
        <div className="flex items-start space-x-4">
          <span className="text-2xl">{style.icon}</span>
          <div className={`flex-1 ${style.text} font-medium`}>{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Callout;