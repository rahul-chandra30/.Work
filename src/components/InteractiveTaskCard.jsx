import React from 'react';

const InteractiveTaskCard = ({ title, details }) => {
  return (
    <div className="my-6 w-full" style={{ maxWidth: '400px' }}>
      {/* Flip card container */}
      <div className="w-full mx-auto h-64 relative hover-flip-card" style={{ perspective: '1000px' }}>
        <div 
          className="relative w-full h-full transition-all duration-500 ease-in-out hover-flip-inner"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front of card */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 
                      border border-gray-200 rounded-xl shadow-md p-8 flex flex-col 
                      items-center justify-center hover-flip-front"
            style={{ backfaceVisibility: 'hidden' }}
          >

            <h3 className="text-2xl font-semibold text-gray-800 text-center mb-3">{title}</h3>
            <p className="mt-2 text-sm text-gray-500 text-center">Hover to see details</p>
          </div>

          {/* Back of card */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 
                      border border-blue-100 rounded-xl shadow-md p-8 flex flex-col
                      items-center justify-center hover-flip-back"
            style={{ 
              backfaceVisibility: 'hidden', 
              transform: 'rotateY(180deg)'
            }}
          >
            <div className="overflow-auto max-h-full w-full">
              <p className="text-gray-700 text-center font-medium text-lg">{details}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Add internal CSS for the hover flip effect */}
      <style jsx>{`
        .hover-flip-card {
          perspective: 1000px;
        }
        
        .hover-flip-inner {
          transition: transform 0.6s;
          transform-style: preserve-3d;
          position: relative;
        }
        
        .hover-flip-card:hover .hover-flip-inner {
          transform: rotateY(180deg);
        }
        
        .hover-flip-front, .hover-flip-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        
        .hover-flip-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default InteractiveTaskCard;