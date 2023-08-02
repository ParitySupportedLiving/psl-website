'use client';

import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';

const BottomForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [url, setUrl] = useState('');

  useEffect(() => {
    const urlString = `${window.location?.protocol}//${window.location?.hostname}`;
    let port;
    if (process.env.NODE_ENV === 'development') port = `:${window.location?.port}`;
    setUrl(() => {
      if (port) {
        return urlString + port;
      } else return urlString;
    });
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await fetch(`${url}/api`, {
      method: "POST",
      body: JSON.stringify(formData)
    })
      .then(res => {
        setLoading(false);
        if (!res.ok) {
          console.error(res);
          throw new Error(res);
        }
        if (error) {
          setError(false);
        }
      })
      .catch(err => {
        console.error(err);
        setError(true);
      });
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
          {!error
            ? <Button className={`flex w-full rounded-md px-5 py-4 transition ease-in-out bg-psl-secondary hover:bg-psl-active-link duration-500 font-bold text-psl-active-text items-center justify-center`} type="submit">{!loading
              ? 'Submit'
              : <span className="material-icons animate-spin">
                loop
              </span>
            }</Button>
            : <Button className={`flex w-full rounded-md px-5 py-4 transition ease-in-out bg-red-500 hover:bg-psl-active-link duration-500 font-bold text-psl-active-text items-center justify-center`} type="submit">{!loading
              ? 'Try Again'
              : <span className="material-icons animate-spin">
                loop
              </span>
            }</Button>}
        </div>
      </div>
    </form>
  );
};

export default BottomForm;