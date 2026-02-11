
import React from 'react';
import Header from '@/components/Header';
import TavusVideoWidget from '@/components/TavusVideoWidget';
import ProductHighlight from '@/components/ProductHighlight';
import SolutionsGrid from '@/components/SolutionsGrid';
import TestimonialSection from '@/components/TestimonialSection';
import SocialMediaSection from '@/components/SocialMediaSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-16 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-transparent z-0"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-teal-500/10 rounded-full filter blur-3xl z-0"></div>
        <div className="absolute bottom-0 left-20 w-64 h-64 bg-brand-500/10 rounded-full filter blur-2xl z-0"></div>
        
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="mb-6">
                <span className="block">AI-Powered</span>
                <span className="gradient-text">Business Solutions</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                Transform your business with AI receptionists, lead generation, and 
                productivity tools designed to save time and grow revenue.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {user ? (
                  <>
                    <Button className="bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600 text-white h-12 px-8">
                      Access Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="h-12 px-8">
                      View Services
                    </Button>
                  </>
                ) : (
                  <>
                    <Button 
                      className="bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600 text-white h-12 px-8"
                      onClick={() => navigate('/auth')}
                    >
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="h-12 px-8">
                      View Demo
                    </Button>
                  </>
                )}
              </div>
              
              {user && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">
                    Welcome back, {user.user_metadata?.first_name || user.email}! 
                    You're now signed in and can access all our AI-powered features.
                  </p>
                </div>
              )}
              
              <div className="mt-8 flex items-center justify-center lg:justify-start space-x-4">
                <div className="flex -space-x-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-10 w-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
                      <span className="text-xs font-semibold">{String.fromCharCode(65 + i)}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 text-yellow-400" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">4.9/5</span> from 200+ reviews
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="animate-float">
                <TavusVideoWidget />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="gradient-text mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our AI solutions seamlessly integrate into your business workflow 
              to automate tasks and improve customer interactions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'Connect Your Systems',
                description: 'Integrate our AI tools with your existing CRM, phone system, and business software.'
              },
              {
                number: '02',
                title: 'Customize & Train',
                description: 'Customize responses, business rules, and train AI on your specific business needs.'
              },
              {
                number: '03',
                title: 'Scale & Optimize',
                description: 'Monitor performance, gather insights, and optimize based on real business outcomes.'
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="p-6 bg-white rounded-lg border border-border/60 h-full">
                  <div className="text-4xl font-bold text-brand-500/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-300" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button 
              className="bg-brand-500 hover:bg-brand-600"
              onClick={() => user ? undefined : navigate('/auth')}
            >
              {user ? 'Access Your Dashboard' : 'Schedule a Demo'} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* New Solutions Grid Section */}
      <SolutionsGrid />
      
      {/* Product Showcase */}
      <ProductHighlight />
      
      {/* Testimonials */}
      <TestimonialSection />
      
      {/* Social Media Section */}
      <SocialMediaSection />
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-500 to-teal-500 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to transform your business with AI?</h2>
            <p className="text-lg opacity-90 mb-8">
              Join hundreds of businesses saving time, improving customer satisfaction, 
              and growing revenue with our AI staffing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="default" 
                className="bg-white text-brand-600 hover:bg-gray-100"
                onClick={() => user ? undefined : navigate('/auth')}
              >
                {user ? 'Access Dashboard' : 'Get Started Today'}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
