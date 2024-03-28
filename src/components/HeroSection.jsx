import React from 'react'
import Hero from '../assets/hero.png'
import { useNavigate } from 'react-router-dom'
export const HeroSection = () => {
  const navigate = useNavigate();
  const showParticularData = () => {
    navigate(`/Products/6`)
  }
  return (
    <div className='w-full h-[500px] flex md:flex-row flex-col bg-slate-200'>
        <div className='p-6 md:w-1/2 w-full  md:flex md:flex-wrap md:justify-center md:items-center'>
          <div className="px-6">
            <h1 className="md:text-5xl text-4xl font-bold">The best notebook collection 2024</h1>
            <p className='md:text-3xl font-medium pt-3'>Exclusive offer <span className='text-red-700'>-10%</span> off this week</p>
            <button onClick={showParticularData} className='my-5 bg-white py-3 px-5 rounded-md font-medium hover:bg-orange-600'>Shop Now</button>
          </div>
        </div>
        <div className='md:w-1/2 w-full h-full md:flex md:flex-wrap md:justify-center md:items-center'>
             <img src={Hero} alt="" />
        </div>

    </div>
  )
}
