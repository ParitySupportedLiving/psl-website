import Button from '@/components/Button/Button';
import PSLImage from '@public/ParitySupportedLiving.png';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className={`bg-psl-secondary dark:bg-psl-secondary/80 flex flex-col justify-around w-full p-4 sm:px-10`}>
      <div className={`w-full max-w-7xl mx-auto flex flex-wrap`}>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 px-3 pt-3 pb-5`}>
          <div className={`col-span-1 w-full lg:w-1/2 m-auto`}>
            <Image
              src={PSLImage}
              alt="parity supported living icon"
              className='max-h-36 w-auto p-2 mx-auto md:m-0'
            />
            <p className={'py-2 text-psl-active-text'}>At Parity Supported Living, we believe both participants and support workers should work together toward an inclusive and fulfilling life.</p>
          </div>
          <div className={`col-span-1 w-full lg:w-1/2 m-auto`}>
            <p className='font-semibold text-psl-active-text'>CONTACT DETAILS</p>
            <ul>
              <li className={`p-2`}>
                <a href="tel:0427358514" className='flex items-center'>
                  <span className={`material-icons text-sm p-2 rounded-full bg-psl-active-link text-psl-active-text`}>
                    call
                  </span>
                  <p className='text-psl-active-text'>0427 358 514</p>
                </a>
              </li>
              <li className={`p-2`}>
                <a href={`mailto:${process.env.SMTP_EMAIL}?&bcc=${process.env.SMTP_BCC_LIST}`} className='flex items-center'>
                  <span className={`material-icons text-sm p-2 rounded-full bg-psl-active-link text-psl-active-text`}>
                    email
                  </span>
                  <p className='text-psl-active-text'>contact@paritysl.com</p>
                </a>
              </li>
              <li className={`flex p-2 items-center`}>
                <span className={`material-icons text-sm p-2 rounded-full bg-psl-active-link text-psl-active-text`}>
                  location_pin
                </span>
                <p className='text-psl-active-text'>Unit 4/116 Mitchell Avenue, Kurri Kurri. NSW 2327</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='w-full flex justify-between items-center'>
          <div className={`text-xs text-psl-active-text `}>Copyright 2023 © Parity Supported Living | All Rights Reserved</div>
          <div className={`text-xs text-psl-active-text`}><a href="https://paritysl.herokuapp.com/"><Button className={`flex rounded-md p-2 m-1 transition ease-in-out bg-psl-secondary hover:bg-psl-active-link duration-500 font-bold text-psl-active-text items-center justify-center`}>Worker Login</Button></a></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;