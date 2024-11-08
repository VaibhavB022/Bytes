import React, { useState } from 'react';

const Orders = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="bg-gray-900 text-white flex justify-between items-center p-4">
        <h1 className="text-xl">Fourteen!</h1>
        <div className="flex items-center gap-4">
          <button className="bg-green-500 text-white px-4 py-1 rounded-full">Open</button>
          <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
            <i className="fas fa-user"></i> {/* Use Font Awesome or any icon library */}
          </div>
        </div>
      </header>

      {/* Order Tabs */}
      <div className="flex justify-around mt-4">
        <button className="text-gray-500">New Orders (0)</button>
        <button className="text-red-500 border-b-2 border-red-500 pb-1">Current Orders (1)</button>
        <button className="text-gray-500">Completed (0)</button>
      </div>

      {/* Order Card */}
      <div className="mt-6 bg-white shadow-lg rounded-lg p-4 relative">
        {/* Customer Info */}
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold">Avneesh Sinha</p>
            <p className="text-gray-500 text-sm">18 Mar 2024 at 6:04PM</p>
          </div>
          <div className="relative">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-500">
              <i className="fas fa-ellipsis-vertical"></i> {/* Icon for menu */}
            </button>
            {isMenuOpen && (
              <div className="absolute top-8 right-0 bg-white shadow-lg rounded p-2 w-40 text-sm">
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Call Customer</button>
                <button className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">Cancel Order</button>
              </div>
            )}
          </div>
        </div>

        {/* Order Details */}
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <p>1 x Cheese Maggi</p>
            <p>₹ 60</p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p>1 x Masala Maggi</p>
            <p>₹ 50</p>
          </div>
        </div>

        {/* Total Amount */}
        <div className="mt-4 flex justify-between items-center border-t pt-2">
          <p className="font-bold">Total Amt.</p>
          <div className="flex items-center gap-2">
            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">PAID</span>
            <p className="font-bold">₹ 110</p>
          </div>
        </div>

        {/* Order Status Buttons */}
        <div className="mt-4 flex flex-col gap-2">
          <button className="w-full bg-blue-500 text-white py-2 rounded">Order Preparing (18:21)</button>
          <button className="w-full bg-green-500 text-white py-2 rounded">Order Ready... Call for pickup</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full bg-white shadow-t p-4 flex justify-around border-t">
        <button className="text-center text-gray-600">
          <i className="fas fa-utensils"></i> {/* Replace with appropriate icon */}
          <p className="text-xs">Menu</p>
        </button>
        <button className="text-center text-gray-600">
          <i className="fas fa-clipboard-list"></i> {/* Replace with appropriate icon */}
          <p className="text-xs">Orders</p>
        </button>
        <button className="text-center text-gray-600">
          <i className="fas fa-chart-line"></i> {/* Replace with appropriate icon */}
          <p className="text-xs">Insights</p>
        </button>
      </footer>
    </div>
  );
};

export default Orders;