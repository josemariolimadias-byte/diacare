
import React from 'react';

interface PrivacyPageProps {
  onBack: () => void;
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-50 font-['Inter'] selection:bg-blue-100 selection:text-blue-700 pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-8 text-blue-600 font-black text-xs uppercase tracking-[0.2em] flex items-center gap-2 hover:translate-x-[-4px] transition-transform"
        >
          ← Voltar ao Início
        </button>

        <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-sm border border-slate-100">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8">Política de <span className="text-blue-600">Privacidade</span></h1>
          
          <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-xl font-black text-slate-800 uppercase tracking-widest text-sm">1. Introdução</h2>
              <p>O DiaCare valoriza a sua privacidade. Esta política descreve como tratamos seus dados pessoais e de saúde coletados através de nossa plataforma.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-black text-slate-800 uppercase tracking-widest text-sm">2. Dados Coletados</h2>
              <p>Coletamos informações necessárias para o gerenciamento do diabetes, incluindo:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dados de Identificação: E-mail e nome completo.</li>
                <li>Dados de Saúde: Glicemia, contagem de carboidratos, doses de insulina e histórico de registros.</li>
                <li>Dados Biométricos: Peso e altura para cálculos de sensibilidade.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-black text-slate-800 uppercase tracking-widest text-sm">3. Uso de Inteligência Artificial</h2>
              <p>Utilizamos a API do Google Gemini para auxiliar na contagem de carboidratos. Os nomes dos alimentos digitados são enviados à API para estimativa nutricional. <strong>Nenhum dado pessoal identificável (como seu nome ou e-mail) é compartilhado com os modelos de IA.</strong></p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-black text-slate-800 uppercase tracking-widest text-sm">4. Armazenamento e Segurança</h2>
              <p>Seus dados são armazenados de forma segura utilizando o Supabase (infraestrutura PostgreSQL), com criptografia em repouso e autenticação robusta. Você detém a propriedade total de seus dados e pode excluí-los a qualquer momento através das configurações da conta.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-black text-slate-800 uppercase tracking-widest text-sm">5. Contato</h2>
              <p>Para dúvidas sobre seus dados, entre em contato através do e-mail <span className="text-blue-600 font-bold">contato@diacare.com.br</span>.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
