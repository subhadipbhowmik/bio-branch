import React, { useState } from 'react';
import styles from '../styles/apply.module.css';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Apply = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    handle: '',
    email: '',
    password: '',
    category: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch('https://bio-branch-server.onrender.com/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.status === 'success') {
        toast.success('Registered successfully');
        localStorage.setItem('BioTreeToken', data.token);
        router.push('/login');
      } else {
        toast.error(data.message || 'An error occurred. Try a different username.');
      }
    } catch (error) {
      toast.error('Failed to register. Please check your details and try again.');
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    const { handle, email, password, category } = formData;

    if (!category) {
      toast.error('Please select a category');
      return false;
    }

    if (!handle || !email || !password) {
      toast.error('Please fill out all fields');
      return false;
    }

    return true;
  };

  return (
    <section className={`${styles.background} min-h-screen flex justify-center items-center`}>
      <div className="main">
        <div className="content bg-white border-2 px-4 py-8 rounded-md shadow-lg">
          <h1 className='text-center font-bold text-2xl'>Join the top 1% Creators</h1>
          <p className='text-center mb-3'>Get access to exclusive content</p>
          <form onSubmit={handleRegister} className='flex flex-col gap-3 text-lg'>
            <div className='flex items-center shadow-md border-2 px-3 py-2 rounded-md'>
              <img className='w-6 mr-2' src="/svg/instagram.svg" alt="Social Handle Icon" />
              <input
                name="handle"
                type="text"
                placeholder="Social Handle"
                value={formData.handle}
                onChange={handleChange}
                className='focus:outline-none'
                required
              />
            </div>

            <div className='flex items-center shadow-md border-2 px-3 py-2 rounded-md'>
              <img className='w-6 mr-2' src="/svg/email.svg" alt="Email Icon" />
              <input
                name="email"
                type="email"
                placeholder="Add Email"
                value={formData.email}
                onChange={handleChange}
                className='focus:outline-none'
                required
              />
            </div>

            <div className='flex items-center shadow-md border-2 px-3 py-2 rounded-md'>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 mr-2" viewBox="0 0 50 50">
                <path d="M25,3C18.4,3,13,8.4,13,15V20H9C7.4,20,6,21.4,6,23V47c0,1.6,1.4,3,3,3H41c1.6,0,3-1.4,3-3V23c0-1.6-1.4-3-3-3H37V15C37,8.4,31.6,3,25,3Z"></path>
              </svg>
              <input
                name="password"
                type="password"
                placeholder="Add Password"
                value={formData.password}
                onChange={handleChange}
                className='focus:outline-none'
                required
              />
            </div>

            <h5 className='text-center text-sm text-blue-600'>Account Type</h5>
            <div className="flex justify-between">
              {['Creator', 'Agency', 'Brand'].map((type) => (
                <label key={type} className='flex gap-2 cursor-pointer'>
                  <input
                    type="radio"
                    name="category"
                    value={type}
                    checked={formData.category === type}
                    onChange={handleChange}
                    className='cursor-pointer'
                  />
                  <p>{type}</p>
                </label>
              ))}
            </div>

            <button
              type="submit"
              disabled={loading}
              className='bg-blue-500 text-white px-3 py-2 rounded-md mt-3'
            >
              {loading ? 'Applying...' : 'Apply'}
            </button>
          </form>

          <h4 className='text-center pt-3'>
            Already Have Account?{' '}
            <Link href="/login">
              <span className='text-indigo-600'>Login</span>
            </Link>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Apply;
