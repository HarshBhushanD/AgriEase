import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Farming = () => {
  const navigate =useNavigate();
  const farmingTools = [
    {
        name: 'Agricultural Machine',
        description: 'Efficient grass cutter for lawn maintenance and agricultural use.',
        image: '/marketImg/1.png',
        price: 20000,
        link: 'https://www.indiamart.com/proddetail/agricultural-machinery-2849887259630.html?pos=1&kwd=farm%2520tools%2520&%2520equipments&tags=BA%7C%7C%7C%7C7634.243%7CPrice%7Cproduct%7C%7C%7CSSnp%7Crsf:gd-%7C-stype:attr=1%7Cqr_nm:gd%7Cres:RC4%7Ccom-cf:nl%7Cptrs:na%7Cktp:N0%7Cmc:55081%7Cmtp:S%7Cqry_typ:P%7Clang:en%7Cwc:4%7Cflavl:3%7Ccs:9603%7Cv=4https://www.indiamart.com/proddetail/sr-grass-cutter-shrub-master-2852205864191.html?pos=19&kwd=farm%20tools&tags=BA||||9538.906|Price|product|||NA|attrMtch=1|rsf:gd-|-stype:attr=1|qr_nm:gd|res:RC4|com-cf:nl|ptrs:na|ktp:N0|mc:55081|mtp:S|qry_typ:P|lang:en|wc:2|cs:8835|v=4'
      },
      {
        name: 'Heavy Iron Spade',
        description: 'Durable spade for digging and moving soil in various farm tasks.',
        image: '/marketImg/2.jpg',
        price: 160,
        link: 'https://www.indiamart.com/proddetail/heavy-iron-steel-spade-2853082360848.html?pos=1&kwd=heavy%20spade&tags=A||||8668.139|Price|product|||MDC|rsf:gd-|-stype:attr=1|qr_nm:gd|res:RC2|com-cf:nl|ptrs:na|ktp:N0|mc:11901|mtp:S|qry_typ:P|lang:en|wc:2|flavl:0-2|cs:9684|v=4https://dir.indiamart.com/search.mp?ss=heavy+spade&prdsrc=1&v=4&mcatid=11901&catid=157&tags=stype:attr=1|qr_nm:gd|res:RC2|com-cf:nl|ptrs:na|ktp:N0|mc:11901|mtp:S|qry_typ:P|lang:en|wc:2|flavl:0-2|cs:9684tps://www.indiamart.com/proddetail/heavy-duty-spade-2852205864192.html?pos=20&kwd=farm%20tools&tags=BA||||9538.906|Price|product|||NA|attrMtch=1|rsf:gd-|-stype:attr=1|qr_nm:gd|res:RC4|com-cf:nl|ptrs:na|ktp:N0|mc:55082|mtp:S|qry_typ:P|lang:en|wc:2|cs:8836|v=4'
      },
      {
        name: 'Garden Hedge Shear',
        description: 'Sharp and precise pruning shears for maintaining plants and trees.',
        image: '/marketImg/3.png',
        price: 2850,
        link: 'https://www.indiamart.com/proddetail/garden-hedge-shear-21448678373.html?pos=4&kwd=garden%20pruning%20shears&tags=A||||7613.566|Price|product|||TS|rsf:gd-|-stype:attr=1|qr_nm:gd|res:RC4|com-cf:nl|ptrs:na|ktp:N0|mc:73469|mtp:S|qry_typ:P|lang:en|wc:3|flavl:3|cs:9612|v=4https://www.indiamart.com/proddetail/pruning-shears-2852205864193.html?pos=21&kwd=farm%20tools&tags=BA||||9538.906|Price|product|||NA|attrMtch=1|rsf:gd-|-stype:attr=1|qr_nm:gd|res:RC4|com-cf:nl|ptrs:na|ktp:N0|mc:55083|mtp:S|qry_typ:P|lang:en|wc:2|cs:8837|v=4'
      },
      {
        name: 'Wheel barrow',
        description: 'Large capacity wheelbarrow for transporting materials around the farm.',
        image: '/marketImg/4.png',
        price: 3250,
        link: 'https://www.indiamart.com/proddetail/single-wheel-construction-trolley-20257440491.html?pos=1&kwd=wheelbarrow&tags=A||||7695.002|Price|product|||TS|rsf:gd-|-qr_nm:gd|res:RC4|com-cf:nl|ptrs:na|ktp:N0|mc:41187|mtp:G|qry_typ:P|lang:en|wc:1|flavl:10|cs:8336|v=4https://www.indiamart.com/proddetail/wheelbarrow-2852205864194.html?pos=22&kwd=farm%20tools&tags=BA||||9538.906|Price|product|||NA|attrMtch=1|rsf:gd-|-stype:attr=1|qr_nm:gd|res:RC4|com-cf:nl|ptrs:na|ktp:N0|mc:55084|mtp:S|qry_typ:P|lang:en|wc:2|cs:8838|v=4'
      },
      {
        name: 'Garden Hoe',
        description: 'Versatile garden hoe for weeding, cultivating, and creating furrows.',
        image: '/marketImg/5.png',
        price: 80,
        link: 'https://www.indiamart.com/proddetail/iron-gardening-hoe-1961887573.html?pos=1&kwd=garden%20hoe&tags=A||||7545.787|Price|product|||TS|rsf:gd-|-stype:attr=1|qr_nm:gd|res:RC3|com-cf:nl|ptrs:na|ktp:N0|mc:29212|mtp:S|qry_typ:P|lang:en|wc:2|flavl:0|cs:9594|v=4https://www.indiamart.com/proddetail/garden-hoe-2852205864195.html?pos=23&kwd=farm%20tools&tags=BA||||9538.906|Price|product|||NA|attrMtch=1|rsf:gd-|-stype:attr=1|qr_nm:gd|res:RC4|com-cf:nl|ptrs:na|ktp:N0|mc:55085|mtp:S|qry_typ:P|lang:en|wc:2|cs:8839|v=4'
      },
      {
        name: 'Leaf Rake',
        description: 'Wide leaf rake for efficiently gathering leaves and debris.',
        image: '/marketImg/6.png',
        price: 180,
        link: 'https://www.indiamart.com/proddetail/garden-rake-16-teeth-with-handle-2852258345348.html?pos=1&kwd=leaf%20rake&tags=A||||8410.569|Price|product|||MDC|attrMtch=1|rsf:gd-|-stype:attr=1|qr_nm:gd|res:RC3|com-cf:nl|ptrs:na|ktp:N0|mc:30567|mtp:S|qry_typ:P|lang:en|wc:2|flavl:0|cs:9599|v=4https://www.indiamart.com/proddetail/leaf-rake-2852205864196.html?pos=24&kwd=farm%20tools&tags=BA||||9538.906|Price|product|||NA|attrMtch=1|rsf:gd-|-stype:attr=1|qr_nm:gd|res:RC4|com-cf:nl|ptrs:na|ktp:N0|mc:55086|mtp:S|qry_typ:P|lang:en|wc:2|cs:8840|v=4'
      },
      {
        name: 'Watering Can',
        description: 'Large capacity watering can for nurturing plants and seedlings.',
        image: '/marketImg/7.png',
        price: 135,
        link: 'https://www.indiamart.com/proddetail/agricultural-water-can-23938288333.html?pos=1&kwd=watering%20can&tags=A||||8227.221|Price|product|||TS|rsf:gd-|-stype:attr=1|qr_nm:gd|res:RC5|com-cf:nl|ptrs:na|ktp:N0|mc:3370|mtp:S|qry_typ:P|lang:en|wc:2|flavl:0-1|cs:9639|v=4https://www.indiamart.com/proddetail/watering-can-2852205864197.html?pos=25&kwd=farm%20tools&tags=BA||||9538.906|Price|product|||NA|attrMtch=1|rsf:gd-|-stype:attr=1|qr_nm:gd|res:RC4|com-cf:nl|ptrs:na|ktp:N0|mc:55087|mtp:S|qry_typ:P|lang:en|wc:2|cs:8841|v=4'
      },
      {
        name: 'Garden Gloves',
        description: 'Protective garden gloves for comfortable and safe farming work.',
        image: '/marketImg/8.png',
        price: 45,
        link: 'https://www.indiamart.com/proddetail/garden-gloves-2854429678733.html?pos=1&kwd=garden%20gloves&tags=A||||8227.221|Price|product|||TS|rsf:gd-|-stype:attr=1|qr_nm:gd|res:RC3|com-cf:nl|ptrs:na|ktp:N0|mc:106713|mtp:S|qry_typ:P|lang:en|wc:2|flavl:0|cs:9644|v=4https://www.indiamart.com/proddetail/garden-gloves-2852205864198.html?pos=26&kwd=farm%20tools&tags=BA||||9538.906|Price|product|||NA|attrMtch=1|rsf:gd-|-stype:attr=1|qr_nm:gd|res:RC4|com-cf:nl|ptrs:na|ktp:N0|mc:55088|mtp:S|qry_typ:P|lang:en|wc:2|cs:8842|v=4'
      },
      {
        name: 'Pruning Saw',
        description: 'Sharp pruning saw for cutting thicker branches and small trees.',
        image: '/marketImg/9.png',
        price: 2000,
        link: 'https://www.indiamart.com/proddetail/pruning-saw-for-wood-22147934262.html?pos=3&kwd=pruning%20saw&tags=A||||7613.566|Price|product|||TS|rsf:gd-|-qr_nm:gd|res:RC3|com-cf:nl|ptrs:na|ktp:N0|mc:35906|mtp:S|qry_typ:P|lang:en|wc:2|flavl:0|cs:8301|v=4https://www.indiamart.com/proddetail/pruning-saw-2852205864199.html?pos=27&kwd=farm%20tools&tags=BA||||9538.906|Price|product|||NA|attrMtch=1|rsf:gd-|-stype:attr=1|qr_nm:gd|res:RC4|com-cf:nl|ptrs:na|ktp:N0|mc:55089|mtp:S|qry_typ:P|lang:en|wc:2|cs:8843|v=4'
      },
      {
        name: 'Compost Bin',
        description: 'Durable compost bin for creating nutrient-rich soil for your farm.',
        image: '/marketImg/10.png',
        price: 8999,
        link: 'https://www.indiamart.com/proddetail/kitchen-waste-compost-bin-20519049391.html?pos=1&kwd=compost%20bin&tags=A||||7546.6187|Price|product|||TS|rsf:gd-|-qr_nm:gd|res:RC3|com-cf:nl|ptrs:na|ktp:N0|mc:94724|mtp:S|qry_typ:P|lang:en|wc:2|flavl:0-1|cs:8398|v=4https://www.indiamart.com/proddetail/compost-bin-2852205864200.html?pos=28&kwd=farm%20tools&tags=BA||||9538.906|Price|product|||NA|attrMtch=1|rsf:gd-|-stype:attr=1|qr_nm:gd|res:RC4|com-cf:nl|ptrs:na|ktp:N0|mc:55090|mtp:S|qry_typ:P|lang:en|wc:2|cs:8844|v=4'
      },
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price);
  };

  return (
    <div className="relative min-h-screen p-8 bg-[url('https://ap.fftc.org.tw/sites/default/files/styles/project_slider/public/scenic-view-landscape-rice-field-green-grass-with-field-cornfield-asia-country-agriculture-harvest-with-fluffy-clouds-blue-sky-sunset-evening-background.jpg?itok=_diWPwp9')] bg-cover bg-center"
      style={{ backgroundAttachment: 'fixed' }}>
      
      {/* Dark tinted overlay with blur applied only to background */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md pointer-events-none z-0"></div>

      {/* Content Layer */}
      <div className="relative z-10">
        <header
          className="flex justify-between items-center p-6"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            borderRadius: "12px",
          }}
        >
          <h1 className="text-3xl text-green-800 font-bold">AgriEase</h1>
          <nav className="space-x-8">
            <a href="/home" className="text-black hover:text-purple-800">Home</a>
            <a href="/services" className="text-black hover:text-gray-800">Services</a>
            <a href="https://opkpeh.github.io/weather/" className="text-black hover:text-gray-800">Weather Forecast</a>
            <a href="/crophealth" className="text-blue hover:text-gray-800">Crop Health</a>
            <a href="/farming" className="text-blue-800 hover:text-gray-800">Farming Tools</a>
            <a href="/contact" className="text-black hover:text-gray-800">Contact</a>
            

          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <span className="absolute top-0 right-0 w-4 h-4 bg-purple-600 text-white rounded-full text-xs flex items-center justify-center">0</span>
              <button className="text-purple-600 hover:text-purple-800">
                <FaShoppingCart className="w-6 h-6" />
              </button>
            </div>
            <button
            className="text-white px-4 py-2 rounded-full"
            style={{ backgroundColor: '#268c43' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#1e7038'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#268c43'}
            onClick={() => navigate('/profile')} // Navigate to Profile page
          >
            Profile
          </button>
          </div>
        </header>

        <div className="max-w-7xl mx-auto mt-8">
          <h1 className="text-4xl font-extrabold text-[#2DD881] mb-8 text-center">Farming Tools Marketplace</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {farmingTools.map((tool, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                <img src={tool.image} alt={tool.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-green-800 mb-2">{tool.name}</h2>
                  <p className="text-gray-600 mb-4 h-20 overflow-hidden">{tool.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-bold">{formatPrice(tool.price)}</span>
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out flex items-center"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Farming;
