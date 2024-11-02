import React, { useState } from "react";
import profileIcon from "../images/person.png";
import Footer from "../components/Footer";

const OrderDetailsPage = () => {
  const [prepTime, setPrepTime] = useState(20);

  const increasePrepTime = () => {
    setPrepTime(prepTime + 5);
  };

  const decreasePrepTime = () => {
    if (prepTime > 5) {
      setPrepTime(prepTime - 5);
    }
  };

  return (
    <div className="signup-container flex-col items-center justify-between w-mwidth border-x-2 bg-white h-screen">
      <div className="landing-page-header flex w-mwidth items-center justify-around mx-auto">
        <div className="w-mwidth h-12 mt-8 flex justify-between items-center">
          <h1 className="h-5 w-36 mb-1 font-custom ml-10 font-bold text-small-25 tracking-widest-b text-left">
            Fourteen!
          </h1>
          <div className="flex items-center mr-10">
            <button className="mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            <img
              src={profileIcon}
              className="h-8 w-8 bg-black rounded-full"
              alt="Profile-Icon"
            />
          </div>
        </div>
      </div>

      <div className="w-24 h-8 ml-10 flex items-center rounded-full p-1 cursor-pointer bg-green-500">
        <div className="bg-white w-6 h-6 rounded-full shadow-md transform translate-x-16"></div>
        <span className="text-white text-sm font-medium ml-4 absolute">
          Open
        </span>
      </div>

      <div className="flex justify-around w-full mt-4 px-10">
        <button className="px-4 py-1 rounded-full bg-red-50 text-red-500">
          New orders (1)
        </button>
        <button className="px-4 py-1 rounded-full text-gray-500">
          Current Orders (0)
        </button>
        <button className="px-4 py-1 rounded-full text-gray-500">
          Completed (0)
        </button>
      </div>

      <div className="w-11/12 mx-auto mt-4 bg-gray-50 rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="font-semibold">Avneesh Sinha</p>
            <p className="text-sm text-gray-500">19 Mar 2024 at 6:04PM</p>
          </div>
          <div className="flex items-center">
            <p className="text-gray-500 mr-2">Order ID:123456</p>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle>
              </svg>
            </button>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <div className="flex items-center">
              <span className="text-sm mr-2">1 ×</span>
              <span>Cheese Maggi</span>
            </div>
            <span>₹ 60</span>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <span className="text-sm mr-2">1 ×</span>
              <span>Masala Maggi</span>
            </div>
            <span>₹ 50</span>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold">Total Amt.</span>
          <span className="bg-green-100 text-green-600 px-2 py-1 rounded">PAID</span>
          <span className="font-semibold">₹ 110</span>
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-2">Set preparation time</p>
          <div className="flex items-center justify-between border rounded-lg p-2">
            <button 
              onClick={decreasePrepTime}
              className="w-8 h-8 flex items-center justify-center text-2xl text-gray-500"
            >
              −
            </button>
            <span>{prepTime} mins</span>
            <button 
              onClick={increasePrepTime}
              className="w-8 h-8 flex items-center justify-center text-2xl text-gray-500"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button className="px-6 py-2 border border-red-500 text-red-500 rounded-lg">
            Reject
          </button>
          <button className="px-6 py-2 bg-green-500 text-white rounded-lg">
            Accept (5:00)
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderDetailsPage;