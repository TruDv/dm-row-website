import { motion } from 'framer-motion';
import { FaCheckCircle, FaShieldAlt, FaUsers, FaClock } from 'react-icons/fa';

const About = () => {
  const stats = [
    {
      icon: <FaCheckCircle className="text-[#737520] text-4xl" />,
      title: '100% Nigerian Owned',
      description: 'Proudly indigenous company with deep local roots'
    },
    {
      icon: <FaShieldAlt className="text-[#737520] text-4xl" />,
      title: 'ISO 9001 Compliant',
      description: 'Quality assurance at every step'
    },
    {
      icon: <FaUsers className="text-[#737520] text-4xl" />,
      title: '30+ Years Experience',
      description: 'Combined expertise across industries'
    },
    {
      icon: <FaClock className="text-[#737520] text-4xl" />,
      title: 'Since 2014',
      description: 'A decade of excellence in service'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#737520] font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-4 text-[#1A1A1A]">
            Get to Know <span className="text-[#737520]">About Us</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We are 100% Nigerian owned, with shareholders and directors who are distinguished Nigerians 
            from diverse sectors of the country.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Company Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#737520]/5 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#737520]/5 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-[#1A1A1A] mb-4">Our Story</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  DM-ROW Limited is a dynamic and visionary concept in service delivery in the oil and gas industry. 
                  Since 2014, DM-ROW has been creating values for its clients.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  From procurement to marine services and engineering, DM-ROW is an indigenous company 
                  with headquarters in Lagos, Nigeria.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="bg-gray-50 rounded-lg px-6 py-3 border border-gray-200">
                    <div className="text-2xl font-bold text-[#737520]">2014</div>
                    <div className="text-sm text-gray-500">Founded</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg px-6 py-3 border border-gray-200">
                    <div className="text-2xl font-bold text-[#737520]">Lagos</div>
                    <div className="text-sm text-gray-500">Headquarters</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg px-6 py-3 border border-gray-200">
                    <div className="text-2xl font-bold text-[#737520]">100%</div>
                    <div className="text-sm text-gray-500">Nigerian Owned</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#737520] transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-[#737520]/5"
                >
                  <div className="mb-3">{stat.icon}</div>
                  <h4 className="text-lg font-bold text-[#1A1A1A] mb-1">{stat.title}</h4>
                  <p className="text-gray-500 text-sm">{stat.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="mt-8 bg-[#737520]/5 rounded-xl p-6 border border-[#737520]/20">
              <h4 className="text-xl font-bold text-[#737520] mb-2">Our Mission</h4>
              <p className="text-gray-700 leading-relaxed">
                Dedicated to delivering exceptional customer satisfaction by offering value for money, 
                appropriate technology, and unwavering commercial integrity.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;