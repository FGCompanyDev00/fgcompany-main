
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      title: "Email Us",
      description: "Send us an email anytime",
      value: "fgcompany.developer@gmail.com",
      icon: "📧",
      action: "mailto:fgcompany.developer@gmail.com"
    },
    {
      title: "Call Us",
      description: "Speak with our team",
      value: "+60 10-8027034",
      icon: "📞",
      action: "tel:+60 10-8027034"
    },
    {
      title: "Our Place",
      description: "Let's meet and discuss more in person",
      value: "Kuala Langat, Selangor, Malaysia",
      icon: "📍",
      action: "#"
    },
    {
      title: "Chat With Us",
      description: "Live chat support",
      value: "Available 24/7",
      icon: "💬",
      action: "#"
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      role="region"
      aria-label="Contact us"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can help transform your ideas into reality
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <Card className="p-8 shadow-xl border-0 hover-glow">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-primary hover:shadow-lg transition-all duration-300 animate-pulse-glow h-11 rounded-md px-8"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Let's Start a Conversation
              </h3>
              
              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index}
                    className={`p-6 hover:shadow-lg transition-all duration-300 border-0 shadow-md hover-glow group animate-fade-in-up`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-0">
                      <a href={info.action} className="block">
                        <div className="flex items-start space-x-4">
                          <div className="text-2xl group-hover:animate-float">
                            {info.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-1">
                              {info.title}
                            </h4>
                            <p className="text-sm text-gray-600 mb-1">
                              {info.description}
                            </p>
                            <p className="text-primary font-medium">
                              {info.value}
                            </p>
                          </div>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
