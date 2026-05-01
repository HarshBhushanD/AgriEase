// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// // const services = [
// //   {
// //     title: { en: 'Consulting', hi: 'परामर्श' },
// //     description: {
// //       en: 'Expert advice on how to optimize your agricultural practices and improve yields.',
// //       hi: 'कृषि प्रथाओं को अनुकूलित करने और उपज में सुधार करने के लिए विशेषज्ञ सलाह।'
// //     },
// //     icon: '🌱',
// //     buttonText: { en: 'Consult Now', hi: 'अभी परामर्श लें' }
    
// //   },
// //   {
// //     title: { en: 'Soil Testing', hi: 'मिट्टी परीक्षण' },
// //     description: {
// //       en: 'Comprehensive soil analysis to determine the best treatment and fertilization strategies.',
// //       hi: 'सर्वोत्तम उपचार और उर्वरक रणनीतियों का निर्धारण करने के लिए व्यापक मृदा विश्लेषण।'
// //     },
// //     icon: '🔬',
// //     buttonText: { en: 'Test Now', hi: 'अभी परीक्षण करें' }
// //   },
// //   {
// //     title: { en: 'Crop Management', hi: 'फसल प्रबंधन' },
// //     description: {
// //       en: 'Guidance on managing crop growth, pest control, and harvest planning.',
// //       hi: 'फसल विकास, कीट नियंत्रण और कटाई योजना के प्रबंधन पर मार्गदर्शन।'
// //     },
// //     icon: '🌾',
// //     buttonText: { en: 'Manage Now', hi: 'अभी प्रबंधित करें' }
// //   },
// //   {
// //     title: { en: 'Sustainable Practices', hi: 'टिकाऊ प्रथाएँ' },
// //     description: {
// //       en: 'Adopting eco-friendly practices to cut environmental impact and boost sustainability',
// //       hi: 'पर्यावरणीय प्रभाव को कम करने और स्थिरता बढ़ाने के लिए पर्यावरण अनुकूल प्रथाओं को अपनाना'
// //     },
// //     icon: '♻️',
// //     buttonText: { en: 'Learn Now', hi: 'अभी सीखें' }
// //   }
// // ];

// const services = [
  
//   {
//     title: { en: 'Consulting', hi: 'परामर्श' },
//     description: {
//       en: 'Expert advice on how to optimize your agricultural practices and improve yields.',
//       hi: 'कृषि प्रथाओं को अनुकूलित करने और उपज में सुधार करने के लिए विशेषज्ञ सलाह।'
//     },
//     icon: '🌱',
//     buttonText: { en: 'Consult Now', hi: 'अभी परामर्श लें' },
//     route: '/consult' // Added route
//   },
//   {
//     title: { en: 'Soil Testing', hi: 'मिट्टी परीक्षण' },
//     description: {
//       en: 'Comprehensive soil analysis to determine the best treatment and fertilization strategies.',
//       hi: 'सर्वोत्तम उपचार और उर्वरक रणनीतियों का निर्धारण करने के लिए व्यापक मृदा विश्लेषण।'
//     },
//     icon: '🔬',
//     buttonText: { en: 'Test Now', hi: 'अभी परीक्षण करें' },
//     route: '/consult' // Added route
//   },
//   {
//     title: { en: 'Crop Management', hi: 'फसल प्रबंधन' },
//     description: {
//       en: 'Guidance on managing crop growth, pest control, and harvest planning.',
//       hi: 'फसल विकास, कीट नियंत्रण और कटाई योजना के प्रबंधन पर मार्गदर्शन।'
//     },
//     icon: '🌾',
//     buttonText: { en: 'Manage Now', hi: 'अभी प्रबंधित करें' },
//     route: '/consult' // Added route
//   },
//   {
//     title: { en: 'Sustainable Practices', hi: 'टिकाऊ प्रथाएँ' },
//     description: {
//       en: 'Adopting eco-friendly practices to cut environmental impact and boost sustainability',
//       hi: 'पर्यावरणीय प्रभाव को कम करने और स्थिरता बढ़ाने के लिए पर्यावरण अनुकूल प्रथाओं को अपनाना'
//     },
//     icon: '♻️',
//     buttonText: { en: 'Learn Now', hi: 'अभी सीखें' },
//     route: '/consult' // Added route
//   }
// ];


