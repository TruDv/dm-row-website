import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Procurement',
      description: 'Strategic supply of project needs through strong relationships with OEMs and buying houses across the globe.',
      features: ['OEM Partnerships', 'Global Sourcing', 'Quality Assurance'],
      image: '/images/procurement.jpg',
      imageAlt: 'Procurement Services',
      slug: 'procurement'
    },
    {
      title: 'Marine Services',
      description: 'Comprehensive marine solutions including vessel chartering, tank cleaning, cement washing, and filtration systems.',
      features: ['Vessel Chartering', 'Tank Cleaning', 'Cement Washing'],
      image: '/images/marine.jpg',
      imageAlt: 'Marine Services',
      slug: 'marine'
    },
    {
      title: 'Engineering',
      description: 'Expert engineering services including HVAC, refrigeration, electrical installation, and maintenance.',
      features: ['HVAC Systems', 'Refrigeration', 'Electrical Installation'],
      image: '/images/engineering.jpg',
      imageAlt: 'Engineering Services',
      slug: 'engineering'
    },
    {
      title: 'Consultancy & Training',
      description: 'Professional consultancy and training services for operational excellence, safety compliance, and workforce development.',
      features: ['Technical Consultancy', 'Safety & Compliance', 'Workforce Development'],
      image: '/images/consultancy.jpg',
      imageAlt: 'Consultancy Services',
      slug: 'consultancy'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#737520] font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-4 text-[#1A1A1A]">
            Our <span className="text-[#737520]">Technical Solutions</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            A company involved in Procurement, Engineering, Marine, and Consultancy services, 
            delivering excellence across all sectors of the economy.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 hover:border-[#737520] transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#737520]/5 group overflow-hidden"
            >
              {/* Image Cover */}
              <Link to={`/services/${service.slug}`}>
                <div className="relative h-64 bg-gray-200 overflow-hidden cursor-pointer">
                  <img 
                    src={service.image} 
                    alt={service.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Fallback placeholder if image fails to load */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#737520]/30 to-[#737520]/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-[#737520]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                       
                      </div>
                     
                    </div>
                  </div>
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  {/* Service title on image */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </Link>

              {/* Content */}
              <div className="p-8">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-[#737520] rounded-full flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-[#737520] font-semibold text-sm hover:gap-3 transition-all group"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;