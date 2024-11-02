import React from 'react';
import profileIcon from "../images/person.png";

const StoreHeader = ({ isOpen, onToggle }) => {
  return (
    <>
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
        onClick={onToggle}
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
    </>
  );
};

export default StoreHeader;