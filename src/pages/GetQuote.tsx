
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Upload, X, CheckCircle, DollarSign, User, FileText, Image as ImageIcon } from 'lucide-react';
import SecondaryNavbar from '@/components/SecondaryNavbar';
import Footer from '@/components/Footer';

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectTitle: '',
    description: '',
    budget: '',
    duration: '',
    serviceType: '',
    priority: 'medium',
    additionalNotes: ''
  });

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceTypes = [
    'Mobile App Development',
    'Web Development',
    'Cloud Infrastructure',
    'DevOps Solutions',
    'Multimedia Design',
    'Data Science & ML',
    'Networking & Security',
    'Custom Software'
  ];

  const budgetRanges = [
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setUploadedFiles([...uploadedFiles, ...files]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
        <SecondaryNavbar title="Quote Request Submitted" />
        <div className="pt-20 pb-16 flex items-center justify-center min-h-screen">
          <Card className="max-w-md mx-auto p-8 text-center enhanced-card animate-bounce-in">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-enhanced mb-4">Quote Request Submitted!</h2>
            <p className="text-enhanced-light mb-6">
              Thank you for your interest! We'll review your requirements and get back to you within 24 hours.
            </p>
            <Button 
              onClick={() => window.location.href = '/'}
              className="bg-gradient-primary"
            >
              Back to Home
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <SecondaryNavbar title="Get a Quote" />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-enhanced mb-4">
              Get Your <span className="text-gradient">Project Quote</span>
            </h1>
            <p className="text-xl text-enhanced-light max-w-3xl mx-auto">
              Tell us about your project and we'll provide you with a detailed quote within 24 hours
            </p>
          </div>

          {/* Form */}
          <Card className="enhanced-card animate-fade-in-scale">
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-enhanced flex items-center">
                    <User className="w-6 h-6 mr-2 text-primary" />
                    Personal Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-enhanced font-medium">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="border-gray-300 focus:border-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-enhanced font-medium">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="border-gray-300 focus:border-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-enhanced font-medium">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        className="border-gray-300 focus:border-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-enhanced font-medium">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                        className="border-gray-300 focus:border-primary"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Information */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-enhanced flex items-center">
                    <FileText className="w-6 h-6 mr-2 text-primary" />
                    Project Details
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="projectTitle" className="text-enhanced font-medium">Project Title *</Label>
                      <Input
                        id="projectTitle"
                        name="projectTitle"
                        value={formData.projectTitle}
                        onChange={handleInputChange}
                        placeholder="Give your project a descriptive title"
                        required
                        className="border-gray-300 focus:border-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="serviceType" className="text-enhanced font-medium">Service Type *</Label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        required
                        className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">Select a service</option>
                        {serviceTypes.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description" className="text-enhanced font-medium">Project Description *</Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Describe your project in detail. Include features, functionality, target audience, and any specific requirements..."
                        required
                        rows={6}
                        className="border-gray-300 focus:border-primary resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Budget and Timeline */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-enhanced flex items-center">
                    <DollarSign className="w-6 h-6 mr-2 text-primary" />
                    Budget & Timeline
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-enhanced font-medium">Budget Range *</Label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        required
                        className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="duration" className="text-enhanced font-medium">Expected Duration</Label>
                      <Input
                        id="duration"
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        placeholder="e.g., 3 months, 6 weeks"
                        className="border-gray-300 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="priority" className="text-enhanced font-medium">Project Priority</Label>
                    <select
                      id="priority"
                      name="priority"
                      value={formData.priority}
                      onChange={handleInputChange}
                      className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="low">Low - Flexible timeline</option>
                      <option value="medium">Medium - Standard timeline</option>
                      <option value="high">High - Rush delivery needed</option>
                    </select>
                  </div>
                </div>

                {/* File Upload */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-enhanced flex items-center">
                    <ImageIcon className="w-6 h-6 mr-2 text-primary" />
                    Supporting Documents
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-enhanced-light mb-2">Upload wireframes, designs, or reference materials</p>
                      <p className="text-sm text-gray-500 mb-4">Supported formats: PDF, PNG, JPG, DOC, DOCX (Max 10MB each)</p>
                      <input
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        accept=".pdf,.png,.jpg,.jpeg,.doc,.docx"
                        className="hidden"
                        id="file-upload"
                      />
                      <Label htmlFor="file-upload">
                        <Button type="button" className="cursor-pointer border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                          Choose Files
                        </Button>
                      </Label>
                    </div>
                    
                    {uploadedFiles.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-medium text-enhanced">Uploaded Files:</h4>
                        {uploadedFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                            <span className="text-sm text-enhanced">{file.name}</span>
                            <Button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="text-red-500 hover:text-red-700 h-9 rounded-md px-3"
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="additionalNotes" className="text-enhanced font-medium">Additional Notes</Label>
                    <Textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                      placeholder="Any additional requirements, questions, or specific technologies you'd like us to consider..."
                      rows={4}
                      className="border-gray-300 focus:border-primary resize-none"
                    />
                  </div>
                </div>

                {/* Terms Agreement */}
                <div className="space-y-4 pt-6 border-t border-gray-200">
                  <p className="text-sm text-enhanced-light">
                    By submitting this form, you agree to our{' '}
                    <a href="/terms" className="text-primary hover:underline">Terms of Service</a>{' '}
                    and{' '}
                    <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                  </p>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:shadow-lg hover:scale-105 transition-all duration-300 py-4 text-lg font-semibold"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting Quote Request...
                      </>
                    ) : (
                      'Submit Quote Request'
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default GetQuote;
