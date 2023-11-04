import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nriysmhmycdhocuhviqb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yaXlzbWhteWNkaG9jdWh2aXFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4ODI0MjYsImV4cCI6MjAxNDQ1ODQyNn0.Qos5CNb-5Lerc0N7G6xkhQl9bOeVlN7tZcwOZzClIKk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

/*import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://nriysmhmycdhocuhviqb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yaXlzbWhteWNkaG9jdWh2aXFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4ODI0MjYsImV4cCI6MjAxNDQ1ODQyNn0.Qos5CNb-5Lerc0N7G6xkhQl9bOeVlN7tZcwOZzClIKk"
);

export default supabase;*/
