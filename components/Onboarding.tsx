
import React, { useState } from 'react';
import { UserProfile, Gender, DiabetesType, GlucoseUnit, CarbUnit, AuthUser } from '../types';
import { RAPID_INSULINS, BASAL_INSULINS, DIABETES_TYPES } from '../constants';

interface OnboardingProps {
  authUser: AuthUser;
  onComplete: (user: UserProfile) => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ authUser, onComplete }) => {
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState<Partial<UserProfile>>({
    userId: authUser.id,
    fullName: '',
    birthDate: '',
    gender: Gender.MALE,
    diagnosisYear: '',
    diabetesType: DiabetesType.TYPE_1,
    rapidInsulin: RAPID_INSULINS[0],
    basalInsulin: BASAL_INSULINS[0],
    glucoseUnit: GlucoseUnit.MG_DL,
    carbUnit: CarbUnit.GRAMS,
    targetGlucose: 100,
    hyperThreshold: 250,
    hypoThreshold: 54,
    targetRangeMin: 70,
    targetRangeMax: 150,
    height: 0,
    weight: 0
  });

  const next = () => setStep(step + 1);
  const finish = () => onComplete(profile as UserProfile);

  return (
    <div className="min-h-screen bg-blue-700 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border border-white/20 animate-in fade-in zoom-in duration-500">
        <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-2">
                 <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-200">D</div>
                 <span className="text-2xl font-bold text-blue-600 tracking-tight">DiaCare</span>
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full">Passo {step} de 2</span>
        </div>

        {step === 1 ? (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-800 leading-tight">Perfil Clínico 👋</h2>
            <p className="text-slate-500 mb-8">Olá {authUser.email}, vamos configurar seu perfil para começar.</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Nome Completo</label>
                <input
                  type="text"
                  placeholder="Como deseja ser chamado?"
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  value={profile.fullName}
                  onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Altura (cm)</label>
                  <input
                    type="number"
                    placeholder="Ex: 175"
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    value={profile.height || ''}
                    onChange={(e) => setProfile({ ...profile, height: parseFloat(e.target.value) })}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Peso (kg)</label>
                  <input
                    type="number"
                    step="0.1"
                    placeholder="Ex: 70"
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    value={profile.weight || ''}
                    onChange={(e) => setProfile({ ...profile, weight: parseFloat(e.target.value) })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Data de Nascimento</label>
                <input
                  type="date"
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  value={profile.birthDate}
                  onChange={(e) => setProfile({ ...profile, birthDate: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Gênero</label>
                <select
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all appearance-none cursor-pointer"
                  value={profile.gender}
                  onChange={(e) => setProfile({ ...profile, gender: e.target.value as Gender })}
                >
                  {Object.values(Gender).map(g => <option key={g} value={g}>{g}</option>)}
                </select>
              </div>
            </div>

            <button
              onClick={next}
              disabled={!profile.fullName || !profile.birthDate || !profile.height || !profile.weight}
              className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold mt-6 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-xl shadow-blue-200 transform active:scale-95"
            >
              Próximo Passo
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-800 leading-tight">Configurações 💉</h2>
            <p className="text-slate-500 mb-8">Detalhes técnicos do seu tratamento.</p>

            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Tipo de Diabetes</label>
                <select
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all appearance-none cursor-pointer"
                  value={profile.diabetesType}
                  onChange={(e) => setProfile({ ...profile, diabetesType: e.target.value as DiabetesType })}
                >
                  {DIABETES_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Glicemia Alvo (mg/dL)</label>
                <input
                  type="number"
                  placeholder="Ex: 100"
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  value={profile.targetGlucose}
                  onChange={(e) => setProfile({ ...profile, targetGlucose: parseInt(e.target.value) })}
                />
              </div>
            </div>

            <button
              onClick={finish}
              className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold mt-6 hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 transform active:scale-95"
            >
              Finalizar e Entrar
            </button>
            <button 
              onClick={() => setStep(1)}
              className="w-full py-2 text-slate-400 text-sm font-medium hover:text-slate-600 transition-colors"
            >
              Voltar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
