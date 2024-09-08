import Link from 'next/link';
import React from 'react';
import { Facebook, Twitter, Instagram, Github, Linkedin, Youtube } from 'lucide-react';

const SocialTree = ({ social }) => {
  const { facebook, twitter, instagram, github, linkedin, youtube } = social;
  return (
    <>
      <div className="flex justify-center pb-10">
        <div className="social flex gap-2">
          <Link target='_blank' href={`https://www.facebook.com/${facebook}`}>
            <Facebook className='p-2 border-2 rounded-full' size={48} color='black' />
          </Link>
          <Link target='_blank' href={`https://www.twitter.com/${twitter}`}>
            <Twitter className='p-2' size={48} color='black' />
          </Link>
          <Link target='_blank' href={`https://www.instagram.com/${instagram}`}>
            <Instagram className='p-2' size={48} color='black' />
          </Link>
          <Link target='_blank' href={`https://www.github.com/${github}`}>
            <Github className='p-2' size={48} color='black' />
          </Link>
          <Link target='_blank' href={`https://www.linkedin.com/in/${linkedin}`}>
            <Linkedin className='p-2' size={48} color='black' />
          </Link>
          <Link target='_blank' href={`https://www.youtube.com/c/${youtube}`}>
            <Youtube className='p-2' size={48} color='black' />
          </Link>
        </div>
      </div>
    </>
  );
}

export default SocialTree;
