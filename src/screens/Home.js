import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatBot1 } from '../components/ChatBot';

const Home = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('en');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setIsDropdownOpen(false);
    // Here you would implement the actual translation logic
    // This is a placeholder for where you'd call your translation service
  };

  // Translations object (you'd expand this with more translations as needed)
  const translations = {
    home: { en: 'Home', hi: 'होम' },
    services: { en: 'Services', hi: 'सेवाएं' },
    weather: { en: 'Weather Forecast', hi: 'मौसम पूर्वानुमान' },
    cropHealth: { en: 'Crop Health', hi: 'फसल स्वास्थ्य' },
    farmingTools: { en: 'Farming Tools', hi: 'कृषि उपकरण' },
    contact: { en: 'Contact', hi: 'संपर्क' },
    profile: { en: 'Profile', hi: 'प्रोफ़ाइल' },
    welcome: { en: 'Welcome to the AgriEase', hi: 'AgriEase में आपका स्वागत है' },
    learnMore: { en: 'Learn More', hi: 'और जानें' },
    language: { en: 'Language', hi: 'भाषा' },
  };

  const t = (key) => translations[key][language];

  return (
    <div
      className="bg-gradient-to-b from-white to-purple-100 min-h-screen"
      style={{
        backgroundImage: 'url(https://img.freepik.com/free-photo/close-up-bananas-hand_23-2151005962.jpg?t=st=1725904636~exp=1725908236~hmac=60686913b81409e3250aa455962a5061a43c62ddd801599e96c6befa188c6ee7&w=1380)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <header
        className="flex justify-between items-center p-6"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '12px',
        }}
      >
        <h1 className="text-3xl font-bold">AgriEase</h1>
        <nav className="space-x-8">
          <a href="/home" className="text-blue-800 hover:text-purple-800">{t('home')}</a>
          <a href="/services" className="text-black hover:text-gray-800">{t('services')}</a>
          <a href="https://opkpeh.github.io/weather/" className="text-black hover:text-gray-800">{t('weather')}</a>
          <a href="/crophealth" className="text-black hover:text-gray-800">{t('cropHealth')}</a>
          <a href="/farming" className="text-black hover:text-gray-800">{t('farmingTools')}</a>
          <a href="/contact" className="text-black hover:text-gray-800">{t('contact')}</a>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <span className="absolute top-0 right-0 w-4 h-4 bg-purple-600 text-white rounded-full text-xs flex items-center justify-center">0</span>
            <button className="text-purple-600 hover:text-purple-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v18H3z"/>
              </svg>
            </button>
          </div>

          <div className="relative">
            <button
              className="text-white px-4 py-2 rounded-full"
              style={{ backgroundColor: '#268c43' }}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {t('language')}
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <button
                    onClick={() => changeLanguage('en')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                    role="menuitem"
                  >
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage('hi')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                    role="menuitem"
                  >
                    हिंदी (Hindi)
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            className="text-white px-4 py-2 rounded-full"
            style={{ backgroundColor: '#268c43' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#1e7038'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#268c43'}
            onClick={() => navigate('/profile')}
          >
            {t('profile')}
          </button>
        </div>
      </header>

      <main className="flex flex-col items-center h-[500px] justify-center mt-20">
        <h1 className="text-6xl font-extrabold text-white text-center">
          {t('welcome')}
        </h1>

        <button
          className="mt-8 text-white px-6 py-3 rounded-full"
          style={{ backgroundColor: '#268c43' }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#1e7038'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#268c43'}
          onClick={() => navigate('/learnmore')}
        >
          {t('learnMore')}
        </button>
        <ChatBot1/>
      </main>
    </div>
  );
}

export default Home;