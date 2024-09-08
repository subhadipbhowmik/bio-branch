import { Share } from 'lucide-react'
import { useRouter } from 'next/router'
import React from 'react'
import { toast } from 'react-toastify';

const ShareButton = () => {
    const router = useRouter()
    const copyLink = () => {
        navigator.clipboard.writeText(`http://localhost:3000/${router.query.handle}`);
        toast.success(`Link Copied for ${router.query.handle}`);
    }
  return (
    <>
    <div className="absolute z-50 top-28 left-10">
        <Share color='white' className='w-10 h-10 shadow-md bg-indigo-400 border-indigo-700 rounded-sm p-2 cursor-pointer' onClick={copyLink} />
    </div>
    </>
  )
}

export default ShareButton