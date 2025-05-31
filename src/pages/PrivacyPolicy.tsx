

import { Card } from '@/components/ui/card';
import { Shield, Lock, Eye, UserCheck, FileText, Clock } from 'lucide-react';
import SecondaryNavbar from '@/components/SecondaryNavbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Information We Collect",
      content: [
        "Personal information (name, email, phone number) when you contact us or request services",
        "Project details and requirements you provide in quote requests",
        "Technical information about how you use our website (cookies, IP address, browser type)",
        "Communication records when you interact with our support team"
      ]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: [
        "To provide and improve our IT services",
        "To communicate with you about your projects and requests",
        "To send important updates about our services",
        "To analyze website usage and improve user experience",
        "To comply with legal obligations"
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Protection & Security",
      content: [
        "We use industry-standard encryption to protect your data",
        "Access to personal information is restricted to authorized personnel only",
        "Regular security audits and updates to our systems",
        "Secure data storage with backup and recovery procedures",
        "Compliance with GDPR and other applicable privacy regulations"
      ]
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Your Rights",
      content: [
        "Access: Request a copy of the personal data we hold about you",
        "Correction: Request correction of inaccurate or incomplete data",
        "Deletion: Request deletion of your personal data",
        "Portability: Request transfer of your data to another service provider",
        "Objection: Object to processing of your personal data"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <SecondaryNavbar title="Privacy Policy" />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-enhanced">
                Privacy <span className="text-gradient">Policy</span>
              </h1>
            </div>
            <p className="text-xl text-enhanced-light max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <div className="flex items-center justify-center mt-4 text-enhanced-light">
              <Clock className="w-5 h-5 mr-2" />
              <span>Last updated: January 2024</span>
            </div>
          </div>

          {/* Introduction */}
          <Card className="enhanced-card mb-8 animate-fade-in-scale">
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-enhanced mb-4">Introduction</h2>
              <p className="text-enhanced-light leading-relaxed">
                FGCompany Official ("we", "our", or "us") is committed to protecting your privacy and ensuring 
                the security of your personal information. This Privacy Policy describes how we collect, use, 
                disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>
          </Card>

          {/* Main Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <Card key={index} className="enhanced-card animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-primary mr-3">
                      {section.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-enhanced">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-enhanced-light">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card className="enhanced-card animate-fade-in-scale" style={{animationDelay: '0.5s'}}>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-enhanced mb-4">Third-Party Services</h3>
                <p className="text-enhanced-light mb-4">
                  We may use third-party services for analytics, payment processing, and communication. 
                  These services have their own privacy policies.
                </p>
                <ul className="text-sm text-enhanced-light space-y-1">
                  <li>• Google Analytics (website analytics)</li>
                  <li>• Stripe (payment processing)</li>
                  <li>• AWS (data hosting)</li>
                </ul>
              </div>
            </Card>

            <Card className="enhanced-card animate-fade-in-scale" style={{animationDelay: '0.6s'}}>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-enhanced mb-4">Data Retention</h3>
                <p className="text-enhanced-light mb-4">
                  We retain your personal information only as long as necessary for the purposes outlined in this policy.
                </p>
                <ul className="text-sm text-enhanced-light space-y-1">
                  <li>• Project data: Duration of project + 3 years</li>
                  <li>• Communication records: 5 years</li>
                  <li>• Website analytics: 26 months</li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Contact Information */}
          <Card className="enhanced-card mt-8 animate-bounce-in">
            <div className="p-8 text-center">
              <h3 className="text-2xl font-semibold text-enhanced mb-4">Questions About This Policy?</h3>
              <p className="text-enhanced-light mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-enhanced-light">
                <p>Email: privacy@fgcompany.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: Tech Hub, Silicon Valley</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
