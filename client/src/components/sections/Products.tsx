import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4;

  const products = [
    { 
      name: 'Pipes', 
      category: 'Industrial',
      image: '/images/products/pipe.jpg',
      description: 'High-quality industrial pipes for oil and gas applications'
    },
    { 
      name: 'Electric Motors & Spares', 
      category: 'Electrical',
      image: '/images/products/motor.jpg',
      description: 'Premium electric motors and genuine OEM spares'
    },
    { 
      name: 'Flanges, Bolts & Fittings', 
      category: 'Hardware',
      image: '/images/products/flange.jpg',
      description: 'Complete range of flanges, bolts, and pipefittings'
    },
    { 
      name: 'Electric Transformers', 
      category: 'Electrical',
      image: '/images/products/transformer.jpg',
      description: 'High-performance transformers for power distribution'
    },
    { 
      name: 'Welding Equipment', 
      category: 'Equipment',
      image: '/images/products/welding.jpg',
      description: 'Complete welding solutions and consumables'
    },
    { 
      name: 'Safety Equipment', 
      category: 'Safety',
      image: '/images/products/safety.png',
      description: 'Comprehensive health and safety equipment'
    },
    { 
      name: 'Marine Lights', 
      category: 'Marine',
      image: '/images/products/marine.jpg',
      description: 'High-quality marine lighting solutions'
    },
    { 
      name: 'Gratings, Plates & Bars', 
      category: 'Structural',
      image: '/images/products/grating.jpg',
      description: 'Industrial gratings, plates, and structural bars'
    },
  ];

  const nextSlide = () => {
    if (currentIndex < products.length - itemsToShow) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(products.length - itemsToShow);
    }
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#737520] font-semibold text-sm uppercase tracking-wider">Our Products</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-4 text-[#1A1A1A]">
            What We <span className="text-[#737520]">Supply</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We supply the Oil and Gas industry with quality products at reasonable prices, 
            maintaining high standards through global partnerships.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows - Top Right */}
          <div className="flex justify-end gap-2 mb-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#737520] hover:text-white transition-all duration-300 flex items-center justify-center group"
            >
              <FaArrowLeft className="text-[#737520] group-hover:text-white text-sm" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#737520] hover:text-white transition-all duration-300 flex items-center justify-center group"
            >
              <FaArrowRight className="text-[#737520] group-hover:text-white text-sm" />
            </button>
          </div>

          {/* Products Grid - Clean slide with no fade */}
          <motion.div
            key={currentIndex}
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {visibleProducts.map((product, index) => (
              <div
                key={product.name + index}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#737520] transition-all duration-500 hover:transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#737520]/10"
              >
                {/* Image */}
                <Link to="/products">
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/400x300/737520/ffffff?text=' + product.name;
                      }}
                    />
                    <div className="absolute top-4 left-4 bg-[#737520] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {product.category}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-5">
                  <Link to="/products">
                    <h4 className="text-lg font-bold text-[#1A1A1A] mb-1 group-hover:text-[#737520] transition-colors">
                      {product.name}
                    </h4>
                  </Link>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                  <Link 
                    to="/products"
                    className="inline-flex items-center gap-2 text-[#737520] font-semibold text-sm mt-3 hover:gap-3 transition-all group-hover:text-[#737520]"
                  >
                    View Details
                    <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* View All Products CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            to="/products"
            className="inline-flex items-center gap-3 bg-[#737520] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#5A5D1A] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#737520]/25 group"
          >
            View All Products
            <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;