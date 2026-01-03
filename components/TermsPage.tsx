
import React, { useEffect } from 'react';
import PublicHeader from './PublicHeader';
import PublicFooter from './PublicFooter';

interface TermsPageProps {
  onBack: () => void;
  onEnterSystem: () => void;
  onContactClick: () => void;
  onPrivacyClick: () => void;
}

const TermsPage: React.FC<TermsPageProps> = ({ onBack, onEnterSystem, onContactClick, onPrivacyClick }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-['Inter'] selection:bg-blue-100 selection:text-blue-700 flex flex-col">
      <PublicHeader 
        onHome={onBack} 
        onContact={onContactClick} 
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

          <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-sm border border-slate-100">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8">Termos de <span className="text-blue-600">Uso</span></h1>
            
            <div className="bg-red-50 border border-red-100 p-6 rounded-3xl mb-12">
              <h3 className="text-red-600 font-black text-xs uppercase tracking-widest mb-2">⚠️ Aviso Médico Importante</h3>
              <p className="text-red-700/80 text-sm font-bold leading-relaxed">
                O DiaCare é uma ferramenta de suporte e informação. Os cálculos de bolus, estimativas de carboidratos e estatísticas geradas pela plataforma NÃO substituem o julgamento clínico de um médico. Nunca altere seu tratamento sem consultar seu endocrinologista.
              </p>
            </div>

            <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
              <section className="space-y-4">
                <h2 className="text-xl font-black text-slate-800 uppercase tracking-widest text-sm">1. Aceitação dos Termos</h2>
                <p>Ao acessar o DiaCare, você concorda em cumprir estes termos e todas as leis e regulamentos aplicáveis.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-black text-slate-800 uppercase tracking-widest text-sm">2. Licença de Uso</h2>
                <p>É concedida permissão para usar a plataforma para fins pessoais e não comerciais. Você não deve:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site.</li>
                  <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais.</li>
                  <li>Transferir os materiais para outra pessoa ou 'espelhar' os materiais em qualquer outro servidor.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-black text-slate-800 uppercase tracking-widest text-sm">3. Isenção de Responsabilidade</h2>
                <p>O DiaCare não garante a precisão absoluta das estimativas de carboidratos fornecidas pela IA, uma vez que estas dependem da descrição fornecida pelo usuário e de bases de dados externas. A decisão final sobre qualquer dose de medicação é de inteira responsabilidade do usuário em conjunto com seu médico.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-black text-slate-800 uppercase tracking-widest text-sm">4. Modificações</h2>
                <p>O DiaCare pode revisar estes termos de uso a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos.</p>
              </section>

              <section className="space-y-4 text-center pt-8 border-t border-slate-100">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Última atualização: Julho de 2026</p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <PublicFooter 
        onContact={onContactClick} 
        onPrivacy={onPrivacyClick} 
        onTerms={() => {}} 
      />
    </div>
  );
};

export default TermsPage;
