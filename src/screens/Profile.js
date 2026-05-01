import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa'; // Importing camera icon from react-icons
import { BsFillPersonFill } from 'react-icons/bs'; // Importing person icon for default state

const ProfilePage = () => {
  const [profilePicture, setProfilePicture] = useState('https://example.com/images/profile.jpg');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Sample profile data
  const profileData = {
    name: 'Azman Idrisi',
    contactInfo: {
      email: 'idrisiazman@gmail.com',
      phone: '+91 6306352215',
    },
    location: 'Tiwaripurva,Mirzapur, Uttar Pradesh , 231001 ,India',
    farmInfo: {
      size: '50 acres',
      crops: ['Wheat', 'Corn', 'Soybeans'],
      techniques: ['Organic Farming', 'Crop Rotation', 'Drip Irrigation'],
      productionCapacity: '200 tons per year',
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-green-50 shadow-lg rounded-lg relative border border-green-300">
      <div className="flex items-center mb-6">
        <div className="relative">
          <img
            src={profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-green-700 object-cover mr-6"
          />
          <label htmlFor="file-input" className="absolute bottom-0 right-0 bg-green-700 p-2 rounded-full cursor-pointer hover:bg-green-600 transition-colors">
            <FaCamera className="text-white w-6 h-6" />
          </label>
          <input
            id="file-input"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>
        <h1 className="text-4xl font-bold text-green-800">{profileData.name}</h1>
      </div>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md border border-green-200">
          <h2 className="text-2xl font-semibold text-green-700 border-b-2 border-green-700 pb-2 mb-4">Contact Information</h2>
          <p className="text-gray-700"><strong>Email:</strong> {profileData.contactInfo.email}</p>
          <p className="text-gray-700"><strong>Phone:</strong> {profileData.contactInfo.phone}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-green-200">
          <h2 className="text-2xl font-semibold text-green-700 border-b-2 border-green-700 pb-2 mb-4">Location</h2>
          <p className="text-gray-700">{profileData.location}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-green-200">
          <h2 className="text-2xl font-semibold text-green-700 border-b-2 border-green-700 pb-2 mb-4">Farm Information</h2>
          <p className="text-gray-700"><strong>Farm Size:</strong> {profileData.farmInfo.size}</p>
          <p className="text-gray-700"><strong>Crops Grown:</strong> {profileData.farmInfo.crops.join(', ')}</p>
          <p className="text-gray-700"><strong>Farming Techniques:</strong> {profileData.farmInfo.techniques.join(', ')}</p>
          <p className="text-gray-700"><strong>Production Capacity:</strong> {profileData.farmInfo.productionCapacity}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;