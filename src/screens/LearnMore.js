import React, { useState } from "react";

const LearnMore = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div
      className="bg-gradient-to-b from-white to-purple-100 min-h-screen flex flex-col"
      style={{
        backgroundImage:
          `url(https://images.unsplash.com/photo-1593179835737-9f82a5f30c68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header
        className="flex justify-between items-center p-6"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: "12px",
        }}
      >
        <h1 className="text-3xl font-bold">AgriEase</h1>
        <nav className="space-x-8">
          <a href="/home" className="text-black hover:text-purple-800">
            Home
          </a>
          <a href="/services" className="text-black hover:text-gray-800">
            Services
          </a>
          <a
            href="https://opkpeh.github.io/weather/"
            className="text-black hover:text-gray-800"
          >
            Weather Forecast
          </a>
          <a href="/cropHealth" className="text-black hover:text-gray-800">
            Crop Health
          </a>
          <a href="#" className="text-black hover:text-gray-800">
            Farming Tools
          </a>
          <a href="#" className="text-black hover:text-gray-800">
            Contact
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <span className="absolute top-0 right-0 w-4 h-4 bg-purple-600 text-white rounded-full text-xs flex items-center justify-center">
              0
            </span>
            <button className="text-purple-600 hover:text-purple-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h18v18H3z"
                />
              </svg>
            </button>
          </div>

          <button
            className="text-white px-4 py-2 rounded-full"
            style={{ backgroundColor: "#268c43" }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#1e7038")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#268c43")}
          >
            Site Visit
          </button>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-5xl font-extrabold text-[#534B52] mb-6">
          Learn More About AgriEase
        </h1>

        <div className="flex justify-center w-full max-w-[800px]">
          <div className="bg-white bg-opacity-20 p-10 w-full max-w-[600px] rounded-xl shadow-lg backdrop-blur-lg hover:bg-opacity-30 transition duration-300 flex flex-col justify-start items-center">
            <h2 className="text-2xl font-bold text-[#2D232E] mb-4">What is AgriEase?</h2>
            <div className="text-gray-700 text-[#2D232E] p-4 rounded-lg w-full">
              <ul className="list-disc pl-5 space-y-2">
                <li>AgriAssist is a digital platform designed to support farmers and improve their agricultural practices.</li>
                <li>It provides real-time market information, weather forecasting tools, expert guidance, and technological solutions.</li>
                <li>The platform empowers farmers to make informed decisions and achieve greater success.</li>
                <li>AgriAssist offers access to real-time market information on crop prices.</li>
                <li>It helps farmers understand current market dynamics and make informed decisions about when to sell their produce.</li>
              </ul>
              {showMore && (
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  <li>AgriAssist utilizes advanced weather models to provide farmers with highly accurate and localized weather forecasts.</li>
                  <li>It helps farmers anticipate potential challenges and adapt their practices accordingly.</li>
                  <li>The platform connects farmers with agricultural experts who provide guidance on planting, fertilization, pest control, and other crucial aspects of crop management.</li>
                  <li>AgriAssist integrates with precision agriculture technologies, such as drones and sensors, to provide farmers with detailed insights into soil conditions, crop health, and other vital parameters.</li>
                  <li>The platform leverages data analytics to identify trends and patterns in farming practices, helping farmers optimize their operations and achieve greater efficiency.</li>
                  <li>AgriAssist offers a suite of smart farming tools, including irrigation controllers, weather stations, and yield monitors, that streamline operations and improve decision-making.</li>
                </ul>
              )}
              <div className="flex justify-center">
                <button
                  onClick={toggleShowMore}
                  className="mt-6 bg-[#268c43] text-white px-6 py-2 rounded-full hover:bg-[#1e7038] transition duration-300"
                >
                  {showMore ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LearnMore;