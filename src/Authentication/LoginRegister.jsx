import React from 'react'
import { Link } from 'react-router-dom'

const LoginRegister = () => {
  return (
    <div className='h-[100vh] flex flex-col justify-center items-center p-3 relative'>
    <Link to="/login" className='bg-[#4486ff] text-white text-sm flex justify-center items-center p-4 rounded-lg w-full'>Login</Link>
    <Link to="/register" className='border border-black text-black text-sm flex justify-center items-center p-4 rounded-lg w-full mt-5'>Register</Link>
    <p className='text-sm text-[#37c2c1] font-semibold absolute bottom-2 left-1/2 transform -translate-x-1/2'>Continue as a guest</p>
    </div>
  )
}

export default LoginRegister
