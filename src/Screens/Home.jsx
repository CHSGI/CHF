import React from 'react'
import Button from '../Components/Button'

export default function Home() {
  return (
    <>
    <div className=' w-full h-screen lg:h-screen bg-bgLightBrown font-inter relative rounded-lg'>
        <div className=' w-full h-full lg:w-1/2 p-10 lg:px-8 lg:py-3 flex flex-col items-start justify-center z-20'>
            <h3 className=' text-lg font-bold opacity-30'>OUR MANTRA</h3>
            <h1 className=' text-greenText text-5xl lg:text-7xl font-extrabold my-2 mb-7'>Giving <span className='text-deepGreenText'>life </span> <br /> and hope to <br /> the nations...</h1>
            <Button text={"Learn more"}/>
        </div>
        <div className='w-full lg:w-1/2 h-full absolute top-0 right-0 p-10 lg:p-14 hidden lg:block '>
            <div className=' w-20 h-20 bg-brownText absolute top-96 left-20 rounded-full' />
            <div className=' w-32 h-32 bg-brownText absolute top-36 left-40 rounded-full' />
            <div className=' w-44 h-44 bg-brownText absolute top-72 right-24 rounded-full' />
        </div>
    </div>

    <section className=' w-full h-screen bg-white font-inter p-10'>
        <div className=' w-9/10 h-9/10 lg:h-1/2 m-4 flex flex-col md:flex-row justify-between items-center'>
            <div className='bg-green-50 w-full h-1/2 md:w-1/2 md:h-full rounded-xl m-2 p-10 flex flex-col'>
                <h2 className=' text-base font-medium text-green-300 opacity-70 mb-8'>ABOUT CHF</h2>
                <p className=' leading-5 lg:w-3/4 md:w-full text-sm'>
                We are a faith-based organization that 
                provides free health care, education, and  
                Bible-based spiritual mentorship for 
                children in underserved communities. 
                </p>
            </div>
            <div className='bg-orange-50 w-full h-1/2 md:w-1/2 md:h-full rounded-xl m-2 p-10 flex flex-col'>
                <h2 className=' text-orange-300 text-base font-medium mt-3'>OUR IMPACT</h2>
                <h1 className=' text-orange-500 text-5xl font-bold mt-4'>2000</h1>
                <p className=' w-1/3 md:w-1/2 mt-2 text-sm'>children got access to 
                free healthcare</p>
                <div></div>
            </div>
        </div>
    </section>
    </>
  )
}
