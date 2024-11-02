import React, { useState } from "react";
import Footer from "../components/Footer";
import StoreHeader from "../components/StoreHeader";  // Import the new component
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
      <StoreHeader isOpen={isOpen} onToggle={handleToggle} />

      <div className="w-landingpagewidth h-landingpageheight bg-white mt-2 justify-center items-center">
        {isOpen ? (
          <div>
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
              alt="openstore"
            />
            
            <p className="text-lg font-semibold mb-2">Your store is online.</p>
            <p className="text-sm text-gray-500 mb-storepicmargin">Waiting for new orders...</p>
            <Footer/>
          </div>
        ) : (
          <>
            <div>
              <img
                src={closedstore}
                className="h-40 w-40 m-auto mt-storepicmargin"
                alt="closedstore"
              />
              <p className="text-lg font-semibold mb-2">Your store is offline.</p>
              <p className="text-sm text-gray-500">Open store to accept orders</p>
              <Footer/>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LandingPage;