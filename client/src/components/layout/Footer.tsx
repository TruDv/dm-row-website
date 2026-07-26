import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#737520] rounded-lg flex items-center justify-center font-bold text-white text-xl">
                DM
              </div>
              <span className="text-xl font-bold text-[#1A1A1A]">
                DM-<span className="text-[#737520]">ROW</span>
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Delivering quality procurement, engineering, marine, and consultancy services to the oil and gas industry.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#1A1A1A] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-[#737520] transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-[#737520] transition-colors text-sm">About</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-[#737520] transition-colors text-sm">Services</Link></li>
              <li><Link to="/products" className="text-gray-600 hover:text-[#737520] transition-colors text-sm">Products</Link></li>
              <li><Link to="/sustainability" className="text-gray-600 hover:text-[#737520] transition-colors text-sm">Sustainability</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-[#737520] transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-[#1A1A1A] mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/procurement" className="text-gray-600 hover:text-[#737520] transition-colors text-sm">Procurement</Link></li>
              <li><Link to="/services/marine" className="text-gray-600 hover:text-[#737520] transition-colors text-sm">Marine Services</Link></li>
              <li><Link to="/services/engineering" className="text-gray-600 hover:text-[#737520] transition-colors text-sm">Engineering</Link></li>
              <li><Link to="/services/consultancy" className="text-gray-600 hover:text-[#737520] transition-colors text-sm">Consultancy & Training</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold text-[#1A1A1A] mb-4">Connect With Us</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#737520] hover:text-white transition-all duration-300">
                <FaLinkedin />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#737520] hover:text-white transition-all duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#737520] hover:text-white transition-all duration-300">
                <FaFacebook />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#737520] hover:text-white transition-all duration-300">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} DM-ROW Limited. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-[#737520] rounded-full flex items-center justify-center text-white hover:bg-[#5A5D1A] transition-all duration-300 hover:scale-110"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;