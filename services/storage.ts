
import { createClient } from '@supabase/supabase-js';
import { UserProfile, LogEntry, AuthUser } from '../types';

const supabaseUrl = (process.env as any).VITE_SUPABASE_URL || '';
const supabaseAnonKey = (process.env as any).VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const StorageService = {
  // --- AUTH REAL ---
  async login(email: string, password: string): Promise<AuthUser> {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return { id: data.user.id, email: data.user.email! };
  },

  async signup(email: string, password: string): Promise<AuthUser> {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    if (!data.user) throw new Error('Erro ao criar conta');
    return { id: data.user.id, email: data.user.email! };
  },

  getCurrentAuthUser(): AuthUser | null {
    // Nota: Em uma app React real, usaríamos o hook useSession ou onAuthStateChange
    // Para manter a estrutura atual, buscamos a sessão persistida pelo SDK
    const sessionStr = localStorage.getItem('sb-' + btoa(supabaseUrl).replace(/=/g, '') + '-auth-token');
    if (!sessionStr) return null;
    const session = JSON.parse(sessionStr);
    return session?.user ? { id: session.user.id, email: session.user.email } : null;
  },

  async logout() {
    await supabase.auth.signOut();
  },

  // --- PROFILE ---
  async getProfile(userId: string): Promise<UserProfile | null> {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', userId)
      .single();
    
    if (error && error.code !== 'PGRST116') console.error('Erro profile:', error);
    
    // Converter nomes de colunas snake_case para camelCase se necessário
    // (O Supabase retorna exatamente como no banco, aqui mapeamos para o tipo UserProfile)
    if (!data) return null;
    return {
      userId: data.user_id,
      fullName: data.full_name,
      birthDate: data.birth_date,
      gender: data.gender,
      diagnosisYear: data.diagnosis_year,
      diabetesType: data.diabetes_type,
      rapidInsulin: data.rapid_insulin,
      basalInsulin: data.basal_insulin,
      glucoseUnit: data.glucose_unit,
      carbUnit: data.carb_unit,
      targetGlucose: data.target_glucose,
      hyperThreshold: data.hyper_threshold,
      hypoThreshold: data.hypo_threshold,
      targetRangeMin: data.target_range_min,
      targetRangeMax: data.target_range_max,
      height: data.height,
      weight: data.weight
    } as UserProfile;
  },

  async saveProfile(profile: UserProfile): Promise<void> {
    const { error } = await supabase
      .from('profiles')
      .upsert({
        user_id: profile.userId,
        full_name: profile.fullName,
        birth_date: profile.birthDate,
        gender: profile.gender,
        diagnosis_year: profile.diagnosisYear,
        diabetes_type: profile.diabetesType,
        rapid_insulin: profile.rapidInsulin,
        basal_insulin: profile.basalInsulin,
        glucose_unit: profile.glucoseUnit,
        carb_unit: profile.carbUnit,
        target_glucose: profile.targetGlucose,
        // Fix: Use camelCase property names from UserProfile interface to fix property access errors
        hyper_threshold: profile.hyperThreshold,
        // Fix: Use camelCase property names from UserProfile interface to fix property access errors
        hypo_threshold: profile.hypoThreshold,
        target_range_min: profile.targetRangeMin,
        target_range_max: profile.targetRangeMax,
        height: profile.height,
        weight: profile.weight,
        updated_at: new Date()
      });
    
    if (error) throw error;
  },

  // --- LOGS ---
  async getLogs(userId: string): Promise<LogEntry[]> {
    const { data, error } = await supabase
      .from('logs')
      .select('*')
      .eq('user_id', userId)
      .order('date', { ascending: false })
      .order('time', { ascending: false });
    
    if (error) throw error;

    return (data || []).map(d => ({
      id: d.id,
      userId: d.user_id,
      date: d.date,
      time: d.time,
      glucose: d.glucose,
      carbAmount: d.carb_amount,
      mealInsulin: d.meal_insulin,
      correctionInsulin: d.correction_insulin,
      basalInsulin: d.basal_insulin,
      pills: d.pills,
      notes: d.notes
    }));
  },

  async saveLogs(userId: string, logs: LogEntry[]): Promise<void> {
    // Com banco de dados, geralmente salvamos um por um no Form ou usamos bulk upsert
    // Para manter compatibilidade com o salvamento automático do App.tsx:
    const formattedLogs = logs.map(l => ({
      id: l.id,
      user_id: userId,
      date: l.date,
      time: l.time,
      glucose: l.glucose,
      carb_amount: l.carbAmount,
      meal_insulin: l.mealInsulin,
      correction_insulin: l.correction_insulin,
      basal_insulin: l.basalInsulin,
      pills: l.pills,
      notes: l.notes
    }));

    const { error } = await supabase.from('logs').upsert(formattedLogs);
    if (error) throw error;
  }
};
