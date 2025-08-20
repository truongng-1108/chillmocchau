import { LucideIcon } from 'lucide-react';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'forest' | 'mountain';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 relative overflow-hidden group active:scale-95';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-forest-600 to-moss-600 text-white hover:from-forest-500 hover:to-moss-500 focus:ring-forest-500 shadow-forest hover:shadow-xl hover:scale-105',
    secondary: 'bg-gradient-to-r from-mountain-600 to-mountain-700 text-white hover:from-mountain-500 hover:to-mountain-600 focus:ring-mountain-500 shadow-mountain hover:shadow-xl hover:scale-105',
    outline: 'border-2 border-forest-600 text-forest-600 hover:bg-forest-600 hover:text-white focus:ring-forest-500 hover:scale-105',
    forest: 'bg-gradient-to-r from-forest-700 to-forest-800 text-forest-100 hover:from-forest-600 hover:to-forest-700 focus:ring-forest-500 shadow-forest hover:shadow-xl hover:scale-105',
    mountain: 'bg-gradient-to-r from-earth-600 to-earth-700 text-white hover:from-earth-500 hover:to-earth-600 focus:ring-earth-500 shadow-earth hover:shadow-xl hover:scale-105',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed hover:scale-100' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      {Icon && <Icon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;