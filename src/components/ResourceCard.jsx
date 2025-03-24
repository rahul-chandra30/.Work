import React from 'react';

const ResourceCard = ({ title, url, emoji = '📚' }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="my-4 p-4 bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center"
    >
      <span className="text-2xl mr-3">{emoji}</span>
      <span className="text-lg font-semibold text-gray-800">{title}</span>
    </a>
  );
};

export default ResourceCard;