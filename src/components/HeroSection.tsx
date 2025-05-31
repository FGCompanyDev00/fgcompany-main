
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, MessageCircle, Calendar, ArrowRight, ExternalLink } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
      style={{
        background: 'linear-gradient(135deg, #0B1426 0%, #1E3A8A 25%, #1E40AF 50%, #0EA5E9 75%, #06B6D4 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientAnimation 15s ease infinite',
      }}
      role="banner"
      aria-label="Hero section"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-cyan-400/10 rounded-full animate-float blur-lg" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-500/10 rounded-full animate-float blur-xl" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-white/5 rounded-full animate-float blur-lg" style={{animationDelay: '1s'}}></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 md:pr-4">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Enhanced Heading with improved typography and spacing */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight tracking-tight">
                <span className="block animate-fade-in-up">Transform Your</span>
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-400 bg-clip-text text-transparent animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  Digital Vision
                </span>
                <span className="block animate-fade-in-up" style={{animationDelay: '0.4s'}}>Into Reality</span>
              </h1>

              {/* Enhanced Subtitle with better visibility and text flow */}
              <p className={`text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '0.6s'}}>
                Leading IT service company specializing in <span className="text-cyan-300 font-semibold">Mobile App & Web Development</span>, 
                <span className="text-cyan-300 font-semibold">Cloud Infrastructure</span>, 
                <span className="text-cyan-300 font-semibold">DevOps</span>, and cutting-edge technology solutions for businesses worldwide.
              </p>

              {/* Enhanced CTA Buttons with better responsiveness and interaction */}
              <div className={`flex flex-col sm:flex-row gap-4 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '0.8s'}}>
                <Link to="/quote">
                  <Button 
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold px-8 py-4 text-base sm:text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/20 w-full sm:w-auto flex items-center justify-center gap-2 group"
                    aria-label="Start your project"
                  >
                    Start Your Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>

              {/* Enhanced Stats with improved visibility and interaction */}
              <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '1s'}}>
                <div className="text-center group p-2 rounded-lg hover:bg-white/5 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">150+</div>
                  <div className="text-sm md:text-base text-white/80 group-hover:text-white transition-colors duration-300">Projects Completed</div>
                </div>
                <div className="text-center group p-2 rounded-lg hover:bg-white/5 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">100+</div>
                  <div className="text-sm md:text-base text-white/80 group-hover:text-white transition-colors duration-300">Happy Clients</div>
                </div>
                <div className="text-center group p-2 rounded-lg hover:bg-white/5 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">5+</div>
                  <div className="text-sm md:text-base text-white/80 group-hover:text-white transition-colors duration-300">Years Experience</div>
                </div>
                <div className="text-center group p-2 rounded-lg hover:bg-white/5 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">24/7</div>
                  <div className="text-sm md:text-base text-white/80 group-hover:text-white transition-colors duration-300">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Immediate Assistance Box */}
          <div className="lg:col-span-5">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{transitionDelay: '1.2s'}}>
              <div className="relative group">
                {/* Improved glowing background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                
                {/* Main card with improved accessibility and interactions */}
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.03]">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl mb-4 shadow-lg">
                      <Phone className="w-8 h-8 text-white animate-pulse" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Need Immediate Assistance?</h3>
                    <p className="text-white/90 text-sm sm:text-base">Get instant support from our expert team</p>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <a href="tel:+60123456789" className="block">
                      <Button className="w-full bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white font-semibold py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-blue-800 focus:outline-none">
                        <Phone className="w-5 h-5 mr-2 animate-bounce" />
                        Call Now: +60 12-345 6789 (Mr. Faiz)
                      </Button>
                    </a>
                    
                    <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer" className="block">
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-blue-800 focus:outline-none">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        WhatsApp Chat
                      </Button>
                    </a>
                    
                    <Link to="/quote" className="block">
                      <Button 
                        className="w-full bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white font-semibold py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-blue-800 focus:outline-none"
                      >
                        <Calendar className="w-5 h-5 mr-2" />
                        Schedule Consultation
                      </Button>
                    </Link>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-white/80 text-sm sm:text-base">
                      <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text font-bold animate-pulse">🔥 Free consultation</span> for new clients!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator with better visibility */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={scrollToServices}
          className="text-white/70 hover:text-white transition-all duration-300 group bg-white/5 hover:bg-white/10 rounded-full p-2 backdrop-blur-sm border border-white/10 hover:border-white/20"
          aria-label="Scroll to services section"
        >
          <div className="flex flex-col items-center group-hover:animate-none">
            <span className="text-sm mb-1 opacity-90 group-hover:opacity-100 transition-opacity font-medium">Scroll Down</span>
            <ChevronDown size={24} className="animate-bounce group-hover:animate-none group-hover:transform group-hover:scale-110 transition-transform duration-300" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
