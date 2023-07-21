'use client';

import React, { useEffect } from 'react';

const Button = ({ className, type, children, ...props }) => {

  useEffect(() => {
    if (props.onVisible) {
      const inViewport = (entries, observer) => {
        entries.forEach(entry => {
          entry.isIntersecting && entry.target.classList.add("is-inViewport");
        });
      };

      const observer = new IntersectionObserver(inViewport);
      const observerOptions = {};

      const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
      ELs_inViewport.forEach(EL => {
        observer.observe(EL, observerOptions);
      });
    }
  }, [props.onVisible]);


  return (
    <button className={className} type={type} data-inviewport={props?.onVisible}>{children}</button>
  );
};

export default Button;