import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-regular-svg-icons';

// Add all regular icons to the library
library.add(...Object.values(Icons).filter(icon => icon.iconName));

const colorOptions = [
  // Blues
  'bg-blue-600', 'bg-blue-700', 'bg-sky-600', 'bg-cyan-600',
  // Purples
  'bg-purple-600', 'bg-violet-600', 'bg-indigo-600', 'bg-fuchsia-600',
  // Reds
  'bg-red-600', 'bg-rose-600', 'bg-pink-600', 'bg-crimson-600',
  // Greens
  'bg-green-600', 'bg-emerald-600', 'bg-teal-600', 'bg-lime-600',
  // Warm Colors
  'bg-amber-600', 'bg-orange-600', 'bg-yellow-600',
  // Cool Colors
  'bg-slate-600', 'bg-zinc-600', 'bg-stone-600',
  // Rich Colors
  'bg-cyan-700', 'bg-teal-700', 'bg-emerald-700', 'bg-violet-700',
  // Deep Colors
  'bg-indigo-700', 'bg-purple-700', 'bg-fuchsia-700', 'bg-rose-700'
];

const IconBullet = ({ icon, heading, description }) => {
  const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
  // Made fa-mouse-pointer to faMousePointer
  const iconName = icon.replace('fa-', '').split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  const faIcon = Icons[`fa${iconName}`] || Icons.faQuestion;

  return (
    <div className="process-step flex flex-col md:flex-row items-start my-6">
      <div className={`process-icon ${randomColor} text-white w-10 h-10 rounded-full flex items-center justify-center mr-4`}>
        <FontAwesomeIcon icon={faIcon} className="h-6 w-6" />
      </div>
      <div className="process-content mt-4 md:mt-0">
        <h3 className="font-bold text-lg text-gray-800">{heading}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default IconBullet;