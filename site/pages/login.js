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
      if(data.status === 'success'){
        toast.success("You are logged in successfully");
        localStorage.setItem('BioTreeToken', data.token);
        route.push('/dashboard');
      }
      if(data.status === 'notfound'){
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
                <input className='px-3 rounded-md focus:outline-none' placeholder='Add Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </span>
              <input className='shadow-md border-2 px-3 py-2 rounded-md focus:outline-none' placeholder='Add Password' type="password" required  value={password} onChange={(e) => setPassword(e.target.value)}/>

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