'use client';

import React, { useState } from 'react';
import Button from '../Button/Button';

const BottomForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    sobject: '',
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
    <form onSubmit={handleSubmit} className='shadow-2xl dark:shadow-psl-secondary-text/10 p-2 sm:p-12'>
      <h4 className='text-psl-primary dark:text-psl-active-text text-2xl font-semibold  py-4'>Enquire Now</h4>
      <div className='grid grid-cols-2'>
        <div className='px-1 mb-2 col-span-2 sm:col-span-1' >
          <label htmlFor='bottom-form-name' className='text-psl-primary font-semibold'>Full Name</label>
          <input
            name="name"
            id="bottom-form-name"
            placeholder='Name'
            required
            aria-required={true}
            className={`input-base`}
            value={formData.name}
            onChange={handleInput}
          ></input>
        </div>
        <div className='px-1 mb-2 col-span-2 sm:col-span-1'>
          <label htmlFor='bottom-form-number' className='text-psl-primary font-semibold'>Phone Number</label>
          <input
            name="phoneNumber"
            id="bottom-form-number"
            placeholder='Phone Number'
            className={`input-base`}
            value={formData.phoneNumber}
            onChange={handleInput}
          ></input>
        </div>
        <div className='px-1 mb-2 col-span-2 sm:col-span-1'>
          <label htmlFor='bottom-form-email' className='text-psl-primary font-semibold'>Email</label>
          <input
            name="email"
            id="bottom-form-email"
            placeholder='Email'
            required
            aria-required={true}
            className={`input-base `}
            value={formData.email}
            onChange={handleInput}
          ></input>
        </div>
        <div className='px-1 mb-2 col-span-2 sm:col-span-1'>
          <label htmlFor='bottom-form-subject' className='text-psl-primary font-semibold'>Subject</label>
          <input
            name="subject"
            id="bottom-form-subject"
            placeholder='Subject'
            required
            aria-required={true}
            className={`input-base`}
            value={formData.subject}
            onChange={handleInput}
          ></input>
        </div>
        <div className='px-1 mb-2 col-span-2'>
          <label htmlFor='bottom-form-message' className='text-psl-primary font-semibold'>Message</label>
          <textarea
            name="message"
            id="bottom-form-message"
            placeholder='Message'
            required
            aria-required={true}
            rows="4"
            className={`input-base`}
            value={formData.message}
            onChange={handleInput}
          ></textarea>
        </div>
        <div className='col-span-2 flex items-center justify-center px-1'>
          <Button className={`w-full rounded-md px-5 py-4 transition ease-in-out bg-psl-secondary hover:bg-psl-active-link duration-500 font-bold text-psl-active-text`} type="submit">Submit</Button>
        </div>
      </div>
    </form>
  );
};

export default BottomForm;