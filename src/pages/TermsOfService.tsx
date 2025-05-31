

import { Card } from '@/components/ui/card';
import { Scale, FileText, AlertCircle, CheckCircle, XCircle, Clock } from 'lucide-react';
import SecondaryNavbar from '@/components/SecondaryNavbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  const sections = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Services Provided",
      content: [
        "Mobile application development for iOS and Android platforms",
        "Web development including frontend and backend solutions",
        "Cloud infrastructure setup and management",
        "DevOps services including CI/CD pipeline setup",
        "Multimedia design and branding services",
        "Data science and machine learning solutions",
        "Consulting and technical support services"
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Project Terms & Deliverables",
      content: [
        "All project specifications will be documented in a Statement of Work (SOW)",
        "Changes to project scope may result in additional charges",
        "Timeline estimates are provided in good faith but may vary based on project complexity",
        "Source code and intellectual property rights will be transferred upon full payment",
        "We provide a 30-day warranty on delivered software for bug fixes",
        "Client must provide necessary access, resources, and feedback for project completion"
      ]
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Payment Terms",
      content: [
        "50% deposit required before project commencement",
        "Remaining balance due upon project completion",
        "Payment terms: Net 15 days from invoice date",
        "Late payments may incur a 1.5% monthly service charge",
        "All prices are in USD unless otherwise specified",
        "Refunds available only as specified in individual project agreements"
      ]
    },
    {
      icon: <XCircle className="w-6 h-6" />,
      title: "Limitations & Warranties",
      content: [
        "Services are provided 'as is' without warranties beyond those specified",
        "We are not liable for indirect, incidental, or consequential damages",
        "Our liability is limited to the amount paid for the specific service",
        "Client is responsible for data backup and security of their own systems",
        "We do not guarantee specific performance metrics unless explicitly agreed",
        "Force majeure events may affect service delivery timelines"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <SecondaryNavbar title="Terms of Service" />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="flex items-center justify-center mb-4">
              <Scale className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-enhanced">
                Terms of <span className="text-gradient">Service</span>
              </h1>
            </div>
            <p className="text-xl text-enhanced-light max-w-3xl mx-auto">
              These terms govern your use of our services and establish a clear understanding of our mutual responsibilities.
            </p>
            <div className="flex items-center justify-center mt-4 text-enhanced-light">
              <Clock className="w-5 h-5 mr-2" />
              <span>Last updated: January 2024</span>
            </div>
          </div>

          {/* Introduction */}
          <Card className="enhanced-card mb-8 animate-fade-in-scale">
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-enhanced mb-4">Agreement Overview</h2>
              <p className="text-enhanced-light leading-relaxed mb-4">
                By engaging FGCompany Official for IT services, you agree to be bound by these Terms of Service. 
                These terms apply to all services provided, including but not limited to software development, 
                consulting, and technical support.
              </p>
              <p className="text-enhanced-light leading-relaxed">
                Please read these terms carefully before proceeding with any service engagement. If you do not 
                agree with any part of these terms, please do not use our services.
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

          {/* Additional Important Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card className="enhanced-card animate-fade-in-scale" style={{animationDelay: '0.5s'}}>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-enhanced mb-4">Intellectual Property</h3>
                <p className="text-enhanced-light mb-4">
                  Unless otherwise specified in writing:
                </p>
                <ul className="text-sm text-enhanced-light space-y-2">
                  <li>• Client owns all custom code developed specifically for their project</li>
                  <li>• We retain rights to general methodologies and frameworks</li>
                  <li>• Third-party libraries remain under their respective licenses</li>
                  <li>• We may use anonymized project case studies for marketing</li>
                </ul>
              </div>
            </Card>

            <Card className="enhanced-card animate-fade-in-scale" style={{animationDelay: '0.6s'}}>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-enhanced mb-4">Confidentiality</h3>
                <p className="text-enhanced-light mb-4">
                  We maintain strict confidentiality regarding:
                </p>
                <ul className="text-sm text-enhanced-light space-y-2">
                  <li>• All client business information and data</li>
                  <li>• Project specifications and requirements</li>
                  <li>• Proprietary algorithms and business logic</li>
                  <li>• Financial and operational details</li>
                </ul>
              </div>
            </Card>

            <Card className="enhanced-card animate-fade-in-scale" style={{animationDelay: '0.7s'}}>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-enhanced mb-4">Termination</h3>
                <p className="text-enhanced-light mb-4">
                  Either party may terminate services with:
                </p>
                <ul className="text-sm text-enhanced-light space-y-2">
                  <li>• 30 days written notice for ongoing contracts</li>
                  <li>• Immediate termination for breach of contract</li>
                  <li>• Payment for work completed up to termination date</li>
                  <li>• Return of confidential materials within 15 days</li>
                </ul>
              </div>
            </Card>

            <Card className="enhanced-card animate-fade-in-scale" style={{animationDelay: '0.8s'}}>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-enhanced mb-4">Dispute Resolution</h3>
                <p className="text-enhanced-light mb-4">
                  In case of disputes:
                </p>
                <ul className="text-sm text-enhanced-light space-y-2">
                  <li>• First attempt resolution through direct negotiation</li>
                  <li>• Mediation if negotiation fails</li>
                  <li>• Binding arbitration as final resort</li>
                  <li>• Jurisdiction: Silicon Valley, California</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
