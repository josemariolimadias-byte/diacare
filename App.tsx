
import React, { useState, useEffect } from 'react';
import { UserProfile, LogEntry, AuthUser } from './types';
import { StorageService } from './services/storage';
import { supabase } from './services/supabaseClient';
import Dashboard from './components/Dashboard';
import LogForm from './components/LogForm';
import SettingsPage from './components/SettingsPage';
import Onboarding from './components/Onboarding';
import Auth from './components/Auth';
import LandingPage from './components/LandingPage';

const NavItem: React.FC<{ active: boolean; onClick: () => void; icon: string; label: string }> = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`flex flex-col md:flex-row items-center gap-2 md:gap-4 py-3 md:py-4 px-4 md:px-5 rounded-2xl transition-all w-full group
      ${active 
        ? 'bg-white text-blue-700 shadow-lg md:shadow-none' 
        : 'text-blue-100 hover:bg-blue-600/50'}`}
  >
    <span className="text-xl">{icon}</span>
    <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">{label}</span>
  </button>
);

const App: React.FC = () => {
  const [showSystem, setShowSystem] = useState(false);
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [loading, setLoading] = useState(true);

  const [activeTab, setActiveTab] = useState<'dashboard' | 'logs' | 'settings'>('dashboard');
  const [editingLog, setEditingLog] = useState<LogEntry | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setAuthUser({ id: session.user.id, email: session.user.email! });
        setShowSystem(true);
      } else {
        setLoading(false);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setAuthUser({ id: session.user.id, email: session.user.email! });
        setShowSystem(true);
      } else {
        setAuthUser(null);
        setUserProfile(null);
        setLogs([]);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (authUser) {
        setLoading(true);
        try {
          const profile = await StorageService.getProfile(authUser.id);
          const userLogs = await StorageService.getLogs(authUser.id);
          setUserProfile(profile);
          setLogs(userLogs);
        } catch (err) {
          console.error("Erro ao buscar dados:", err);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchData();
  }, [authUser]);

  if (!showSystem && !authUser) {
    return <LandingPage onEnterSystem={() => setShowSystem(true)} />;
  }

  if (loading && !authUser) {
    return (
      <div className="min-h-screen bg-blue-700 flex items-center justify-center">
        <div className="text-white font-black text-xl animate-pulse">Iniciando DiaCare...</div>
      </div>
    );
  }

  if (!authUser) {
    return <Auth onLogin={setAuthUser} onBack={() => setShowSystem(false)} />;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-blue-700 flex items-center justify-center">
        <div className="text-white font-black text-xl animate-pulse">Sincronizando...</div>
      </div>
    );
  }

  const handleOnboardingComplete = async (p: UserProfile) => {
    try {
      await StorageService.saveProfile(p);
      setUserProfile(p);
    } catch (err: any) {
      console.error("Erro ao salvar perfil:", err);
      alert("Não foi possível salvar seu perfil.");
    }
  };

  if (!userProfile) {
    return <Onboarding authUser={authUser} onComplete={handleOnboardingComplete} />;
  }

  const handleLogout = async () => {
    if (window.confirm('Deseja realmente sair?')) {
      await StorageService.logout();
      setShowSystem(false);
    }
  };

  const saveLog = async (entry: LogEntry) => {
    try {
      const logWithUser = { ...entry, userId: authUser.id };
      if (editingLog) {
        await StorageService.updateLog(logWithUser);
        setLogs(logs.map(l => l.id === editingLog.id ? logWithUser : l));
      } else {
        await StorageService.addLog(logWithUser);
        const updatedLogs = await StorageService.getLogs(authUser.id);
        setLogs(updatedLogs);
      }
      setActiveTab('dashboard');
      setEditingLog(null);
    } catch (err) {
      alert("Erro ao salvar registro.");
    }
  };

  const deleteLog = async (id: string) => {
    if (window.confirm('Excluir este registro?')) {
      await StorageService.deleteLog(id);
      setLogs(logs.filter(l => l.id !== id));
    }
  };

  const handleEditLog = (log: LogEntry) => {
    setEditingLog(log);
    setActiveTab('logs');
  };

  const handleNewLog = () => {
    setEditingLog(null);
    setActiveTab('logs');
  };

  const saveProfileUpdate = async (updatedProfile: UserProfile) => {
    try {
      await StorageService.saveProfile(updatedProfile);
      setUserProfile(updatedProfile);
    } catch (err) {
      alert("Erro ao atualizar perfil.");
    }
  };

  return (
    <div className="min-h-screen pb-24 md:pb-12 md:pl-64 bg-slate-50 flex flex-col items-stretch font-['Inter'] relative">
      <nav className="fixed bottom-0 left-0 w-full bg-blue-700 border-t border-blue-600/50 z-50 md:top-0 md:bottom-auto md:w-64 md:h-full md:border-t-0 md:border-r flex md:flex-col shadow-2xl md:shadow-none transition-colors duration-300">
        <div className="hidden md:flex flex-col p-8 border-b border-blue-600/30 mb-4 gap-6">
          <button onClick={() => setShowSystem(false)} className="flex items-center gap-3 text-left">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-blue-700 font-black text-sm shadow-xl">D</div>
            <span className="text-xl font-black text-white tracking-tight">DiaCare</span>
          </button>
          <div className="bg-blue-800/40 rounded-2xl p-4 border border-white/5 flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-black text-sm border-2 border-blue-400 shrink-0 shadow-lg">
              {userProfile.fullName.charAt(0).toUpperCase()}
            </div>
            <div className="overflow-hidden">
              <p className="text-[10px] text-blue-200 uppercase font-black tracking-widest leading-none mb-1">Paciente</p>
              <p className="text-sm font-bold text-white truncate">{userProfile.fullName}</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex md:flex-col justify-around md:justify-start md:p-4 gap-1.5 overflow-x-auto scrollbar-hide">
          <NavItem active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} icon="📊" label="Início" />
          <NavItem active={activeTab === 'logs'} onClick={handleNewLog} icon="📝" label="Registrar" />
          <NavItem active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} icon="⚙️" label="Ajustes" />
        </div>
        <div className="hidden md:block p-6 mt-2 border-t border-blue-600/30">
          <button onClick={handleLogout} className="flex items-center gap-4 py-4 px-5 rounded-2xl transition-all w-full group text-blue-100 hover:bg-red-500/20 hover:text-red-200">
            <span className="text-xl">🚪</span>
            <span className="text-xs font-black uppercase tracking-widest">Sair</span>
          </button>
        </div>
      </nav>

      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        {activeTab === 'dashboard' && (
          <Dashboard user={userProfile} logs={logs} onDelete={deleteLog} onEdit={handleEditLog} onNewRecord={handleNewLog} />
        )}
        {activeTab === 'logs' && (
          <LogForm user={userProfile} initialLog={editingLog} onAdd={saveLog} onCancel={() => setActiveTab('dashboard')} />
        )}
        {activeTab === 'settings' && (
          <SettingsPage user={userProfile} setUser={saveProfileUpdate as any} />
        )}
      </main>
    </div>
  );
};

export default App;
