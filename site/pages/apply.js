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
 
    <section className={`${styles.background} min-h-screen flex justify-center items-center`}>
      <div className="main w-full max-w-md p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
        <h1 className='text-center font-bold text-3xl text-blue-600 mb-4'>Join the Top 1% Creators</h1>
        <p className='text-center mb-4 text-gray-700'>Get access to exclusive content</p>
        <form onSubmit={handleRegister} className='flex flex-col gap-4' method='POST'>
          <div className='flex items-center border border-gray-300 rounded-md overflow-hidden shadow-sm'>
            <img className='w-8 h-8 p-2' src="/svg/instagram.svg" alt="Instagram" />
            <input 
              className='flex-1 p-2 focus:outline-none' 
              placeholder='Social Handle' 
              type="text" 
              value={handle} 
              onChange={(e) => setHandle(e.target.value)} 
            />
          </div>
          <input 
            className='border border-gray-300 rounded-md p-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-300' 
            placeholder='Add Email' 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
          <input 
            className='border border-gray-300 rounded-md p-2 shadow-sm focus:outline-none focus:ring focus:ring-blue-300' 
            placeholder='Add Password' 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
          />

          <h5 className='text-center text-lg text-blue-600 mt-4'>Account Type</h5>
          <div className="flex justify-between mb-4">
            {['Creator', 'Agency', 'Brand'].map((type) => (
              <label key={type} className='flex gap-2 items-center'>
                <input 
                  type="radio" 
                  value={type} 
                  checked={category === type} 
                  onChange={handleCategoryChange}
                  className='mr-2' 
                />
                <span className='text-gray-700'>{type}</span>
              </label>
            ))}
          </div>

          <input 
            type='submit' 
            value='Apply' 
            className='bg-blue-600 text-white font-semibold rounded-md py-2 transition duration-200 hover:bg-blue-500 cursor-pointer'
          />
        </form>
 

        <h4 className='text-center pt-4 text-gray-600'>
          Already Have an Account? 
          <Link href="/login" className='text-blue-600 font-semibold hover:underline'> Login</Link>
        </h4>
      </div>
    </section>
  );
};

export default Apply;
