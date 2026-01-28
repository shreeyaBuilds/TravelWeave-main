import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface TripInput {
  country: string;
  locations: string[];
  startDate: string;
  endDate: string;
  budget: string;
  travelStyle: string;
}

interface ItineraryDay {
  dayNumber: number;
  date: string;
  morning: string;
  afternoon: string;
  evening: string;
  foodSuggestion: string;
  travelTip: string;
}

function calculateDays(startDate: string, endDate: string): number {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = end.getTime() - start.getTime();
  return Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1);
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const tripInput: TripInput = await req.json();

    const openaiApiKey = Deno.env.get("OPENAI_API_KEY");
    if (!openaiApiKey) {
      throw new Error("OpenAI API key not configured");
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const daysCount = calculateDays(tripInput.startDate, tripInput.endDate);
    const limitedDays = Math.min(daysCount, 7);

    const locationText = tripInput.locations && tripInput.locations.length > 0
      ? tripInput.locations.join(", ")
      : tripInput.country;

    const prompt = `You are a professional travel planner. Create a detailed ${limitedDays}-day itinerary for a trip to ${locationText}.

Trip Details:
- Destination: ${locationText}
- Duration: ${limitedDays} days
- Budget: ${tripInput.budget}
- Travel Style: ${tripInput.travelStyle}
- Start Date: ${tripInput.startDate}

For each day, provide:
1. Morning activity (9:00 AM) - A specific attraction, experience, or activity
2. Afternoon activity (2:00 PM) - Another attraction or experience
3. Evening activity (7:00 PM) - Dinner location, nightlife, or evening experience
4. Food suggestion - A specific local dish or restaurant to try that day
5. Travel tip - One practical tip for that day (transportation, timing, cultural etiquette, etc.)

Be specific with actual place names, restaurants, and attractions. Make it realistic and practical.

IMPORTANT: Respond ONLY with valid JSON in this exact format, no other text:
{
  "days": [
    {
      "dayNumber": 1,
      "morning": "specific morning activity",
      "afternoon": "specific afternoon activity",
      "evening": "specific evening activity",
      "foodSuggestion": "specific local food recommendation",
      "travelTip": "practical tip for the day"
    }
  ]
}`;

    const openaiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${openaiApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are a professional travel planner. Always respond with valid JSON only, no markdown or extra text.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.8,
        max_tokens: 2000,
      }),
    });

    if (!openaiResponse.ok) {
      const errorData = await openaiResponse.text();
      throw new Error(`OpenAI API error: ${errorData}`);
    }

    const openaiData = await openaiResponse.json();
    const content = openaiData.choices[0].message.content.trim();

    const cleanedContent = content.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    const aiResponse = JSON.parse(cleanedContent);

    const itineraryDays: ItineraryDay[] = aiResponse.days.map((day: any, index: number) => {
      const currentDate = new Date(tripInput.startDate);
      currentDate.setDate(currentDate.getDate() + index);

      return {
        dayNumber: index + 1,
        date: formatDate(currentDate.toISOString()),
        morning: day.morning,
        afternoon: day.afternoon,
        evening: day.evening,
        foodSuggestion: day.foodSuggestion,
        travelTip: day.travelTip,
      };
    });

    const shareId = crypto.randomUUID();

    const { data: savedItinerary, error: saveError } = await supabase
      .from("itineraries")
      .insert({
        share_id: shareId,
        country: tripInput.country,
        locations: tripInput.locations || [],
        start_date: tripInput.startDate,
        end_date: tripInput.endDate,
        budget: tripInput.budget,
        travel_style: tripInput.travelStyle,
        days: itineraryDays,
      })
      .select()
      .single();

    if (saveError) {
      console.error("Error saving itinerary:", saveError);
      throw saveError;
    }

    const response = {
      tripInput,
      days: itineraryDays,
      shareId,
      createdAt: new Date().toISOString(),
    };

    return new Response(JSON.stringify(response), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error in generate-itinerary function:", error);

    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Failed to generate itinerary",
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
