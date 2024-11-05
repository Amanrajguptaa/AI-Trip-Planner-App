import React from 'react'
import { Link } from 'react-router-dom'
const PlaceCardItem = ({item}) => {
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+item?.placeName} target='_blank'>
    <div className='shadow-md border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all cursor-pointer'>
      <img className='rounded-xl w-[200px] h-[200px] object-cover' src="https://www.holidaymonk.com/wp-content/uploads/2023/05/Travel-Guide-to-Vietnam.jpg" alt="" />
      <div>
      <div>
        <h2 className='font-bold text-lg'>{item?.placeName}</h2>
        <p className='text-gray-500 text-sm'>{item?.placeDetails}</p>
        <h2 className='mt-2'>🕑 {item?.timeNeeded}</h2>
      </div>
        <div className='mt-4 flex'>
          <div className='w-6 h-6'>
            <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#231F20" d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39 h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z"></path> <path fill="#231F20" d="M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32 c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"></path> <path fill="#231F20" d="M32,10c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,10,32,10z M32,36 c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,36,32,36z"></path> </g> </g></svg>
            </div>
            <Link to={'https://www.google.com/maps/search/?api=1&query='+item?.placeName} target='_blank'>
            <p className='font-bold text-md'>View Location</p></Link>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default PlaceCardItem
