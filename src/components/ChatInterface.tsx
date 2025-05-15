
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send } from "lucide-react";

// Example product options for the AI to suggest
const productOptions = [
  {
    id: 'call-catch',
    name: 'Call Catch Pro',
    description: 'AI receptionist and call management system'
  },
  {
    id: 'lead-gen',
    name: 'Lead Generation Service',
    description: 'Targeted lead generation for home service professionals'
  },
  {
    id: 'social-media',
    name: 'Social Media Creator',
    description: 'AI-powered content creation and social media management'
  },
  {
    id: 'office-automation',
    name: 'Smart Office Automation',
    description: 'Productivity automation for Microsoft systems'
  }
];

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  options?: { id: string; text: string }[];
};

const ChatInterface = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "👋 Hi there! I'm your AI assistant. How can I help you today?",
      sender: 'ai',
      options: [
        { id: 'learn-more', text: 'Tell me about your services' },
        { id: 'call-catch', text: 'I need a phone solution' },
        { id: 'lead-gen', text: 'I want more leads' },
        { id: 'pricing', text: 'What are your pricing options?' }
      ]
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isAiTyping, setIsAiTyping] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateAiResponse = (userMessage: string, optionId?: string) => {
    setIsAiTyping(true);
    
    // Simulate AI thinking time
    setTimeout(() => {
      let response = '';
      let options: { id: string; text: string }[] = [];
      
      // Handle different user selections
      if (optionId === 'learn-more') {
        response = "We offer several AI-powered business solutions. Our flagship products include:";
        options = productOptions.map(product => ({
          id: product.id,
          text: `Tell me about ${product.name}`
        }));
      } 
      else if (optionId === 'call-catch' || userMessage.toLowerCase().includes('call') || userMessage.toLowerCase().includes('phone')) {
        response = "Call Catch Pro is our advanced AI receptionist system that handles calls 24/7, schedules appointments, and integrates with your CRM. Would you like to learn about pricing or see a demo?";
        options = [
          { id: 'call-catch-pricing', text: 'Pricing options' },
          { id: 'call-catch-demo', text: 'See a demo' },
          { id: 'lead-gen', text: 'How does it generate leads?' },
        ];
      } 
      else if (optionId === 'lead-gen' || userMessage.toLowerCase().includes('lead') || userMessage.toLowerCase().includes('customer')) {
        response = "Our Lead Generation Service uses advanced targeting to find potential customers for home service professionals. We combine digital marketing with our AI call system to capture and qualify leads. Would you like to know more?";
        options = [
          { id: 'lead-gen-pricing', text: 'What\'s the cost?' },
          { id: 'lead-gen-how', text: 'How does it work?' },
          { id: 'lead-gen-results', text: 'Expected results' },
        ];
      }
      else if (optionId === 'pricing' || userMessage.toLowerCase().includes('price') || userMessage.toLowerCase().includes('cost')) {
        response = "We offer flexible pricing plans based on your business needs. Would you like to see pricing for a specific product?";
        options = productOptions.map(product => ({
          id: `${product.id}-pricing`,
          text: `${product.name} pricing`
        }));
      }
      else {
        response = "I'd be happy to help you with that. What specific information are you looking for about our AI staffing solutions?";
        options = [
          { id: 'learn-more', text: 'Tell me about your services' },
          { id: 'call-catch', text: 'I need a phone solution' },
          { id: 'lead-gen', text: 'I want more leads' },
          { id: 'schedule-demo', text: 'Schedule a demo' },
        ];
      }

      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          text: response,
          sender: 'ai',
          options: options
        }
      ]);
      
      setIsAiTyping(false);
    }, 1000);
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;
    
    const newMessage = {
      id: Date.now().toString(),
      text: input,
      sender: 'user' as const
    };
    
    setMessages(prev => [...prev, newMessage]);
    setInput('');
    
    simulateAiResponse(input);
  };

  const handleOptionClick = (optionId: string, optionText: string) => {
    const newMessage = {
      id: Date.now().toString(),
      text: optionText,
      sender: 'user' as const
    };
    
    setMessages(prev => [...prev, newMessage]);
    simulateAiResponse(optionText, optionId);
  };

  return (
    <Card className="flex flex-col h-[500px] max-h-[75vh] w-full max-w-lg bg-white shadow-lg rounded-xl overflow-hidden border border-border/50">
      <div className="p-4 border-b bg-gradient-to-r from-brand-500 to-teal-500">
        <h3 className="text-white text-lg font-medium">AI Assistant</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(message => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} chat-bubble-animate-in`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                message.sender === 'user'
                  ? 'bg-brand-500 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              
              {message.options && message.options.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {message.options.map(option => (
                    <button
                      key={option.id}
                      onClick={() => handleOptionClick(option.id, option.text)}
                      className="text-xs bg-white text-brand-700 px-3 py-1 rounded-full border border-brand-200 hover:bg-brand-50 transition-colors"
                    >
                      {option.text}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        
        {isAiTyping && (
          <div className="flex justify-start chat-bubble-animate-in">
            <div className="max-w-[80%] rounded-2xl px-4 py-2 bg-gray-100 text-gray-800">
              <div className="flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex gap-2"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button type="submit" size="icon" className="bg-brand-500 hover:bg-brand-600">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default ChatInterface;
