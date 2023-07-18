import React from 'react';
import Image from 'next/image';
import PSLImage from '@public/ParitySupportedLiving.png';

const Home = () => {
  return (
    <div className={`flex min-h-screen flex-col items-center justify-between`} >
      <nav className={`bg-psl-secondary/80 flex items-center justify-around w-full min-h-5 px-5 py-2`}>
        <div className={`flex text-sm items-center`}>
          <span className="material-icons">
            call
          </span>
          <p>0427 358 514</p>
        </div>
        <div className={`flex text-sm items-center`}>
          <span className="material-icons">
            email
          </span>
          <p>contact@paritysl.com</p>
        </div>
      </nav>
      <h1>Home</h1>
      <h2>Test</h2>
      <footer className={`bg-psl-secondary/80 flex flex-col justify-around w-full p-4`}>
        <div className={`flex items-center justify-around p-3`}>
          <div className={`max-w-lg`}>
            <Image
              src={PSLImage}
              alt="parity supported living icon"
              className='max-h-36 w-auto p-2 mx-auto'
            />
            <p className={'py-2'}>At Parity Supported Living, we believe both participants and support workers should work together toward an inclusive and fulfilling life.</p>
          </div>
          <div className={` max-w-lg`}>
            <p>CONTACT DETAILS</p>
            <ul>
              <li className={`flex p-2 items-center`}>
                <span className={`material-icons p-2 rounded-full bg-psl-active-link`}>
                  call
                </span>
                <p >0427 358 514</p>
              </li>
              <li className={`flex p-2 items-center`}>
                <span className={`material-icons p-2 rounded-full bg-psl-active-link`}>
                  email
                </span>
                <p >contact@paritysl.com</p>
              </li>
              <li className={`flex p-2 items-center`}>
                <span className={`material-icons p-2 rounded-full bg-psl-active-link`}>
                  location_pin
                </span>
                <p >Unit 4/116 Mitchell Avenue,
                  Kurri Kurri. NSW 2327</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={`text-xs`}>Copyright 2023 © Parity Supported Living | All Rights Reserved</div>
      </footer>
    </div>
  );
};

export default Home;