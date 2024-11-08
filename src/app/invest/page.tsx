"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTruck, FaTrain, FaShip, FaPlane } from "react-icons/fa";

const LogisticsBookingPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [loadingIconIndex, setLoadingIconIndex] = useState(0);
  const [selectedWeight, setSelectedWeight] = useState<number>(1);

  const loadingStatusMessages = [
    "Fetching available transport options...",
    "Calculating optimal routes...",
    "Checking availability of carriers...",
    "Finalizing booking details...",
    "Almost done...",
  ];

  const transportOptions = [
    { mode: "Truck - Rail - Ship Mode", description: "Utilizes truck, rail, and ship for efficient delivery." },
    { mode: "Rail - Truck - Ship Mode", description: "Uses rail for long distances, then transfers to truck and ship." },
    { mode: "Ship - Truck - Rail Mode", description: "Optimal for water routes combined with truck and rail." },
    { mode: "Truck - Ship - Rail Mode", description: "Efficient for sea and land transportation needs." },
    { mode: "Truck - Rail - Truck Mode", description: "Flexible for ground transport across longer distances." },
    { mode: "Rail - Ship - Truck Mode", description: "Cost-effective for combined land and water transport." },
    { mode: "Ship - Rail - Truck Mode", description: "Long-distance by ship and rail, local by truck." },
    { mode: "Truck - Ship - Rail Mode", description: "Balanced solution for cross-country routes." },
    { mode: "Rail - Truck - Ship Mode", description: "Speedy option using truck, rail, and ship." },
    { mode: "Truck - Rail - Truck Mode", description: "Best suited for ground-exclusive routes." },
  ];

  const icons = [
    <FaTruck className="text-blue-500" size={50} />,
    <FaTrain className="text-blue-500" size={50} />,
    <FaShip className="text-blue-500" size={50} />,
    <FaPlane className="text-blue-500" size={50} />
  ];

  const getRandomOptions = () => {
    const shuffledOptions = transportOptions.sort(() => Math.random() - 0.5);
    return shuffledOptions.slice(0, 3);
  };

  const calculateEstimate = (weight: number) => {
    return weight * (Math.floor(Math.random() * (400 - 100 + 1)) + 100);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    setLoadingPercentage(0);
    setShowOptions(false);
    setShowConfirmation(false);
    setShowFinalMessage(false);

    let progress = 0;
    const loadingInterval = setInterval(() => {
      progress += Math.floor(Math.random() * 10) + 5;
      setLoadingIconIndex((prevIndex) => (prevIndex + 1) % icons.length);

      // Update loading text based on progress
      const messageIndex = Math.min(Math.floor(progress / (100 / loadingStatusMessages.length)), loadingStatusMessages.length - 1);
      setLoadingText(loadingStatusMessages[messageIndex]);

      if (progress >= 100) {
        clearInterval(loadingInterval);
        setLoadingPercentage(100);
        setIsLoading(false);
        setShowOptions(true);
      } else {
        setLoadingPercentage(progress);
      }
    }, 500);
  };

  const handleConfirmation = () => {
    setShowOptions(false);
    setShowConfirmation(true);
  };

  const handleFinalSubmit = () => {
    setShowConfirmation(false);
    setShowFinalMessage(true);
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4 relative">
      {isLoading && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="mb-4">{icons[loadingIconIndex]}</div>
            <div className="text-white text-lg">{loadingText}</div>
            <div className="w-64 bg-gray-700 h-4 rounded-full overflow-hidden mt-4">
              <div
                className="bg-blue-500 h-full transition-all duration-200"
                style={{ width: `${loadingPercentage}%` }}
              ></div>
            </div>
            <p className="text-white mt-2">{loadingPercentage}%</p>
          </div>
        </div>
      )}

      {!isLoading && !showOptions && !showConfirmation && !showFinalMessage && (
        <div className="w-full max-w-lg bg-[#3B81F6] p-8 rounded-lg shadow-md">
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
            {/* Source Pincode */}
            <div className="mb-4">
              <label className="block text-white mb-2">Source Pincode</label>
              <input
                type="number"
                className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter source pincode"
              />
            </div>

            {/* Destination Pincode */}
            <div className="mb-4">
              <label className="block text-white mb-2">Destination Pincode</label>
              <input
                type="number"
                className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter destination pincode"
              />
            </div>

            {/* Length (cm), Width (cm), Height (cm) */}
            <div className="flex gap-4 mb-4">
              <div className="w-1/3">
                <label className="block text-white mb-2">Length (cm)</label>
                <input
                  type="number"
                  className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter length"
                />
              </div>
              <div className="w-1/3">
                <label className="block text-white mb-2">Width (cm)</label>
                <input
                  type="number"
                  className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter width"
                />
              </div>
              <div className="w-1/3">
                <label className="block text-white mb-2">Height (cm)</label>
                <input
                  type="number"
                  className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter height"
                />
              </div>
            </div>

            {/* Weight (tons) */}
            <div className="mb-4">
              <label className="block text-white mb-2">Weight (tons)</label>
              <input
                type="number"
                className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter weight"
                onChange={(e) => setSelectedWeight(Number(e.target.value))}
              />
            </div>

            {/* Max Delivery Time (days) */}
            <div className="mb-4">
              <label className="block text-white mb-2">Max Delivery Time (days)</label>
              <input
                type="number"
                className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter max delivery time"
              />
            </div>

            <button type="submit" className="w-full py-3 mt-4 bg-white text-black rounded-md hover:bg-gray-200 transition-all">Submit</button>
          </form>
        </div>
      )}

      {showOptions && !showConfirmation && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 p-4">
          <div className="flex space-x-4 items-center">
            {getRandomOptions().map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg w-80 text-center"
              >
                <h2 className="text-xl font-bold text-white">{option.mode}</h2>
                <p className="text-white mt-2">{option.description}</p>
                <div className="text-white mt-4">
                  <p><FaTruck className="inline mr-2" /> First mile</p>
                  <p className="text-gray-500">. . .</p>
                  <p><FaTrain className="inline mr-2" /> Mid-mile</p>
                  <p className="text-gray-500">. . .</p>
                  <p><FaShip className="inline mr-2" /> Last mile</p>
                </div>
                <p className="text-white mt-4">Estimated Quote: {calculateEstimate(selectedWeight)} INR</p>
                <button
                  className="mt-4 bg-[#3B81F6] text-white py-2 px-4 rounded-md"
                  onClick={handleConfirmation}
                >
                  Confirm Booking
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {showConfirmation && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 p-8">
          <div className="text-white text-center p-6 bg-gray-800 rounded-lg shadow-md w-full max-w-lg">
            <h2 className="text-2xl mb-4">Enter Your Details</h2>
            <input type="text" placeholder="Name" className="w-full p-3 mb-4 bg-gray-700 text-white rounded-md" />
            <input type="text" placeholder="WhatsApp Number" className="w-full p-3 mb-4 bg-gray-700 text-white rounded-md" />
            <input type="email" placeholder="Email" className="w-full p-3 mb-4 bg-gray-700 text-white rounded-md" />
            <button className="w-full py-3 bg-[#3B81F6] text-white rounded-md" onClick={handleFinalSubmit}>Submit</button>
          </div>
        </div>
      )}

      {showFinalMessage && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-md">
            <h2 className="text-xl font-bold text-white mb-4">Bot Message</h2>
            <p className="text-white mb-2">Our AI agent will contact you soon!</p>
            <p className="text-gray-400 text-sm mt-4">Disclaimer: Our agent is currently under development, and this booking is only for demo purposes.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogisticsBookingPage;
