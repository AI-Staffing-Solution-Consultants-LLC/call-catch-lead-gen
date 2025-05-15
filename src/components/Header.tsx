
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-brand-500 to-teal-500">
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs">AI</div>
          </div>
          <span className="text-lg font-bold">AI Staffing Solutions</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#products" className="text-sm font-medium hover:text-brand-500 transition-colors">Products</a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-brand-500 transition-colors">How It Works</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-brand-500 transition-colors">Testimonials</a>
          <a href="#contact" className="text-sm font-medium hover:text-brand-500 transition-colors">Contact</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:flex">
            Login
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-brand-500 to-teal-500 hover:from-brand-600 hover:to-teal-600">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
