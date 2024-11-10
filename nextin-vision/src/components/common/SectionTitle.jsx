// src/components/shared/SectionTitle.jsx
import React from 'react';

const SectionTitle = ({ subtitle, title, description, center = false }) => {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''} mb-12`}>
      {subtitle && (
        <span className="text-primary font-medium mb-2 block">
          {subtitle}
        </span>
      )}
      
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h2>
      )}
      
      {description && (
        <p className="text-gray-600 text-lg">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;