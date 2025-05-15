
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

const Testimonial = ({ quote, author, role, company }: TestimonialProps) => {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="mb-4 text-brand-500">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i}
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 inline-block fill-current" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M10 15.585l-6.918 4.215 1.846-7.992L.1 7.012l8.027-.679L10 0l1.873 6.333 8.027.679-5.828 4.796 1.846 7.992L10 15.585z" 
                clipRule="evenodd" 
              />
            </svg>
          ))}
        </div>
        
        <blockquote className="mb-4 italic text-muted-foreground">"{quote}"</blockquote>
        
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-brand-400 to-teal-400 flex items-center justify-center text-white font-bold">
            {author.charAt(0)}
          </div>
          <div className="ml-3">
            <div className="font-medium">{author}</div>
            <div className="text-sm text-muted-foreground">{role}, {company}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="gradient-text mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from businesses like yours that have transformed their operations 
            with our AI staffing solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial 
            quote="Call Catch Pro has revolutionized how we handle customer calls. Our response time has improved by 300% and we've never missed an opportunity since implementation."
            author="Michael Johnson"
            role="Operations Manager"
            company="Elite Plumbing Services"
          />
          
          <Testimonial 
            quote="The lead generation service delivered 40+ qualified leads in our first month. The integration with our CRM was seamless and the ROI has been phenomenal."
            author="Sarah Williams"
            role="Marketing Director"
            company="Sunshine HVAC"
          />
          
          <Testimonial 
            quote="Social Media Creator has completely transformed our online presence. Our engagement rate is up 250% and we're getting inbound leads through social for the first time."
            author="David Chen"
            role="CEO"
            company="Reliable Roofing"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
