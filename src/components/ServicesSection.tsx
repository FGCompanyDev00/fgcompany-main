
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications with cutting-edge features and seamless user experience.",
      icon: "📱",
      features: ["iOS & Android", "React Native", "Flutter", "UI/UX Design"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Web System Development",
      description: "Full-stack web applications built with modern frameworks and scalable architecture.",
      icon: "💻",
      features: ["React/Next.js", "Node.js", "Python", "Database Design"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Cloud Infrastructure & DevOps",
      description: "Scalable cloud solutions and automated deployment pipelines for optimal performance.",
      icon: "☁️",
      features: ["AWS/Azure", "Docker", "Kubernetes", "CI/CD"],
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Multimedia Design",
      description: "Creative design solutions including branding, graphics, and interactive media.",
      icon: "🎨",
      features: ["Brand Identity", "Web Design", "Video Production", "Animation"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Networking & Security",
      description: "Robust network infrastructure and cybersecurity solutions to protect your business.",
      icon: "🔒",
      features: ["Network Setup", "Security Audit", "Firewall Config", "Monitoring"],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Data Science & ML",
      description: "Advanced analytics and machine learning solutions to drive business intelligence.",
      icon: "📊",
      features: ["Data Analysis", "ML Models", "Predictive Analytics", "AI Solutions"],
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section 
      id="services" 
      className="py-20 bg-gray-50"
      role="region"
      aria-label="Our services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions tailored to transform your business and accelerate your digital journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`card-flip transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="card-flip-inner h-80">
                {/* Front of Card */}
                <Card className="card-flip-front h-full bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardContent className="p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center text-2xl mb-4 animate-float`}>
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="text-primary text-sm font-medium hover:text-primary-dark transition-colors">
                      Hover to see features →
                    </div>
                  </CardContent>
                </Card>

                {/* Back of Card */}
                <Card className="card-flip-back h-full bg-gradient-to-br from-primary to-primary-dark text-white">
                  <CardContent className="p-8 h-full flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-6 text-center">
                      Key Features
                    </h3>
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-accent-neon rounded-full mr-3"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 text-center">
                      <button className="bg-accent-neon text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-accent-neon/90 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '0.6s'}}>
          <div className="bg-gradient-primary p-8 rounded-2xl text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg mb-6 text-white/90">
              Let's discuss your project and create something amazing together
            </p>
            <button className="bg-accent-neon text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-accent-neon/90 transition-all duration-300 hover-glow">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
