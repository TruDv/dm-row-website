import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavLink {
  name: string;
  href: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  { name: 'Sustainability', href: '/sustainability' },
  { name: 'Contact', href: '/contact' },
];

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Image Only */}
          <Link to="/" className="flex items-center group">
            <div className="w-44 h-12 overflow-hidden rounded-lg flex-shrink-0">
              <img 
                src="/images/logo.png" 
                alt="DM-ROW Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback if logo doesn't exist
                  e.currentTarget.style.display = 'none';
                  // Show text fallback
                  const parent = e.currentTarget.parentElement;
                  const fallback = document.createElement('div');
                  fallback.className = 'w-10 h-10 bg-[#737520] rounded-lg flex items-center justify-center font-bold text-white text-xl';
                  fallback.textContent = 'DM';
                  parent?.appendChild(fallback);
                }}
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-[#1A1A1A] hover:text-[#737520] transition-colors duration-300 relative group font-medium ${
                  location.pathname === link.href ? 'text-[#737520]' : ''
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#737520] transition-all duration-300 ${
                  location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
            <Link to="/contact">
              <button className="bg-[#737520] text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-[#5A5D1A] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#737520]/25">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#1A1A1A] text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-[#1A1A1A] hover:text-[#737520] transition-colors duration-300 text-lg py-2 border-b border-gray-100 ${
                  location.pathname === link.href ? 'text-[#737520]' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <button className="bg-[#737520] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#5A5D1A] transition-all duration-300 text-center w-full mt-2">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;