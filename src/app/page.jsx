import React from 'react';
import Image from 'next/image';
import PSLImage from '@public/ParitySupportedLiving.png';
import Button from '@/components/Button/Button';
import TopForm from '@/components/TopForm/TopForm';

const Home = () => {


  return (
    <div className={`min-h-screen flex flex-col justify-between items-center`} >
      <nav className={`bg-psl-secondary/80 sm:flex sm:items-center sm:justify-around w-full min-h-5 px-5 py-2`}>
        <div className={`flex items-center p-1 sm:p-0`}>
          <span className="material-icons text-sm">
            call
          </span>
          <p>0427 358 514</p>
        </div>
        <div className={`flex items-center p-1 sm:p-0`}>
          <span className="material-icons text-sm">
            email
          </span>
          <p>contact@paritysl.com</p>
        </div>
      </nav>
      <main className='w-full min-w-full flex flex-col items-center justify-around flex-1'>
        <section className='w-full' style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1687255925808-b72d686d4762?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80)',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          boxSizing: 'border-box'
        }}>
          <div className='bg-psl-primary/60 w-full inline-flex items-center justify-around py-40 px-4 flex-wrap'>
            <div name="intro-message" className='w-full md:w-1/2 lg:w-1/3 p-2 rightToLeft'>
              <h1 className='text-5xl text-psl-active-link py-5'>Parity Supported Living</h1>
              <p className='text-2xl border-l-4 border-solid border-l-psl-active-link pl-4'>At Parity, we believe both participants and support workers should work together toward an inclusive and fulfilling life.</p>
            </div>
            <div name="quick-access-form" className={`w-full md:w-1/2 lg:w-1/3 p-2 flex flex-col items-center leftToRight`}>
              <h2 className='text-4xl text-psl-active-link py-4'>Enquire Now</h2>
              <TopForm />
              <div className=' w-full flex flex-wrap justify-start sm:justify-around p-2'>
                <div className='flex items-center pb-2 sm:pb-0'>
                  <span className={`material-icons text-sm p-2 rounded-full bg-psl-active-link`}>
                    email
                  </span>
                  <div>
                    <p>Email Us</p>
                    <p >contact@paritysl.com</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <span className={`material-icons text-sm p-2 rounded-full bg-psl-active-link`}>
                    call
                  </span>
                  <div>
                    <p>Call Us</p>
                    <p >0427 358 514</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div>Test</div>
        <div>Test2</div>
      </main>
      <footer className={`bg-psl-secondary/80 flex flex-col justify-around w-full p-4 sm:px-10`}>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 p-3`}>
          <div className={`col-span-1 w-full md:w-1/2 m-auto`}>
            <Image
              src={PSLImage}
              alt="parity supported living icon"
              className='max-h-36 w-auto p-2 mx-auto md:m-0'
            />
            <p className={'py-2'}>At Parity Supported Living, we believe both participants and support workers should work together toward an inclusive and fulfilling life.</p>
          </div>
          <div className={`col-span-1 w-full md:w-1/2 m-auto`}>
            <p>CONTACT DETAILS</p>
            <ul>
              <li className={`flex p-2 items-center`}>
                <span className={`material-icons text-sm p-2 rounded-full bg-psl-active-link`}>
                  call
                </span>
                <p >0427 358 514</p>
              </li>
              <li className={`flex p-2 items-center`}>
                <span className={`material-icons text-sm p-2 rounded-full bg-psl-active-link`}>
                  email
                </span>
                <p >contact@paritysl.com</p>
              </li>
              <li className={`flex p-2 items-center`}>
                <span className={`material-icons text-sm p-2 rounded-full bg-psl-active-link`}>
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
    </div >
  );
};

export default Home;