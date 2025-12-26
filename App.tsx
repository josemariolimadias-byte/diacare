
import React, { useState, useEffect } from 'react';
import { UserProfile, LogEntry, AuthUser } from './types';
import { StorageService } from './services/storage';
import Dashboard from './components/Dashboard';
import LogForm from './components/LogForm';
import PlateBuilder from './components/PlateBuilder';
import SettingsPage from './components/SettingsPage';
import Onboarding from './components/Onboarding';
import Auth from './components/Auth';

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
  const [authUser, setAuthUser] = useState<AuthUser | null>(StorageService.getCurrentAuthUser());
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [loading, setLoading] = useState(true);

  const [activeTab, setActiveTab] = useState<'dashboard' | 'logs' | 'plate' | 'settings'>('dashboard');
  const [pendingCarbs, setPendingCarbs] = useState<number>(0);
  const [editingLog, setEditingLog] = useState<LogEntry | null>(null);

  // Carrega dados iniciais quando o usuário loga
  useEffect(() => {
    const fetchData = async () => {
      if (authUser) {
        setLoading(true);
        const profile = await StorageService.getProfile(authUser.id);
        const userLogs = await StorageService.getLogs(authUser.id);
        setUserProfile(profile);
        setLogs(userLogs);
      }
      setLoading(false);
    };
    fetchData();
  }, [authUser]);

  // Salva logs sempre que mudam
  useEffect(() => {
    if (authUser && logs.length > 0) {
      StorageService.saveLogs(authUser.id, logs);
    }
  }, [logs, authUser]);

  // Salva perfil sempre que muda
  useEffect(() => {
    if (userProfile) {
      StorageService.saveProfile(userProfile);
    }
  }, [userProfile]);

  if (!authUser) {
    return <Auth onLogin={setAuthUser} />;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-blue-700 flex items-center justify-center">
        <div className="text-white font-black text-xl animate-pulse">Carregando DiaCare...</div>
      </div>
    );
  }

  if (!userProfile) {
    return <Onboarding authUser={authUser} onComplete={setUserProfile} />;
  }

  const handleLogout = () => {
    if (window.confirm('Deseja realmente sair do sistema? Seus dados estão seguros e vinculados à sua conta.')) {
      StorageService.logout();
      setAuthUser(null);
      setUserProfile(null);
      setLogs([]);
      setActiveTab('dashboard');
      setPendingCarbs(0);
      setEditingLog(null);
    }
  };

  const saveLog = (entry: LogEntry) => {
    const logWithUser = { ...entry, userId: authUser.id };
    if (editingLog) {
      setLogs(logs.map(l => l.id === editingLog.id ? logWithUser : l));
    } else {
      setLogs([logWithUser, ...logs]);
    }
    setActiveTab('dashboard');
    setPendingCarbs(0);
    setEditingLog(null);
  };

  const deleteLog = (id: string) => {
    setLogs(logs.filter(l => l.id !== id));
  };

  const handleEditLog = (log: LogEntry) => {
    setEditingLog(log);
    setPendingCarbs(log.carbAmount);
    setActiveTab('logs');
  };

  const handleNewLog = () => {
    setEditingLog(null);
    setPendingCarbs(0);
    setActiveTab('logs');
  };

  const handleConsume = (carbs: number) => {
    setEditingLog(null);
    setPendingCarbs(carbs);
    setActiveTab('logs');
  };

  // Verifica a existência da API_KEY
  const apiKey = (process.env as any).API_KEY;
  const isApiConnected = !!apiKey;
  const apiKeySuffix = isApiConnected ? apiKey.slice(-4) : '';

  return (
    <div className="min-h-screen pb-24 md:pb-8 md:pl-64 bg-slate-50 flex flex-col items-stretch font-['Inter'] relative">
      {/* Sidebar Navigation */}
      <nav className="fixed bottom-0 left-0 w-full bg-blue-700 border-t border-blue-600/50 z-50 md:top-0 md:bottom-auto md:w-64 md:h-full md:border-t-0 md:border-r flex md:flex-col shadow-2xl md:shadow-none transition-colors duration-300">
        <div className="hidden md:flex flex-col p-8 border-b border-blue-600/30 mb-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-blue-700 font-black text-sm shadow-xl">D</div>
            <span className="text-xl font-black text-white tracking-tight">DiaCare</span>
          </div>

          <div className="bg-blue-800/40 rounded-2xl p-4 border border-white/5 flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-black text-sm border-2 border-blue-400 shrink-0 shadow-lg">
              {userProfile.fullName.charAt(0).toUpperCase()}
            </div>
            <div className="overflow-hidden">
              <p className="text-[10px] text-blue-200 uppercase font-black tracking-widest leading-none mb-1">Paciente</p>
              <p className="text-sm font-bold text-white truncate" title={userProfile.fullName}>{userProfile.fullName}</p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex md:flex-col justify-around md:justify-start md:p-4 gap-1.5 overflow-x-auto scrollbar-hide">
          <NavItem active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} icon="📊" label="Início" />
          <NavItem active={activeTab === 'logs'} onClick={handleNewLog} icon="📝" label="Registrar" />
          <NavItem active={activeTab === 'plate'} onClick={() => setActiveTab('plate')} icon="🍽️" label="Meu Prato" />
          <NavItem active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} icon="⚙️" label="Ajustes" />
          
          <button
            onClick={handleLogout}
            className="flex flex-col md:hidden items-center gap-1 py-3.5 px-3.5 rounded-2xl text-red-200 hover:bg-red-500/10 font-medium"
          >
            <span className="text-xl">🚪</span>
            <span className="text-[10px] uppercase tracking-widest">Sair</span>
          </button>
        </div>

        <div className="hidden md:block p-6 mt-2 border-t border-blue-600/30">
          <button
            onClick={handleLogout}
            className="flex items-center gap-4 py-4 px-5 rounded-2xl transition-all w-full group text-blue-100 hover:bg-red-500/20 hover:text-red-200"
          >
            <span className="text-xl">🚪</span>
            <span className="text-xs font-black uppercase tracking-widest">Sair</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        {activeTab === 'dashboard' && (
          <Dashboard 
            user={userProfile} 
            logs={logs} 
            onDelete={deleteLog} 
            onEdit={handleEditLog} 
            onNewRecord={handleNewLog}
          />
        )}
        
        {activeTab === 'logs' && (
          <LogForm 
            user={userProfile} 
            initialCarbs={pendingCarbs} 
            initialLog={editingLog}
            onAdd={saveLog}
            onCancel={() => setActiveTab('dashboard')}
          />
        )}

        {activeTab === 'plate' && (
          <PlateBuilder onConsume={handleConsume} />
        )}

        {activeTab === 'settings' && (
          <SettingsPage user={userProfile} setUser={setUserProfile} />
        )}
      </main>

      {/* Fixed API Status Footer */}
      {isApiConnected && (
        <footer className="fixed bottom-24 md:bottom-0 left-0 md:left-64 right-0 z-[60] bg-white/70 backdrop-blur-md border-t border-slate-200 py-1.5 px-6 flex items-center justify-center md:justify-end gap-3 pointer-events-none transition-all">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
              API CONECTADA: <span className="text-slate-800">****{apiKeySuffix}</span>
            </span>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;
