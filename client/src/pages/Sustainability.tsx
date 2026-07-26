import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaLeaf, FaRecycle, FaWater, FaSolarPanel, 
  FaShieldAlt, FaHandsHelping, FaChartLine, 
  FaGlobeAfrica, FaCheckCircle,
} from 'react-icons/fa';

const Sustainability = () => {
  const initiatives = [
    {
      icon: <FaLeaf className="text-3xl" />,
      title: 'Environmental Stewardship',
      description: 'We are committed to minimizing our environmental footprint through sustainable practices and innovative solutions.',
      features: ['Carbon Footprint Reduction', 'Waste Management', 'Eco-friendly Operations']
    },
    {
      icon: <FaRecycle className="text-3xl" />,
      title: 'Waste Management',
      description: 'Implementing comprehensive waste reduction and recycling programs across all our operations.',
      features: ['Recycling Programs', 'Waste Reduction', 'Circular Economy']
    },
    {
      icon: <FaWater className="text-3xl" />,
      title: 'Water Conservation',
      description: 'Responsible water management and conservation practices to protect this vital resource.',
      features: ['Water Recycling', 'Efficient Usage', 'Environmental Protection']
    },
    {
      icon: <FaSolarPanel className="text-3xl" />,
      title: 'Energy Efficiency',
      description: 'Adopting energy-efficient technologies and renewable energy solutions to reduce our carbon footprint.',
      features: ['Renewable Energy', 'Energy Audits', 'Efficiency Programs']
    }
  ];

  const commitments = [
    {
      icon: <FaShieldAlt className="text-[#737520] text-2xl" />,
      title: 'Safety Excellence',
      description: 'Maintaining the highest safety standards to protect our employees and the environment.'
    },
    {
      icon: <FaHandsHelping className="text-[#737520] text-2xl" />,
      title: 'Community Engagement',
      description: 'Building strong relationships with local communities through sustainable development initiatives.'
    },
    {
      icon: <FaGlobeAfrica className="text-[#737520] text-2xl" />,
      title: 'Global Responsibility',
      description: 'Contributing to global sustainability goals through responsible business practices.'
    },
    {
      icon: <FaChartLine className="text-[#737520] text-2xl" />,
      title: 'Continuous Improvement',
      description: 'Constantly improving our sustainability practices through innovation and technology.'
    }
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
              backgroundImage: `url('images/environment.jpg')`,
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
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/40">/</span>
              <span className="text-white font-medium">Sustainability</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
              Sustainability & <span className="text-[#fafafa]">Environment</span>
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed font-heavy">
              Committed to sustainable practices, environmental stewardship, and creating a 
              better future for generations to come.
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40L60 37C120 34 240 28 360 24C480 20 600 20 720 22C840 24 960 28 1080 30C1200 32 1320 32 1380 32L1440 32V40H1380C1320 40 1200 40 1080 40C960 40 840 40 720 40C600 40 480 40 360 40C240 40 120 40 60 40H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#737520] font-semibold text-sm uppercase tracking-wider">Our Commitment</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mt-2">
              Building a <span className="text-[#737520]">Sustainable</span> Future
            </h2>
            <div className="w-12 h-1 bg-[#737520] mx-auto mt-3 rounded-full"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-sm">
              At DM-ROW, we recognize our responsibility to protect the environment and promote sustainable 
              practices across all our operations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#737520] transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#737520]/5 group"
              >
                <div className="text-[#737520] mb-4 group-hover:scale-110 transition-transform">
                  {initiative.icon}
                </div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 group-hover:text-[#737520] transition-colors">
                  {initiative.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {initiative.description}
                </p>
                <ul className="space-y-1">
                  {initiative.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                      <FaCheckCircle className="text-[#737520] text-xs flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#737520] font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mt-2">
              Our <span className="text-[#737520]">Commitments</span>
            </h2>
            <div className="w-12 h-1 bg-[#737520] mx-auto mt-3 rounded-full"></div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-center border border-gray-200 hover:border-[#737520] transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#737520]/5 group"
              >
                <div className="w-14 h-14 bg-[#737520]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#737520]/20 transition-all group-hover:scale-110">
                  {commitment.icon}
                </div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 group-hover:text-[#737520] transition-colors">
                  {commitment.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {commitment.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Join Us in Building a Sustainable Future
            </h2>
            <p className="text-white/80 text-sm max-w-2xl mx-auto mb-6">
              Let's work together to create positive environmental and social impact.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <button className="bg-white text-[#737520] font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-sm">
                  Get Started
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

export default Sustainability;