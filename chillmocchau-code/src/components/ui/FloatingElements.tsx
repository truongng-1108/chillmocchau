import React from 'react';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating leaves */}
      <div className="absolute top-10 left-10 text-2xl animate-float opacity-20">🍃</div>
      <div className="absolute top-32 right-20 text-lg animate-float opacity-15" style={{ animationDelay: '2s' }}>🌿</div>
      <div className="absolute top-64 left-1/4 text-xl animate-float opacity-10" style={{ animationDelay: '4s' }}>🍂</div>
      <div className="absolute top-96 right-1/3 text-lg animate-float opacity-20" style={{ animationDelay: '1s' }}>🌱</div>
      
      {/* Mountain silhouettes */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-mountain-800/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-2/3 h-24 bg-gradient-to-t from-mountain-700/15 to-transparent transform skew-x-12" />
      
      {/* Mist effects */}
      <div className="absolute top-1/4 left-0 w-full h-64 bg-gradient-to-r from-mist-200/10 via-transparent to-mist-200/10 animate-wind" />
      <div className="absolute top-1/2 right-0 w-2/3 h-48 bg-gradient-to-l from-mist-300/5 to-transparent animate-pulse-soft" />
    </div>
  );
};

export default FloatingElements;