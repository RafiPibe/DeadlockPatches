import { createClient } from '@supabase/supabase-js';

// Support both Vite (browser) and Node (scripts)
const getEnv = (key: string) => {
  if (typeof process !== 'undefined' && process.env[key]) {
    return process.env[key];
  }
  // @ts-ignore
  if (typeof import.meta !== 'undefined' && (import.meta as any).env) {
    // @ts-ignore
    return (import.meta as any).env[key];
  }
  return undefined;
};

const supabaseUrl = getEnv('VITE_SUPABASE_URL');
const supabaseAnonKey = getEnv('VITE_SUPABASE_ANON_KEY');

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables. Please check your .env.local file.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
