import React from 'react';

const Quote = ({ text, author }) => {
  return (
    <div>
      <h3>Quote</h3>
      <p>"{text}"</p>
      <p>— {author}</p>
    </div>
  );
};

export default Quote;