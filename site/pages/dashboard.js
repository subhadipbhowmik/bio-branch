import React, { useContext, useEffect, useState } from 'react';
import LinkBox from '@/components/LinkBox';
import UserHeader from '@/components/UserHeader';
import { toast } from 'react-toastify';
import UserContext from '@/context/userContext';

const Dashboard = () => {
    const [data, setData] = useState({});
    const { setUserData } = useContext(UserContext);

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

        fetch('https://bio-branch-server.onrender.com/data/dashboard', options)
        .then((res) => res.json())
        .then((data) => {
            console.log(data); 
            if (data.status === 'error') {
                return toast.error("Error happened");
            }
            setData(data.userData);
            setUserData(data.userData);
            localStorage.setItem('userHandle', data.userData.handle);
            // toast.success(data.message);
        })
        .catch((err) => console.log(err));
    }, []);

    return (
        <>
            {/* Inline style for top margin and animation */}
            <div style={{ 
                marginTop: '5%',
                animation: 'fadeIn 1s ease-in-out',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '55vh' // ensures footer pushes to the bottom
            }}> 
                <UserHeader />

                <main style={{ flex: '1' }}> {/* Main content grows to fill space */}
                    <section 
                        className='grid md:grid-cols-2 xl:grid-cols-4 gap-4 p-8'
                        style={{
                            animation: 'fadeIn 1s ease-in-out',
                            transition: 'transform 0.2s ease',
                        }}
                    >
                        <LinkBox 
                            lbTitle="Links"
                            lbNumber={data.links}
                            lbSvg="email"
                            lbTheme="red"
                            style={{ transition: 'transform 0.2s ease' }}
                        />
                        <LinkBox 
                            lbTitle="Total Clicks"
                            lbNumber="30%"
                            lbSvg="growth"
                            lbTheme="yellow"
                            style={{ transition: 'transform 0.2s ease' }}
                        />
                        <LinkBox 
                            lbTitle="Total Shares"
                            lbNumber="39"
                            lbSvg="share"
                            lbTheme="green"
                            style={{ transition: 'transform 0.2s ease' }}
                        />
                        <LinkBox 
                            lbTitle="Total Retention"
                            lbNumber="50%"
                            lbSvg="url"
                            lbTheme="green"
                            style={{ transition: 'transform 0.2s ease' }}
                        />
                    </section>
                </main>
            </div>

            {/* Inline CSS for animations */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .grid > div:hover {
                    transform: scale(1.05); /* Scale effect on hover */
                }
            `}</style>
        </>
    );
};

export default Dashboard;
