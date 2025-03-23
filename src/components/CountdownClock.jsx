import React, { useState, useEffect } from 'react';

const CountdownClock = ({ deadline, emoji = '⏳' }) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const target = new Date(deadline).getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;
      if (distance < 0) {
        setTimeLeft('Expired');
        clearInterval(interval);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        setTimeLeft(`${days}d ${hours}h ${minutes}m`);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [deadline]);

  return (
    <div className="my-4 p-4 bg-gray-100 rounded-lg flex items-center">
      <span className="text-2xl mr-3">{emoji}</span>
      <div>
        <p className="text-lg font-semibold text-gray-800">Deadline: {deadline}</p>
        <p className="text-gray-600">{timeLeft}</p>
      </div>
    </div>
  );
};

export default CountdownClock;