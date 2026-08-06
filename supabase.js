const SUPABASE_URL = "WEKA_PROJECT_URL_YAKO";

const SUPABASE_ANON_KEY = "WEKA_ANON_KEY_YAKO";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
