import React from "react";
import { FaClock } from "react-icons/fa"; // Importing an icon for estimated time
import Footer from "../components/Footer";

const OrderPlaced = () => {
  return (
    <div className="max-w-sm mx-auto p-5 font-sans">
      {/* Header */}
      <h1 className="text-2xl font-bold text-center mb-2">Nescafe</h1>
      <p className="text-center text-gray-500 flex items-center justify-center mb-6">
        <FaClock className="mr-2" /> 5-10 mins • Estimated Time
      </p>
      
      {/* Order Confirmation */}
      <div className="bg-green-500 text-white text-center py-5 rounded-lg mb-6">
        <h2 className="text-lg font-semibold">Your order has been placed!</h2>
        <p className="bg-green-600 text-white py-1 px-4 mt-2 inline-block rounded-full">
          Prep time 10 mins
        </p>
      </div>

      {/* Order Tracking Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Track your order</h2>
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-2">
            <div className="bg-green-500 rounded-full w-4 h-4 flex-shrink-0"></div>
            <span className="ml-3">Order Accepted</span>
          </div>
          <div className="flex items-center mb-2">
            <div className="border border-gray-300 rounded-full w-4 h-4 flex-shrink-0"></div>
            <span className="ml-3 text-gray-500">On Preparation</span>
          </div>
          <div className="flex items-center mb-2">
            <div className="border border-gray-300 rounded-full w-4 h-4 flex-shrink-0"></div>
            <span className="ml-3 text-gray-500">Ready to be picked up</span>
          </div>
          <div className="flex items-center">
            <div className="border border-gray-300 rounded-full w-4 h-4 flex-shrink-0"></div>
            <span className="ml-3 text-gray-500">Picked up!</span>
          </div>
        </div>
      </div>

      {/* Order Summary Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Order Summary</h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <div className="flex justify-between mb-2">
            <span>1 x Cheese Maggi</span>
            <span>₹ 60</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>1 x Masala Maggi</span>
            <span>₹ 50</span>
          </div>
          <div className="flex justify-between font-bold mt-3">
            <span>Subtotal</span>
            <span>₹ 110</span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white py-2 shadow-t flex justify-around">
        <button className="text-gray-500">
          <i className="fas fa-home text-xl"></i>
        </button>
        <button className="text-gray-500">
          <i className="fas fa-list text-xl"></i>
        </button>
        <button className="text-gray-500">
          <i className="fas fa-heart text-xl"></i>
        </button>
        <button className="text-gray-500">
          <i className="fas fa-shopping-bag text-xl"></i>
        </button>
      </div>
      <Footer/>
    </div>
  );
};

export default OrderPlaced;