
import { Code2, Sparkles, Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      'Mobile App Development',
      'Web Development',
      'Cloud Infrastructure',
      'DevOps Solutions',
      'Multimedia Design',
      'Data Science & ML'
    ],
    company: [
      'About Us',
      'Our Team',
      'Careers',
      'Portfolio',
      'Case Studies',
      'Blog'
    ],
    legal: [
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'Refund Policy',
      'Support',
      'Documentation'
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', href: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: '🐦', href: '#', color: 'hover:text-blue-400' },
    { name: 'GitHub', icon: '👨‍💻', href: '#', color: 'hover:text-gray-600' },
    { name: 'Facebook', icon: '📘', href: '#', color: 'hover:text-blue-700' }
  ];

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, text: 'fgcompany.developer@gmail.com', href: 'mailto:hello@fgcompany.com' },
    { icon: <Phone className="w-5 h-5" />, text: '+60 10-8027034', href: 'tel:+15551234567' },
    { icon: <MapPin className="w-5 h-5" />, text: 'Kuala Langat, Selangor, Malaysia', href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 bg-accent-neon rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-accent-purple rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Enhanced Company Info */}
          <div className="lg:col-span-2 animate-fade-in-scale">
            <div className="flex items-center mb-6 group">
              <div className="relative">
                <Code2 className="w-10 h-10 text-primary logo-glow mr-3" />
                <Sparkles className="w-5 h-5 text-accent-neon absolute -top-1 -right-1 animate-ping" />
              </div>
              <div className="text-3xl font-bold font-poppins text-gradient">
                FGCompany
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Transforming businesses through innovative IT solutions. 
              We specialize in cutting-edge technology services that drive digital transformation.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center text-gray-300 hover:text-accent-neon transition-colors duration-300 group"
                >
                  <span className="mr-3 group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </span>
                  {contact.text}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${social.color}`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
            <h4 className="text-xl font-semibold mb-6 text-accent-neon">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
            <h4 className="text-xl font-semibold mb-6 text-accent-neon">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="animate-slide-up" style={{animationDelay: '0.6s'}}>
            <h4 className="text-xl font-semibold mb-6 text-accent-neon">Legal & Support</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((item, index) => (
                <li key={index}>
                  <a
                    href={item === 'Privacy Policy' ? '/privacy' : item === 'Terms of Service' ? '/terms' : '#'}
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enhanced Newsletter Signup */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center animate-bounce-in">
            <h4 className="text-2xl font-semibold mb-3 text-gradient">Stay Updated</h4>
            <p className="text-gray-300 mb-6 text-lg">
              Subscribe to our newsletter for the latest updates, insights, and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-primary"
              />
              <Button className="bg-gradient-primary hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 lg:mb-0 text-center lg:text-left">
              © {currentYear} FGCompany Official. All rights reserved. Built with ❤️ for innovation.
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-gray-400">
              <a href="/privacy" className="hover:text-accent-neon transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-accent-neon transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-accent-neon transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;