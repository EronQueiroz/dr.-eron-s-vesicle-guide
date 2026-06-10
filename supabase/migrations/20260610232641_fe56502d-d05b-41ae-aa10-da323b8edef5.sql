CREATE TABLE public.google_places_cache (
  place_id TEXT PRIMARY KEY,
  payload JSONB NOT NULL,
  fetched_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT ALL ON public.google_places_cache TO service_role;

ALTER TABLE public.google_places_cache ENABLE ROW LEVEL SECURITY;
-- No policies: only service_role (used by server fn) can read/write. RLS denies anon/authenticated.