
import React from 'react';

interface LandingPageProps {
  onEnterSystem: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnterSystem }) => {
  return (
    <div className="min-h-screen bg-white font-['Inter'] selection:bg-blue-100 selection:text-blue-700">
      {/* SEÇÃO 1: CABEÇALHO COM MENU */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-200">D</div>
            <span className="text-2xl font-black text-slate-800 tracking-tight">DiaCare</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-widest">Início</a>
            <a href="#sobre" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-widest">Sobre</a>
            <a href="#recursos" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-widest">Recursos</a>
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

      {/* SEÇÃO 2: SEÇÃO PRINCIPAL (HERO) */}
      <section id="inicio" className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-block bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100">
              Controle Inteligente de Diabetes
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter">
              Sua saúde sob <span className="text-blue-600">controle</span>, grama por grama.
            </h1>
            <p className="text-lg text-slate-500 font-medium max-w-xl leading-relaxed">
              O DiaCare é a plataforma definitiva para pacientes com diabetes que buscam precisão clínica. Utilize inteligência artificial para contagem de carboidratos baseada nos padrões da SBD.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={onEnterSystem}
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl text-sm font-black uppercase tracking-[0.2em] transition-all shadow-2xl shadow-blue-200 transform active:scale-95"
              >
                Começar Agora
              </button>
              <button className="bg-slate-50 hover:bg-slate-100 text-slate-600 px-10 py-5 rounded-2xl text-sm font-black uppercase tracking-widest border border-slate-200 transition-all">
                Ver Demonstração
              </button>
            </div>
          </div>
          <div className="relative animate-in fade-in slide-in-from-right duration-1000">
             <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
             <div className="relative bg-gradient-to-tr from-blue-600 to-blue-400 p-8 rounded-[3rem] shadow-2xl overflow-hidden aspect-video flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <div className="font-black text-2xl uppercase tracking-widest">Dashboard em Tempo Real</div>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                   <div className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Glicemia Alvo</div>
                   <div className="text-white font-black text-xl">100 mg/dL</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: CARDS INFORMATIVOS */}
      <section id="recursos" className="py-24 bg-slate-50 border-y border-slate-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.3em]">Funcionalidades</h2>
            <p className="text-3xl font-black text-slate-800 tracking-tight">Por que escolher o DiaCare?</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon="✨" 
              title="IA de Carboidratos" 
              desc="Nossa IA Gemini estima carboidratos de qualquer alimento instantaneamente, seguindo o Manual da SBD." 
            />
            <FeatureCard 
              icon="📉" 
              title="Relatórios Precisos" 
              desc="Visualize sua HbA1c estimada, médias diárias e time-in-range através de gráficos intuitivos." 
            />
            <FeatureCard 
              icon="💉" 
              title="Cálculo de Bolus" 
              desc="Calculadora integrada que sugere doses de correção e refeição baseada na sua sensibilidade." 
            />
          </div>
        </div>
      </section>

      <section id="sobre" className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
           <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">Desenvolvido por quem entende de <span className="text-blue-600">diabetes</span>.</h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">
                Acreditamos que a tecnologia deve ser uma aliada silenciosa e poderosa. O DiaCare remove a fricção matemática do dia a dia, permitindo que você foque no que realmente importa: viver bem.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <span className="text-blue-600">✓</span> Dados sincronizados na nuvem via Supabase
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <span className="text-blue-600">✓</span> Histórico completo para exportação médica
                </li>
                <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <span className="text-blue-600">✓</span> Totalmente responsivo para mobile e desktop
                </li>
              </ul>
           </div>
           <div className="flex-1 relative">
              <div className="bg-blue-600 w-full h-80 rounded-[3rem] shadow-xl rotate-3 flex items-center justify-center text-white">
                 <div className="text-center p-8">
                    <span className="text-4xl mb-4 block">🍎</span>
                    <p className="font-black text-lg uppercase tracking-widest">Alimentação Consciente</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* SEÇÃO 4: RODAPÉ */}
      <footer className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-sm">D</div>
                <span className="text-xl font-black tracking-tight">DiaCare</span>
              </div>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                Cuidando de você através da tecnologia e precisão clínica.
              </p>
            </div>
            
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-blue-400 mb-6">Plataforma</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Sistema Web</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">App Mobile</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">SBD Integration</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-blue-400 mb-6">Suporte</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Manual do Usuário</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contagem CHO</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-blue-400 mb-6">Legal</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Termos de Uso</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-500">
            <span>© 2024 DiaCare. Todos os direitos reservados.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: string; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
    <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{icon}</div>
    <h3 className="text-lg font-black text-slate-800 mb-4 tracking-tight">{title}</h3>
    <p className="text-slate-500 text-sm font-medium leading-relaxed">{desc}</p>
  </div>
);

export default LandingPage;
