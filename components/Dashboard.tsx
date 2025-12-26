
import React from 'react';
import { UserProfile, LogEntry } from '../types';

interface DashboardProps {
  user: UserProfile;
  logs: LogEntry[];
  onDelete: (id: string) => void;
  onEdit: (log: LogEntry) => void;
  onNewRecord: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, logs, onDelete, onEdit, onNewRecord }) => {
  const latestGlucose = logs[0]?.glucose;
  const avgGlucose = logs.length > 0 ? Math.round(logs.reduce((acc, l) => acc + l.glucose, 0) / logs.length) : 0;

  const getGlucoseBgClass = (val: number) => {
    if (val < user.hypoThreshold) return 'text-red-600 bg-red-50';
    if (val > user.hyperThreshold) return 'text-orange-600 bg-orange-50';
    if (val >= user.targetRangeMin && val <= user.targetRangeMax) return 'text-green-600 bg-green-50';
    return 'text-blue-600 bg-blue-50';
  };

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-800 tracking-tight">Olá, {user.fullName.split(' ')[0]}</h1>
          <p className="text-sm text-slate-500 font-medium">Resumo do seu controle diário e atividades.</p>
        </div>
        <button
          onClick={onNewRecord}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-xl font-black shadow-lg shadow-blue-100 flex items-center justify-center gap-2 transition-all transform active:scale-95 text-xs uppercase tracking-widest"
        >
          <span className="text-base">+</span> NOVO REGISTRO
        </button>
      </header>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          label="Última Glicemia"
          value={latestGlucose ? `${latestGlucose} ${user.glucoseUnit}` : '--'}
          subtext={latestGlucose ? `Registrado às ${logs[0].time}` : 'Sem registros recentes'}
          colorClass={latestGlucose ? getGlucoseBgClass(latestGlucose) : 'bg-white text-slate-400'}
        />
        <StatCard
          label="Média do Período"
          value={`${avgGlucose} ${user.glucoseUnit}`}
          subtext={`${logs.length} medições totais salvas`}
          colorClass="bg-white"
        />
        <StatCard
          label="Faixa Alvo"
          value={`${user.targetRangeMin} - ${user.targetRangeMax}`}
          subtext={`Unidade padrão: ${user.glucoseUnit}`}
          colorClass="bg-white border-dashed border-2 border-slate-100"
        />
      </div>

      {/* Log Table Container */}
      <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="px-8 py-5 border-b border-slate-50 flex items-center justify-between">
          <h2 className="text-base font-black text-slate-800 tracking-tight">Histórico de Atividades</h2>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full">
            {logs.length} Entradas
          </span>
        </div>
        
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left table-auto min-w-[700px]">
            <thead className="bg-slate-50/50 text-slate-400 text-[10px] uppercase font-black tracking-widest">
              <tr>
                <th className="px-8 py-4">Data e Hora</th>
                <th className="px-8 py-4">Glicemia</th>
                <th className="px-8 py-4 text-center">Carboidratos</th>
                <th className="px-8 py-4">Insulina (R/C/B)</th>
                <th className="px-8 py-4">Medicação</th>
                <th className="px-8 py-4 w-12 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {logs.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-8 py-16 text-center text-slate-400 font-medium">
                    <div className="text-4xl mb-3 opacity-20">📋</div>
                    <p className="text-sm">Nenhum registro encontrado.</p>
                  </td>
                </tr>
              ) : (
                logs.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-50/30 transition-colors group">
                    <td className="px-8 py-5">
                      <div className="font-bold text-slate-700 text-sm">{log.date.split('-').reverse().join('/')}</div>
                      <div className="text-[11px] text-slate-400 font-bold uppercase tracking-tighter">{log.time}</div>
                    </td>
                    <td className="px-8 py-5">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-black shadow-sm inline-block ${getGlucoseBgClass(log.glucose)}`}>
                        {log.glucose}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-center text-slate-600 font-black text-sm">
                        {log.carbAmount}g
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex gap-2">
                        <span className="bg-blue-100 text-blue-700 px-2.5 py-1 rounded-lg text-[10px] font-black" title="Refeição">{log.mealInsulin}U</span>
                        <span className="bg-purple-100 text-purple-700 px-2.5 py-1 rounded-lg text-[10px] font-black" title="Correção">{log.correctionInsulin}U</span>
                        <span className="bg-teal-100 text-teal-700 px-2.5 py-1 rounded-lg text-[10px] font-black" title="Basal">{log.basalInsulin}U</span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-slate-500 font-bold text-sm">{log.pills}u</td>
                    <td className="px-8 py-5 text-right">
                      <div className="flex items-center justify-end gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => onEdit(log)}
                          className="text-slate-400 hover:text-blue-600 transition-all text-lg"
                          title="Editar"
                        >
                          ✏️
                        </button>
                        <button
                          onClick={() => onDelete(log.id)}
                          className="text-slate-300 hover:text-red-500 transition-all text-lg"
                          title="Excluir"
                        >
                          🗑️
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const StatCard: React.FC<{ label: string; value: string; subtext: string; colorClass?: string }> = ({ label, value, subtext, colorClass }) => (
  <div className={`p-7 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-between h-40 transition-all hover:shadow-md ${colorClass || 'bg-white'}`}>
    <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50">{label}</span>
    <div>
      <div className="text-3xl font-black tracking-tighter leading-none">{value}</div>
      <div className="text-xs font-bold opacity-40 mt-2">{subtext}</div>
    </div>
  </div>
);

export default Dashboard;
