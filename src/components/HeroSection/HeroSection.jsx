import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center text-center p-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white ">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Personalize Your Travel Planning with AI
      </h1>

      {/* Subtitle */}
      <p className="text-white text-lg md:text-xl max-w-2xl mb-12 opacity-90">
        Now there are two ways to plan your trip—use AI or search on your own. Either way,
        you’ve got more than 8 million spots to discover, with over one billion traveler
        reviews and opinions to guide you.
      </p>

      {/* Features */}
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {/* Feature 1 */}
        <div className="flex flex-col items-center bg-white text-black p-6 rounded-lg shadow-lg w-48">
          <div className="w-12 h-12 mb-4">
            {/* AI Recommendations SVG */}
            <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M97.8357 54.6682C177.199 59.5311 213.038 52.9891 238.043 52.9891C261.298 52.9891 272.24 129.465 262.683 152.048C253.672 173.341 100.331 174.196 93.1919 165.763C84.9363 156.008 89.7095 115.275 89.7095 101.301" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M98.3318 190.694C-10.6597 291.485 121.25 273.498 148.233 295.083" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M98.3301 190.694C99.7917 213.702 101.164 265.697 100.263 272.898" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M208.308 136.239C208.308 131.959 208.308 127.678 208.308 123.396" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M177.299 137.271C177.035 133.883 177.3 126.121 177.3 123.396" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M203.398 241.72C352.097 239.921 374.881 226.73 312.524 341.851" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M285.55 345.448C196.81 341.85 136.851 374.229 178.223 264.504" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M180.018 345.448C160.77 331.385 139.302 320.213 120.658 304.675" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M218.395 190.156C219.024 205.562 219.594 220.898 219.594 236.324" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M218.395 190.156C225.896 202.037 232.97 209.77 241.777 230.327" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M80.1174 119.041C75.5996 120.222 71.0489 119.99 66.4414 120.41" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M59.5935 109.469C59.6539 117.756 59.5918 125.915 58.9102 134.086" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M277.741 115.622C281.155 115.268 284.589 114.823 287.997 114.255" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M291.412 104.682C292.382 110.109 292.095 115.612 292.095 121.093" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M225.768 116.466C203.362 113.993 181.657 115.175 160.124 118.568" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </div>
          <p className="font-semibold text-lg">Get AI Recommendations</p>
          <p className="text-sm text-gray-600 mt-2">
            Personalize with AI for top travel tips.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center bg-white text-black p-6 rounded-lg shadow-lg w-48">
          <div className="w-12 h-12 mb-4">
            {/* Save Locations SVG */}
            <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path fill="#394240" d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39 h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z"></path> <path fill="#394240" d="M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32 c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"></path> <path fill="#394240" d="M32,10c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,10,32,10z M32,36 c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,36,32,36z"></path> </g> <g> <path fill="#F76D57" d="M32,12c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S38.627,12,32,12z M32,34 c-5.522,0-10-4.477-10-10s4.478-10,10-10s10,4.477,10,10S37.522,34,32,34z"></path> <path fill="#F76D57" d="M32,2c-12.15,0-22,9.85-22,22c0,5.799,3.469,11.469,5.913,15h0.01L32,61l16.077-22h0.01 C50.281,35.781,54,29.799,54,24C54,11.85,44.15,2,32,2z M32,38c-7.732,0-14-6.268-14-14s6.268-14,14-14s14,6.268,14,14 S39.732,38,32,38z"></path> </g> <path opacity="0.2" fill="#231F20" d="M32,12c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S38.627,12,32,12z M32,34 c-5.522,0-10-4.477-10-10s4.478-10,10-10s10,4.477,10,10S37.522,34,32,34z"></path> </g> </g></svg>
          </div>
          <p className="font-semibold text-lg">Save Hotels & More</p>
          <p className="text-sm text-gray-600 mt-2">
            Bookmark places to visit or stay.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center bg-white text-black p-6 rounded-lg shadow-lg w-48">
          <div className="w-12 h-12 mb-4">
            {/* Custom Map SVG */}
            <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 952 952" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M339,155.55c-16,0-29,13-29,29v590c0,16,13,29,29,29h274c16,0,29-13,29-29v-590c0-16-13-29-29-29H339z"></path> <path d="M728.5,795.451l201.3-79.2c13.4-5.3,22.2-18.2,22.2-32.601V82.45c0-11-11.1-18.6-21.3-14.5l-200.5,78.9 c-13.4,5.3-22.2,18.2-22.2,32.6V781.55C708,792.15,718.7,799.35,728.5,795.451z"></path> <path d="M223.5,156.65l-201.3,79.2C8.8,241.05,0,254.05,0,268.35V869.55c0,11,11.1,18.6,21.3,14.5l200.5-78.9 c13.4-5.3,22.2-18.199,22.2-32.6v-602C244,159.95,233.3,152.75,223.5,156.65z"></path> </g> </g></svg>
          </div>
          <p className="font-semibold text-lg">Custom Maps</p>
          <p className="text-sm text-gray-600 mt-2">
            View all your saves on an interactive map.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col items-center bg-white text-black p-6 rounded-lg shadow-lg w-48">
          <div className="w-12 h-12 mb-4">
            {/* Collaborate SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-full h-full text-blue-800">
              <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V20h6v-3.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
          </div>
          <p className="font-semibold text-lg">Collaborate with Friends</p>
          <p className="text-sm text-gray-600 mt-2">
            Share plans and coordinate easily.
          </p>
        </div>
      </div>

      {/* Login Link */}
      <p className="text-white opacity-90">
        Already excited?{" "}
        <Link to={'/create-trip'} className="text-yellow-300 font-semibold underline">
          Get Started
        </Link>{" "}
        to plan your trips.
      </p>
    </section>
  );
};

export default HeroSection;
