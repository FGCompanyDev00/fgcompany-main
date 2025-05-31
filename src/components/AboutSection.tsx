
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
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

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const achievements = [
    { number: "150+", label: "Projects Delivered", icon: "🚀" },
    { number: "100+", label: "Happy Clients", icon: "😊" },
    { number: "5+", label: "Years Experience", icon: "⭐" },
    { number: "24/7", label: "Support Available", icon: "🔧" }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions.",
      icon: "💡"
    },
    {
      title: "Quality",
      description: "Every project undergoes rigorous testing and quality assurance.",
      icon: "✨"
    },
    {
      title: "Partnership",
      description: "We build long-term relationships based on trust and mutual success.",
      icon: "🤝"
    },
    {
      title: "Excellence",
      description: "We strive for perfection in every aspect of our service delivery.",
      icon: "🏆"
    }
  ];

  return (
    <section 
      id="about" 
      className="py-20 bg-white"
      role="region"
      aria-label="About us"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-gradient">FGCompany</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a passionate team of technology experts dedicated to transforming businesses through innovative IT solutions
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Empowering Digital Transformation
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded with a vision to bridge the gap between technology and business success, 
                FGCompany has emerged as a trusted partner for organizations seeking innovative 
                IT solutions.
              </p>
              <p>
                Our multidisciplinary team of developers, designers, and technology strategists 
                brings together years of experience across various industries, enabling us to 
                deliver solutions that not only meet current needs but also scale for future growth.
              </p>
              <p>
                From startups to enterprise-level organizations, we've helped businesses across 
                the globe leverage technology to streamline operations, enhance customer experiences, 
                and drive sustainable growth.
              </p>
            </div>

            <div className="mt-8">
              <button className="bg-gradient-primary text-white px-6 py-3 rounded-lg font-semibold hover-glow transition-all duration-300">
                Learn More About Us
              </button>
            </div>
          </div>

          {/* Right Content - Achievements */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index}
                  className={`text-center p-6 hover:shadow-lg transition-all duration-300 border-0 shadow-md hover-glow animate-scale-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="text-3xl mb-2">{achievement.icon}</div>
                    <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-gray-600">
                      {achievement.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '0.4s'}}>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index}
                className={`text-center p-6 hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover-glow group animate-fade-in-up`}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="text-4xl mb-4 group-hover:animate-float">
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className={`mt-20 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '0.8s'}}>
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Join Our Growing Team
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation and excellence
            </p>
            <button className="bg-accent-purple text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-purple/90 transition-all duration-300 hover-glow">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
