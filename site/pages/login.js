import React, { useState } from 'react';
import styles from '../styles/apply.module.css';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Login = () => {
  const route = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    };

    fetch('https://bio-branch-server.onrender.com/api/login', options)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          toast.success("You are logged in successfully");
          localStorage.setItem('BioTreeToken', data.token);
          route.push('/dashboard');
        } else if (data.status === 'notfound') {
          toast.error("User not found");
        }
      })
      .catch(error => toast.error("An error occurred. Please try again."));
  };

  return (
    <section className={`${styles.background} min-h-screen flex justify-center items-center`}>
      <div className="main">
        <div className="content bg-white border-2 px-8 py-10 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h1 className='text-center font-bold text-3xl text-indigo-600'>Join the Top 1% Creators</h1>
          <p className='text-center mb-5 text-gray-600'>Get access to exclusive content</p>
          <form onSubmit={handleLogin} className='flex flex-col gap-4 text-lg'>
            <div className='relative'>
              <input
                className='w-full border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                type="email"
                placeholder='    Add Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <img className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5' src="/svg/email.svg" alt="Email icon" />
            </div>
            <div className='relative'>
              <input
                className='w-full border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                type="password"
                placeholder='   Add Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <img className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5' src="/svg/password.png" alt="Password icon" />
            </div>
            <input type='submit' value='Login' className='bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md shadow-md hover:bg-indigo-700 transition duration-200 cursor-pointer' />
          </form>
          <h4 className='text-center pt-4 text-gray-700'>
            New here? <Link href="/apply"><span className='text-indigo-600 font-medium hover:underline'>Register</span></Link>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Login;