// const Services = () => {
//   const navigate = useNavigate();
//   const [language, setLanguage] = useState('en');
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const changeLanguage = (lang) => {
//     setLanguage(lang);
//     setIsDropdownOpen(false);
//   };

//   const translations = {
//     home: { en: 'Home', hi: 'होम' },
//     services: { en: 'Services', hi: 'सेवाएं' },
//     weather: { en: 'Weather Forecast', hi: 'मौसम पूर्वानुमान' },
//     cropHealth: { en: 'Crop Health', hi: 'फसल स्वास्थ्य' },
//     farmingTools: { en: 'Farming Tools', hi: 'कृषि उपकरण' },
//     contact: { en: 'Contact', hi: 'संपर्क' },
//     profile: { en: 'Profile', hi: 'प्रोफ़ाइल' },
//     ourServices: { en: 'Our Services', hi: 'हमारी सेवाएँ' },
//     language: { en: 'Language', hi: 'भाषा' },
//   };

//   const t = (key) => translations[key][language];

//   return (
//     <div 
//       className="bg-gradient-to-b from-white to-purple-100 min-h-screen"
//       style={{
//         backgroundImage: 'url(https://img.freepik.com/free-photo/close-up-bananas-hand_23-2151005962.jpg?t=st=1725904636~exp=1725908236~hmac=60686913b81409e3250aa455962a5061a43c62ddd801599e96c6befa188c6ee7&w=1380)', 
//         backgroundSize: 'cover', 
//         backgroundPosition: 'center'
//       }}
//     >
//       <header 
//         className="flex justify-between items-center p-6"
//         style={{
//           backgroundColor: 'rgba(255, 255, 255, 0.1)', 
//           backdropFilter: 'blur(10px)', 
//           borderRadius: '12px'
//         }}
//       >
//         <h1 className="text-3xl font-bold">AgriEase</h1>
//         <nav className="space-x-8">
//           <a href="/home" className="text-black hover:text-purple-800">{t('home')}</a>
//           <a href="/services" className="text-blue-800 hover:text-gray-800">{t('services')}</a>
//           <a href="https://opkpeh.github.io/weather/" className="text-black hover:text-gray-800">{t('weather')}</a>
//           <a href="/crophealth" className="text-black hover:text-gray-800">{t('cropHealth')}</a>
//           <a href="/farming" className="text-black hover:text-gray-800">{t('farmingTools')}</a>
//           <a href="/contact" className="text-black hover:text-gray-800">{t('contact')}</a>
//         </nav>
//         <div className="flex items-center space-x-4">
//           <div className="relative">
//             <span className="absolute top-0 right-0 w-4 h-4 bg-purple-600 text-white rounded-full text-xs flex items-center justify-center">0</span>
//             <button className="text-purple-600 hover:text-purple-800">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v18H3z"/>
//               </svg>
//             </button>
//           </div>

//           <div className="relative">
//             <button
//               className="text-white px-4 py-2 rounded-full"
//               style={{ backgroundColor: '#268c43' }}
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//             >
//               {t('language')}
//             </button>
//             {isDropdownOpen && (
//               <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
//                 <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//                   <button
//                     onClick={() => changeLanguage('en')}
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
//                     role="menuitem"
//                   >
//                     English
//                   </button>
//                   <button
//                     onClick={() => changeLanguage('hi')}
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
//                     role="menuitem"
//                   >
//                     हिंदी (Hindi)
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>

//           <button
//             className="text-white px-4 py-2 rounded-full"
//             style={{ backgroundColor: '#268c43' }}
//             onMouseEnter={(e) => e.target.style.backgroundColor = '#1e7038'}
//             onMouseLeave={(e) => e.target.style.backgroundColor = '#268c43'}
//             onClick={() => navigate('/profile')}
//           >
//             {t('profile')}
//           </button>
//         </div>
//       </header>

//       <main className="flex flex-col items-center p-6">
//         <h1 className="text-6xl font-extrabold text-white text-center mb-8">
//           {t('ourServices')}
//         </h1>

//         <div className="flex flex-nowrap overflow-x-auto gap-6 pb-6 w-full items-center justify-center">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 w-80 h-96 flex flex-col transform transition-transform duration-300 hover:scale-105"
//             >
//               <div className="p-6 flex-grow">
//                 <div className="text-4xl mb-4">{service.icon}</div>
//                 <h2 className="text-2xl font-bold mb-2">{service.title[language]}</h2>
//                 <p className="text-gray-600">{service.description[language]}</p>
//               </div>
//               <div className="p-6 bg-gray-50">
//                 <button
//                   className="w-full px-4 py-2 rounded-full text-white transition-colors duration-300"
//                   style={{ backgroundColor: '#1e7038' }}
//                   onMouseEnter={(e) => e.target.style.backgroundColor = '#268c43'}
//                   onMouseLeave={(e) => e.target.style.backgroundColor = '#1e7038'}
//                 >
//                   {service.buttonText[language]}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Services;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    title: { en: 'Consulting', hi: 'परामर्श' },
    description: {
      en: 'Expert advice on how to optimize your agricultural practices and improve yields.',
      hi: 'कृषि प्रथाओं को अनुकूलित करने और उपज में सुधार करने के लिए विशेषज्ञ सलाह।'
    },
    icon: '🌱',
    buttonText: { en: 'Consult Now', hi: 'अभी परामर्श लें' },
    route: '/consult'
  },
  {
    title: { en: 'Soil Testing', hi: 'मिट्टी परीक्षण' },
    description: {
      en: 'Comprehensive soil analysis to determine the best treatment and fertilization strategies.',
      hi: 'सर्वोत्तम उपचार और उर्वरक रणनीतियों का निर्धारण करने के लिए व्यापक मृदा विश्लेषण।'
    },
    icon: '🔬',
    buttonText: { en: 'Test Now', hi: 'अभी परीक्षण करें' },
    route: '/soil-testing'
  },
  {
    title: { en: 'Crop Management', hi: 'फसल प्रबंधन' },
    description: {
      en: 'Guidance on managing crop growth, pest control, and harvest planning.',
      hi: 'फसल विकास, कीट नियंत्रण और कटाई योजना के प्रबंधन पर मार्गदर्शन।'
    },
    icon: '🌾',
    buttonText: { en: 'Manage Now', hi: 'अभी प्रबंधित करें' },
    route: '/crop-management'
  },
  {
    title: { en: 'Sustainable Practices', hi: 'टिकाऊ प्रथाएँ' },
    description: {
      en: 'Adopting eco-friendly practices to cut environmental impact and boost sustainability',
      hi: 'पर्यावरणीय प्रभाव को कम करने और स्थिरता बढ़ाने के लिए पर्यावरण अनुकूल प्रथाओं को अपनाना'
    },
    icon: '♻️',
    buttonText: { en: 'Learn Now', hi: 'अभी सीखें' },
    route: '/sustainable-practices'
  }
];

