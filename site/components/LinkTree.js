import React from 'react';
import LinkTreeCard from './LinkTreeCard';
import { motion, AnimatePresence } from 'framer-motion';

const LinkTree = ({ data }) => {
    const { name, links, bio, avatar, handle } = data;
    console.log("LinkTree data", data);

    return (
        <section className='relative flex flex-col items-center pt-10 bg-gray-100'>
            {/* Avatar */}
            <img 
                src={avatar} 
                alt={name ? `${name}'s avatar` : 'Avatar'} 
                className='w-16 h-16 rounded-full border-2 border-gray-300 mb-2 shadow-lg'
            />
            {/* Username */}
            <h2 className='text-xl font-semibold text-gray-800'>{name ? name : 'No Username'}</h2>
            {/* Bio */}
            <p className='text-lg text-gray-600 mb-6'>{bio ? bio : 'No Bio'}</p>
            {/* Links */}
           <div className='flex flex-col m-auto justify-center max-w-7x md:my-5 w-full md:w-2/5'>
           <AnimatePresence>
                {links.map((link, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: index * 0.1 + 0.3 } }}
                        exit={{ opacity: 0, y: 20 }}
                    >
                        <LinkTreeCard title={link.title} url={link.url} icon={link.icon} />
                    </motion.div>
                ))}
            </AnimatePresence>
           </div>
        </section>
    );
};

export default LinkTree;
