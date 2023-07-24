'use client';
import React, { Suspense, useEffect } from 'react';

const Card = ({ className, children, ...props }) => {

  useEffect(() => {
    if (props.onVisible) {
      const inViewport = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.target.id === 'card' && entry.isIntersecting) {
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
    <div
      id="card"
      className={className}
      data-inviewport={props?.onVisible}
    >
      <Suspense fallback={<p>Loading...</p>}>
        {children}
      </Suspense>
    </div>
  );
};

export default Card;