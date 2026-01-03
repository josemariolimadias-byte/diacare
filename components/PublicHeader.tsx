
import React, { useState, useEffect } from 'react';

interface PublicHeaderProps {
  onHome: () => void;
  onContact: () => void;
  onEnterSystem: () => void;
}

const PublicHeader: React.FC<PublicHeaderProps> = ({ onHome, onContact, onEnterSystem }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Impede o scroll do body quando o menu está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Recursos', href: '#recursos' },
    { label: 'Planos', href: '#planos' },
  ];

  return (
    <>
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
            className="md:hidden p-2 text-slate-600 focus:outline-none relative z-[60]"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <span className="text-3xl font-light">✕</span>
            ) : (
              <span className="text-3xl">☰</span>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay - Corrigido para ser robusto em telas pequenas */}
      <div 
        className={`fixed inset-0 bg-white z-[55] md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full w-full pt-24 px-8 pb-10 overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-3xl font-black text-slate-800 hover:text-blue-600 transition-colors uppercase tracking-tighter py-5 border-b border-slate-50"
              >
                {link.label}
              </a>
            ))}
            
            <button 
              onClick={() => { onContact(); setIsMenuOpen(false); }}
              className="text-left text-3xl font-black text-slate-800 hover:text-blue-600 transition-colors uppercase tracking-tighter py-5 border-b border-slate-50 block w-full"
            >
              Contato
            </button>
          </nav>
          
          <div className="mt-10">
            <button 
              onClick={() => { onEnterSystem(); setIsMenuOpen(false); }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-2xl text-base font-black uppercase tracking-widest transition-all shadow-xl shadow-blue-100"
            >
              Acessar Sistema
            </button>
          </div>
          
          <div className="mt-auto pt-12 text-center">
            <div className="flex justify-center gap-4 mb-4">
               <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 font-black text-base">D</div>
            </div>
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">DiaCare © 2026</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicHeader;
