import React, { useEffect } from 'react'
import { getPlaceDetails } from '../../services/GlobalApi'

const InfoSection = ({trip}) => {

  useEffect(()=>{
      getPlacePhoto();
  },[trip])

  const getPlacePhoto=async()=>{

    

    const data ={
      textQuery:trip?.userSelection?.location
    }

    const result = await getPlaceDetails(data)
    .then(resp=>{console.log(resp.data);
    })
  }

  return (
    <div className=''>
      <img className='rounded-[30px] h-[340px] w-full object-cover' src="https://www.basilicaindustria.com/wp-content/uploads/2017/09/travel-options.jpg" alt="" />
      
      <div className='my-5 flex flex-col gap-2'>
        <h2 className='font-bold text-2xl'>{trip.userSelection?.location}</h2>
        <div className='flex gap-5'>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500'>📅 {trip.userSelection?.noOfDays} Day</h2>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500'>💰 {trip.userSelection?.budget}</h2>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500'>🥂 No.of Traveler: {trip.userSelection?.traveler}</h2>

        </div>

      </div>
    </div>
  )
}

export default InfoSection
