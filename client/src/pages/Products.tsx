import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 

  FaTimes, FaArrowRight, FaCheckCircle,
  FaWhatsapp
} from 'react-icons/fa';

// Product Data
const productsData = [
  {
    id: 1,
    name: 'Industrial Pipes',
    category: 'Industrial',
    //icon: <FaIndustry />,//
    image: '/images/products/pipe.jpg',
    description: 'High-quality industrial pipes for oil and gas applications, designed for durability and performance.',
    specifications: [
      { label: 'Material', value: 'Carbon Steel, Stainless Steel' },
      { label: 'Size Range', value: '1/2" to 48"' },
      { label: 'Pressure Rating', value: 'Up to 2500 PSI' },
      { label: 'Standards', value: 'ASTM A106, A53, API 5L' },
      { label: 'Applications', value: 'Oil & Gas, Petrochemical, Water Treatment' }
    ],
    features: [
      'Corrosion Resistant',
      'High Temperature Tolerance',
      'Available in Various Grades',
      'Custom Lengths Available'
    ]
  },
  {
    id: 2,
    name: 'Electric Motors & Spares',
    category: 'Electrical',
    //icon: <FaBolt />,
    image: '/images/products/motor.jpg',
    description: 'Premium electric motors and genuine spares for industrial applications, ensuring reliable performance.',
    specifications: [
      { label: 'Power Range', value: '0.5 HP to 1000 HP' },
      { label: 'Voltage', value: '230V, 400V, 690V' },
      { label: 'Frequency', value: '50Hz, 60Hz' },
      { label: 'Standards', value: 'IEC, NEMA' },
      { label: 'Protection', value: 'IP55, IP66' }
    ],
    features: [
      'Energy Efficient',
      'Low Maintenance',
      'Genuine OEM Spares',
      'Full Warranty'
    ]
  },
  {
    id: 3,
    name: 'Flanges, Bolts & Pipefittings',
    category: 'Hardware',
    //icon: <FaTools />,//
    image: '/images/products/flange.jpg',
    description: 'Complete range of flanges, bolts, and pipefittings for all industrial piping requirements.',
    specifications: [
      { label: 'Material', value: 'Carbon Steel, Stainless Steel, Alloy Steel' },
      { label: 'Pressure Class', value: '150# to 2500#' },
      { label: 'Standards', value: 'ASME B16.5, B16.47' },
      { label: 'Types', value: 'Weld Neck, Slip-On, Blind, Socket Weld' }
    ],
    features: [
      'High Strength',
      'Precision Machined',
      'Corrosion Resistant',
      'Certified Quality'
    ]
  },
  {
    id: 4,
    name: 'Electric Transformers',
    category: 'Electrical',
    //icon: <FaLightbulb />,//
    image: '/images/products/transformer.jpg',
    description: 'High-performance transformers for power distribution and industrial applications.',
    specifications: [
      { label: 'Power Rating', value: '100 KVA to 100 MVA' },
      { label: 'Voltage Class', value: 'Up to 132 KV' },
      { label: 'Standards', value: 'IEC 60076, ANSI' },
      { label: 'Cooling Type', value: 'ONAN, ONAF, OFAF' }
    ],
    features: [
      'High Efficiency',
      'Low Loss Design',
      'Maintenance Free',
      'Custom Configurations'
    ]
  },
  {
    id: 5,
    name: 'Welding Equipment & Consumables',
    category: 'Equipment',
    //icon: <FaWrench />,
    image: '/images/products/welding.jpg',
    description: 'Complete welding solutions including equipment and consumables for all industrial needs.',
    specifications: [
      { label: 'Type', value: 'MIG, TIG, Stick, Submerged Arc' },
      { label: 'Power Output', value: '200A to 1000A' },
      { label: 'Duty Cycle', value: '60% - 100%' },
      { label: 'Consumables', value: 'Electrodes, Wires, Fluxes' }
    ],
    features: [
      'Industrial Grade',
      'High Duty Cycle',
      'Consistent Performance',
      'Safety Certified'
    ]
  },
  {
    id: 6,
    name: 'Health & Safety Equipment',
    category: 'Safety',
    //icon: <FaShieldAlt />,
    image: '/images/products/safety.png',
    description: 'Comprehensive range of health and safety equipment for workplace protection.',
    specifications: [
      { label: 'Type', value: 'PPE, Fire Safety, First Aid' },
      { label: 'Standards', value: 'OSHA, ANSI, NFPA' },
      { label: 'Certification', value: 'CE, ISO 9001' }
    ],
    features: [
      'Meets International Standards',
      'Durable Materials',
      'Comfortable Design',
      'Easy to Maintain'
    ]
  },
  {
    id: 7,
    name: 'Marine Lights',
    category: 'Marine',
    //icon: <FaFireExtinguisher />,
    image: '/images/products/marine.jpg',
    description: 'High-quality marine lighting solutions for vessels and offshore installations.',
    specifications: [
      { label: 'Type', value: 'LED, Halogen, Explosion Proof' },
      { label: 'Protection', value: 'IP66, IP67' },
      { label: 'Standards', value: 'IMO, SOLAS' }
    ],
    features: [
      'Explosion Proof Options',
      'Corrosion Resistant',
      'Energy Efficient',
      'Marine Grade Materials'
    ]
  },
  {
    id: 8,
    name: 'Gratings, Plates & Bars',
    category: 'Structural',
    
    image: '/images/products/grating.jpg',
    description: 'Industrial gratings, plates, and bars for structural applications across industries.',
    specifications: [
      { label: 'Material', value: 'Carbon Steel, Stainless Steel, Aluminum' },
      { label: 'Thickness', value: '3mm to 50mm' },
      { label: 'Width', value: 'Up to 2500mm' },
      { label: 'Standards', value: 'ASTM, BS, JIS' }
    ],
    features: [
      'High Strength',
      'Slip Resistant Options',
      'Corrosion Resistant',
      'Custom Fabrication'
    ]
  }
];

