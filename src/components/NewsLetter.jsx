import React from 'react'
import { assets } from '../assets/assets'

const NewsLetter = () => {
  return (
    <div class="w-full bg-gray-900 px-4 text-center text-white py-20 my-30 flex flex-col 
    items-center justify-center md:py-16 mx-2 lg:mx-auto max-w-5xl lg:w-full rounded-2xl">
        <p class="text-indigo-500 font-medium text-5xl">
            Get updated
        </p>
        <h1 class="max-w-lg font-semibold text-lg mt-6">
            Subscribe to our newsletter & get the latest rooms deals, exclusive offers, and insider tips 
            straight to your inbox.
        </h1>
        <div class="flex items-center justify-center mt-10 border border-slate-600 focus-within:outline 
        focus-within:outline-indigo-600 text-sm rounded-full h-14 max-w-md w-full">
            <input type="text" class="bg-transparent outline-none rounded-full px-4 h-full flex-1" 
            placeholder="Enter your email address"/>
            <button class="bg-indigo-600 font-medium gap-3 text-white rounded-full h-11 mr-1 px-8 
            flex items-center justify-center">
                Subscribe now
                <img src={assets.arrowIcon} alt="arrow icon" className='w-3.5 invert 
                group-hover:translate-x-1 transition-all' />
            </button>
        </div>
    </div>
  )
}

export default NewsLetter