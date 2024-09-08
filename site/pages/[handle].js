import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import LinkTree from '@/components/LinkTree';
import Link from 'next/link';
import SocialTree from '@/components/SocialTree';
import ShareButton from '@/components/ShareButton';

const Handle = () => {
    const router = useRouter();
    const [data, setData] = useState({});
    const [social, setSocial] = useState({
        facebook: '',
        twitter: '',
        instagram: '',
        github: '',
        linkedin: '',
        youtube: '',
    });
    const [userFound, setUserFound] = useState(false);

    useEffect(() => {
        if (router.query?.handle) {
            fetch(`http://localhost:5173/get/${router.query.handle}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.status === 'error') {
                        toast.error(data.error);
                        setUserFound(false);
                    } else if (data.status === 'success') {
                        console.log(data.userData);
                        setData(data.userData);
                        setSocial(data.socials);
                        setUserFound(true);
                    }
                })
                .catch((err) => console.log(err));
        }
    }, [router.query]);

    // grab social links from database
    /*
    useEffect(() => {
        if (router.query?.handle) {
            fetch(`http://localhost:5173/get/socials/${router.query.handle}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.status === 'error') {
                        toast.error(data.error);
                    }
                    if (data.status === 'success') {
                        setSocial(data.socials);
                    }
                })
                .catch((err) => console.log(err));
        }
    }, [router.query])
    */

    if (userFound) {
        return (
            <div className='bg-gray-100'>
                <ShareButton/>
                <LinkTree data={data} />
                <SocialTree social={social} />
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800">User Not Found</h1>
                <p className="text-lgmt-2 text-gray-800">Sorry, we couldn't find the user you're looking for.</p>
            </div>
        </div>
    );

};

export default Handle;
