import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaShieldAlt, FaUsers, FaHandshake, FaAward, FaGlobeAfrica, FaChartLine, FaQuoteLeft } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: <FaCheckCircle className="text-[#737520] text-2xl" />,
      title: 'Integrity',
      description: 'We conduct our business with the highest ethical standards and transparency in all our dealings.'
    },
    {
      icon: <FaHandshake className="text-[#737520] text-2xl" />,
      title: 'Customer Focus',
      description: 'We are committed to exceeding customer expectations through quality service and dedication.'
    },
    {
      icon: <FaShieldAlt className="text-[#737520] text-2xl" />,
      title: 'Safety First',
      description: 'We prioritize the safety of our employees, contractors, and the environment in all operations.'
    },
    {
      icon: <FaUsers className="text-[#737520] text-2xl" />,
      title: 'Teamwork',
      description: 'We believe in the power of collaboration and shared success across all levels of our organization.'
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section - Clean and Minimal */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#737520]/60 to-black/80"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
            style={{
              backgroundImage: `url('images/marine.jpg')`,
            }}
          ></div>
          {/* Additional subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/40">/</span>
              <span className="text-white font-medium">About</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
              About <span className="text-[#fbfefe]">DM-ROW</span>
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed font-heavy">
              We are a 100% Nigerian owned company dedicated to delivering excellence 
              in procurement, engineering, and marine services across the oil and gas industry.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative Element - Bottom Curve */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40L60 37C120 34 240 28 360 24C480 20 600 20 720 22C840 24 960 28 1080 30C1200 32 1320 32 1380 32L1440 32V40H1380C1320 40 1200 40 1080 40C960 40 840 40 720 40C600 40 480 40 360 40C240 40 120 40 60 40H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Company Overview - With Decorative Elements */}
      <section className="py-16 md:py-20 bg-white relative">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#737520]/[0.02] rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start"
          >
            {/* Left - Main Content */}
            <div className="lg:col-span-3">
              <span className="text-[#737520] font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mt-2 mb-4">
                A Legacy of <span className="text-[#737520]">Excellence</span>
              </h2>
              
              {/* Quote */}
              <div className="relative mb-6">
                <FaQuoteLeft className="text-[#737520]/20 text-4xl absolute -top-2 -left-2" />
                <p className="text-gray-600 leading-relaxed pl-8 italic">
                  "Our solutions will create a better and quicker way for organizations to carry out their projects seamlessly."
                </p>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                DM-ROW Limited is a dynamic and visionary concept in service delivery in the oil and gas industry. 
                Since 2014, DM-ROW has been creating values for its clients through innovative solutions and unwavering commitment to quality.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                From procurement to marine services and engineering, DM-ROW is an indigenous company 
                with headquarters in Lagos, Nigeria. We are 100% Nigerian owned, with shareholders and directors 
                who are distinguished Nigerians from diverse sectors of the country.
              </p>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-[#1A1A1A]">
                  <FaGlobeAfrica className="text-[#737520]" /> Nigerian Owned
                </span>
                <span className="inline-flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-[#1A1A1A]">
                  <FaAward className="text-[#737520]" /> ISO 9001 Compliant
                </span>
                <span className="inline-flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-[#1A1A1A]">
                  <FaChartLine className="text-[#737520]" /> Since 2014
                </span>
              </div>
            </div>

            {/* Right - Key Metrics */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#737520]/5 to-transparent rounded-2xl p-6 text-center border border-[#737520]/10 hover:border-[#737520]/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-3xl font-bold text-[#737520]">2014</div>
                <div className="text-xs text-gray-500 mt-1">Founded</div>
                <div className="w-8 h-0.5 bg-[#737520]/30 mx-auto mt-2"></div>
                <div className="text-[10px] text-gray-400 mt-2">Established with vision</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#737520]/5 to-transparent rounded-2xl p-6 text-center border border-[#737520]/10 hover:border-[#737520]/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-3xl font-bold text-[#737520]">100%</div>
                <div className="text-xs text-gray-500 mt-1">Nigerian Owned</div>
                <div className="w-8 h-0.5 bg-[#737520]/30 mx-auto mt-2"></div>
                <div className="text-[10px] text-gray-400 mt-2">Indigenous pride</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#737520]/5 to-transparent rounded-2xl p-6 text-center border border-[#737520]/10 hover:border-[#737520]/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-3xl font-bold text-[#737520]">30+</div>
                <div className="text-xs text-gray-500 mt-1">Years Experience</div>
                <div className="w-8 h-0.5 bg-[#737520]/30 mx-auto mt-2"></div>
                <div className="text-[10px] text-gray-400 mt-2">Combined expertise</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#737520]/5 to-transparent rounded-2xl p-6 text-center border border-[#737520]/10 hover:border-[#737520]/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-3xl font-bold text-[#737520]">4</div>
                <div className="text-xs text-gray-500 mt-1">Service Divisions</div>
                <div className="w-8 h-0.5 bg-[#737520]/30 mx-auto mt-2"></div>
                <div className="text-[10px] text-gray-400 mt-2">Full-service solutions</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision - With Design Elements */}
      <section className="py-16 md:py-20 bg-gray-50 relative">
        {/* Decorative circles */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#737520]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#737520]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#737520] font-semibold text-sm uppercase tracking-wider">Our Purpose</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mt-2">
              Mission & <span className="text-[#737520]">Vision</span>
            </h2>
            <div className="w-12 h-1 bg-[#737520] mx-auto mt-3 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#737520] transition-all duration-300 hover:shadow-xl hover:shadow-[#737520]/5 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#737520]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-all duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-[#737520]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#737520]/20 transition-all">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Dedicated to delivering exceptional customer satisfaction by offering value for money, 
                  appropriate technology, and unwavering commercial integrity. We strive to remain at the 
                  forefront of innovation, ensuring our clients benefit from the latest advancements in technology.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#737520] transition-all duration-300 hover:shadow-xl hover:shadow-[#737520]/5 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#737520]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-all duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-[#737520]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#737520]/20 transition-all">
                  <span className="text-2xl">👁️</span>
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  To be a leading indigenous firm in the oil and gas industry through quality and 
                  value-oriented services. We envision a future where African excellence drives global 
                  energy solutions and creates lasting impact.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values - With Cards Design */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#737520] font-semibold text-sm uppercase tracking-wider">Core Values</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mt-2">
              What We <span className="text-[#737520]">Stand For</span>
            </h2>
            <div className="w-12 h-1 bg-[#737520] mx-auto mt-3 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm">
              Our values guide everything we do, from how we treat our employees to how we serve our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#737520] transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#737520]/5 group text-center"
              >
                <div className="w-14 h-14 bg-[#737520]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#737520]/20 transition-all group-hover:scale-110">
                  {value.icon}
                </div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 group-hover:text-[#737520] transition-colors">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Minimal */}
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
              Ready to Work With Us?
            </h2>
            <p className="text-white/80 text-sm max-w-2xl mx-auto mb-6">
              Let's discuss how our expertise can drive your projects to success.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <button className="bg-white text-[#737520] font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-sm">
                  Contact Us
                </button>
              </Link>
              <Link to="/services">
                <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 text-sm">
                  Our Services
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;