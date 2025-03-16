import React from 'react';

const Image = ({ src, alt, caption }) => {
  return (
    <div>
      <h3>Image</h3>
      <img src={src} alt={alt} />
      <p>Caption: {caption}</p>
    </div>
  );
};

export default Image;