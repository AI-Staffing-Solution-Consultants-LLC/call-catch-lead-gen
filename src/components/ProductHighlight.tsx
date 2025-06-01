import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Phone, Share2, Monitor } from "lucide-react";
type ProductCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  isPrimary?: boolean;
};
const ProductCard = ({
  icon,
  title,
  description,
  features,
  isPrimary = false
}: ProductCardProps) => {
  return <Card className={`h-full flex flex-col ${isPrimary ? 'border-brand-500/50 shadow-lg shadow-brand-500/10' : ''}`}>
      <CardContent className="pt-6 flex-1 flex flex-col">
        <div className={`p-3 rounded-lg w-fit ${isPrimary ? 'bg-brand-500' : 'bg-gray-100'}`}>
          <div className={`w-6 h-6 ${isPrimary ? 'text-white' : 'text-brand-500'}`}>{icon}</div>
        </div>
        
        <h3 className={`mt-4 text-xl font-bold ${isPrimary ? 'text-brand-500' : ''}`}>{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
        
        <ul className="mt-4 space-y-2 flex-1">
          {features.map((feature, index) => <li key={index} className="flex items-start">
              <div className="mr-2 mt-1 h-1 w-1 rounded-full bg-brand-500" />
              <span className="text-sm">{feature}</span>
            </li>)}
        </ul>
        
        <Button variant={isPrimary ? "default" : "outline"} className={`mt-6 w-full ${isPrimary ? 'bg-brand-500 hover:bg-brand-600' : ''}`}>
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>;
};
const ProductHighlight = () => {
  return <section id="products" className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="gradient-text mb-4">Our AI Staffing Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powerful AI tools designed to automate repetitive tasks, enhance customer 
            interactions, and boost your team's productivity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard icon={<Phone />} title="Call Catch Pro" description="AI receptionist and switchboard that never sleeps" features={["24/7 call answering", "Appointment scheduling", "Natural conversations", "CRM integration"]} isPrimary />
          
          <ProductCard icon={<MessageCircle />} title="Lead Generation" description="Targeted leads for home service professionals" features={["Qualified prospect targeting", "Automated follow-ups", "Performance analytics", "ROI tracking"]} isPrimary />
          
          <ProductCard icon={<Share2 />} title="Social Media Creator" description="AI-powered content creation and management" features={["Content generation", "Posting automation", "Engagement tracking", "Trend analysis"]} />
          
          <ProductCard icon={<Monitor />} title="Smart Office" description="Productivity automation for Microsoft systems" features={["Document processing", "Email management", "Meeting summaries", "Task automation"]} />
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-brand-500/10 to-teal-500/10 rounded-2xl p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-2/3">
              <h3 className="text-2xl font-bold mb-4">Call Catch Pro + Lead Generation Bundle</h3>
              <p className="text-muted-foreground mb-6">
                Our flagship solution combines intelligent call handling with proactive lead generation
                to create a complete customer acquisition and retention system.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["AI-powered call answering 24/7", "Never miss a business opportunity", "Targeted lead generation campaigns", "Seamless CRM integration", "Call analytics and insights", "ROI and conversion tracking"].map((feature, index) => <li key={index} className="flex items-center">
                    <div className="h-5 w-5 mr-2 rounded-full bg-brand-500/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-brand-500" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>)}
              </ul>
            </div>
            <div className="lg:w-1/3">
              <Button className="w-full bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600 text-white h-12">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-3">Starting at $199/month With ANY Qualified Lead-Gen Package</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProductHighlight;