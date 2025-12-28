
import React, { useState, useEffect } from 'react';
import { UserProfile, LogEntry, CarbUnit } from '../types';

interface LogFormProps {
  user: UserProfile;
  initialLog?: LogEntry | null;
  onAdd: (entry: LogEntry) => void;
  onCancel: () => void;
}

const LogForm: React.FC<LogFormProps> = ({ user, initialLog, onAdd, onCancel }) => {
  const [date, setDate] = useState(initialLog?.date || new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState(initialLog?.time || new Date().toTimeString().slice(0, 5));
  const [glucose, setGlucose] = useState<string>(initialLog?.glucose.toString() || '');
  const [carbAmount, setCarbAmount] = useState<string>(initialLog?.carbAmount.toString() || '');
  const [mealInsulin, setMealInsulin] = useState<string>(initialLog?.mealInsulin.toString() || '0');
  const [correctionInsulin, setCorrectionInsulin] = useState<string>(initialLog?.correctionInsulin.toString() || '0');
  const [basalInsulin, setBasalInsulin] = useState<string>(initialLog?.basalInsulin.toString() || '0');
  const [pills, setPills] = useState<string>(initialLog?.pills.toString() || '0');

  useEffect(() => {
    const gValue = parseFloat(glucose);
    const cValue = parseFloat(carbAmount);

    let suggestedMeal = 0;
    let suggestedCorr = 0;

    // Lógica simples de sugestão (pode ser personalizada no futuro)
    if (!isNaN(cValue) && cValue > 0) {
      suggestedMeal = Math.round((cValue / 15) * 10) / 10;
    }

    if (!isNaN(gValue) && gValue > user.targetGlucose) {
      suggestedCorr = Math.round(((gValue - user.targetGlucose) / 45) * 10) / 10;
    }

    if (!initialLog || (initialLog && (gValue !== initialLog.glucose || cValue !== initialLog.carbAmount))) {
        setMealInsulin(suggestedMeal.toString());
        setCorrectionInsulin(suggestedCorr.toString());
    }
  }, [glucose, carbAmount, user.targetGlucose, initialLog]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!glucose || !carbAmount) return;

    const entry: LogEntry = {
      id: initialLog?.id || crypto.randomUUID(),
      userId: user.userId,
      date,
      time,
      glucose: parseFloat(glucose),
      carbAmount: parseFloat(carbAmount),
      mealInsulin: parseFloat(mealInsulin),
      correctionInsulin: parseFloat(correctionInsulin),
      basalInsulin: parseFloat(basalInsulin),
      pills: parseFloat(pills)
    };
    onAdd(entry);
  };

  return (
    <div className="relative">
      <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 max-w-2xl mx-auto">
        <h2 className="text-xl font-black mb-8 text-slate-800 flex items-center gap-3 tracking-tight">
          <span className="text-2xl">{initialLog ? '📝' : '✨'}</span> 
          {initialLog ? 'Editar Registro' : 'Novo Registro'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2">Data do Registro</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none font-bold text-slate-700 text-sm"
              />
            </div>
            <div>
              <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2">Hora do Registro</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none font-bold text-slate-700 text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 bg-blue-50/50 rounded-3xl border border-blue-100/50">
              <label className="block text-[11px] font-black text-blue-600 uppercase tracking-widest mb-2">Glicemia ({user.glucoseUnit})</label>
              <input
                type="number"
                placeholder="0"
                value={glucose}
                onChange={(e) => setGlucose(e.target.value)}
                className="w-full p-4 bg-white border border-blue-200/50 rounded-2xl text-2xl font-black text-blue-700 outline-none shadow-sm focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="p-5 bg-emerald-50/50 rounded-3xl border border-emerald-100/50">
              <label className="block text-[11px] font-black text-emerald-600 uppercase tracking-widest mb-2">Carboidratos ({user.carbUnit === CarbUnit.GRAMS ? 'g' : 'Eq'})</label>
              <input
                type="number"
                placeholder="0"
                value={carbAmount}
                onChange={(e) => setCarbAmount(e.target.value)}
                className="w-full p-4 bg-white border border-emerald-200/50 rounded-2xl text-2xl font-black text-emerald-700 outline-none shadow-sm focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] border-b border-slate-100 pb-3">Sugestão de Insulina (Unidades)</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <label className="block text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest">Refeição</label>
                <input
                  type="number"
                  step="0.1"
                  value={mealInsulin}
                  onChange={(e) => setMealInsulin(e.target.value)}
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-center font-black text-blue-600 text-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div className="text-center">
                <label className="block text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest">Correção</label>
                <input
                  type="number"
                  step="0.1"
                  value={correctionInsulin}
                  onChange={(e) => setCorrectionInsulin(e.target.value)}
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-center font-black text-purple-600 text-xl focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>
               <div className="text-center">
                <label className="block text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest">Basal</label>
                <input
                  type="number"
                  step="0.1"
                  value={basalInsulin}
                  onChange={(e) => setBasalInsulin(e.target.value)}
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-center font-black text-teal-600 text-xl focus:ring-2 focus:ring-teal-500 outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2">Medicação via Oral (Unid.)</label>
              <input
                type="number"
                value={pills}
                onChange={(e) => setPills(e.target.value)}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl font-black text-slate-600 text-sm focus:ring-2 focus:ring-slate-400 outline-none"
              />
            </div>
          </div>

          <div className="pt-6 flex gap-4">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 py-5 px-4 border-2 border-slate-50 rounded-2xl font-black text-slate-400 text-xs uppercase tracking-widest hover:bg-slate-50 transition-all active:scale-95"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 py-5 px-4 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-50 transform active:scale-95"
            >
              {initialLog ? 'Salvar Alterações' : 'Salvar Registro'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogForm;
