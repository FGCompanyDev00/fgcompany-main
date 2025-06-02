

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Network, 
  Wifi, 
  Shield, 
  Camera, 
  Cable, 
  Settings,
  Headphones,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import SecondaryNavbar from '@/components/SecondaryNavbar';
import Footer from '@/components/Footer';

const NetworkPricing = () => {
  const brandPreferences = [
    {
      segment: 'Hotels & Hospitality',
      brands: ['Ruijie/Reyee', 'Aruba (no cloud)', 'TP-Link Omada'],
      icon: '🏨'
    },
    {
      segment: 'Universities & Schools',
      brands: ['Aruba (no cloud)', 'Cisco', 'Ubiquiti'],
      icon: '🎓'
    },
    {
      segment: 'Government',
      brands: ['Huawei', 'Cisco'],
      icon: '🏛️'
    },
    {
      segment: 'SMB Offices',
      brands: ['TP-Link', 'Ubiquiti', 'Ruijie'],
      icon: '🏢'
    },
    {
      segment: 'Data Centers',
      brands: ['Cisco', 'Juniper', 'Extreme Networks'],
      icon: '🖥️'
    }
  ];

  const services = [
    {
      icon: Settings,
      title: 'Switch Configuration',
      scope: 'VLAN, trunking, Layer 3 routing, STP',
      small: 'RM 300 – RM 700',
      medium: 'RM 800 – RM 1,500',
      unit: 'per switch',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Network,
      title: 'Network Design & Planning',
      scope: 'Topology, IP planning, VLAN schema',
      small: 'RM 500 – RM 1,200',
      medium: 'RM 1,300 – RM 2,000',
      unit: '',
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      icon: Wifi,
      title: 'Wi-Fi Setup & Optimization',
      scope: 'AP placement, roaming, SSID configuration',
      small: 'RM 500 – RM 1,400',
      medium: 'RM 1,500 – RM 2,500',
      unit: '',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: Camera,
      title: 'CCTV Network Setup',
      scope: 'IP camera configuration, PoE switch',
      small: 'RM 700 – RM 2,200+',
      medium: 'RM 2,300 – RM 4,000',
      unit: '',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Firewall/Security Setup',
      scope: 'Basic firewall rules, NAT, ACL',
      small: 'RM 700 – RM 2,200',
      medium: 'RM 2,300 – RM 3,500',
      unit: '',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Cable,
      title: 'Structured Cabling',
      scope: 'LAN wiring, patch panel, testing',
      small: 'RM 40 – RM 80',
      medium: 'RM 90 – RM 120',
      unit: 'per point',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Headphones,
      title: 'Ongoing Support Contract',
      scope: 'Monthly retainer for support & maintenance',
      small: 'RM 500 – RM 2,200/month',
      medium: 'RM 2,300 – RM 4,000/month',
      unit: '',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SecondaryNavbar title="Network Pricing" />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 border border-white/20">
              <Network className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Network Infrastructure
              <span className="block text-cyan-300">Pricing & Solutions</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Professional networking solutions with transparent pricing for businesses of all sizes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.location.href = '/quote'}
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl backdrop-blur-sm"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Brand Preferences Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <span className="text-green-600">✅</span> Switch Brand Preference by Segment
              </h2>
              <p className="text-xl text-gray-600">Recommended network equipment based on your industry</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {brandPreferences.map((item, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {item.segment}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-gray-700 mb-3">Popular Brands:</p>
                      {item.brands.map((brand, brandIndex) => (
                        <div key={brandIndex} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{brand}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services & Pricing Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <span className="text-blue-600">💼</span> Core Services & Pricing
              </h2>
              <p className="text-xl text-gray-600">Professional networking services with transparent pricing</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50 overflow-hidden relative">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient}`}></div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start space-x-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                          <strong>Scope:</strong> {service.scope}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Small Setup */}
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700">Small Setup</span>
                        <Badge className="bg-gray-200 text-gray-700">
                          Basic
                        </Badge>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        {service.small}
                        {service.unit && <span className="text-sm font-normal text-gray-600 ml-1">{service.unit}</span>}
                      </div>
                    </div>

                    {/* Medium Setup */}
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-200 relative">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-blue-700">Medium Setup</span>
                        <Badge className="bg-blue-600 hover:bg-blue-700">
                          <Star className="w-3 h-3 mr-1" />
                          Suggested
                        </Badge>
                      </div>
                      <div className="text-2xl font-bold text-blue-900">
                        {service.medium}
                        {service.unit && <span className="text-sm font-normal text-blue-600 ml-1">{service.unit}</span>}
                      </div>
                    </div>

                    <Button 
                      className="w-full mt-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl"
                      onClick={() => window.location.href = '/quote'}
                    >
                      Get Quote for {service.title}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Upgrade Your Network?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a customized quote based on your specific requirements and budget
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.location.href = '/quote'}
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl backdrop-blur-sm"
              >
                Call: +60 10-802 7034
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NetworkPricing;
