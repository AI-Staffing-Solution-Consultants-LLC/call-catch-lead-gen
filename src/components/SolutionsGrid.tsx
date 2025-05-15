
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Define the type for our service items
type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'featured' | 'standard';
};

// Service data
const services: ServiceItem[] = [
  {
    id: 'ai-sales',
    title: 'AI Sales Agents',
    description: 'Intelligent virtual agents that qualify leads, follow up consistently, and close more deals without human intervention.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M19 5h-7L8 2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
        <path d="M9 10h6" />
        <path d="M9 14h6" />
      </svg>
    ),
    category: 'featured',
  },
  {
    id: 'workflow',
    title: 'Workflow Automation',
    description: 'Streamline your business processes with custom automation solutions that eliminate repetitive tasks and reduce errors.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="m8 6 4-4 4 4" />
        <path d="M12 2v10.3" />
        <path d="m19 12-3 2-2-2-2 4-2-2-3 2" />
        <rect width="18" height="8" x="3" y="14" rx="2" />
      </svg>
    ),
    category: 'featured',
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    description: 'AI-powered content creation, scheduling, and analytics to maintain a consistent and engaging social presence.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M18 16.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
        <path d="m18 7-8 5-8-5" />
        <path d="M10 19.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
        <path d="M2 16.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
        <path d="M18 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
        <path d="M2 7.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
        <path d="M10 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      </svg>
    ),
    category: 'featured',
  },
  {
    id: 'ai-receptionist',
    title: 'AI Receptionist',
    description: 'Virtual receptionists that handle calls, schedule appointments, and qualify leads 24/7 without human intervention.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    category: 'standard',
  },
  {
    id: 'lead-gen',
    title: 'Lead Generation',
    description: 'Targeted lead acquisition strategies designed specifically for service professionals and businesses.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    category: 'standard',
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    description: 'AI-powered content generation for blogs, social media, and marketing materials tailored to your brand voice.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="m3 15 5.12 5.13a3 3 0 0 0 4.24 0l2.12-2.12a3 3 0 0 1 4.24 0L20 19" />
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
      </svg>
    ),
    category: 'standard',
  },
];

const SolutionsGrid = () => {
  // Animation variants for staggered card appearances
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <section id="solutions" className="py-16 bg-gradient-to-br from-background to-background/80">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="gradient-text mb-4">Our AI Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how our AI-powered services can transform your business operations,
            boost productivity, and drive revenue growth.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Card className="h-full overflow-hidden group hover:shadow-lg transition-shadow duration-300 border-border/60 hover:border-brand-300/80">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-5">
                    <div className={`p-3 rounded-lg w-fit mb-4 ${
                      service.category === 'featured' 
                        ? 'bg-gradient-to-br from-brand-500/20 to-teal-500/20' 
                        : 'bg-gradient-to-br from-gray-200/80 to-gray-100/80'
                    }`}>
                      <div className={`w-6 h-6 ${
                        service.category === 'featured' ? 'text-brand-500' : 'text-gray-600'
                      }`}>
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-500 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm flex-grow mb-6">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <Button 
                      variant="ghost" 
                      className="px-0 hover:bg-transparent hover:text-brand-500 group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsGrid;
