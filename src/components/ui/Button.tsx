import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'icon';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const variantClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    dark: 'btn-dark',
    icon: 'btn-icon-circular',
  }[variant];

  return (
    <button 
      className={`btn ${variantClass} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
