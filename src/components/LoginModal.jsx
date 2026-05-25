import React from 'react'
import { assets } from '../assets/assets'

const LoginModal = ({ isOpen, onClose }) => { 
    if (!isOpen) return null;
  return (
    <div onClick={onClose} className='fixed inset-0 z-50 flex items-center justify-center bg-black/80'>
        <form className="flex w-full flex-col items-center justify-center max-w-96">
            <h2 className="text-4xl font-medium text-white">Sign in</h2>
            <p className="mt-3 text-sm text-white">Welcome back! Please sign in to continue</p>
            <div className="mt-10 mb-2 grid w-full grid-cols-3 gap-6">
                <button type="button" className="flex items-center justify-center rounded-full border border-gray-200 py-2.5 hover:bg-gray-50 focus:border-gray-300 cursor-pointer">
                    <img src={assets.google} alt="google" className='h-9' />
                </button>
                <button type="button" className="flex items-center justify-center rounded-full border border-gray-200 py-2.5 hover:bg-gray-50 focus:border-gray-300 cursor-pointer">
                    <img src={assets.twitter} alt="twitter" className='h-9' />
                </button>
                <button type="button" className="flex items-center justify-center rounded-full border border-gray-200 py-2.5 hover:bg-gray-50 focus:border-gray-300 cursor-pointer">
                   <img src={assets.facebook} alt="" className='h-9' />
                </button>
            </div>
            <div className="my-5 flex w-full items-center gap-4">
                <div className="h-px w-full bg-gray-300/90"></div>
                <p className="w-full text-sm text-nowrap text-white">or sign in with email</p>
                <div className="h-px w-full bg-gray-300/90"></div>
            </div>
            <div className="flex h-12 w-full items-center gap-2 overflow-hidden rounded-full 
            border border-gray-200 bg-transparent pl-5 focus-within:border-gray-300">
                <img src={assets.email_icon} alt="email_icon"  />
                <input
                    placeholder="Email id"
                    className="h-full w-full bg-transparent text-sm placeholder-white outline-none"
                    required=""
                    type="email"
                />
            </div>
            <div className="mt-6 flex h-12 w-full items-center gap-2 overflow-hidden rounded-full 
            border border-gray-200 bg-transparent pl-5 focus-within:border-gray-300">
                <img src={assets.email} alt="email" className="h-5" />
                <input
                    placeholder="Password"
                    className="h-full w-full bg-transparent text-sm placeholder-white outline-none"
                    required=""
                    type="password"
                />
            </div>
            <div className="mt-8 flex w-full items-center justify-between">
                <label className="flex cursor-pointer items-center gap-2">
                    <input className="peer hidden" type="checkbox" checked="" />
                        <span class="relative flex size-4.5 items-center justify-center rounded border border-slate-300 peer-checked:border-gray-800 peer-checked:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check size-3 text-white" aria-hidden="true" >
                    <path d="M20 6 9 17l-5-5"></path>
                </svg>
            </span>
                    <span className="text-white select-none">Remember me</span>
                </label>
                <a className="text-white underline" href="#">
                    Forgot password?
                </a>
            </div>
            <button type="submit" className="mt-8 h-11 w-full cursor-pointer rounded-full bg-linear-to-b 
            from-gray-600 to-gray-800 text-white transition hover:from-gray-700 
            hover:to-gray-900" >
                Login
            </button>
            <p className="mt-4 text-white"> 
                Don’t have an account?
                <p className="text-white underline text-center cursor-pointer" href="#">
                    Sign up
                </p>
            </p>
        </form>
    </div>
  )
}

export default LoginModal;