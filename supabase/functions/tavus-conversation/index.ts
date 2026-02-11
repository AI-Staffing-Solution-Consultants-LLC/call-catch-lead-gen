import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get("TAVUS_API_KEY");
    if (!apiKey) {
      throw new Error("TAVUS_API_KEY not configured");
    }

    const response = await fetch("https://tavusapi.com/v2/conversations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify({
        replica_id: "r9fa0878977a",
        conversation_name: "ChatWidget",
        persona_id: "p98e7ed5b329",
        custom_greeting:
          "Hello, Thank you for visiting AI Staffing Solution Consultants",
        conversational_context:
          "You are the customer service greeter that answers questions and qualifies leads",
        properties: {
          participant_left_timeout: 0,
          language: "english",
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(JSON.stringify(data));
    }

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
