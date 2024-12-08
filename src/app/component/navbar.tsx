import React, { useState } from "react";
import { FiSearch, FiSettings } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineBell } from "react-icons/ai";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 bg-white border-b border-gray-200 shadow-md w-full h-[124px] px-4 md:px-15">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-500">MORENT</h1>

        {/* Search Bar */}
        <div className="relative  items-center pl-14 hidden md:flex">
          <input
            type="text"
            placeholder="Search something here"
            className="w-[492px] h-[44px] p-2 pl-4 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <button className="absolute right-3 text-blue-500">
            <FiSettings size={18} />
          </button>
        </div>
      </div> 


      

      {/* Right Section */}
      <div className="flex items-center gap-4 pr-4 md:pr-20">
        <AiOutlineHeart className="text-gray-600 cursor-pointer" size={24} />
        <div className="relative cursor-pointer">
          <AiOutlineBell className="text-gray-600" size={24} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <FiSearch size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-white z-50 p-4 md:hidden">
          <div className="flex flex-col items-center gap-4">
            <input
              type="text"
              placeholder="Search something here"
              className="w-full p-2 pl-4 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex gap-4">
              <AiOutlineHeart className="text-gray-600 cursor-pointer" size={24} />
              <AiOutlineBell className="text-gray-600 cursor-pointer" size={24} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
