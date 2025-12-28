
import { UserProfile, LogEntry, AuthUser } from '../types';

/**
 * Este serviço simula uma API real. 
 * Todas as funções são assíncronas (async) para que, ao conectar com o Supabase,
 * o restante do aplicativo não precise sofrer alterações estruturais.
 */

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const StorageService = {
  // --- AUTH SIMULATION ---
  async login(email: string, password: string): Promise<AuthUser> {
    await delay(800);
    // Simulação: qualquer email/senha funciona por enquanto
    const user: AuthUser = { id: btoa(email), email };
    localStorage.setItem('diacare_auth', JSON.stringify(user));
    return user;
  },

  async signup(email: string, password: string): Promise<AuthUser> {
    await delay(1000);
    const user: AuthUser = { id: btoa(email), email };
    localStorage.setItem('diacare_auth', JSON.stringify(user));
    return user;
  },

  getCurrentAuthUser(): AuthUser | null {
    const saved = localStorage.getItem('diacare_auth');
    return saved ? JSON.parse(saved) : null;
  },

  logout() {
    localStorage.removeItem('diacare_auth');
  },

  // --- PROFILE ---
  async getProfile(userId: string): Promise<UserProfile | null> {
    await delay(300);
    const saved = localStorage.getItem(`diacare_profile_${userId}`);
    return saved ? JSON.parse(saved) : null;
  },

  async saveProfile(profile: UserProfile): Promise<void> {
    await delay(500);
    localStorage.setItem(`diacare_profile_${profile.userId}`, JSON.stringify(profile));
  },

  // --- LOGS ---
  async getLogs(userId: string): Promise<LogEntry[]> {
    await delay(400);
    const saved = localStorage.getItem(`diacare_logs_${userId}`);
    return saved ? JSON.parse(saved) : [];
  },

  async saveLogs(userId: string, logs: LogEntry[]): Promise<void> {
    await delay(300);
    localStorage.setItem(`diacare_logs_${userId}`, JSON.stringify(logs));
  }
};
