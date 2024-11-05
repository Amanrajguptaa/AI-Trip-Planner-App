import React, { useState,useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { useToast } from "@/hooks/use-toast";
import { db } from '../../services/firebaseConfig';
import InfoSection from './InfoSection';
import Hotels from './Hotels';
import PlacesToVisit from './PlacesToVisit';
import Footer from './Footer';


const ViewTrip = () => {

  const { toast } = useToast();
  const {tripId}= useParams()
  const[trip,setTrip]=useState([])
  


  useEffect(()=>{
    tripId&&GetTripData();
  },[tripId])

  const GetTripData=async()=>{
    const docRef=doc(db,'AITrips',tripId)
    const docSnap= await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setTrip(docSnap.data());
    }
    else{
      console.log('No Document');
      toast({
        title: "No Data Found",
      });    

  }
}

return (
  <div>
  <Navbar/>
<div className='sm:px-10 md:px-56 px-5 mt-5 md:mt-10'>
  {/* Information Section */}
    <InfoSection trip={trip} />
  {/* Recommended Hotels */}
    <Hotels trip={trip}/>
  {/* Daily Plan */}
    <PlacesToVisit trip={trip} />
  {/* Footer */}
  <Footer trip={trip}/>
  </div>


  </div>
)

}

export default ViewTrip
