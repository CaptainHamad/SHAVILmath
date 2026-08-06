const SUPABASE_URL = "https://shnkqegaaocffjfscznu.supabase.co/rest/v1/";

const SUPABASE_ANON_KEY = "sb_publishable_VsQ1yMkQLvDQB_tj-qSQmg_G8-5crac";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
