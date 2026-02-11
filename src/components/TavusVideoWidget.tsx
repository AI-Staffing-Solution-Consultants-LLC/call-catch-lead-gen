import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Video, Loader2, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const TavusVideoWidget = () => {
  const [conversationUrl, setConversationUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startConversation = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: fnError } = await supabase.functions.invoke('tavus-conversation');
      if (fnError) throw fnError;
      if (data?.conversation_url) {
        setConversationUrl(data.conversation_url);
      } else {
        throw new Error('No conversation URL returned');
      }
    } catch (err: any) {
      console.error('Tavus error:', err);
      setError('Failed to start conversation. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  const endConversation = () => {
    setConversationUrl(null);
  };

  if (conversationUrl) {
    return (
      <Card className="relative w-full max-w-lg h-[500px] max-h-[75vh] overflow-hidden rounded-xl border border-border/50 shadow-lg">
        <button
          onClick={endConversation}
          className="absolute top-3 right-3 z-10 rounded-full bg-background/80 p-1.5 backdrop-blur-sm hover:bg-background transition-colors"
        >
          <X className="h-4 w-4 text-foreground" />
        </button>
        <iframe
          src={conversationUrl}
          className="w-full h-full border-0"
          allow="camera; microphone; autoplay"
          allowFullScreen
        />
      </Card>
    );
  }

  return (
    <Card className="flex flex-col items-center justify-center h-[500px] max-h-[75vh] w-full max-w-lg bg-card shadow-lg rounded-xl overflow-hidden border border-border/50 p-8 text-center">
      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
        <Video className="h-10 w-10 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-card-foreground mb-2">
        Talk to Our AI Assistant
      </h3>
      <p className="text-muted-foreground mb-8 max-w-xs">
        Start a live video conversation with our AI representative to learn about our services.
      </p>
      {error && (
        <p className="text-destructive text-sm mb-4">{error}</p>
      )}
      <Button
        onClick={startConversation}
        disabled={loading}
        className="bg-gradient-to-r from-primary to-teal-500 hover:opacity-90 text-primary-foreground h-12 px-8"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Connecting...
          </>
        ) : (
          <>
            <Video className="mr-2 h-4 w-4" />
            Start Video Chat
          </>
        )}
      </Button>
    </Card>
  );
};

export default TavusVideoWidget;
