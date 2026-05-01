import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cropData = [
  {
    crop: 'Wheat',
    image: '/cropPics/wheat.jpeg.jpg',
    fertilizer: 'Nitrogen-based fertilizers (e.g., Urea, Ammonium Nitrate) are highly recommended for wheat to promote growth and yields.',
    diseases: [
      {
        name: 'Rust',
        treatment: 'Apply fungicides like Propiconazole or Tebuconazole. Use resistant varieties if available.'
      },
      {
        name: 'Powdery Mildew',
        treatment: 'Use sulfur-based fungicides or systemic fungicides like Azoxystrobin. Improve air circulation around plants.'
      },
      {
        name: 'Leaf Blight',
        treatment: 'Apply fungicides such as Chlorothalonil or Mancozeb. Ensure proper crop rotation and remove infected debris.'
      }
    ],
    irrigation: 'Requires moderate irrigation during tillering and heading stages.',
    sowingSeason: 'October to December',
    harvestingSeason: 'March to May'
  },
  {
    crop: 'Rice',
    image: '/cropPics/rice.jpeg.jpg',
    fertilizer: 'Phosphorus and Potassium-based fertilizers (e.g., DAP, Potash) are essential for good root development and crop health in rice.',
    diseases: [
      {
        name: 'Bacterial Blight',
        treatment: 'Use copper-based bactericides or antibiotics. Avoid overhead irrigation and practice field sanitation.'
      },
      {
        name: 'Rice Blast',
        treatment: 'Apply fungicides like Tricyclazole or Pyricularia. Use resistant varieties and avoid planting in areas prone to high humidity.'
      },
      {
        name: 'Brown Spot',
        treatment: 'Apply fungicides such as Carbendazim or Mancozeb. Practice proper field drainage and avoid overcrowding.'
      }
    ],
    irrigation: 'Rice requires frequent irrigation or water logging.',
    sowingSeason: 'June to July',
    harvestingSeason: 'October to November'
  },
  {
    crop: 'Corn',
    image: '/cropPics/corn.jpeg.jpg',
    fertilizer: 'Corn benefits greatly from Nitrogen-rich fertilizers, such as Anhydrous Ammonia and UAN solutions.',
    diseases: [
      {
        name: 'Gray Leaf Spot',
        treatment: 'Apply fungicides like Azoxystrobin or Tebuconazole. Avoid planting in fields with high humidity.'
      },
      {
        name: 'Corn Smut',
        treatment: 'Use fungicides such as Chlorothalonil. Remove and destroy infected plants.'
      },
      {
        name: 'Northern Corn Leaf Blight',
        treatment: 'Apply fungicides like Propiconazole or Tebuconazole. Use resistant hybrids and practice crop rotation.'
      }
    ],
    irrigation: 'Corn needs consistent moisture, especially during the flowering stage.',
    sowingSeason: 'April to June',
    harvestingSeason: 'September to November'
  },
  {
    crop: 'Soybeans',
    image: '/cropPics/soyabean.jpeg.jpg',
    fertilizer: 'Potassium and Phosphorus are key nutrients for soybean growth. Use fertilizers like Potash and DAP.',
    diseases: [
      {
        name: 'Soybean Rust',
        treatment: 'Use fungicides like Tebuconazole or Azoxystrobin. Plant resistant varieties and avoid late planting.'
      },
      {
        name: 'Root Rot',
        treatment: 'Use soil fungicides such as Metalaxyl. Improve soil drainage and avoid over-watering.'
      },
      {
        name: 'Downy Mildew',
        treatment: 'Apply fungicides like Chlorothalonil or Metalaxyl. Ensure proper plant spacing and reduce humidity.'
      }
    ],
    irrigation: 'Soybeans need regular irrigation during pod formation.',
    sowingSeason: 'May to June',
    harvestingSeason: 'October to November'
  },
  {
    crop: 'Potatoes',
    image: '/cropPics/potateos.jpeg.jpg',
    fertilizer: 'Potatoes require a balanced application of Nitrogen, Phosphorus, and Potassium (e.g., 15-15-15 NPK fertilizer), along with Sulfate of Potash for tuber growth.',
    diseases: [
      {
        name: 'Late Blight',
        treatment: 'Apply fungicides like Chlorothalonil or Mancozeb. Remove and destroy infected plants and avoid overhead irrigation.'
      },
      {
        name: 'Early Blight',
        treatment: 'Use fungicides such as Mancozeb or Chlorothalonil. Practice crop rotation and remove infected plant debris.'
      },
      {
        name: 'Blackleg',
        treatment: 'Use seed treatments like Thiram or Mancozeb. Ensure proper seed handling and avoid planting in poorly-drained soils.'
      }
    ],
    irrigation: 'Requires frequent irrigation, especially during tuber development.',
    sowingSeason: 'February to April',
    harvestingSeason: 'June to August'
  },
  {
    crop: 'Bananas',
    image: '/cropPics/banana.jpeg.jpg',
    fertilizer: 'Bananas need Potassium-heavy fertilizers such as Muriate of Potash, along with balanced NPK fertilizers like 15-5-30 to boost fruiting and plant health.',
    diseases: [
      {
        name: 'Panama Disease',
        treatment: 'Use resistant banana varieties and avoid planting in infected soils. Implement good sanitation practices.'
      },
      {
        name: 'Black Sigatoka',
        treatment: 'Apply fungicides such as Propiconazole or Pyraclostrobin. Prune infected leaves and improve air circulation.'
      },
      {
        name: 'Banana Bunchy Top Virus',
        treatment: 'Remove and destroy infected plants. Use virus-free planting material and control insect vectors.'
      }
    ],
    irrigation: 'Bananas require frequent irrigation, especially during the dry season.',
    sowingSeason: 'Year-round, depending on climate',
    harvestingSeason: '9-12 months after planting'
  },
  // New crops added below
  {
    crop: 'Tomatoes',
    image: '/cropPics/tomatoes.jpeg.jpg',
    fertilizer: 'Tomatoes benefit from a balanced fertilizer with equal parts Nitrogen, Phosphorus, and Potassium. Additionally, Calcium helps prevent Blossom End Rot.',
    diseases: [
      {
        name: 'Tomato Blight',
        treatment: 'Apply fungicides like Copper-based products or Chlorothalonil. Practice crop rotation and improve air circulation.'
      },
      {
        name: 'Early Blight',
        treatment: 'Use fungicides such as Chlorothalonil or Mancozeb. Remove affected leaves and avoid watering from above.'
      },
      {
        name: 'Powdery Mildew',
        treatment: 'Apply sulfur-based fungicides or systemic fungicides like Azoxystrobin. Space plants to improve air flow.'
      }
    ],
    irrigation: 'Requires regular watering, especially during fruit development.',
    sowingSeason: 'February to April',
    harvestingSeason: 'July to September'
  },
  {
    crop: 'Carrots',
    image: '/cropPics/carrot.jpeg.jpg',
    fertilizer: 'Carrots grow well with a balanced fertilizer high in Phosphorus and Potassium to promote root development.',
    diseases: [
      {
        name: 'Carrot Rust Fly',
        treatment: 'Use insecticides like Permethrin or apply barrier methods. Rotate crops and use row covers.'
      },
      {
        name: 'Leaf Blight',
        treatment: 'Apply fungicides such as Mancozeb or Chlorothalonil. Improve air circulation and avoid overhead watering.'
      },
      {
        name: 'Root Knot Nematode',
        treatment: 'Use nematicides like Vydate. Practice crop rotation and use resistant varieties.'
      }
    ],
    irrigation: 'Needs consistent moisture, especially during root development.',
    sowingSeason: 'March to June',
    harvestingSeason: 'July to October'
  },
  {
    crop: 'Cucumbers',
    image: '/cropPics/cucumber.jpeg.jpg',
    fertilizer: 'Cucumbers thrive with high Nitrogen levels during early growth and balanced NPK fertilizer during fruiting.',
    diseases: [
      {
        name: 'Powdery Mildew',
        treatment: 'Use sulfur-based or systemic fungicides like Azoxystrobin. Improve air circulation and avoid overcrowding.'
      },
      {
        name: 'Downy Mildew',
        treatment: 'Apply fungicides such as Chlorothalonil or Metalaxyl. Ensure proper plant spacing and reduce humidity.'
      },
      {
        name: 'Cucumber Mosaic Virus',
        treatment: 'Remove and destroy infected plants. Control aphid populations and use virus-free seeds.'
      }
    ],
    irrigation: 'Requires frequent watering to keep soil consistently moist.',
    sowingSeason: 'April to June',
    harvestingSeason: 'July to September'
  },
  {
    crop: 'Lettuce',
    image: '/cropPics/lettuce.jpeg.jpg',
    fertilizer: 'Lettuce prefers a balanced fertilizer, with additional emphasis on Nitrogen to encourage leafy growth.',
    diseases: [
      {
        name: 'Downy Mildew',
        treatment: 'Use fungicides like Chlorothalonil or Metalaxyl. Practice proper spacing and avoid excessive moisture.'
      },
      {
        name: 'Lettuce Drop',
        treatment: 'Apply fungicides such as Propiconazole. Rotate crops and avoid over-watering.'
      },
      {
        name: 'Leaf Spot',
        treatment: 'Use fungicides like Copper-based products. Improve air circulation and avoid wetting foliage.'
      }
    ],
    irrigation: 'Needs regular, moderate watering to keep soil consistently moist.',
    sowingSeason: 'March to August',
    harvestingSeason: 'June to October'
  },
  {
    crop: 'Onions',
    image: '/cropPics/onion.jpeg.jpg',
    fertilizer: 'Onions benefit from a balanced fertilizer with additional Potassium to enhance bulb development and yield.',
    diseases: [
      {
        name: 'Downy Mildew',
        treatment: 'Apply fungicides like Metalaxyl. Practice proper spacing and avoid excessive moisture.'
      },
      {
        name: 'Pink Root',
        treatment: 'Use fungicides such as Thiram or Mancozeb. Ensure good soil drainage and avoid excessive watering.'
      },
      {
        name: 'White Rot',
        treatment: 'Apply fungicides like Chlorothalonil. Practice crop rotation and avoid planting in infested soils.'
      }
    ],
    irrigation: 'Requires regular watering, especially during bulb formation.',
    sowingSeason: 'January to March',
    harvestingSeason: 'July to September'
  }
];

