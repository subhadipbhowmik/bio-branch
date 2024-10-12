import React, {useContext, useEffect} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import UserContext from '@/context/userContext';

const UserHeader = () => {
    // const { role, handle, avatar, links } = data;
    const route = useRouter();
    const {userData, setUserData} = useContext(UserContext);
    const { role, avatar, handle} = userData;

    const handleLogout = () => {
        localStorage.removeItem('BioTreeToken');
        route.push('/login');
    };

    useEffect(() => {
        if (!localStorage.getItem('BioTreeToken')) {
            return window.location.href = '/login';
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                tokenMail: localStorage.getItem('BioTreeToken') 
            }),
        };


        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        
        fetch(`${baseUrl}/data/dashboard/`, options)
        .then((res) => res.json())
        .then((data) => {
            console.log(data); 
            if (data.status === 'error') {
                return toast.error("Error happened");
            }
            setUserData(data.userData);
            localStorage.setItem('userHandle', data.userData.handle);
            toast.success(data.message);
        })
        .catch((err) => console.log(err));
    }, []);

    return (
        <header className='flex flex-col md:flex-row items-center justify-between p-5 bg-gray-50 border-b border-gray-200 shadow'>
            <div className="flex flex-col md:flex-row gap-4">
              <Link href={`/edit/links`}>
                <button className='inline-flex items-center px-4 py-2 bg-white hover:bg-purple-50 border border-purple-400 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ease-in-out text-purple-600 hover:text-purple-800 font-semibold'>
                    <img src="/svg/url.svg" alt="" className='w-6 h-6 mr-2' />
                    Edit Links
                </button>
              </Link>
                <Link href={`/edit/profile`}>
                <button className='inline-flex items-center px-4 py-2 bg-white hover:bg-green-50 border border-green-400 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ease-in-out text-green-600 hover:text-green-800 font-semibold'>
                    <img src="/svg/profile.svg" alt="" className='w-6 h-6 mr-2' />
                    Edit Profile
                </button>
                </Link>
            </div>
            <Link href={`https://biobranch.vercel.app/${handle}`}>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
                <div className='flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200'>
                    <div className="text-xs md:text-sm flex flex-col">
                        <span className='font-semibold'>{handle}</span>
                        <span className='text-gray-600'>{role} Pack</span>
                    </div>
                    <div className="ml-3">
                        <img src={avatar} alt="" className='w-10 h-10 rounded-full border-2 border-gray-300' />
                    </div>
                </div>
                <img src="/svg/notification.svg" alt="" className='w-6 h-6 cursor-pointer hover:text-gray-700' />
                <img src="/svg/logout.svg" alt="" className='w-6 h-6 cursor-pointer hover:text-gray-700' onClick={handleLogout} />
            </div>
            </Link>
        </header>
    );
};

export default UserHeader;
