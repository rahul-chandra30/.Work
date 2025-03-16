import React from 'react';

const CodeSnippet = ({ language, code }) => {
  return (
    <div>
      <h3>Code Snippet ({language})</h3>
      <pre>{code}</pre>
    </div>
  );
};

export default CodeSnippet;