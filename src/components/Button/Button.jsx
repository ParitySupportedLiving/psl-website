'use client';

import React, { useEffect } from 'react';

const Button = ({ className, type, children, ...props }) => {

  useEffect(() => {
    if (props.onVisible) {
      const inViewport = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.target.id === 'button' && entry.isIntersecting) {
            entry.target.classList.add("is-inViewport");
          }
        });
      };

      const observerOptions = {};
      const observer = new IntersectionObserver(inViewport, observerOptions);

      const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
      ELs_inViewport.forEach(EL => {
        observer.observe(EL);
      });
    }
  }, [props.onVisible]);


  return (
    <button id="button" className={className} type={type} data-inviewport={props?.onVisible}>{children}</button>
  );
};

export default Button;