// Product Categories for filtering
const categories = ['All', 'Industrial', 'Electrical', 'Hardware', 'Equipment', 'Safety', 'Marine', 'Structural'];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<typeof productsData[0] | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showQuote, setShowQuote] = useState(false);

  // Filter products based on category
  const filteredProducts = selectedCategory === 'All' 
    ? productsData 
    : productsData.filter(p => p.category === selectedCategory);

  // Open product modal
  const openModal = (product: typeof productsData[0]) => {
    setSelectedProduct(product);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setShowQuote(false);
    document.body.style.overflow = 'auto';
  };

  // Open quote form
  const openQuote = () => {
    setShowQuote(true);
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#737520]/60 to-black/80"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
            style={{
              backgroundImage: "url('images/products/products.jpg')",
            }}
          ></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
              <span className="hover:text-white cursor-pointer transition-colors">Home</span>
              <span className="text-white/40">/</span>
              <span className="text-white font-medium">Products</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
              Our <span className="text-[#737520
]">Products</span>
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed font-light">
              Quality products for the oil and gas industry at competitive prices, 
              backed by global partnerships and rigorous quality assurance.
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40L60 37C120 34 240 28 360 24C480 20 600 20 720 22C840 24 960 28 1080 30C1200 32 1320 32 1380 32L1440 32V40H1380C1320 40 1200 40 1080 40C960 40 840 40 720 40C600 40 480 40 360 40C240 40 120 40 60 40H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-[#737520] font-semibold text-sm uppercase tracking-wider">Browse Products</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mt-1">
                  What We <span className="text-[#737520]">Supply</span>
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-[#737520] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => openModal(product)}
                className="group bg-white rounded-2xl border border-gray-200 hover:border-[#737520] transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#737520]/10 cursor-pointer overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#737520]/90 text-white text-xs px-3 py-1 rounded-full">
                    {product.category}
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-[#737520] text-xl mb-2">
                  
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-2 group-hover:text-[#737520] transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-3">
                    {product.description}
                  </p>
                  <button className="inline-flex items-center gap-2 text-[#737520] font-semibold text-sm hover:gap-3 transition-all group">
                    Learn More
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Product Modal */}
      <AnimatePresence>
        {showModal && selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with Image */}
              <div className="relative h-64 bg-gray-200">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                >
                  <FaTimes className="text-[#1A1A1A]" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white text-2xl">
                      
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{selectedProduct.name}</h2>
                      <p className="text-white/80 text-sm">{selectedProduct.category}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8">
                {!showQuote ? (
                  <>
                    {/* Description */}
                    <div className="mb-8">
                      <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">Description</h3>
                      <p className="text-gray-600 leading-relaxed">{selectedProduct.description}</p>
                    </div>

                    {/* Specifications */}
                    <div className="mb-8">
                      <h3 className="text-lg font-bold text-[#1A1A1A] mb-4">Specifications</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {selectedProduct.specifications.map((spec, idx) => (
                          <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                            <div className="text-xs text-gray-500 uppercase tracking-wider">{spec.label}</div>
                            <div className="text-sm font-semibold text-[#1A1A1A] mt-1">{spec.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="text-lg font-bold text-[#1A1A1A] mb-4">Key Features</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {selectedProduct.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-gray-600">
                            <FaCheckCircle className="text-[#737520] text-sm flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
                      <button 
                        onClick={openQuote}
                        className="flex-1 bg-[#737520] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#5A5D1A] transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        Get Quote
                        <FaArrowRight className="text-sm" />
                      </button>
                      <button 
                        onClick={closeModal}
                        className="flex-1 border-2 border-gray-200 text-gray-600 font-semibold px-6 py-3 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
                      >
                        Close
                      </button>
                    </div>
                  </>
                ) : (
                  // Quote Form
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-[#1A1A1A]">Request a Quote</h3>
                      <button 
                        onClick={() => setShowQuote(false)}
                        className="text-gray-400 hover:text-[#1A1A1A] transition-colors"
                      >
                        <FaTimes />
                      </button>
                    </div>
                    <p className="text-gray-600 text-sm mb-6">
                      Get a competitive quote for <span className="font-semibold text-[#1A1A1A]">{selectedProduct.name}</span>
                    </p>
                    <form className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                          <input 
                            type="text" 
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#737520] transition-colors"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                          <input 
                            type="text" 
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#737520] transition-colors"
                            placeholder="Company Name"
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <input 
                            type="email" 
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#737520] transition-colors"
                            placeholder="john@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                          <input 
                            type="tel" 
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#737520] transition-colors"
                            placeholder="+234 800 000 0000"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Quantity Required</label>
                        <input 
                          type="number" 
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#737520] transition-colors"
                          placeholder="Enter quantity"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                        <textarea 
                          rows={3}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#737520] transition-colors resize-none"
                          placeholder="Any specific requirements..."
                        ></textarea>
                      </div>
                      <div className="flex flex-wrap gap-4 pt-2">
                        <button 
                          type="submit"
                          className="flex-1 bg-[#737520] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#5A5D1A] transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          Submit Request
                          <FaCheckCircle className="text-sm" />
                        </button>
                        <button 
                          type="button"
                          onClick={() => setShowQuote(false)}
                          className="flex-1 border-2 border-gray-200 text-gray-600 font-semibold px-6 py-3 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-12 bg-[#737520] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Need a Custom Solution?
            </h2>
            <p className="text-white/80 text-sm max-w-2xl mx-auto mb-6">
              Contact us for custom manufacturing and bulk supply requirements.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-white text-[#737520] font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-sm">
                Contact Sales
              </button>
              <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 text-sm flex items-center gap-2">
                <FaWhatsapp /> WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Products;