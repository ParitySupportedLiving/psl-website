import React from 'react';

const CardBody = ({ className, children }) => {
  return (
    <div
      id="card-body"
      className={className}
    >{children}</div>
  );
};

export default CardBody;