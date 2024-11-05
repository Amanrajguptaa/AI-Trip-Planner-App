import React from 'react'
import { Link } from 'react-router-dom'

const Hotels = ({trip}) => {
  return (
    <div className='mt-5'>
      <h2 className='font-bold text-xl mt-5'>Hotel Recommendations</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-5 '>
        {trip?.tripData?.hotel_options.map((item,index)=>(
            <Link to={'https://www.google.com/maps/search/?api=1&query='+item?.hotel_name+" "+item?.hotel_address} target='_blank'>
            <div key={index} className='hover:scale-110 transition-all cursor-pointer'>
                <img className='rounded-xl' src='https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=' alt="" />
                <div className='my-2 flex flex-col gap-2'>
                    <h2 className='font-medium '>📍{item?.hotel_name}</h2>
                    <h2 className='text-xs text-gray-500 '>{item?.hotel_address}</h2>
                    <h2 className='text-sm'>💵 {item?.price}</h2>
                    <h2 className='text-sm'>⭐{item?.rating}</h2>
                </div>
            </div>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default Hotels
