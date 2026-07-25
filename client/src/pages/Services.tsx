import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, FaCheckCircle
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Procurement Services',
      slug: 'procurement',
      subtitle: 'Strategic Supply Chain Solutions',
      description: 'We are strategically positioned to supply your project\'s needs through strong relationships with Original Equipment Manufacturers (OEMs) and buying houses across the globe.',
      features: [
        'OEM Partnerships & Global Sourcing',
        'Quality Assurance & Control',
        'Cost-Effective Solutions',
        'Timely Delivery & Logistics'
      ],
      image: 'public/images/procurement.jpg'
    },
    {
      id: 2,
      title: 'Marine Services',
      slug: 'marine',
      subtitle: 'Comprehensive Offshore Solutions',
      description: 'Our solutions range from vessel chartering brokerage, tank cleaning, cement washing, installation and maintenance of filtration systems.',
      features: [
        'Vessel Chartering & Brokerage',
        'Tank Cleaning & Cement Washing',
        'Filtration System Installation',
        'Marine Equipment Maintenance'
      ],
      image: 'public/images/marine.jpg'
    },
    {
      id: 3,
      title: 'Engineering Services',
      slug: 'engineering',
      subtitle: 'Expert Technical Solutions',
      description: 'We purchase, install, maintain, and repair HVAC and refrigeration systems with a team of fully qualified expert engineers.',
      features: [
        'HVAC System Installation & Repair',
        'Refrigeration Services',
        'Electrical Installation',
        '24/7 Emergency Support'
      ],
      image: 'public/images/engineering.jpg'
    },
    {
    id: 4,
    title: 'Consultancy & Training Services',
    slug: 'consultancy',
    subtitle: 'Professional Advisory & Training',
    description: 'We provide expert consultancy and training services to enhance operational efficiency, safety compliance, and workforce development.',
    features: [
      'Technical Consultancy',
      'Safety & Compliance Training',
      'Project Management Advisory',
      'Workforce Development'
    ],
    image: 'public/images/consultancy.jpg'
  }
];

  const benefits = [
    {
      icon: <FaCheckCircle className="text-[#737520] text-2xl" />,
      title: 'Quality Assurance',
      description: 'ISO 9001 compliant processes ensuring the highest standards'
    },
    {
      icon: <FaCheckCircle className="text-[#737520] text-2xl" />,
      title: 'Expert Team',
      description: '30+ years combined experience across diverse sectors'
    },
    {
      icon: <FaCheckCircle className="text-[#737520] text-2xl" />,
      title: 'Customer Focus',
      description: 'Committed to exceeding expectations with value for money'
    },
    {
      icon: <FaCheckCircle className="text-[#737520] text-2xl" />,
      title: 'Safety First',
      description: 'Unwavering commitment to health, safety, and environment'
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#737520]/60 to-black/80"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
            style={{
              backgroundImage: `url('public/images/services.jpg')`,
            }}
          ></div>
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
            <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/40">/</span>
              <span className="text-white font-medium">Services</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
              Our <span className="text-[#737520
]">Services</span>
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed font-light">
              We provide integrated technical solutions across procurement, engineering, 
              and marine services to the oil and gas industry.
            </p>
          </motion.div>
        </div>
        
        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40L60 37C120 34 240 28 360 24C480 20 600 20 720 22C840 24 960 28 1080 30C1200 32 1320 32 1380 32L1440 32V40H1380C1320 40 1200 40 1080 40C960 40 840 40 720 40C600 40 480 40 360 40C240 40 120 40 60 40H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Service Categories - Grid with spacing */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#737520] font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mt-2">
              Our <span className="text-[#737520]">Technical Solutions</span>
            </h2>
            <div className="w-12 h-1 bg-[#737520] mx-auto mt-3 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm">
              A company involved in Procurement, Engineering, and Marine services, 
              delivering excellence across all sectors of the economy.
            </p>
          </motion.div>

          {/* Service Cards with spacing */}
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative rounded-2xl overflow-hidden h-72 lg:h-96 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#737520]/30 to-transparent z-10"></div>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 z-20 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                    <span className="text-sm font-semibold text-[#1A1A1A]">{service.subtitle}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="text-[#737520] font-semibold text-sm uppercase tracking-wider">
                    Service {index + 1}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mt-2 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-[#737520] rounded-full flex-shrink-0 mt-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-[#737520] font-semibold hover:gap-3 transition-all group border-b-2 border-[#737520]/20 hover:border-[#737520] pb-1"
                  >
                    Learn More 
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#737520] font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mt-2">
              Delivering <span className="text-[#737520]">Excellence</span>
            </h2>
            <div className="w-12 h-1 bg-[#737520] mx-auto mt-3 rounded-full"></div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-center border border-gray-200 hover:border-[#737520] transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#737520]/5 group"
              >
                <div className="w-14 h-14 bg-[#737520]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#737520]/20 transition-all group-hover:scale-110">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2 group-hover:text-[#737520] transition-colors">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
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
              Ready to Get Started?
            </h2>
            <p className="text-white/80 text-sm max-w-2xl mx-auto mb-6">
              Let's discuss how our services can drive your projects to success.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-[#737520] font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-sm"
              >
                Contact Us
              </Link>
              <Link 
                to="/products"
                className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 text-sm"
              >
                View Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Services;