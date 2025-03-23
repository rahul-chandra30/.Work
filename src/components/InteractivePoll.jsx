import React, { useState, useEffect } from 'react';

const InteractivePoll = ({ question, options }) => {
  console.log('InteractivePoll Props:', { question, options, type: typeof options });

  const parsedOptions = Array.isArray(options)
    ? options
    : typeof options === 'string'
    ? JSON.parse(options)
    : [];
  const storageKey = `poll_${question.replace(/\s+/g, '_').toLowerCase()}`;

  const [votes, setVotes] = useState(() => {
    if (typeof window === 'undefined') return parsedOptions.map(() => 0);
    const savedVotes = localStorage.getItem(storageKey);
    return savedVotes ? JSON.parse(savedVotes) : parsedOptions.map(() => 0);
  });
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(votes));
  }, [votes, storageKey]);

  const totalVotes = votes.reduce((a, b) => a + b, 0);

  const vote = (index) => {
    if (!hasVoted) {
      setVotes((prev) => prev.map((v, i) => (i === index ? v + 1 : v)));
      setHasVoted(true);
    }
  };

  console.log('Parsed Options:', parsedOptions);
  console.log('Votes:', votes);

  return (
    <div className="my-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-6 border-b border-blue-200 pb-4">
        <span className="text-3xl mr-3">📊</span>
        <div>
          <h3 className="text-xl font-bold text-gray-800">{question}</h3>
          <p className="text-sm text-gray-600 mt-1">Total votes: {totalVotes}</p>
        </div>
      </div>

      <div className="space-y-4">
        {parsedOptions.map((option, index) => {
          const percentage = totalVotes > 0 ? Math.round((votes[index] / totalVotes) * 100) : 0;
          return (
            <div key={index} className="relative">
              <div
                className="absolute inset-0 bg-blue-100 rounded-lg transition-all duration-300"
                style={{ width: `${percentage}%` }}
              />
              <div className="relative flex items-center justify-between p-3 hover:bg-blue-50/50 rounded-lg transition-colors">
                <div className="flex items-center flex-1">
                  <button
                    onClick={() => vote(index)}
                    className="bg-white border-2 border-blue-500 text-blue-600 px-4 py-2 rounded-lg 
                             hover:bg-blue-500 hover:text-white transition-all duration-200 
                             shadow-sm hover:shadow-md mr-4"
                    disabled={hasVoted}
                  >
                    Vote
                  </button>
                  <span className="text-gray-700 font-medium">{option}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">{votes[index]} votes</span>
                  <span className="w-16 text-right font-semibold text-blue-600">{percentage}%</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {typeof window !== 'undefined' && (
        <div className="mt-4 text-xs text-gray-500 text-right">Results stored locally</div>
      )}
    </div>
  );
};

export default InteractivePoll;