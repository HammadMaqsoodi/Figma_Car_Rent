"use client";

import React, { useState } from "react";

const FilterAndDetails = () => {
  const [selectedType, setSelectedType] = useState("Sport");
  const [selectedCapacity, setSelectedCapacity] = useState("2 Person");
  const [maxPrice, setMaxPrice] = useState(1000);

  const cars = [
    { name: "Koenigsegg", type: "Sport", capacity: "2 Person", price: 99, image: "/cars1.jpg" },
    { name: "Nissan GT - R", type: "Sport", capacity: "2 Person", price: 80, image: "/cars2.jpg" },
    { name: "Ferrari", type: "Sport", capacity: "2 Person", price: 150, image: "/cars3.jpg" },
    { name: "Toyota SUV", type: "SUV", capacity: "4 Person", price: 120, image: "/cars4.jpg" },
    { name: "Lamborghini Huracan", type: "Sport", capacity: "2 Person", price: 200, image: "/cars5.jpg" },
    { name: "Porsche 911", type: "Sport", capacity: "2 Person", price: 180, image: "/cars6.jpg" },
    { name: "BMW X5", type: "SUV", capacity: "4 Person", price: 140, image: "/cars5.jpg" },
    { name: "Range Rover", type: "SUV", capacity: "4 Person", price: 160, image: "/cars3.jpg" },
    { name: "Audi R8", type: "Sport", capacity: "2 Person", price: 190, image: "/cars3.jpg" },
    { name: "Mercedes G-Class", type: "SUV", capacity: "4 Person", price: 210, image: "/cars1.jpg" },
    { name: "Chevrolet Camaro", type: "Sport", capacity: "2 Person", price: 120, image: "/cars3.jpg" },
    { name: "Ford Mustang", type: "Sport", capacity: "2 Person", price: 130, image: "/cars3.jpg" },
  ];

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedType(event.target.value);
  };

  const handleCapacityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCapacity(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(event.target.value));
  };

  const filteredCars = cars.filter(
    (car) =>
      car.type === selectedType &&
      car.capacity === selectedCapacity &&
      car.price <= maxPrice
  );

  return (
    <div className="flex flex-col sm:flex-row gap-6 p-6">
      {/* Filter Component */}
      <div className="bg-white p-4 rounded-lg shadow-md w-[200px]">
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">Type</h2>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                value="Sport"
                checked={selectedType === "Sport"}
                onChange={handleTypeChange}
                className="mr-2"
              />
              <span>Sport</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="SUV"
                checked={selectedType === "SUV"}
                onChange={handleTypeChange}
                className="mr-2"
              />
              <span>SUV</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">Capacity</h2>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                value="2 Person"
                checked={selectedCapacity === "2 Person"}
                onChange={handleCapacityChange}
                className="mr-2"
              />
              <span>2 Person</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="4 Person"
                checked={selectedCapacity === "4 Person"}
                onChange={handleCapacityChange}
                className="mr-2"
              />
              <span>4 Person</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">Price</h2>
          <input
            type="range"
            min="0"
            max="1000"
            value={maxPrice}
            onChange={handlePriceChange}
            className="w-full"
          />
          <div className="flex justify-between">
            <span>Max. $0</span>
            <span>Max. ${maxPrice}</span>
          </div>
        </div>
      </div>

      {/* Car Details Section */}
      <div className="flex flex-wrap justify-center gap-6">
        {filteredCars.length > 0 ? (
          filteredCars.map((car, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4 w-[250px]">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">{car.name}</h3>
                <span className="text-red-500 text-xl">❤</span>
              </div>
              <p className="text-gray-500 text-sm">{car.type}</p>
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-[120px] object-contain my-4"
              />
              <div className="flex justify-between text-gray-500 text-sm">
                <span>{car.capacity}</span>
                <span>Manual</span>
                <span>${car.price}/day</span>
              </div>
              <div className="flex justify-between items-center my-2">
                <p className="text-lg font-bold text-gray-800">${car.price}/day</p>
                <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">
                  Rent Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-lg">No cars match your filters.</p>
        )}
      </div>
    </div>
  );
};

export default FilterAndDetails;
