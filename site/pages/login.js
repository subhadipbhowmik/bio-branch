import React, { useState } from 'react';
import styles from '../styles/apply.module.css';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const route = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

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
        }
        if (data.status === 'notfound') {
          toast.error("User not found");
        }
      })
      .catch(error => toast.error("An error occurred. Please try again."));
  };

  const googleLogin = () => {
    window.location.href = 'http://localhost:4000/auth/google';
  };

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
                <input
                  className='px-3 rounded-md focus:outline-none'
                  placeholder='Add Email'
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </span>

              <span className='flex items-center shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                <img className='w-7 mr-2' src="/svg/password.png" alt="" />
                <input
                  className='px-3 rounded-md focus:outline-none'
                  placeholder='Add Password'
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className='ml-2 focus:outline-none'
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </span>

              <input type='submit' value='Login' className='bg-blue-500 text-white px-3 py-2 rounded-md' />
            </form>

            <div className='flex justify-center mt-3'>
              <button onClick={googleLogin} className='bg-red-500 text-white px-3 py-2 rounded-md'>
                Sign in with Google
              </button>
            </div>

            <h4 className='text-center pt-3'>New here? <span className='text-indigo-600'><Link href="/apply">Register</Link></span></h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
