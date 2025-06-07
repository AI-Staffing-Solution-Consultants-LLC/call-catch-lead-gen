
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, ExternalLink } from "lucide-react";

const SocialMediaSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="gradient-text mb-4">Follow Our Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay connected with us on social media for the latest updates, 
            AI insights, and success stories from our community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Facebook Feed */}
          <Card className="h-full">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Facebook className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Facebook Updates</h3>
                    <p className="text-muted-foreground text-sm">Latest posts and news</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://facebook.com/aistaffingsolutions" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Follow
                  </a>
                </Button>
              </div>
              
              <div className="relative">
                <iframe 
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61570458237044&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="100%" 
                  height="500" 
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no" 
                  frameBorder="0" 
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  className="rounded-lg"
                ></iframe>
              </div>
            </CardContent>
          </Card>
          
          {/* Instagram Feed */}
          <Card className="h-full">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
                    <Instagram className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Instagram Feed</h3>
                    <p className="text-muted-foreground text-sm">Visual stories and updates</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://instagram.com/aistaffingsolutions" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Follow
                  </a>
                </Button>
              </div>
              
              <div className="relative">
                {/* Instagram embed placeholder - you'll need to replace with actual Instagram feed */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 text-center min-h-[500px] flex flex-col justify-center">
                  <Instagram className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Instagram Feed</h4>
                  <p className="text-muted-foreground mb-4">
                    Connect your Instagram account to display your latest posts here.
                  </p>
                  <Button variant="outline" asChild className="mx-auto">
                    <a href="https://instagram.com/aistaffingsolutions" target="_blank" rel="noopener noreferrer">
                      View on Instagram
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <div className="flex justify-center space-x-6">
            <Button variant="outline" size="lg" asChild>
              <a href="https://facebook.com/aistaffingsolutions" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 mr-2" />
                Follow on Facebook
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://instagram.com/aistaffingsolutions" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 mr-2" />
                Follow on Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
