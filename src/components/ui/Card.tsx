import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'default' | 'forest' | 'mountain' | 'earth' | 'glass';
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false,
  variant = 'default',
  onClick
}) => {
  const baseClasses = 'rounded-3xl transition-all duration-500 relative overflow-hidden';
  
  const variantClasses = {
    default: 'bg-white/90 backdrop-blur-sm shadow-mist border border-mist-200/50',
    forest: 'bg-gradient-to-br from-forest-50/95 to-moss-50/95 backdrop-blur-sm shadow-forest border border-forest-200/30',
    mountain: 'bg-gradient-to-br from-mountain-50/95 to-mist-50/95 backdrop-blur-sm shadow-mountain border border-mountain-200/30',
    earth: 'bg-gradient-to-br from-earth-50/95 to-earth-100/95 backdrop-blur-sm shadow-earth border border-earth-200/30',
    glass: 'bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl',
  };
  
  const hoverClasses = hover 
    ? 'hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] group' 
    : '';

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? 'button' : undefined}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Hover glow effect */}
      {hover && (
        <div className="absolute inset-0 bg-gradient-to-r from-forest-400/0 via-forest-400/5 to-forest-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
    </div>
  );
};

export default Card;