import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  href
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900";
  
  const variants = {
    primary: "bg-red-700/90 text-white hover:bg-red-800 focus:ring-red-600",
    secondary: "text-white hover:text-red-400 focus:ring-gray-600",
    outline: "border-2 border-red-700/80 text-red-400 hover:bg-red-700/10 focus:ring-red-600"
  };

  const sizes = {
    sm: "px-4 py-3 text-sm min-h-[44px]",
    md: "px-6 py-3 text-base min-h-[48px]",
    lg: "px-8 py-4 text-lg min-h-[52px]"
  };

  const classes = twMerge(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <a
        href={href}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes}>
      {children}
    </button>
  );
} 