import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, update } from 'firebase/database';

// Replace with your Firebase config from Step 3
const firebaseConfig = {
  apiKey: "AIzaSyATW3ndzftFjm8SnA_fmulLUohP9Gr6VLk",
  authDomain: "blog-reactions-5952c.firebaseapp.com",
  databaseURL: "https://blog-reactions-5952c-default-rtdb.firebaseio.com",
  projectId: "blog-reactions-5952c",
  storageBucket: "blog-reactions-5952c.firebasestorage.app",
  messagingSenderId: "620129114684",
  appId: "1:620129114684:web:172ffcefd22f039d1b0139"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const Reactions = ({ identifier }) => {
  const [reactions, setReactions] = useState({
    like: 0,
    dislike: 0,
    heart: 0,
    laugh: 0,
    party: 0,
    wow: 0,
    salute: 0,
    mindblown: 0
  });

  useEffect(() => {
    const reactionsRef = ref(db, `reactions/${identifier.replace(/\//g, '_')}`);
    onValue(reactionsRef, (snapshot) => {
      const data = snapshot.val() || {
        like: 0,
        dislike: 0,
        heart: 0,
        laugh: 0,
        party: 0,
        wow: 0,
        salute: 0,
        mindblown: 0
      };
      setReactions(data);
    });
  }, [identifier]);

  const handleReaction = (type) => {
    const reactionsRef = ref(db, `reactions/${identifier.replace(/\//g, '_')}`);
    const updates = {};
    updates[type] = (reactions[type] || 0) + 1;
    update(reactionsRef, updates);
  };

  // Define reaction types with their emojis and tooltips
  const reactionTypes = [
    { type: 'like', emoji: '👍', tooltip: 'Like' },
    { type: 'dislike', emoji: '👎', tooltip: 'Dislike' },
    { type: 'heart', emoji: '❤️', tooltip: 'Love' },
    { type: 'laugh', emoji: '😂', tooltip: 'Laugh' },
    { type: 'party', emoji: '🎉', tooltip: 'Celebrate' },
    { type: 'wow', emoji: '🤩', tooltip: 'Wow' },
    { type: 'salute', emoji: '🫡', tooltip: 'Salute' },
    { type: 'mindblown', emoji: '🤯', tooltip: 'Mind Blown' }
  ];

  return (
    <div className="my-8">
      <h3 className="text-sm font-medium text-gray-500 mb-3">React to this post</h3>
      <div className="flex flex-wrap gap-3">
        {reactionTypes.map(({ type, emoji, tooltip }) => (
          <div key={type} className="relative group">
            <button
              onClick={() => handleReaction(type)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 
                        transition-all duration-200 text-base shadow-sm hover:shadow
                        group-hover:scale-105"
              aria-label={tooltip}
            >
              <span className="text-xl mr-1">{emoji}</span> 
              <span className="font-medium">{reactions[type]}</span>
            </button>
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1
                          bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100
                          transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              {tooltip}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reactions;