const CropHealth = () => {
  const navigate = useNavigate();
  const [selectedCrop, setSelectedCrop] = useState('');
  const [selectedDisease, setSelectedDisease] = useState('');
  const [language, setLanguage] = useState('en'); // Default language is English
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCropChange = (e) => {
    setSelectedCrop(e.target.value);
    setSelectedDisease('');
  };

  const handleDiseaseChange = (e) => {
    setSelectedDisease(e.target.value);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsDropdownOpen(false);
    // Add translation logic here, or load translations for Hindi if available
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
  };


  const selectedCropData = cropData.find((crop) => crop.crop === selectedCrop);
  const diseases = selectedCropData ? selectedCropData.diseases : [];
  const selectedDiseaseData = diseases.find((disease) => disease.name === selectedDisease);

  return (
    <div
      style={{
        backgroundImage: 'url(https://balchem.com/plant-nutrition/wp-content/uploads/sites/4/2021/02/Balchem-plant-nutrittion-field-crops.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className="min-h-screen bg-gradient-to-b from-green-100 to-yellow-100"
    >
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-green-800">AgriEase</h1>
          <nav className="space-x-4 flex items-center">
            <a href="/home" className="text-black-700 hover:text-green-900">
              {language === 'en' ? 'Home' : 'होम'}
            </a>
            <a href="/services" className="text-black-700 hover:text-green-900">
              {language === 'en' ? 'Services' : 'सेवाएं'}
            </a>
            <a href="https://opkpeh.github.io/weather/" className="text-black-700 hover:text-green-900">
              {language === 'en' ? 'Weather Forecast' : 'मौसम का पूर्वानुमान'}
            </a>
            <a href="/crophealth" className="text-blue-900 font-semibold">
              {language === 'en' ? 'Crop Health' : 'फसल स्वास्थ्य'}
            </a>
            <a href="/farming" className="text-black-700 hover:text-green-900">
              {language === 'en' ? 'Farming Tools' : 'कृषि उपकरण'}
            </a>
            <a href="/contact" className="text-black-700 hover:text-green-900">
              {language === 'en' ? 'Contact' : 'संपर्क करें'}
            </a>
            <a href="/image" className="text-black-700 hover:text-green-900">
              {language === 'en' ? 'Image Detection' : 'छवि का पता लगाना'}
            </a>

            {/* Language Toggle Dropdown */}
            <div className="relative inline-block text-left">
              <button
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                id="options-menu"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {language === 'en' ? 'Language' : 'भाषा'}
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M5.293 7.707a1 1 0 011.414 0L10 11l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <button
                      onClick={() => handleLanguageChange('en')}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                      role="menuitem"
                    >
                      English
                    </button>
                    <button
                      onClick={() => handleLanguageChange('hi')}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                      role="menuitem"
                    >
                      हिंदी
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              className="text-white px-4 py-2 rounded-full"
              style={{ backgroundColor: '#268c43' }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#1e7038')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#268c43')}
              onClick={() => navigate('/profile')}
            >
              {language === 'en' ? 'Profile' : 'प्रोफ़ाइल'}
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-8">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-green-800 p-6 text-white">
            <h2 className="text-4xl font-bold text-center">Crop Health Information</h2>
          </div>
          
          <div className="p-8 space-y-8">
            <div className="mb-6">
              <label className="block text-xl font-semibold mb-2 text-green-800" htmlFor="crop-dropdown">Select Crop:</label>
              <select
                id="crop-dropdown"
                value={selectedCrop}
                onChange={handleCropChange}
                className="w-full p-3 border border-green-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300 ease-in-out"
              >
                <option value="" disabled>Select a crop</option>
                {cropData.map((crop, index) => (
                  <option key={index} value={crop.crop}>{crop.crop}</option>
                ))}
              </select>
            </div>

            {selectedCropData && (
              <div className="bg-green-50 p-6 rounded-lg shadow-lg transition duration-500 ease-in-out">
                <h3 className="text-3xl font-bold mb-6 text-green-800">{selectedCropData.crop}</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <img
                      src={selectedCropData.image}
                      alt={selectedCropData.crop}
                      className="w-full h-64 object-cover rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                    />
                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                      <h4 className="font-semibold text-green-700 mb-2">Fertilizer</h4>
                      <p className="text-gray-700">{selectedCropData.fertilizer}</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                      <h4 className="font-semibold text-green-700 mb-2">Irrigation</h4>
                      <p className="text-gray-700">{selectedCropData.irrigation}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                      <h4 className="font-semibold text-green-700 mb-2">Sowing Season</h4>
                      <p className="text-gray-700">{selectedCropData.sowingSeason}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                      <h4 className="font-semibold text-green-700 mb-2">Harvesting Season</h4>
                      <p className="text-gray-700">{selectedCropData.harvestingSeason}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <label className="block text-xl font-semibold mb-2 text-green-800" htmlFor="disease-dropdown">Select Disease:</label>
                  <select
                    id="disease-dropdown"
                    value={selectedDisease}
                    onChange={handleDiseaseChange}
                    className="w-full p-3 border border-green-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300 ease-in-out"
                    disabled={!diseases.length}
                  >
                    <option value="" disabled>Select a disease</option>
                    {diseases.map((disease, index) => (
                      <option key={index} value={disease.name}>{disease.name}</option>
                    ))}
                  </select>
                </div>

                {selectedDiseaseData && (
                  <div className="mt-6 p-6 bg-red-100 rounded-lg shadow-lg transition duration-500 ease-in-out">
                    <h4 className="text-2xl font-semibold mb-4 text-red-800">Disease: {selectedDiseaseData.name}</h4>
                    <p className="text-gray-800 text-lg"><strong>Treatment: </strong>{selectedDiseaseData.treatment}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CropHealth;
