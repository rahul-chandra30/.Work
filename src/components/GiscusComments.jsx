import React, { useEffect } from 'react';

const GiscusComments = ({ identifier, title }) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.setAttribute('data-repo', 'rahul-chandra30/.Work'); // My repository
    script.setAttribute('data-repo-id', 'R_kgDOOJit1g'); // My repository ID
    script.setAttribute('data-category', 'Announcements'); // My category
    script.setAttribute('data-category-id', 'DIC_kwDOOJit1s4CoYkA'); // Giscus config ID
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'noborder_light');
    script.setAttribute('data-lang', 'en');
    script.setAttribute('crossorigin', 'anonymous');

    const commentsDiv = document.getElementById('giscus-thread');
    if (commentsDiv && !commentsDiv.hasChildNodes()) {
      commentsDiv.appendChild(script);
    }
  }, [identifier, title]);

  return (
    <div className="my-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Comments</h3>
      <div id="giscus-thread"></div>
    </div>
  );
};

export default GiscusComments;