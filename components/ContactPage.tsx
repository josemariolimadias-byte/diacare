
import React, { useEffect } from 'react';
import PublicHeader from './PublicHeader';
import PublicFooter from './PublicFooter';

interface ContactPageProps {
  onBack: () => void;
  onEnterSystem: () => void;
  onPrivacyClick: () => void;
  onTermsClick: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBack, onEnterSystem, onPrivacyClick, onTermsClick }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-['Inter'] selection:bg-blue-100 selection:text-blue-700 flex flex-col">
      <PublicHeader 
        onHome={onBack} 
        onContact={() => {}} 
        onEnterSystem={onEnterSystem} 
      />
      
      <main className="flex-1 pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={onBack}
            className="mb-8 text-blue-600 font-black text-xs uppercase tracking-[0.2em] flex items-center gap-2 hover:translate-x-[-4px] transition-transform"
          >
            ← Voltar ao Início
          </button>

          <div className="text-center mb-16 space-y-4">
            <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Entre em <span className="text-blue-600">Contato</span></h1>
            <p className="text-lg text-slate-500 font-medium max-w-xl mx-auto">
              Estamos aqui para ajudar você a gerenciar sua saúde com mais facilidade. Utilize um de nossos canais abaixo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Email Card */}
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="text-4xl mb-6">✉️</div>
              <h3 className="text-xs font-black text-blue-600 uppercase tracking-[0.3em] mb-4">E-mail</h3>
              <p className="text-xl font-bold text-slate-800 tracking-tight mb-2">contato@diacare.com.br</p>
              <p className="text-slate-400 text-sm font-medium">Respondemos em até 24h úteis.</p>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="text-4xl mb-6">💬</div>
              <h3 className="text-xs font-black text-emerald-600 uppercase tracking-[0.3em] mb-4">WhatsApp</h3>
              <p className="text-xl font-bold text-slate-800 tracking-tight mb-2">(71) 9 9956-0936</p>
              <p className="text-slate-400 text-sm font-medium">Atendimento rápido e personalizado.</p>
            </div>
          </div>

          <div className="bg-blue-600 p-12 rounded-[3rem] text-white shadow-2xl shadow-blue-200 text-center space-y-8">
            <h2 className="text-3xl font-black tracking-tight">Prefere um formulário?</h2>
            <p className="text-blue-100 font-medium max-w-md mx-auto">
              Se você tem uma dúvida específica ou sugestão, preencha nosso formulário oficial de atendimento.
            </p>
            <a 
              href="https://forms.gle/9ZDHFDTtvpmv24CA8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-10 py-5 rounded-2xl text-sm font-black uppercase tracking-[0.2em] hover:bg-slate-50 transition-all shadow-xl shadow-blue-900/20 transform active:scale-95"
            >
              Abrir Formulário de Contato
            </a>
          </div>
        </div>
      </main>

      <PublicFooter 
        onContact={() => {}} 
        onPrivacy={onPrivacyClick} 
        onTerms={onTermsClick} 
      />
    </div>
  );
};

export default ContactPage;
