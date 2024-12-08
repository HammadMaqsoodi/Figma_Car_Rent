"use client";

import Image from "next/image";
import { useState } from "react";

const CarRentalBanner = () => {
  const [pickUp, setPickUp] = useState(true); // State for Pick-Up or Drop-Off toggle

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 space-y-8 ">
        {/* Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Card */}
          <div className="bg-[url('/back1.jpg')] rounded-lg p-6 flex flex-col items-center space-y-6">
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800">
              The Best Platform for Car Rental
            </h2>
            <p className="text-gray-600 text-center">
              Ease of doing a car rental safely and reliably. Of course, at a low price.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Rental Car
            </button>
            <Image
  src="/car1.png"
  alt="Car 1"
  width={400}
  height={200}
  className="object-contain"
            />
          </div>

          {/* Right Card */}
          <div className="bg-[url('/back2.jpg')] rounded-lg p-6 flex flex-col items-center space-y-6">
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800">
              Easy way to rent a car at a low price
            </h2>
            <p className="text-gray-900 text-center">
              Providing cheap car rental services and safe and comfortable facilities.
            </p>
            <button className="bg-blue-400 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Rental Car
            </button>
            <Image
              src="/car2.png" // Replace with actual image path
              alt="Car Image"
              width={400}
              height={200}
              className="object-contain"
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* Toggle for Pick-Up / Drop-Off */}
          <div className="flex justify-center space-x-4 mb-6">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="locationType"
                checked={pickUp}
                onChange={() => setPickUp(true)}
                className="form-radio text-blue-600"
              />
              <span className="text-gray-700 font-medium">Pick-Up</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="locationType"
                checked={!pickUp}
                onChange={() => setPickUp(false)}
                className="form-radio text-blue-600"
              />
              <span className="text-gray-700 font-medium">Drop-Off</span>
            </label>
          </div>

          {/* Form Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-gray-600 text-sm mb-1">Locations</label>
              <select className="w-[200px] border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select your city</option>
                {/* Add options dynamically */}
              </select>
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-1">Date</label>
              <input
                type="date"
                className="w-[150px] border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-1">Time</label>
              <input
                type="time"
                className="w-[150px] border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className=" items-center justify-between flex">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div>
              <label className="block text-gray-600 text-sm mb-1">Date</label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            </div>
            
            <div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarRentalBanner;
