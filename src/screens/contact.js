import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle feedback submission logic here
    alert('Feedback submitted: ' + feedback);
    setFeedback(''); // Clear feedback after submission
  };

  const teamMembers = [
    {
      name: 'MOHD AZMAN',
      role: 'Team Member',
      image: '/userPics/azman.jpg',
      linkedin: 'https://www.linkedin.com/in/azman-idrisi/',
      email: 'mailto:idrisiazman@gmail.com', // Add Email URL
    },
    {
      name: 'Harsh Dixit',
      role: 'Team Member',
      image: '/userPics/harsh.jpg',
      linkedin: 'https://www.linkedin.com/in/harsh-bhushan-dixit-0953b52b1/',
      email: 'mailto:harsh@example.com', // Add Email URL
    },
    {
      name: 'Anubhav Parashar',
      role: 'Team Member',
      image: '/userPics/anubhav.jpg',
      linkedin: 'https://www.linkedin.com/in/anubhav-parashar-4aa61b280/',
      email: 'mailto:anubhav@example.com', // Add Email URL
    },
    {
      name: 'Ayush Verma',
      role: 'Team Member',
      image: '/userPics/verma.jpg',
      linkedin: '', // Add LinkedIn URL here
      email: 'mailto:aayushverma1602@gmail.com', // Add Email URL
    },
  ];

  return (
    <div className="min-h-screen bg-green-100 p-8">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-xl border border-green-300 mb-12">
        <h1 className="text-4xl font-extrabold text-green-800 mb-6">Contact Us</h1>
        
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-green-600 w-8 h-8" />
                <p className="text-gray-700">Email: <a href="mailto:testdownloads10@gmail.com" className="text-green-600 hover:underline">testdownloads10@gmail.com</a></p>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-green-600 w-8 h-8" />
                <p className="text-gray-700">Phone: <a href="tel:+1234567890" className="text-green-600 hover:underline">+916306352215</a></p>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-green-600 w-8 h-8" />
                <p className="text-gray-700">Address: SRM IST GHAZIABAD,MODINAGAR, INDIA, 201204</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Feedback</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                value={feedback}
                onChange={handleFeedbackChange}
                rows="6"
                placeholder="We value your feedback. Please let us know your thoughts."
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
              >
                Submit Feedback
              </button>
            </form>
          </div>
        </div>

        <h2 className="text-3xl font-semibold text-green-700 text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-green-200 transition-transform transform hover:scale-105">
              <img src={member.image} alt={member.name} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">{member.name}</h3>
              <p className="text-green-600 mb-2">{member.role}</p>
              <div className="flex space-x-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 flex items-center">
                  <FaLinkedin className="mr-2" /> LinkedIn
                </a>
                <a href={member.email} className="text-red-500 hover:text-red-700 flex items-center">
                  <FaEnvelope className="mr-2" /> Email
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
