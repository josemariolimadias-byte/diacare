
import React from 'react';

interface PublicHeaderProps {
  onHome: () => void;
  onContact: () => void;
  onEnterSystem: () => void;
}

const PublicHeader: React.FC<PublicHeaderProps> = ({ onHome, onContact, onEnterSystem }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    onHome();
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={onHome}>
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-200">D</div>
          <span className="text-2xl font-black text-slate-800 tracking-tight">DiaCare</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#inicio" 
            onClick={(e) => handleNavClick(e, 'inicio')}
            className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-widest"
          >
            Início
          </a>
          <a 
            href="#sobre" 
            onClick={(e) => handleNavClick(e, 'sobre')}
            className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-widest"
          >
            Sobre
          </a>
          <a 
            href="#recursos" 
            onClick={(e) => handleNavClick(e, 'recursos')}
            className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-widest"
          >
            Recursos
          </a>
          <a 
            href="#planos" 
            onClick={(e) => handleNavClick(e, 'planos')}
            className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-widest"
          >
            Planos
          </a>
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
