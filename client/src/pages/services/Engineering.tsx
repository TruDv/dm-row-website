import { motion } from 'framer-motion';
import { 
  FaCheckCircle, FaTools, FaSnowflake,
  FaBolt, FaShieldAlt, 
} from 'react-icons/fa';

const Engineering = () => {
  const services = [
    {
      icon: <FaSnowflake className="text-2xl" />,
      title: 'HVAC Systems',
      description: 'Installation, repair, and maintenance of heating, ventilation, and cooling systems'
    },
    {
      icon: <FaTools className="text-2xl" />,
      title: 'Refrigeration',
      description: 'Full-service refrigeration solutions from industrial to simple systems'
    },
    {
      icon: <FaBolt className="text-2xl" />,
      title: 'Electrical Installation',
      description: 'Complete electrical installation, design, and maintenance services'
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: 'Air Quality Control',
      description: 'Solutions to reduce air emissions and improve environmental compliance'
    }
  ];

  const features = [
    '24/7 Emergency Repair Service',
    'Annual Tune-ups & Maintenance',
    'System Retrofitting & Upgrades',
    'Maintenance Contracts Available',
    'Qualified Expert Engineers',
    'Health & Safety Compliance'
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#737520]/60 to-black/80"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
            style={{
              backgroundImage: `url('/images/engineering.jpg')`,
            }}
          ></div>
          <div className="absolute inset-0 opacity-10" style={{
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
              <span className="hover:text-white cursor-pointer transition-colors">Services</span>
              <span className="text-white/40">/</span>
              <span className="text-white font-medium">Engineering</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
              Engineering <span className="text-[#737520
]">Services</span>
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed font-light">
              Expert engineering solutions including HVAC, refrigeration, electrical installation, 
              and air quality control services.
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40L60 37C120 34 240 28 360 24C480 20 600 20 720 22C840 24 960 28 1080 30C1200 32 1320 32 1380 32L1440 32V40H1380C1320 40 1200 40 1080 40C960 40 840 40 720 40C600 40 480 40 360 40C240 40 120 40 60 40H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-[#737520] font-semibold text-sm uppercase tracking-wider">Overview</span>
              <h2 className="text-3xl font-bold text-[#1A1A1A] mt-2 mb-4">
                Expert <span className="text-[#737520]">Engineering</span> Solutions
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                DM-ROW LTD specializes in HVAC and Refrigeration services, Air Quality control, 
                HVAC Heating ventilation and cooling, and Electrical installation and maintenance 
                of equipment.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We are fully qualified and our team of expert engineers will troubleshoot and 
                provide you with the best solution to your problems.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-[#1A1A1A]">
                  ✅ Expert Engineers
                </span>
                <span className="bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-[#1A1A1A]">
                  ✅ 24/7 Support
                </span>
                <span className="bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-[#1A1A1A]">
                  ✅ Quality Assured
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#737520] transition-all duration-300 hover:shadow-lg text-center">
                  <div className="text-[#737520] mb-3 flex justify-center">{service.icon}</div>
                  <h4 className="font-bold text-[#1A1A1A] text-sm mb-1">{service.title}</h4>
                  <p className="text-gray-500 text-xs">{service.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#737520] font-semibold text-sm uppercase tracking-wider">Features</span>
            <h2 className="text-3xl font-bold text-[#1A1A1A] mt-2">
              Why Choose <span className="text-[#737520]">Us</span>
            </h2>
            <div className="w-12 h-1 bg-[#737520] mx-auto mt-3 rounded-full"></div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-4 border border-gray-200 hover:border-[#737520] transition-all duration-300 hover:shadow-md flex items-center gap-3"
              >
                <FaCheckCircle className="text-[#737520] text-sm flex-shrink-0" />
                <span className="text-gray-700 text-sm font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Need Engineering Support?
            </h2>
            <p className="text-white/80 text-sm max-w-2xl mx-auto mb-6">
              Our expert engineers are ready to solve your HVAC and electrical challenges.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-white text-[#737520] font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 text-sm">
                Request a Quote
              </button>
              <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 text-sm">
                Contact Engineering Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Engineering;