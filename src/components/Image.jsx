import React from 'react';

const Image = ({ src, alt, caption }) => {
  return (
    <div className="my-6">
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img 
          src={src} 
          alt={alt}
          className="w-full h-auto object-cover"
        />
        <div className="bg-gray-50 px-4 py-3 border-t border-gray-100">
          <p className="text-sm text-gray-600 italic">{caption}</p>
        </div>
      </div>
    </div>
  );
};

export default Image;