import React, { useContext, useEffect, useState } from 'react';
import LinkBox from '@/components/LinkBox';
import UserHeader from '@/components/UserHeader';
import { toast } from 'react-toastify';
import UserContext from '@/context/userContext';

const Dashboard = () => {
    const [data, setData] = useState({});
    const {setUserData} = useContext(UserContext);

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
            <div>
                <UserHeader/>
                <main>
                    <section className='grid md:grid-cols-2 xl:grid-cols-4 gap-4 p-8'>
                        <LinkBox 
                            lbTitle="Links"
                            lbNumber={data.links}
                            lbSvg="email"
                            lbTheme="red"
                        />
                        <LinkBox 
                            lbTitle="Total Sales"
                            lbNumber="30%"
                            lbSvg="growth"
                            lbTheme="yellow"
                        />
                        <LinkBox 
                            lbTitle="Total Sales"
                            lbNumber="1500"
                            lbSvg="share"
                            lbTheme="green"
                        />
                        <LinkBox 
                            lbTitle="Total Sales"
                            lbNumber="1500"
                            lbSvg="url"
                            lbTheme="green"
                        />
                    </section>
                    <section>

                    </section>
                </main>
            </div>
        </>
    );
};

export default Dashboard;
