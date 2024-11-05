import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home/Home.jsx'
import{RouterProvider,createBrowserRouter} from "react-router-dom"
import CreateTrip from './components/CreateTrip/CreateTrip.jsx'
import ViewTrip from'./components/ViewTrip/ViewTrip.jsx'
import { Toaster } from "@/components/ui/toaster"
import { GoogleOAuthProvider } from '@react-oauth/google';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/create-trip',
    element:<CreateTrip/>
  },
  {
    path:'/view-trip/:tripId',
    element:<ViewTrip/>
  },

])

createRoot(document.getElementById('root')).render(
  <>
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
  <Toaster />
  <RouterProvider router={router}/>
  </GoogleOAuthProvider>
  </>
)
