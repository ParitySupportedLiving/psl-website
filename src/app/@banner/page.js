'use client';

import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';

const DynamicTopForm = dynamic(() => import('@/components/TopForm/TopForm'), {
  loading: () => <p>Loading...</p>,
});

const Banner = ({ email, bcc, ...props }) => {


  useEffect(() => {
    if (props.onVisible) {
      const inViewport = (entries, observer) => {
        entries.forEach(entry => {
          if (['bannerText', 'bannerForm'].includes(entry.target.id) && entry.isIntersecting) {
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
    <div className='w-full max-w-7xl mx-auto flex items-center justify-around flex-wrap'>
      <div name="intro-message" id="bannerText" className='max-w-lg md:w-1/2 xl:w-1/3' data-inviewport={props?.onVisible[0]}>
        <h1 className='text-5xl text-psl-active-link py-5 font-bold'>Parity Supported Living</h1>
        <p className='text-2xl border-l-4 border-solid border-l-psl-active-link pl-5 text-psl-active-text'>At Parity, we believe both participants and support workers should work together toward an inclusive and fulfilling life.</p>
      </div>
      <div name="quick-access-form" id="bannerForm" className={`max-w-lg md:w-1/2 xl:w-1/3 p-2 flex flex-col items-center `} data-inviewport={props?.onVisible[1]}>
        <h2 className='text-4xl text-psl-active-link py-4 font-semibold'>Enquire Now</h2>
        <DynamicTopForm email={email} bcc={bcc} />
      </div>
    </div>
  );
};

export default Banner;