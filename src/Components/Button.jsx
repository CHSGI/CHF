import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({link}) {
  return (
    <div>
        <Link to="" className='text-greenText hover:shadow-lg shadow-stone-700 duration-500 py-1 px-6 border-2 border-greenText mt-5 rounded-full flex flex-row justify-center'>Learn More <span className='text-lg'><i className='bx bx-right-arrow-alt'></i></span></Link>
    </div>
  )
}
