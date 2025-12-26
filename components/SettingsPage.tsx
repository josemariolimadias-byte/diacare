
import React from 'react';
import { UserProfile, Gender, GlucoseUnit, CarbUnit } from '../types';
import { RAPID_INSULINS, BASAL_INSULINS, DIABETES_TYPES } from '../constants';

interface SettingsPageProps {
  user: UserProfile;
  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>;
}

const SettingsPage: React.FC<SettingsPageProps> = ({ user, setUser }) => {
  const updateSetting = (key: keyof UserProfile, value: any) => {
    setUser({ ...user, [key]: value });
  };

  return (
    <div className="space-y-8 max-w-3xl mx-auto pb-12">
      <header>
        <h1 className="text-2xl font-bold text-slate-800">Configurações</h1>
        <p className="text-slate-500">Personalize seu monitoramento e metas.</p>
      </header>

      {/* Patient Data */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 bg-slate-50 border-b border-slate-100">
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Dados do Paciente</h2>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1 md:col-span-2">
            <label className="block text-xs font-bold text-slate-400 mb-1">Nome Completo</label>
            <input
              type="text"
              value={user.fullName}
              onChange={(e) => updateSetting('fullName', e.target.value)}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1">Data de Nascimento</label>
            <input
              type="date"
              value={user.birthDate}
              onChange={(e) => updateSetting('birthDate', e.target.value)}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1">Ano do Diagnóstico</label>
            <input
              type="text"
              placeholder="Ex: 2015"
              value={user.diagnosisYear}
              onChange={(e) => updateSetting('diagnosisYear', e.target.value)}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1">Sexo</label>
            <select
              value={user.gender}
              onChange={(e) => updateSetting('gender', e.target.value)}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            >
              {Object.values(Gender).map(g => <option key={g} value={g}>{g}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1">Tipo de Diabetes</label>
            <select
              value={user.diabetesType}
              onChange={(e) => updateSetting('diabetesType', e.target.value)}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            >
              {DIABETES_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>
      </section>

      {/* Insulin Config */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 bg-slate-50 border-b border-slate-100">
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Tratamento Farmacológico</h2>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1 uppercase">Configurações da Calculadora de Bolus (Ação Rápida)</label>
            <select
              value={user.rapidInsulin}
              onChange={(e) => updateSetting('rapidInsulin', e.target.value)}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            >
              {RAPID_INSULINS.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1 uppercase">Insulina Basal</label>
            <select
              value={user.basalInsulin}
              onChange={(e) => updateSetting('basalInsulin', e.target.value)}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            >
              {BASAL_INSULINS.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
          </div>
        </div>
      </section>

      {/* Metrics & Targets */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 bg-slate-50 border-b border-slate-100">
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Metas e Unidades</h2>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1">Unidade de Glicose</label>
            <div className="flex gap-2">
              {[GlucoseUnit.MG_DL, GlucoseUnit.MMOL_L].map(u => (
                <button
                  key={u}
                  onClick={() => updateSetting('glucoseUnit', u)}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium border ${user.glucoseUnit === u ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-600 border-slate-200'}`}
                >
                  {u}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1">Unidade de Carboidratos</label>
            <div className="flex gap-2">
              {[CarbUnit.GRAMS, CarbUnit.EQUIVALENTS].map(u => (
                <button
                  key={u}
                  onClick={() => updateSetting('carbUnit', u)}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium border ${user.carbUnit === u ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-600 border-slate-200'}`}
                >
                  {u}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1">Glicemia Alvo (mg/dL)</label>
            <input
              type="number"
              value={user.targetGlucose}
              onChange={(e) => updateSetting('targetGlucose', parseInt(e.target.value))}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1">Faixa Alvo (70-150 mg/dL)</label>
            <div className="flex items-center gap-2">
               <input
                type="number"
                value={user.targetRangeMin}
                onChange={(e) => updateSetting('targetRangeMin', parseInt(e.target.value))}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none"
              />
              <span className="text-slate-400">até</span>
              <input
                type="number"
                value={user.targetRangeMax}
                onChange={(e) => updateSetting('targetRangeMax', parseInt(e.target.value))}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none"
              />
            </div>
          </div>
          <div>
             <label className="block text-xs font-bold text-slate-400 mb-1">Glicemia Muito Alta (&gt; mg/dL)</label>
             <input
              type="number"
              value={user.hyperThreshold}
              onChange={(e) => updateSetting('hyperThreshold', parseInt(e.target.value))}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none"
            />
          </div>
          <div>
             <label className="block text-xs font-bold text-slate-400 mb-1">Glicemia Muito Baixa (&lt; mg/dL)</label>
             <input
              type="number"
              value={user.hypoThreshold}
              onChange={(e) => updateSetting('hypoThreshold', parseInt(e.target.value))}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SettingsPage;
