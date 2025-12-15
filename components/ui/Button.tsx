import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-3 rounded transition-all duration-300 font-sans font-bold uppercase tracking-wide text-sm";
  
  const variants = {
    primary: "bg-brand-green text-white hover:bg-opacity-90 shadow-lg hover:shadow-xl border border-transparent",
    secondary: "bg-brand-gold text-white hover:bg-opacity-90 shadow-md border border-transparent",
    outline: "bg-transparent border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};