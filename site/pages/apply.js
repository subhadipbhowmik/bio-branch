import React, { useState } from 'react';
import styles from '../styles/apply.module.css';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Apply = () => {
  const router = useRouter();
  const [handle, setHandle] = useState('');
  const [category, setCategory] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!category) {
      toast.error('Please select a category');
      return;
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ handle, email, password, category }),
    };

    try {
      const response = await fetch('https://bio-branch-server.onrender.com/api/register', options);
      const data = await response.json();

      if (data.status === 'success') {
        toast.success('Registered successfully');
        localStorage.setItem('BioTreeToken', data.token);
        setSubmitted(true);
        router.push('/login');
      } else {
        toast.error('Try a different username');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <section className={`${styles.background} min-h-screen flex justify-center items-center`}>
        <div className="main">
          <div className="content bg-white border-2 px-4 py-8 rounded-md shadow-lg">
            <h1 className='text-center font-bold text-2xl'>Join the top 1% Creators</h1>
            <p className='text-center mb-3'>Get access to exclusive content</p>
            <form onSubmit={handleRegister} className='flex flex-col gap-3 text-lg' method='POST'>
              <span className='flex items-center shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                <img className='w-6 mr-2' src="/svg/instagram.svg" alt="" />
                <input
                  className='focus:outline-none'
                  placeholder='Social Handle'
                  type="text"
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                />
              </span>
              <span className='flex items-center shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                <img className='w-6 mr-2' src="/svg/email.svg" alt="" />
                <input
                 className='focus:outline-none'
                  placeholder='Add Email'
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </span>
              <span className='flex items-center shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 mr-2" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
                  <path d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.355469 20 6 21.355469 6 23 L 6 47 C 6 48.644531 7.355469 50 9 50 L 41 50 C 42.644531 50 44 48.644531 44 47 L 44 23 C 44 21.355469 42.644531 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 9 22 L 41 22 C 41.554688 22 42 22.445313 42 23 L 42 47 C 42 47.554688 41.554688 48 41 48 L 9 48 C 8.445313 48 8 47.554688 8 47 L 8 23 C 8 22.445313 8.445313 22 9 22 Z M 25 30 C 23.300781 30 22 31.300781 22 33 C 22 33.898438 22.398438 34.6875 23 35.1875 L 23 38 C 23 39.101563 23.898438 40 25 40 C 26.101563 40 27 39.101563 27 38 L 27 35.1875 C 27.601563 34.6875 28 33.898438 28 33 C 28 31.300781 26.699219 30 25 30 Z"></path>
                </svg>
                <input
                 className='focus:outline-none'
                  placeholder='Add Password'
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </span>

              <h5 className='text-center text-sm text-blue-600'>Account Type</h5>
              <span className="flex justify-between">
                <label htmlFor="" className='flex gap-2 cursor-pointer'>
                  <input type="radio" value='Creator' checked={category === 'Creator'} onChange={handleCategoryChange} className='cursor-pointer'/>
                  <p>Creator</p>
                </label>
                <label htmlFor="" className='flex gap-2 cursor-pointer'>
                  <input type="radio" value='Agency' checked={category === 'Agency'} onChange={handleCategoryChange} className='cursor-pointer' />
                  <p>Agency</p>
                </label>
                <label htmlFor="Brand" className='flex gap-2 cursor-pointer'>
                  <input type="radio" value='Brand' checked={category === 'Brand'} onChange={handleCategoryChange} className='cursor-pointer'/>
                  <p>Brand</p>
                </label>
              </span>

              <input type='submit' value='Apply' className='bg-blue-500 text-white px-3 py-2 rounded-md' />
            </form>

            <h4 className='text-center pt-3'>Already Have Account? <span className='text-indigo-600'><Link href="/login">Login</Link></span></h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Apply;
