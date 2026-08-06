const SUPABASE_URL = "https://shnkqegaaocffjfscznu.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_VsQ1yMkQLvDQB_tj-qSQmg_G8-5crac";

window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
