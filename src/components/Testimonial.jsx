import React from 'react'
import Title from './Title'
import StarRating from './StarRating'
import { testimonials } from '../assets/assets'

const Testimonial = () => {
  return (
    <section class="flex flex-col items-center px-6 md:px-16 lg:px-24 text-sm max-w-6xl mx-auto">
        <Title title='Guests Feedback' subTitle='Discover what makes our rooms unforgettable, 
        through the words of guests who stayed and loved every detail.' />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 items-center gap-3 mt-8">
            {testimonials.map((testimonials) => (
                <div key={testimonials.id} className='border border-slate-200 p-6 rounded-lg 
                hover:-translate-y-1 hover:shadow-xl hover:border-transparent transition duration-500'>
                    <p className='text-base text-slate-500'>{testimonials.review}</p>
                    <div className='flex items-center gap-3 mt-8'>
                        <img src={testimonials.image} className='"w-12 h-12 rounded-full' />
                        <div>
                            <h2 className='flex items-center gap-2 text-base text-gray-900 font-medium'>
                                {testimonials.name}
                                <StarRating />
                            </h2>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Testimonial