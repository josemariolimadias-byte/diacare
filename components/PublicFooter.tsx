
import React from 'react';

interface PublicFooterProps {
  onContact: () => void;
  onPrivacy: () => void;
  onTerms: () => void;
}

const PublicFooter: React.FC<PublicFooterProps> = ({ onContact, onPrivacy, onTerms }) => {
  const apiKey = process.env.API_KEY || '';
  const lastFourDigits = apiKey.slice(-4);
  const isApiConnected = apiKey.length > 0;

  return (
    <footer className="bg-slate-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-sm">D</div>
              <span className="text-xl font-black tracking-tight">DiaCare</span>
            </div>
            <p className="text-slate-400 text-sm font-medium leading-relaxed">
              Cuidando de você através da tecnologia e precisão clínica.
            </p>
            
            {isApiConnected && (
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2.5 rounded-2xl">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 leading-none">API CONECTADA</span>
                  <span className="text-[9px] font-bold text-slate-500 mt-0.5 tracking-tighter">GEMINI ACTIVE ••••{lastFourDigits}</span>
                </div>
              </div>
            )}
          </div>
          
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-blue-400 mb-6">Plataforma</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-300">
              <li><button className="hover:text-blue-400 transition-colors">Sistema Web</button></li>
              <li><button className="hover:text-blue-400 transition-colors">App Mobile</button></li>
              <li><button className="hover:text-blue-400 transition-colors">SBD Integration</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-blue-400 mb-6">Suporte</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-300">
              <li><a href="https://drive.google.com/file/d/1tpt88R8JPdgY1_bZ-gIr4xskleOXWvLY/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Manual SBD</a></li>
              <li><button className="hover:text-blue-400 transition-colors">Contagem CHO</button></li>
              <li><button onClick={onContact} className="hover:text-blue-400 transition-colors text-left">Contato</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-blue-400 mb-6">Legal</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-300">
              <li><button onClick={onPrivacy} className="hover:text-blue-400 transition-colors text-left">Privacidade</button></li>
              <li><button onClick={onTerms} className="hover:text-blue-400 transition-colors text-left">Termos de Uso</button></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-500">
          <span>© 2026 DiaCare. Todos os direitos reservados.</span>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/diabetesbrasil2025" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;
