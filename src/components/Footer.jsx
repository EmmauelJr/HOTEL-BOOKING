import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer class='bg-black py-12 px-4 sm:px-6 lg:px-8'>
    <div class='w-full max-w-7xl mx-auto'>
        <div class="flex flex-wrap justify-between gap-y-12 lg:gap-x-8">
            <div class="w-full md:w-[45%] lg:w-[35%] flex flex-col items-center md:items-start 
            text-center md:text-left">
                <h1 className='text-white text-4xl mb-4'>Velora Suites</h1>

                <div class='w-full max-w-52 h-px bg-linear-to-r from-black via-white/25 to-black'></div>
                <p class='text-sm text-white/60 mt-6 max-w-sm leading-relaxed'>
                    Discover the world's most extraordinary places to stay, from boutique hotels to luxury
                    villas and private islands.
                </p>
                 <div className='flex items-center gap-3 mt-4'>
                    <img src={assets.instagramIcon} alt="instagram" className=' cursor-pointer w-6' />
                    <img src={assets.facebookIcon} alt="facebook" className='cursor-pointer w-6' />
                    <img src={assets.twitterIcon} alt="twitter" className='cursor-pointer w-6' />
                    <img src={assets.linkendinIcon} alt="linkedin" className='cursor-pointer w-6' />
                </div>
            </div>

            <div class="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center 
            md:text-left">
                <h3 class='text-white font-medium text-lg'>Important Links</h3>
                <div class="flex flex-col gap-2 mt-6">
                    <a href="#" class='text-sm text-white/60 hover:text-white transition-colors'>
                        Home
                    </a>
                    <a href="#" class='text-sm text-white/60 hover:text-white transition-colors'>
                        About
                    </a>
                    <a href="#" class='text-sm text-white/60 hover:text-white transition-colors'>
                        Portfolio
                    </a>
                    <a href="#" class='text-sm text-white/60 hover:text-white transition-colors'>
                        Contact
                    </a>
                    <a href="#" class='text-sm text-white/60 hover:text-white transition-colors'>
                        FAQ
                    </a>
                </div>
            </div>

            <div class="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center 
            md:text-left">
                <h3 class='text-lg text-white font-medium'>Support</h3>
                <div class="flex flex-col gap-2 mt-6">
                    <a href="#" class='text-sm text-white/60 hover:text-white transition-colors'>
                        Help Center
                    </a>
                    <a href="#" class='text-sm text-white/60 hover:text-white transition-colors'>
                        Safety Information
                    </a>
                    <a href="#" class='text-sm text-white/60 hover:text-white transition-colors'>
                        Cancellation Options
                    </a>
                    <a href="#" class='text-sm text-white/60 hover:text-white transition-colors'>
                        Contact Us
                    </a>
                    <a href="#" class='text-sm text-white/60 hover:text-white transition-colors'>
                        Accessibility
                    </a>
                </div>
            </div>

            <div class="w-full md:w-[45%] lg:w-[25%] flex flex-col items-center md:items-start text-center
            md:text-left">
                <h3 class='text-lg text-white font-medium'>Subscribe for news</h3>
                <p className='mt-3 text-sm text-white/60'>
                    Subscribe to our newsletter for inspiration and special offers.
                </p>
                <div class="flex items-center border gap-2 border-white/20 h-13 max-w-80 w-full 
                rounded-full overflow-hidden mt-4">
                    <input type="email" placeholder="Enter your email..." class="w-full h-full pl-6 
                    outline-none text-sm bg-transparent text-white placeholder-white/60 
                    placeholder:text-xs" required />
                    <button type="submit" class="bg-linear-to-b from-[#5623D8] to-[#7B53E2] 
                    active:scale-95 transition w-56 h-10 rounded-full text-sm text-white cursor-pointer 
                    mr-1.5">
                        Subscribe
                    </button>
                </div>
            </div>

        </div>

        <div class='w-full h-px mt-16 mb-4 bg-linear-to-r from-black via-white/25 to-black'></div>

        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
            <p class='text-xs text-white/60'>
                © {new Date().getFullYear()} Velora Suites. All rights reserved.
            </p>
            <div class="flex items-center gap-6">
                <a href='#' class='text-xs text-white/60 hover:text-white transition-colors'>
                    Terms & Conditions
                </a>
                <div class='w-px h-4 bg-white/20'></div>
                <a href='#' class='text-xs text-white/60 hover:text-white transition-colors'>
                    Privacy Policy
                </a>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer