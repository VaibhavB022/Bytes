import React from "react"
import profileIcon from '../images/person.png'
import Footer from "../components/Footer"
import { useState } from 'react';
import closedstore from '../images/closedstore.png'
const LandingPage = () => {
    const [isOn, setIsOn] = useState(false);

    // Function to toggle the switch
    const handleToggle = () => setIsOn(!isOn);
    return (
      <div className="signup-container flex-col items-center justify-center w-mwidth border-x-2 bg-white">
        <div className='landing-page-header flex w-mwidth  items-center justify-around mx-auto'>
            <div className="w-mwidth h-12 mt-8 flex justify-between">
              <h1 className="h-5 w-36 mb-1 font-custom ml-10 font-bold text-small-25 tracking-widest-b text-left">Fourteen!</h1>
              <img src={profileIcon} className="h-8 w-8 bg-black rounded-full mr-10 mt-1" alt="Profile-Icon"/>
            </div>
        </div>
        <div 
              onClick={handleToggle} 
              className={`w-24 h-8 ml-10 flex items-center rounded-full p-1 cursor-pointer ${
              isOn ? 'bg-green-500' : 'bg-red-800'
        }`}
    >
        {/* Text inside the switch */}
        <span
          className={`text-white pl-6 text-sm font-medium absolute ml-2 transition-opacity duration-300 ${
            isOn ? 'opacity-0' : 'opacity-100'
          }`}>
            Closed
        </span>

            {/* The circle inside the switch */}
            <div
              className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
                isOn ? 'translate-x-16' : ''
              }`}
            ></div>

        {/* Open text on the right side */}
        <span
          className={`text-white text-sm font-medium ml-4 absolute transition-opacity duration-300 ${
            isOn ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Open
        </span>
      </div>
      <hr class="h-px my-1 bg-black border dark:bg-black mt-4"></hr>
     <div className= 'w-landingpagewidth h-landingpageheight bg-white mt-2 justify-center items-center'>
       
        <img src={closedstore} className=" h-40 w-40 m-auto mt-storepicmargin" alt="closedstore"/>
        <p className="text-lg font-semibold mb-2">Your store is offline.</p>
        <p className="text-sm text-gray-500">Open store to accept orders</p>
    
      </div>   
    <Footer/>
    
    </div>
   
  )
}

export default LandingPage