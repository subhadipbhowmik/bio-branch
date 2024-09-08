import React, { useContext, useEffect, useState } from 'react';
import UserContext from '@/context/userContext';
import UserHeader from '@/components/UserHeader';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const Profile = () => {
  const router = useRouter();
  const { userData, setUserData } = useContext(UserContext);
  const [social, setSocial] = useState({
    facebook: '',
    twitter: '',
    instagram: '',
    github: '',
    linkedin: '',
    youtube: '',
  });

  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [avatar, setAvatar] = useState('https://i.ibb.co/Ph0WZLq/panda-bear.png');

  // handle socials
  const handleSocial = (e) => {
    setSocial({
      ...social,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => {
    if (userData) {
      setName(userData.name);
      setBio(userData.bio);
      setAvatar(userData.avatar);
    }
  }, [userData]);

  const saveSocials = (e) => {
    e.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tokenMail: localStorage.getItem('BioTreeToken'),
        socials: social,
      }),
    };
    fetch(`https://bio-branch-server.onrender.com/save/socials/`, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success') {
          toast.success(data.message);
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        toast.error('An error occurred while saving socials.');
      });
  };

  // save profile data
  const saveProfile = (e) => {
    e.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tokenMail: localStorage.getItem('BioTreeToken'),
        name: name,
        bio: bio,
        avatar: avatar
      }),
    };
    fetch(`https://bio-branch-server.onrender.com/save/profile/`, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success') {
          toast.success("Profile updated successfully");
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        toast.error('An error occurred while saving socials.');
      });
  };


  // load previous socials data from database
  useEffect(() => {
    if(!localStorage.getItem('BioTreeToken')) {
      router.push('/login');
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tokenMail: localStorage.getItem('BioTreeToken'),
      }),
    };

    fetch(`https://bio-branch-server.onrender.com/load/socials`, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success') {
          setSocial(data.socials);
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        toast.error('An error occurred while loading socials.');
      });
  }, []);

  return (
    <>
      <div>
        <UserHeader />
        <main>
          <section>
            <div>
              <h4 className='text-center my-3 font-bold'>Edit Profile</h4>
              <div>
                <form onSubmit={saveProfile} className='flex flex-col items-center'>
                  <span className='flex w-11/12 m-auto items-center mb-3 shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                    <img className='w-6 mr-2' src="/svg/icons/user.svg" alt="" />
                    <input
                      className='w-full focus:outline-none'
                      placeholder='Enter Name'
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </span>

                  <span className='flex items-center w-11/12 m-auto mb-3 shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                    <img className='w-6 mr-2' src="/svg/icons/bio.svg" alt="" />
                    <input
                      className='w-full focus:outline-none'
                      placeholder='Write a Catchy Bio'
                      type="text"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                    />
                  </span>

                  <span className='flex items-center w-11/12 m-auto mb-3 shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                    <img className='w-6 mr-2' src="/svg/icons/image.svg" alt="" />
                    <input
                      className='w-full focus:outline-none'
                      placeholder='Insert Image Link'
                      type="text"
                      value={avatar}
                      onChange={(e) => setAvatar(e.target.value)}
                    />
                    <img className='w-10 ml-20' src={avatar} alt="" />
                  </span>

                  <input type="submit" value="Save Profile" className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 cursor-pointer w-32 mb-4" onClick={() => {
                    // Add save profile functionality if needed
                  }} />
                </form>
              </div>
            </div>

            {/* Social handle edits  */}
            <div>
              <h4 className='text-center my-3 font-bold'>Edit Social Handle</h4>
              <div>
                <form onSubmit={saveSocials} className='flex flex-col items-center'>
                  <span className='flex w-11/12 m-auto items-center mb-3 shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                    <img className='w-6 mr-2' src="/svg/icons/ig.svg" alt="Instagram" />
                    <input
                      id="instagram"
                      className='w-full focus:outline-none'
                      placeholder='Enter Instagram Handle'
                      type="text"
                      value={social.instagram}
                      onChange={handleSocial}
                    />
                  </span>

                  <span className='flex w-11/12 m-auto items-center mb-3 shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                    <img className='w-6 mr-2' src="/svg/icons/fb.svg" alt="Facebook" />
                    <input
                      id="facebook"
                      className='w-full focus:outline-none'
                      placeholder='Enter Facebook Username'
                      type="text"
                      value={social.facebook}
                      onChange={handleSocial}
                    />
                  </span>

                  <span className='flex w-11/12 m-auto items-center mb-3 shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                    <img className='w-6 mr-2' src="/svg/icons/gh.svg" alt="GitHub" />
                    <input
                      id="github"
                      className='w-full focus:outline-none'
                      placeholder='Enter GitHub Username'
                      type="text"
                      value={social.github}
                      onChange={handleSocial}
                    />
                  </span>

                  <span className='flex w-11/12 m-auto items-center mb-3 shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                    <img className='w-6 mr-2' src="/svg/icons/yt.svg" alt="YouTube" />
                    <input
                      id="youtube"
                      className='w-full focus:outline-none'
                      placeholder='Enter YouTube Channel Name'
                      type="text"
                      value={social.youtube}
                      onChange={handleSocial}
                    />
                  </span>

                  <span className='flex w-11/12 m-auto items-center mb-3 shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                    <img className='w-6 mr-2' src="/svg/icons/li.svg" alt="LinkedIn" />
                    <input
                      id="linkedin"
                      className='w-full focus:outline-none'
                      placeholder='Enter LinkedIn Profile URL'
                      type="text"
                      value={social.linkedin}
                      onChange={handleSocial}
                    />
                  </span>

                  <span className='flex w-11/12 m-auto items-center mb-3 shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                    <img className='w-6 mr-2' src="/svg/icons/tw.svg" alt="Twitter" />
                    <input
                      id="twitter"
                      className='w-full focus:outline-none'
                      placeholder='Enter Twitter Handle'
                      type="text"
                      value={social.twitter}
                      onChange={handleSocial}
                    />
                  </span>

                  <input type="submit" value="Save Socials" className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 cursor-pointer w-32 mb-4" />
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Profile;
