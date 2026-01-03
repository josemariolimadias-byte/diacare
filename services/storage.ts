
import { UserProfile, LogEntry, AuthUser } from '../types';
import { supabase } from './supabaseClient';

export const StorageService = {
  
  // --- AUTENTICAÇÃO REAL ---
  
  async login(email: string, password: string): Promise<AuthUser> {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    if (!data.user) throw new Error("Usuário não encontrado");
    
    return { id: data.user.id, email: data.user.email! };
  },

  async signup(email: string, password: string): Promise<AuthUser> {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    if (!data.user) throw new Error("Erro ao criar usuário");
    
    return { id: data.user.id, email: data.user.email! };
  },

  async logout() {
    await supabase.auth.signOut();
  },

  getCurrentAuthUser(): AuthUser | null {
    const user = supabase.auth.getUser();
    return null; 
  },

  // --- PERFIL DO PACIENTE NO SUPABASE ---

  async getProfile(userId: string): Promise<UserProfile | null> {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
    
    if (error && error.code !== 'PGRST116') { 
      console.error("Erro ao buscar perfil:", error);
      return null;
    }

    if (!data) return null;

    // Fix: Correct mapping of database fields to UserProfile interface properties (glucoseUnit and carbUnit)
    return {
      userId: data.id,
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
      weight: data.weight,
      trialExpiresAt: data.trial_expires_at // Mapeamento da nova coluna
    } as UserProfile;
  },

  async saveProfile(profile: UserProfile): Promise<void> {
    const { error } = await supabase
      .from('profiles')
      .upsert({
        id: profile.userId,
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
        hyper_threshold: profile.hyperThreshold,
        hypo_threshold: profile.hypoThreshold,
        target_range_min: profile.targetRangeMin,
        target_range_max: profile.targetRangeMax,
        height: profile.height,
        weight: profile.weight,
        trial_expires_at: profile.trialExpiresAt // Salva a data de expiração
      });
    
    if (error) throw error;
  },

  // --- REGISTROS NO SUPABASE ---

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

  async addLog(log: LogEntry): Promise<void> {
    const { error } = await supabase
      .from('logs')
      .insert({
        user_id: log.userId,
        date: log.date,
        time: log.time,
        glucose: log.glucose,
        carb_amount: log.carbAmount,
        meal_insulin: log.mealInsulin,
        correction_insulin: log.correctionInsulin,
        basal_insulin: log.basalInsulin,
        pills: log.pills,
        notes: log.notes
      });
    if (error) throw error;
  },

  async updateLog(log: LogEntry): Promise<void> {
    // Fix: Correct mapping of camelCase LogEntry properties to snake_case database fields
    const { error } = await supabase
      .from('logs')
      .update({
        date: log.date,
        time: log.time,
        glucose: log.glucose,
        carb_amount: log.carbAmount,
        meal_insulin: log.mealInsulin,
        correction_insulin: log.correctionInsulin,
        basal_insulin: log.basalInsulin,
        pills: log.pills,
        notes: log.notes
      })
      .eq('id', log.id);
    if (error) throw error;
  },

  async deleteLog(logId: string): Promise<void> {
    const { error } = await supabase
      .from('logs')
      .delete()
      .eq('id', logId);
    if (error) throw error;
  }
};
