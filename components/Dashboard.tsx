
import React, { useState, useMemo } from 'react';
import { UserProfile, LogEntry } from '../types';

interface DashboardProps {
  user: UserProfile;
  logs: LogEntry[];
  onDelete: (id: string) => void;
  onEdit: (log: LogEntry) => void;
  onNewRecord: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, logs, onDelete, onEdit, onNewRecord }) => {
  // Estados para o filtro de data
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  // Lógica de filtragem e cálculo de estatísticas
  const stats = useMemo(() => {
    let filtered = logs;
    
    if (startDate) {
      filtered = filtered.filter(log => log.date >= startDate);
    }
    if (endDate) {
      filtered = filtered.filter(log => log.date <= endDate);
    }

    const count = filtered.length;
    if (count === 0) return { 
      avgGlucose: 0, 
      totalCarbs: 0, 
      totalRapid: 0, 
      totalBasal: 0, 
      count: 0,
      filteredLogs: [] 
    };

    const sumGlucose = filtered.reduce((acc, l) => acc + l.glucose, 0);
    const totalCarbs = filtered.reduce((acc, l) => acc + l.carbAmount, 0);
    const totalRapid = filtered.reduce((acc, l) => acc + (l.mealInsulin + l.correctionInsulin), 0);
    const totalBasal = filtered.reduce((acc, l) => acc + l.basalInsulin, 0);

    return {
      avgGlucose: Math.round(sumGlucose / count),
      totalCarbs,
      totalRapid: Math.round(totalRapid * 10) / 10,
      totalBasal: Math.round(totalBasal * 10) / 10,
      count,
      filteredLogs: filtered
    };
  }, [logs, startDate, endDate]);

  const getGlucoseBgClass = (val: number) => {
    if (val < user.hypoThreshold) return 'text-red-600 bg-red-50';
    if (val > user.hyperThreshold) return 'text-orange-600 bg-orange-50';
    if (val >= user.targetRangeMin && val <= user.targetRangeMax) return 'text-green-600 bg-green-50';
    return 'text-blue-600 bg-blue-50';
  };

  const clearFilters = () => {
    setStartDate('');
    setEndDate('');
  };

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-800 tracking-tight">Olá, {user.fullName.split(' ')[0]}</h1>
          <p className="text-sm text-slate-500 font-medium">Relatórios e métricas de controle glicêmico.</p>
        </div>
        <button
          onClick={onNewRecord}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-xl font-black shadow-lg shadow-blue-100 flex items-center justify-center gap-2 transition-all transform active:scale-95 text-xs uppercase tracking-widest"
        >
          <span className="text-base">+</span> NOVO REGISTRO
        </button>
      </header>

      {/* Seção de Filtros */}
      <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
        <div className="flex flex-col md:flex-row items-end gap-4">
          <div className="flex-1 w-full">
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Filtrar por Início</label>
            <input 
              type="date" 
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-sm font-bold text-slate-700"
            />
          </div>
          <div className="flex-1 w-full">
            <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Filtrar por Término</label>
            <input 
              type="date" 
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-sm font-bold text-slate-700"
            />
          </div>
          <button 
            onClick={clearFilters}
            className="p-3.5 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-xl transition-colors font-black text-[10px] uppercase tracking-widest"
          >
            Limpar
          </button>
        </div>
      </div>

      {/* Métricas do Período */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          label="Média Glicêmica"
          value={stats.avgGlucose ? `${stats.avgGlucose} ${user.glucoseUnit}` : '--'}
          subtext={`Baseado em ${stats.count} registros`}
          colorClass={stats.avgGlucose ? getGlucoseBgClass(stats.avgGlucose) : 'bg-white text-slate-400'}
        />
        <StatCard
          label="Carboidratos Totais"
          value={`${stats.totalCarbs}g`}
          subtext="No período selecionado"
          colorClass="bg-white"
        />
        <StatCard
          label="Insulina Rápida"
          value={`${stats.totalRapid} U`}
          subtext="Refeição + Correção"
          colorClass="bg-blue-50 text-blue-700"
        />
        <StatCard
          label="Insulina Basal"
          value={`${stats.totalBasal} U`}
          subtext="Ação Prolongada"
          colorClass="bg-teal-50 text-teal-700"
        />
      </div>

      {/* Tabela de Registros do Filtro */}
      <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="px-8 py-5 border-b border-slate-50 flex items-center justify-between">
          <h2 className="text-base font-black text-slate-800 tracking-tight">Registros do Período</h2>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full">
            {stats.filteredLogs.length} Entradas
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
              {stats.filteredLogs.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-8 py-16 text-center text-slate-400 font-medium">
                    <div className="text-4xl mb-3 opacity-20">📋</div>
                    <p className="text-sm">Nenhum registro para este período.</p>
                  </td>
                </tr>
              ) : (
                stats.filteredLogs.map((log) => (
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
  <div className={`p-6 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-between h-40 transition-all hover:shadow-md ${colorClass || 'bg-white'}`}>
    <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-50">{label}</span>
    <div>
      <div className="text-2xl font-black tracking-tighter leading-none">{value}</div>
      <div className="text-[10px] font-bold opacity-40 mt-2">{subtext}</div>
    </div>
  </div>
);

export default Dashboard;
