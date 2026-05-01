import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X } from 'lucide-react';

const imageDescriptions = {
  'wheat.jpg': 'Stem rust (Puccinia graminis) is a destructive wheat disease causing reddish-brown pustules on stems and leaves, weakening the plant and reducing grain quality. To manage it, use resistant wheat varieties, apply fungicides like propiconazole or azoxystrobin, and practice crop rotation. Regular monitoring for symptoms and early detection are key for timely control, along with weather forecasting to anticipate outbreaks in warm, moist conditions.',
  'rice.jpg': 'Rice blast (Magnaporthe oryzae) is a major fungal disease in rice, causing lesions on leaves, stems, and panicles, which can lead to plant death. To manage it, plant resistant rice varieties, apply fungicides like tricyclazole or azoxystrobin, and practice crop rotation. Proper water management and regular field monitoring help prevent outbreaks, especially in warm, humid conditions that favor the diseases spread.',
  'sugarcane.jpg': 'Sugarcane rust (Puccinia melanocephala) is a common disease affecting sugarcane, characterized by reddish-brown pustules on leaves and stalks, which can reduce yield. To manage it, use resistant sugarcane varieties, apply fungicides such as propiconazole or tebuconazole, and practice crop rotation. Regular monitoring for early symptoms and managing field moisture can help control the disease, particularly in warm, humid conditions favorable for rust development.',
  'potato.jpg': 'Late blight (Phytophthora infestans) is a severe disease in potatoes, causing dark lesions on leaves, stems, and tubers, leading to rotting. To manage it, plant resistant potato varieties, apply fungicides like mancozeb or chlorothalonil, and practice crop rotation. Remove infected plants and control moisture through proper irrigation. Regular monitoring and timely fungicide application during cool, wet conditions are crucial to prevent outbreaks.',
  // Add more image names and descriptions as needed
};

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [description, setDescription] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);

      const fileName = file.name.toLowerCase();
      if (imageDescriptions[fileName]) {
        setDescription(imageDescriptions[fileName]);
        setShowPopup(true);
      } else {
        setDescription('No description available for this image.');
        setShowPopup(true);
      }
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-800">Image Upload</h2>
      
      <div className="mb-6">
        <label htmlFor="file-upload" className="flex flex-col items-center px-4 py-6 bg-white text-green-700 rounded-lg shadow-lg tracking-wide uppercase border border-green-300 cursor-pointer hover:bg-green-50 hover:text-green-800 transition duration-300 ease-in-out">
          <Upload size={48} />
          <span className="mt-2 text-base leading-normal">Select an image</span>
          <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
        </label>
      </div>

      <AnimatePresence>
        {imagePreview && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-6"
          >
            <img src={imagePreview} alt="Preview" className="w-full h-64 object-cover rounded-lg shadow-md" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={closePopup}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold text-green-800">Image Details</h3>
                <button onClick={closePopup} className="text-gray-500 hover:text-gray-700">
                  <X size={24} />
                </button>
              </div>
              <p className="text-gray-600 mb-6">{description}</p>
              <button
                onClick={closePopup}
                className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageUpload;