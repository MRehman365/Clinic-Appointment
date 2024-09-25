import React from 'react'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Passchanged = () => {
  return (
    <div className='h-[100vh] flex flex-col p-6 gap-4 justify-center items-center text-center'>
      <div className='text-[6rem] text-[#18c07a]'><RiVerifiedBadgeFill />
</div>
<h2 className='text-3xl font-semibold'>Password changed!</h2>
<p className='text-gray-500 px-10 text-sm'>Your password has been changed successfully</p>
<Link to='/language' className="bg-[#4486ff] text-white p-4 rounded-lg w-full text-center mt-5">
            Login
          </Link>

    </div>
  )
}

export default Passchanged
