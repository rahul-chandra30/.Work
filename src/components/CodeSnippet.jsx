import React from 'react';

const CodeSnippet = ({ language, code }) => {
  return (
    <div className="my-6">
      <div className="flex items-center justify-between bg-gray-800 rounded-t-lg px-4 py-2">
        <span className="text-gray-200 text-sm font-mono">{language}</span>
        <span className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </span>
      </div>
      <pre className="bg-gray-900 rounded-b-lg p-4 overflow-x-auto">
        <code className="text-gray-100 font-mono text-sm">{code}</code>
      </pre>
    </div>
  );
};

export default CodeSnippet;