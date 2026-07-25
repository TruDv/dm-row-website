import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/hero/engineering.jpg',
      title: 'Engineering Solutions',
      subtitle: "For Tomorrow's Challenges",
      description: 'Delivering quality procurement, engineering, and marine services to the oil and gas industry.',
      badge: '100% Nigerian Owned'
    },
    {
      image: '/images/hero/marine1.jpg',
      title: 'Marine Services',
      subtitle: 'Excellence at Sea',
      description: 'Comprehensive marine solutions including vessel chartering and offshore operations.',
      badge: 'Industry Leaders'
    },
    {
      image: '/images/hero/procurement.jpg',
      title: 'Procurement & Supply',
      subtitle: 'Global Partnerships',
      description: 'Strategic supply chain solutions with OEM partnerships worldwide.',
      badge: 'Quality Assured'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </motion.div>
      </AnimatePresence>

      {/* Decorative Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index 
                ? 'w-12 h-2 bg-[#737520]' 
                : 'w-2 h-2 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-[#737520]/20 backdrop-blur-sm border border-[#737520]/30 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-[#737520] rounded-full animate-pulse"></span>
              <span className="text-[#737520] text-sm font-medium">{slides[currentSlide].badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 text-white"
            >
              {slides[currentSlide].title}
              <br />
              <span className="text-[#737520]">{slides[currentSlide].subtitle}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl text-white/80 mb-8 max-w-lg"
            >
              {slides[currentSlide].description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact">
                <button className="bg-[#737520] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#5A5D1A] transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group">
                  Get Started
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/services">
                <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  Our Services
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;