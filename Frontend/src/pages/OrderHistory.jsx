import React from "react";
import { FaSearch } from "react-icons/fa";

const OrderHistory = () => {
  return (
    <div className="max-w-sm mx-auto p-5 font-sans">
      {/* Header */}
      <h1 className="text-2xl font-bold text-center mb-4">My Orders</h1>
      
      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search 'Cold Coffee' or 'Nescafe'"
          className="w-full p-3 pl-10 rounded-full border border-gray-300 bg-gray-100 text-sm placeholder-gray-400 focus:outline-none"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      {/* Completed Order Card */}
      <div className="bg-white p-4 mb-4 rounded-lg shadow-sm border">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">Nescafe</h2>
          <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">Completed</span>
        </div>
        <p className="text-gray-500 text-sm mb-2">18 Mar 2024 at 6:04PM • Order ID:1234XXX</p>
        <div className="mb-2">
          <div className="flex justify-between mb-1">
            <span>1 x Cheese Maggi</span>
            <span>₹ 60</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>1 x Masala Maggi</span>
            <span>₹ 50</span>
          </div>
          <div className="flex justify-between font-bold mt-3">
            <span>Total</span>
            <span>₹ 110</span>
          </div>
        </div>
        <div className="mt-3">
          <p className="text-sm font-semibold">Rate</p>
          <div className="flex space-x-1 mt-1">
            {[...Array(5)].map((_, index) => (
              <span key={index} className="text-gray-400 text-xl">&#9734;</span>
            ))}
          </div>
        </div>
      </div>

      {/* Failed Order Card */}
      <div className="bg-white p-4 mb-8 rounded-lg shadow-sm border">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">Nescafe</h2>
          <span className="bg-red-100 text-red-700 text-sm font-semibold px-3 py-1 rounded-full">Failed</span>
        </div>
        <p className="text-gray-500 text-sm mb-2">18 Mar 2024 at 6:04PM • Order ID:1234XXX</p>
        <div className="mb-2">
          <div className="flex justify-between mb-1">
            <span>1 x Cheese Maggi</span>
            <span>₹ 60</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>1 x Masala Maggi</span>
            <span>₹ 50</span>
          </div>
          <div className="flex justify-between font-bold mt-3">
            <span>Total</span>
            <span>₹ 110</span>
          </div>
        </div>
        <p className="text-red-600 text-sm mt-2">Payment failed, try to place order again.</p>
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
    </div>
  );
};

export default OrderHistory;