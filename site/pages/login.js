import React, { useState } from 'react'
import styles from '../styles/apply.module.css'
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
    }

    // backend implementations
    fetch('https://bio-branch-server.onrender.com/api/login', options)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          toast.success("You are logged in successfully");
          localStorage.setItem('BioTreeToken', data.token);
          route.push('/dashboard');
        }
        if (data.status === 'notfound') {
          toast.error("User not found");
        }
      })
      .catch(error => toast.error("An error occurred. Please try again."));

  }
  return (
    <>
      <section className={styles.background + " min-h-screen flex justify-center items-center"}>
        <div className="main">
          <div className="content bg-white border-2 px-4 py-8 rounded-md shadow-lg">
            <h1 className='text-center font-bold text-2xl'>Join the top 1% Creators</h1>
            <p className='text-center mb-3'>Get access to exclusive content</p>
            <form onSubmit={handleLogin} className='flex flex-col gap-3 text-lg'>
              <span className='flex items-center shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                <img className='w-6 mr-2' src="/svg/email.svg" alt="" />
                <input className='px-3 rounded-md focus:outline-none' placeholder='Add Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </span>
              <span className='flex items-center shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 mr-2" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M 12 1 C 8.636 1 6 3.636 6 7 L 6 8 C 4.9 8 4 8.9 4 10 L 4 20 C 4 21.1 4.9 22 6 22 L 18 22 C 19.1 22 20 21.1 20 20 L 20 10 C 20 8.9 19.1 8 18 8 L 18 7 C 18 3.636 15.364 1 12 1 z M 12 3 C 14.243 3 16 4.757 16 7 L 16 8 L 8 8 L 8 7 C 8 4.757 9.757 3 12 3 z M 6 10 L 18 10 L 18 20 L 6 20 L 6 10 z M 8 14 A 1 1 0 0 0 7 15 A 1 1 0 0 0 8 16 A 1 1 0 0 0 9 15 A 1 1 0 0 0 8 14 z M 12 14 A 1 1 0 0 0 11 15 A 1 1 0 0 0 12 16 A 1 1 0 0 0 13 15 A 1 1 0 0 0 12 14 z M 16 14 A 1 1 0 0 0 15 15 A 1 1 0 0 0 16 16 A 1 1 0 0 0 17 15 A 1 1 0 0 0 16 14 z"></path>
                </svg>
                <input placeholder='Add Password' type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
              </span>

              <input type='submit' value='Login' className='bg-blue-500 text-white px-3 py-2 rounded-md' />
            </form>
            <h4 className='text-center pt-3'>New here? <span className='text-indigo-600'><Link href="/apply">Register</Link></span></h4>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login