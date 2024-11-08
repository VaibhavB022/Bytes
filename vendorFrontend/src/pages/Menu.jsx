import React from 'react';

const Menu = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="bg-gray-900 text-white flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Nescafe</h1>
        <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
          <i className="fas fa-user"></i> {/* Use Font Awesome or any icon library */}
        </div>
      </header>

      {/* Ratings and Info */}
      <div className="flex flex-col items-center mt-4">
        <div className="flex items-center gap-1 text-green-600">
          <span className="text-2xl font-semibold">4.2</span>
          <i className="fas fa-star"></i>
        </div>
        <p className="text-sm text-gray-500">5.1k ratings</p>
        <div className="mt-2 bg-green-100 text-green-700 text-sm px-4 py-1 rounded-full">
          <i className="fas fa-clock"></i> 10 mins · Rs. 60 for one
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center gap-2 mt-4 px-4">
        <input
          type="text"
          placeholder="Search 'Cold Coffee'"
          className="flex-1 bg-green-100 px-4 py-2 rounded-full outline-none placeholder-gray-600"
        />
        <i className="fas fa-search text-gray-500"></i>
      </div>

      {/* Edit and Add Buttons */}
      <div className="flex justify-center gap-4 mt-4">
        <button className="bg-green-200 text-green-700 py-1 px-4 rounded-full flex items-center gap-2">
          <i className="fas fa-edit"></i> Edit Menu
        </button>
        <button className="bg-green-500 text-white py-1 px-4 rounded-full flex items-center gap-2">
          <i className="fas fa-plus"></i> Add Item
        </button>
        <button className="text-gray-500">
          <i className="fas fa-sliders-h"></i> {/* Filter Icon */}
        </button>
      </div>

      {/* Menu Items */}
      <div className="mt-6 space-y-4">
        {/* Menu Item 1 */}
        <div className="flex items-center bg-green-50 p-4 rounded-lg shadow-sm">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden">
            <img src="/path/to/masala-maggi.jpg" alt="Masala Maggi" className="w-full h-full object-cover" /> {/* Replace with actual image path */}
          </div>
          <div className="flex-1 ml-4">
            <div className="flex justify-between">
              <h3 className="font-bold">Masala Maggi</h3>
              <button className="text-gray-400 text-sm">Edit</button>
            </div>
            <p className="text-gray-500">Rs. 50</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs text-green-600">In Stock</span>
              <input type="checkbox" checked className="toggle-checkbox" /> {/* Use Tailwind custom toggle */}
            </div>
          </div>
        </div>

        {/* Menu Item 2 */}
        <div className="flex items-center bg-green-50 p-4 rounded-lg shadow-sm">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden">
            <img src="/path/to/cheese-maggi.jpg" alt="Cheese Maggi" className="w-full h-full object-cover" /> {/* Replace with actual image path */}
          </div>
          <div className="flex-1 ml-4">
            <div className="flex justify-between">
              <h3 className="font-bold">Cheese Maggi</h3>
              <button className="text-gray-400 text-sm">Edit</button>
            </div>
            <p className="text-gray-500">Rs. 50</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs text-gray-400">Out of Stock</span>
              <input type="checkbox" className="toggle-checkbox" /> {/* Use Tailwind custom toggle */}
            </div>
          </div>
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

export default Menu;