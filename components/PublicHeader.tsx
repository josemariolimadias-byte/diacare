
import React from 'react';

interface PublicHeaderProps {
  onHome: () => void;
  onContact: () => void;
  onEnterSystem: () => void;
}

const PublicHeader: React.FC<PublicHeaderProps> = ({ onHome, onContact, onEnterSystem }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={onHome}>
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-200">D</div>
          <span className="text-2xl font-black text-slate-800 tracking-tight">DiaCare</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={onHome} className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-widest">Início</button>
          <button onClick={onHome} className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-widest">Sobre</button>
          <button onClick={onHome} className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-widest">Recursos</button>
          <button 
            onClick={onContact}
            className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-widest"
          >
            Contato
          </button>
          <button 
            onClick={onEnterSystem}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-100"
          >
            Acessar Sistema
          </button>
        </nav>
        
        <button onClick={onEnterSystem} className="md:hidden text-2xl">☰</button>
      </div>
    </header>
  );
};

export default PublicHeader;
