import React from 'react';

const Callout = ({ type, content }) => {
  return (
    <div>
      <h3>Callout ({type})</h3>
      <p>{content}</p>
    </div>
  );
};

export default Callout;