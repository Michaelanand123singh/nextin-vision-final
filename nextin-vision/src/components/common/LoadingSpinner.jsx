// LoadingSpinner.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './LoadingSpinner.css';

const LoadingSpinner = ({ 
  variant = 'default',
  size = 'medium',
  color = 'primary',
  showText = false,
  text = 'Loading...',
  className = '',
  ...props 
}) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
    xlarge: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    success: 'text-green-600',
    danger: 'text-red-600',
    warning: 'text-yellow-600',
    info: 'text-cyan-600',
    light: 'text-gray-200',
    dark: 'text-gray-800'
  };

  const variants = {
    default: (
      <svg 
        className={`animate-spin ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24"
        {...props}
      >
        <circle 
          className="opacity-25" 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="currentColor" 
          strokeWidth="4"
        />
        <path 
          className="opacity-75" 
          fill="currentColor" 
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    ),
    dots: (
      <div className={`spinner-dots ${sizeClasses[size]} ${colorClasses[color]} ${className}`}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    ),
    pulse: (
      <div className={`spinner-pulse ${sizeClasses[size]} ${colorClasses[color]} ${className}`}>
        <div className="spinner-pulse-dot"></div>
      </div>
    ),
    wave: (
      <div className={`spinner-wave ${sizeClasses[size]} ${colorClasses[color]} ${className}`}>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="spinner-wave-bar"></div>
        ))}
      </div>
    )
  };

  return (
    <div role="status" className="inline-flex flex-col items-center gap-2">
      {variants[variant]}
      {showText && (
        <span className={`text-sm font-medium ${colorClasses[color]}`}>
          {text}
        </span>
      )}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

LoadingSpinner.propTypes = {
  variant: PropTypes.oneOf(['default', 'dots', 'pulse', 'wave']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  showText: PropTypes.bool,
  text: PropTypes.string,
  className: PropTypes.string
};

export default LoadingSpinner;