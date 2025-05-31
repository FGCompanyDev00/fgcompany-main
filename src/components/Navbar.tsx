
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Code2, Sparkles, Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = ['home', 'services', 'about', 'portfolio', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (current) {
        setActiveItem(current.charAt(0).toUpperCase() + current.slice(1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define interface for nav items
  interface NavItem {
    name: string;
    href: string;
  }
  
  const navItems: NavItem[] = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Network Pricing', href: '/network-pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (item: NavItem) => {
    setActiveItem(item.name);
    setIsMobileMenuOpen(false);
    
    // Handle non-anchor links
    if (!item.href.startsWith('#')) return;
    
    // Smooth scroll to section
    const element = document.getElementById(item.href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-blue-100/50 py-2' 
          : 'bg-transparent py-4'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center group cursor-pointer">
            <div className="relative mr-3">
              <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : ''}`}></div>
              <div className={`relative ${isScrolled ? 'bg-white/20' : 'bg-white/10'} backdrop-blur-sm rounded-xl p-2 border border-white/20`}>
                <Code2 className={`w-7 h-7 ${isScrolled ? 'text-blue-600' : 'text-white'} group-hover:text-cyan-300 transition-colors duration-300`} />
                <Sparkles className="w-3 h-3 text-cyan-300 absolute -top-1 -right-1 animate-pulse" />
              </div>
            </div>
            <div className="text-xl md:text-2xl font-bold font-poppins">
              <span className={`${isScrolled ? 'text-blue-600' : 'bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent'}`}>
                FG
              </span>
              <span className={isScrolled ? 'text-cyan-500' : 'text-cyan-300'}>Company</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith('#')) {
                      e.preventDefault();
                      handleNavClick(item);
                    }
                  }}
                  className={`px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg relative group ${
                    activeItem === item.name
                      ? isScrolled 
                        ? 'text-blue-600 bg-blue-50/80' 
                        : 'text-white bg-white/10'
                      : isScrolled 
                        ? 'text-gray-700 hover:text-blue-600' 
                        : 'text-white/90 hover:text-white'
                  }`}
                  aria-label={`Navigate to ${item.name}`}
                  aria-current={activeItem === item.name ? 'page' : undefined}
                >
                  <span className="relative z-10">{item.name}</span>
                  {activeItem !== item.name && (
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
                  )}
                  <div className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 transform -translate-x-1/2 ${
                    activeItem === item.name ? 'w-2/3' : 'w-0 group-hover:w-2/3'
                  }`}></div>
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Button */}
          <div className="hidden md:block">
            <Button 
              className={`relative bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold px-6 py-2.5 rounded-xl ${
                isScrolled ? 'shadow-md hover:shadow-lg' : 'shadow-lg hover:shadow-xl'
              } transition-all duration-300 transform hover:scale-105 border border-white/20`}
              aria-label="Get a quote"
              onClick={() => window.location.href = '/quote'}
            >
              <span className="relative z-10">Get Quote</span>
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>

          {/* Mobile menu button - improved with open/close animation */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled ? 'text-blue-600 bg-white/90 hover:bg-blue-50' : 'text-white bg-white/10 hover:bg-white/20'
              } backdrop-blur-sm border border-white/20`}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation with smooth slide-down animation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-[400px] opacity-100' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`${isScrolled ? 'bg-white/95' : 'bg-gradient-to-b from-blue-900/90 to-blue-800/90'} backdrop-blur-xl rounded-2xl mt-2 shadow-2xl border border-white/20 overflow-hidden`}>
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center justify-between px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                    activeItem === item.name
                      ? isScrolled 
                        ? 'text-blue-600 bg-blue-50/80' 
                        : 'text-white bg-white/20'
                      : isScrolled 
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50' 
                        : 'text-white hover:text-cyan-300 hover:bg-white/10'
                  }`}
                  onClick={(e) => {
                    if (item.href.startsWith('#')) {
                      e.preventDefault();
                      handleNavClick(item);
                    }
                  }}
                >
                  <span>{item.name}</span>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-200 ${
                    activeItem === item.name ? 'opacity-100' : 'opacity-50'
                  }`} />
                </a>
              ))}
              <div className="px-4 py-3">
                <Button 
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold rounded-xl py-5 transition-all duration-300 shadow-md hover:shadow-lg"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.location.href = '/quote';
                  }}
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
