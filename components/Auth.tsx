
import React, { useState } from 'react';
import { StorageService } from '../services/storage';
import { AuthUser } from '../types';

interface AuthProps {
  onLogin: (user: AuthUser) => void;
  onBack: () => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin, onBack }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      let user;
      if (isLogin) {
        user = await StorageService.login(email, password);
      } else {
        user = await StorageService.signup(email, password);
      }
      onLogin(user);
    } catch (err: any) {
      console.error("ERRO NA AUTENTICAÇÃO:", err);
      setError(err.message || 'Ocorreu um erro inesperado.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-700 flex flex-col items-center justify-center p-4 font-['Inter'] relative">
      <button 
        onClick={onBack}
        className="absolute top-8 left-8 text-white/60 hover:text-white font-black text-xs uppercase tracking-widest transition-colors flex items-center gap-2"
      >
        ← Voltar ao Início
      </button>

      <div className="max-w-md w-full bg-white p-10 rounded-[2.5rem] shadow-2xl border border-white/20 animate-in fade-in zoom-in duration-500">
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-blue-200 mb-4">D</div>
          <h1 className="text-3xl font-black text-blue-600 tracking-tight">DiaCare</h1>
          <p className="text-slate-400 text-sm font-medium mt-1">Sua vida com diabetes, sob controle.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="p-4 bg-red-50 text-red-600 text-[11px] font-black uppercase tracking-wider rounded-2xl border border-red-100 animate-bounce">
              ⚠️ {error}
            </div>
          )}
          
          <div>
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">E-mail de Acesso</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exemplo@email.com"
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-bold text-slate-700"
            />
          </div>

          <div>
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Senha</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-bold text-slate-700"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 transform active:scale-95 disabled:opacity-50"
          >
            {loading ? 'Processando...' : isLogin ? 'Entrar no DiaCare' : 'Criar Minha Conta'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <button
            onClick={() => { setIsLogin(!isLogin); setError(''); }}
            className="text-xs font-black text-slate-400 hover:text-blue-600 transition-colors uppercase tracking-widest"
          >
            {isLogin ? 'Novo por aqui? Cadastre-se' : 'Já sou paciente? Fazer Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
