
import { createClient } from '@supabase/supabase-js';

// Accessing environment variables via process.env as defined in vite.config.ts to avoid TS errors with import.meta.env in non-Vite-typed environments
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Supabase URL ou Anon Key não encontrados. Verifique as variáveis de ambiente.");
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');