const Services = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('en');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setIsDropdownOpen(false);
  };

  const handleButtonClick = (route) => {
    navigate(route); // Navigate to the specified route
  };

  const translations = {
    home: { en: 'Home', hi: 'होम' },
    services: { en: 'Services', hi: 'सेवाएं' },
    weather: { en: 'Weather Forecast', hi: 'मौसम पूर्वानुमान' },
    cropHealth: { en: 'Crop Health', hi: 'फसल स्वास्थ्य' },
    farmingTools: { en: 'Farming Tools', hi: 'कृषि उपकरण' },
    contact: { en: 'Contact', hi: 'संपर्क' },
    profile: { en: 'Profile', hi: 'प्रोफ़ाइल' },
    ourServices: { en: 'Our Services', hi: 'हमारी सेवाएँ' },
    language: { en: 'Language', hi: 'भाषा' },
  };

  const t = (key) => translations[key][language];

  return (
    <div 
      className="bg-gradient-to-b from-white to-purple-100 min-h-screen"
      style={{
        backgroundImage: 'url(https://img.freepik.com/free-photo/close-up-bananas-hand_23-2151005962.jpg?t=st=1725904636~exp=1725908236~hmac=60686913b81409e3250aa455962a5061a43c62ddd801599e96c6befa188c6ee7&w=1380)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center'
      }}
    >
      <header 
        className="flex justify-between items-center p-6"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)', 
          backdropFilter: 'blur(10px)', 
          borderRadius: '12px'
        }}
      >
        <h1 className="text-3xl font-bold">AgriEase</h1>
        <nav className="space-x-8">
          <a href="/home" className="text-black hover:text-purple-800">{t('home')}</a>
          <a href="/services" className="text-blue-800 hover:text-gray-800">{t('services')}</a>
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

      <main className="flex flex-col items-center p-6">
        <h1 className="text-6xl font-extrabold text-white text-center mb-8">
          {t('ourServices')}
        </h1>

        <div className="flex flex-nowrap overflow-x-auto gap-6 pb-6 w-full items-center justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 w-80 h-96 flex flex-col transform transition-transform duration-300 hover:scale-105"
            >
              <div className="p-6 flex-grow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold mb-2">{service.title[language]}</h2>
                <p className="text-gray-600">{service.description[language]}</p>
              </div>
              <div className="p-6">
                <button
                  className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  onClick={() => handleButtonClick(service.route)}
                >
                  {service.buttonText[language]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Services;
