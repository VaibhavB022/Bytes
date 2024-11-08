import React from "react";

const Payment = () => {
  return (
    <div className="max-w-sm mx-auto p-5 font-sans">
      {/* Header */}
      <h1 className="text-2xl font-bold text-center mb-8">Payment</h1>
      
      {/* Order Summary Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Order Summary</h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>₹ 150.0</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Tax</span>
            <span>₹ 22.50</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>₹ 175.0</span>
          </div>
        </div>
      </div>

      {/* Payment Options Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Payment options</h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm divide-y divide-gray-300">
          <div className="py-3 flex justify-between items-center">
            <span>UPI Apps</span>
            <small className="text-gray-500">Paytm, Gpay, Phonepe</small>
          </div>
          <div className="py-3 flex justify-between items-center">
            <span>UPI ID</span>
            <small className="text-gray-500">7838**@kotak</small>
          </div>
          <div className="py-3 flex justify-between items-center">
            <span>Wallets</span>
          </div>
          <div className="py-3 flex justify-between items-center">
            <span>Cash</span>
          </div>
        </div>
      </div>

      {/* Place Order Button */}
      <button className="bg-green-500 text-white text-lg font-semibold py-3 w-full rounded-lg hover:bg-green-600">
        Place Order
      </button>
    </div>
  );
};

export default Payment;