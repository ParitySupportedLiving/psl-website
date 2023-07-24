import React from 'react';

const CardHeader = ({ className, children }) => {
  return (
    <div
      id="card-header"
      className={className}
    >
      {children}
    </div>
  );
};

export default CardHeader;