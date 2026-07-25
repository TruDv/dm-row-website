import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, 
  FaFacebook, FaTwitter, FaLinkedin, FaInstagram,
  FaWhatsapp, FaArrowRight, FaCheckCircle,
  FaBuilding, FaUser, FaComment
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: <FaPhone className="text-2xl" />,
      title: 'Phone',
      details: '+234 800 000 0000',
      sub: 'Mon - Fri, 8AM - 6PM',
      action: 'Call Now',
      link: 'tel:+2348000000000'
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: 'Email',
      details: 'info@dmrowltd.com',
      sub: 'We\'ll respond within 24hrs',
      action: 'Send Email',
      link: 'mailto:info@dmrowltd.com'
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: 'WhatsApp',
      details: '+234 800 000 0000',
      sub: 'Quick response',
      action: 'Chat Now',
      link: 'https://wa.me/2348000000000'
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: 'Visit Us',
      details: 'Lagos, Nigeria',
      sub: 'Headquarters',
      action: 'Get Directions',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, name: 'Facebook', color: '#1877F2' },
    { icon: <FaTwitter />, name: 'Twitter', color: '#1DA1F2' },
    { icon: <FaLinkedin />, name: 'LinkedIn', color: '#0A66C2' },
    { icon: <FaInstagram />, name: 'Instagram', color: '#E4405F' },
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#737520]/60 to-black/80"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
            style={{
              backgroundImage: `url('images/contact.jpg')`,
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
              <span className="text-white font-medium">Contact</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
              Get In <span className="text-[#737520
]">Touch</span>
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed font-light">
              Have a project in mind? Let's discuss how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40L60 37C120 34 240 28 360 24C480 20 600 20 720 22C840 24 960 28 1080 30C1200 32 1320 32 1380 32L1440 32V40H1380C1320 40 1200 40 1080 40C960 40 840 40 720 40C600 40 480 40 360 40C240 40 120 40 60 40H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gray-50 rounded-2xl p-6 text-center border border-gray-200 hover:border-[#737520] transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#737520]/5"
              >
                <div className="w-14 h-14 bg-[#737520]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#737520]/20 transition-all group-hover:scale-110 text-[#737520]">
                  {method.icon}
                </div>
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-1">{method.title}</h4>
                <p className="text-[#737520] font-semibold text-sm">{method.details}</p>
                <p className="text-gray-500 text-xs mt-1">{method.sub}</p>
                <span className="inline-block mt-3 text-[#737520] font-medium text-sm group-hover:gap-2 transition-all">
                  {method.action} →
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">Send Us a Message</h2>
              <p className="text-gray-600 text-sm mb-6">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
                >
                  <FaCheckCircle className="text-green-500 text-4xl mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-green-700">Message Sent!</h3>
                  <p className="text-green-600 text-sm">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <FaUser className="absolute left-3 top-3.5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#737520] transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#737520] transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <FaPhone className="absolute left-3 top-3.5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#737520] transition-colors"
                          placeholder="+234 800 000 0000"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <div className="relative">
                        <FaBuilding className="absolute left-3 top-3.5 text-gray-400" />
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#737520] transition-colors appearance-none bg-white"
                        >
                          <option value="">Select a subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Procurement">Procurement</option>
                          <option value="Marine Services">Marine Services</option>
                          <option value="Engineering Services">Engineering Services</option>
                          <option value="HVAC & Refrigeration">HVAC & Refrigeration</option>
                          <option value="Partnership">Partnership</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <div className="relative">
                      <FaComment className="absolute left-3 top-3.5 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#737520] transition-colors resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#737520] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#5A5D1A] transition-all duration-300 transform hover:scale-[1.01] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin">⏳</span> Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FaArrowRight className="text-sm" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Office Hours */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#737520]/10 rounded-lg flex items-center justify-center text-[#737520]">
                    <FaClock />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A1A]">Office Hours</h3>
                </div>
                <div className="space-y-2">
                  {officeHours.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm border-b border-gray-100 pb-2">
                      <span className="text-gray-600">{item.day}</span>
                      <span className="font-medium text-[#1A1A1A]">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-4">Connect With Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#737520] hover:text-white transition-all duration-300 hover:scale-110"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-gradient-to-br from-[#737520]/10 to-transparent rounded-2xl p-6 border border-[#737520]/20">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#737520]/20 rounded-lg flex items-center justify-center text-[#737520] flex-shrink-0">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A] text-sm">Quick Response</h4>
                    <p className="text-gray-600 text-xs mt-1">
                      Get instant answers on WhatsApp
                    </p>
                    <a href="#" className="text-[#737520] font-medium text-sm inline-flex items-center gap-1 mt-2 hover:gap-2 transition-all">
                      Chat Now →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <span className="text-[#737520] font-semibold text-sm uppercase tracking-wider">Location</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] mt-2">
              Find Us <span className="text-[#737520]">Here</span>
            </h2>
            <div className="w-12 h-1 bg-[#737520] mx-auto mt-3 rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-2xl overflow-hidden border border-gray-200"
          >
            <div className="h-96 bg-gradient-to-br from-[#737520]/10 to-gray-100 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#737520]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaMapMarkerAlt className="text-[#737520] text-3xl" />
                </div>
                <p className="text-gray-600 font-medium">Map Placeholder</p>
                <p className="text-gray-400 text-sm">Lagos, Nigeria</p>
                <p className="text-xs text-gray-400 mt-4">
                  📍 Interactive map will be added here
                </p>
              </div>
            </div>
          </motion.div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-white/80 text-sm max-w-2xl mx-auto mb-6">
              Let's work together to bring your vision to life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-white text-[#737520] font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-sm">
                Get Started
              </button>
              <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 text-sm flex items-center gap-2">
                <FaPhone /> Call Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;