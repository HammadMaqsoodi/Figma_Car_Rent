"use client"
import Image from "next/image";
import React from "react";

const Category = () => {
  return (
    <>
    {/* <h1>Popular Car</h1> */}

    <div className="p-4 flex flex-wrap justify-center gap-[50px]">
      {/* Card 1 */}
      <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
        {/* Heart Icon */}
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Koenigsegg</h3>
          <span className="text-red-500 text-xl">❤</span>
        </div>
        <p className="text-gray-500 text-sm">Sport</p>
        {/* Car Image */}
        <Image
        src="/cars1.jpg"  
        alt="Car 1"       
        width={500}       
        height={120}      
        className="w-full h-[120px] object-contain my-4" 
      />
        {/* Specifications */}
        <div className="flex justify-between text-gray-500 text-sm">
          <span>90L</span>
          <span>Manual</span>
          <span>2 People</span>
        </div>
        {/* Pricing */}
        <div className="flex justify-between items-center my-2">
          <p className="text-lg font-bold text-gray-800">$99.00/day</p>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">Rent Now</button>
        </div>
      </div>

      {/* Duplicate Card Structure for Additional Cards */}
      <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Nissan GT - R</h3>
          <span className="text-gray-500 text-xl">♡</span>
        </div>
        <p className="text-gray-500 text-sm">Sport</p>
        <Image
        src="/cars2.jpg"  
        alt="Car 1"       
        width={500}       
        height={120}      
        className="w-full h-[120px] object-contain my-4" 
      />
        <div className="flex justify-between text-gray-500 text-sm">
          <span>80L</span>
          <span>Manual</span>
          <span>2 People</span>
        </div>
        <div className="flex justify-between items-center my-2">
          <p className="text-lg font-bold text-gray-800">$80.00/day</p>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">Rent Now</button>
        </div>
      </div>


      <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Nissan GT - R</h3>
          <span className="text-gray-500 text-xl">♡</span>
        </div>
        <p className="text-gray-500 text-sm">Sport</p>
        <Image
        src="/cars3.jpg"  
        alt="Car 1"       
        width={500}       
        height={120}      
        className="w-full h-[120px] object-contain my-4" 
      />
        <div className="flex justify-between text-gray-500 text-sm">
          <span>80L</span>
          <span>Manual</span>
          <span>2 People</span>
        </div>
        <div className="flex justify-between items-center my-2">
          <p className="text-lg font-bold text-gray-800">$80.00/day</p>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">Rent Now</button>
        </div>
      </div>



      <div className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">Nissan GT - R</h3>
          <span className="text-gray-500 text-xl">♡</span>
        </div>
        <p className="text-gray-500 text-sm">Sport</p>
        <Image
        src="/cars4.jpg"  
        alt="Car 1"       
        width={500}       
        height={120}      
        className="w-full h-[120px] object-contain my-4" 
      />
        <div className="flex justify-between text-gray-500 text-sm">
          <span>80L</span>
          <span>Manual</span>
          <span>2 People</span>
        </div>
        <div className="flex justify-between items-center my-2">
          <p className="text-lg font-bold text-gray-800">$80.00/day</p>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">Rent Now</button>
        </div>
      </div>

      
      {/* Add more cards as needed */}
    </div>
    </>
    
  );
};

export default Category;