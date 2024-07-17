import React from 'react'
import Button from '../Components/Button'

export default function Home() {
  return (
    <>
    <div className=' w-full h-full lg:h-screen bg-bgLightBrown font-inter'>
        <div className=' w-full h-full lg:w-1/2 p-10 lg:px-8 lg:py-3 flex flex-col items-start justify-center'>
            <h3 className=' text-lg font-bold opacity-30'>OUR MANTRA</h3>
            <h1 className=' text-greenText text-5xl lg:text-7xl font-extrabold my-2 mb-7'>Giving <span className='text-deepGreenText'>life </span> <br /> and hope to <br /> the nations...</h1>
            <Button text={"Learn more"}/>
        </div>
        <div>
            <img src="" alt="" />
        </div>
    </div>
    </>
  )
}
