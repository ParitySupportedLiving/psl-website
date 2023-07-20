'use client';

import React, { useState } from 'react';
import Button from '../Button/Button';

const TopForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    message: ''
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='grid grid-cols-2'>
        <div className='px-1 mb-2 col-span-2 sm:col-span-1' >
          <label htmlFor='top-form-name' className='hidden'>Name</label>
          <input
            name="name"
            id="top-form-name"
            placeholder='Name'
            required
            aria-required={true}
            className={`input-base`}
            value={formData.name}
            onChange={handleInput}
          ></input>
        </div>
        <div className='px-1 mb-2 col-span-2 sm:col-span-1'>
          <label htmlFor='top-form-number' className='hidden'>Phone Number</label>
          <input
            name="phoneNumber"
            id="top-form-number"
            placeholder='Phone Number'
            className={`input-base`}
            value={formData.phoneNumber}
            onChange={handleInput}
          ></input>
        </div>
        <div className='px-1 mb-2 col-span-2 sm:col-span-1'>
          <label htmlFor='top-form-email' className='hidden'>Email</label>
          <input
            name="email"
            id="top-form-email"
            placeholder='Email'
            required
            aria-required={true}
            className={`input-base `}
            value={formData.email}
            onChange={handleInput}
          ></input>
        </div>
        <div className='px-1 mb-2 col-span-2 sm:col-span-1'>
          <label htmlFor='top-form-message' className='hidden'>Message</label>
          <input
            name="message"
            id="top-form-message"
            placeholder='Message'
            required
            aria-required={true}
            className={`input-base`}
            value={formData.message}
            onChange={handleInput}
          ></input>
        </div>
        <div className='col-span-2 flex items-center justify-center px-1'>
          <Button className={`w-full rounded-md px-5 py-4 transition ease-in-out bg-psl-secondary hover:bg-psl-active-link duration-500 font-bold`} type="submit">Submit</Button>
        </div>
      </div>
    </form>
  );
};

export default TopForm;