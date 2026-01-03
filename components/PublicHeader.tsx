
import React, { useState } from 'react';

interface PublicHeaderProps {
  onHome: () => void;
  onContact: () => void;
  onEnterSystem: () => void;
}

const PublicHeader: React.FC<PublicHeaderProps> = ({ onHome, onContact, onEnterSystem }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    setIsMenuOpen(false);
    // O scroll suave é lidado pelo browser devido ao CSS scroll-smooth no LandingPage
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Recursos', href: '#recursos' },
    { label: 'Planos', href: '#planos' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={onHome}>
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-200">D</div>
          <span className="text-2xl font-black text-slate-800 tracking-tight">DiaCare</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
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
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden p-2 text-slate-600 focus:outline-none relative z-50"
          aria-label="Menu"
        >
          {isMenuOpen ? (
            <span className="text-3xl font-light">✕</span>
          ) : (
            <span className="text-3xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay - Corrigido para ocupar o espaço correto e mostrar todos os itens */}
      <div 
        className={`fixed inset-0 top-20 bg-white z-40 md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-8 gap-2 bg-white h-full border-t border-slate-100 overflow-y-auto pb-32">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl font-black text-slate-800 hover:text-blue-600 transition-colors uppercase tracking-tight py-4 border-b border-slate-50 block"
            >
              {link.label}
            </a>
          ))}
          
          <button 
            onClick={() => { onContact(); setIsMenuOpen(false); }}
            className="text-left text-2xl font-black text-slate-800 hover:text-blue-600 transition-colors uppercase tracking-tight py-4 border-b border-slate-50 block w-full"
          >
            Contato
          </button>
          
          <div className="mt-8">
            <button 
              onClick={() => { onEnterSystem(); setIsMenuOpen(false); }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl text-sm font-black uppercase tracking-widest transition-all shadow-xl shadow-blue-100"
            >
              Acessar Sistema
            </button>
          </div>
          
          <div className="mt-12 text-center">
            <div className="flex justify-center gap-4 mb-4">
               <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 font-black text-xs">D</div>
            </div>
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">DiaCare © 2026</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PublicHeader;
