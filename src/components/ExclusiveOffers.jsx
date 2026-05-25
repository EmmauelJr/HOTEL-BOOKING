import React from 'react'
import Title from './Title'
import { assets, exclusiveOffers } from '../assets/assets'

const ExclusiveOffers = () => {
  return (
    <div className='flex flex-col items-center px-10 md:px-15 lg:px-25 xl:px-35 pt-20 pb-20'>
      <div className='flex flex-col md:flex-row items-center justify-between w-full'>
        <Title align='left' title='Exclusive Offers' subTitle='Unlock special deals on our finest rooms, 
        where luxury meets value to give you an exceptional stay at an unbeatable price.' />
        <button className='group flex items-center gap-2 font-medium cursor-pointer max-md:mt-15'>
            View All Offers
            <img src={assets.arrowIcon} alt="arrow icon" 
            className='group-hover:translate-x-1 transition-all' />
        </button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12'>
        {exclusiveOffers.map((offer) => (
            <div key={offer._id} className='group relative flex flex-col items-start justify-between gap-1 
            pt-15 md:pt-18 p-4 w-100 rounded-2xl text-white bg-no-repeat bg-cover bg-center transition-all' 
            style={{backgroundImage: `url(${offer.image})`}}>
                <p className='px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 
                font-medium rounded-full'>
                    {offer.priceOff}% OFF
                </p>
                <div>
                    <p className='text-2xl font-medium font-merriweather'>
                        {offer.title}
                    </p>
                    <p>
                        {offer.description}
                    </p>
                    <p className='text-xs text-white/70 mt-3'>
                        Expires {offer.expiryDate}
                    </p>
                </div>
                <button className='flex items-center gap-2 font-medium cursor-pointer mt-4 mb-4'>
                    View Offers
                    <img className='invert group-hover:translate-x-1 transition-all' 
                    src={assets.arrowIcon} alt="arrow icon" />
                </button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default ExclusiveOffers