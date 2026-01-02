
import { createClient } from '@supabase/supabase-js';

// No Vite, as variáveis podem ser injetadas via define no vite.config.ts.
// Usamos process.env para evitar erros de tipagem no objeto ImportMeta (lib.dom/lib.esnext.meta).
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("ERRO DIACARE: Chaves do Supabase não encontradas! Verifique o painel da Vercel.");
} else {
  console.log("DIACARE: Conectando ao Supabase em:", supabaseUrl);
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');
