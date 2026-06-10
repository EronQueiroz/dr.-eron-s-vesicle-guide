import { createServerFn } from "@tanstack/react-start";

const PLACE_ID = "ChIJcTY0vxKTcQ0RO4RJ7UWbh5I";
const CACHE_TTL_MS = 24 * 60 * 60 * 1000;

export type GoogleReview = {
  authorName: string;
  text: string;
  rating: number;
  relativePublishTimeDescription: string;
};

export type GooglePlacesData = {
  rating: number | null;
  userRatingCount: number | null;
  reviews: GoogleReview[];
};

function normalize(payload: any): GooglePlacesData {
  const reviews: GoogleReview[] = Array.isArray(payload?.reviews)
    ? payload.reviews
        .map((r: any) => ({
          authorName: r?.authorAttribution?.displayName ?? "",
          text: r?.text?.text ?? r?.originalText?.text ?? "",
          rating: typeof r?.rating === "number" ? r.rating : 5,
          relativePublishTimeDescription: r?.relativePublishTimeDescription ?? "",
        }))
        .filter((r: GoogleReview) => r.text && r.text.trim().length > 0)
        .slice(0, 5)
    : [];
  return {
    rating: typeof payload?.rating === "number" ? payload.rating : null,
    userRatingCount:
      typeof payload?.userRatingCount === "number" ? payload.userRatingCount : null,
    reviews,
  };
}

export const getGoogleReviews = createServerFn({ method: "GET" }).handler(
  async (): Promise<GooglePlacesData> => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    // 1) Try cache (<24h)
    try {
      const { data: cached } = await supabaseAdmin
        .from("google_places_cache")
        .select("payload, fetched_at")
        .eq("place_id", PLACE_ID)
        .maybeSingle();

      if (cached?.fetched_at) {
        const age = Date.now() - new Date(cached.fetched_at as string).getTime();
        if (age < CACHE_TTL_MS && cached.payload) {
          return normalize(cached.payload);
        }
      }
    } catch (e) {
      console.error("google_places_cache read failed", e);
    }

    // 2) Refresh from Google Places API
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    if (!apiKey) {
      console.error("GOOGLE_PLACES_API_KEY missing");
      return { rating: null, userRatingCount: null, reviews: [] };
    }

    try {
      const res = await fetch(
        `https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=pt-BR`,
        {
          headers: {
            "X-Goog-Api-Key": apiKey,
            "X-Goog-FieldMask": "rating,userRatingCount,reviews",
          },
        },
      );
      if (!res.ok) {
        console.error("Google Places API error", res.status, await res.text());
        // Serve stale cache if present
        const { data: stale } = await supabaseAdmin
          .from("google_places_cache")
          .select("payload")
          .eq("place_id", PLACE_ID)
          .maybeSingle();
        return stale?.payload
          ? normalize(stale.payload)
          : { rating: null, userRatingCount: null, reviews: [] };
      }
      const payload = await res.json();

      await supabaseAdmin
        .from("google_places_cache")
        .upsert({ place_id: PLACE_ID, payload, fetched_at: new Date().toISOString() });

      return normalize(payload);
    } catch (e) {
      console.error("Google Places fetch failed", e);
      return { rating: null, userRatingCount: null, reviews: [] };
    }
  },
);