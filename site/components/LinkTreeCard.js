import Link from 'next/link';
import React from 'react';

const LinkTreeCard = ({ title, url, icon }) => {
  return (
    <>
      <span className='w-full'>
        <Link href={url} passHref className='flex  items-center p-2 text-white bg-indigo-400 hover:bg-indigo-300 mb-3  mx-2 hover:translate-x-1 hover:translate-y-1 rounded-md'>
          <img src={icon} alt={`${title} icon`} className='w-6 h-6 bg-white rounded-full border border-gray-300 p-1 mr-4' />
          <h4 className='text-sm text-gray-800 text-center'>{title}</h4>
        </Link>
      </span>
    </>
  );
};

export default LinkTreeCard;
