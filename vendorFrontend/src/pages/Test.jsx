import React, { useState } from "react";
import profileIcon from "../images/person.png";
import Footer from "../components/Footer";
import closedstore from "../images/closedstore.png";
import openstore from "../images/openstore.png";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [newOrders, setNewOrders] = useState(0);
  const [currentOrders, setCurrentOrders] = useState(0);
  const [completedOrders, setCompletedOrders] = useState(0);

  // Function to toggle the store status
  const handleToggle = () => setIsOpen(!isOpen);

  // Functions to update order status
  const handleNewOrder = () => setNewOrders(newOrders + 1);
  const handleCurrentOrder = () => {
    setNewOrders(newOrders - 1);
    setCurrentOrders(currentOrders + 1);
  };
  const handleCompletedOrder = () => {
    setCurrentOrders(currentOrders - 1);
    setCompletedOrders(completedOrders + 1);
  };

  return (
    <div className="signup-container flex-col items-center justify-center w-mwidth border-x-2 bg-white">
      <div className="landing-page-header flex w-mwidth items-center justify-around mx-auto">
        <div className="w-mwidth h-12 mt-8 flex justify-between">
          <h1 className="h-5 w-36 mb-1 font-custom ml-10 font-bold text-small-25 tracking-widest-b text-left">
            Fourteen!
          </h1>
          <img
            src={profileIcon}
            className="h-8 w-8 bg-black rounded-full mr-10 mt-1"
            alt="Profile-Icon"
          />
        </div>
      </div>

      <div
        onClick={handleToggle}
        className={`w-24 h-8 ml-10 flex items-center rounded-full p-1 cursor-pointer ${
          isOpen ? "bg-green-500" : "bg-red-800"
        }`}
      >
        <span
          className={`text-white pl-6 text-sm font-medium absolute ml-2 transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        >
          Closed
        </span>

        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
            isOpen ? "translate-x-16" : ""
          }`}
        ></div>

        <span
          className={`text-white text-sm font-medium ml-4 absolute transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          Open
        </span>
      </div>

      <hr className="h-px my-1 bg-black border-0 dark:bg-black mt-4" />

      <div className="w-landingpagewidth h-landingpageheight bg-white mt-2 justify-center items-center">
        {isOpen ? (
          <div >
            
            <div className="flex justify-around mt-4">
                <div>
                    <p className="text-sm text-gray-500">New Orders</p>
                    <p className="font-bold">{newOrders}</p>
            
                </div>
                <div>
                    <p className="text-sm text-gray-500">Current Orders</p>
                    <p className="font-bold">{currentOrders}</p>
                    
                </div>
                <div>
                    <p className="text-sm text-gray-500">Completed Orders</p>
                    <p className="font-bold">{completedOrders}</p>
                    
                </div>
            </div>

            <img
              src={openstore}
              className="h-40 w-40 m-auto mt-openstorepicmargin"
              alt="openstore"/>
            
            <p className="text-lg font-semibold mb-2">Your store is online.</p>
            <p className="text-sm text-gray-500 mb-storepicmargin">Waiting for new orders...</p>
            <Footer/>
          </div>
        ) : (<><div>
          <img
            src={closedstore}
            className="h-40 w-40 m-auto mt-storepicmargin"
            alt="closedstore"
          />
          <p className="text-lg font-semibold mb-2">Your store is offline.</p>
          <p className="text-sm text-gray-500">Open store to accept orders</p>
          <Footer/>
        </div>
        {/* <Footer/> */}
        </>
        
        
        )}
      </div>

      
    </div>
  );
};

export default LandingPage;
