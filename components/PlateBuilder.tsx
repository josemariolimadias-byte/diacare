
import React, { useState, useMemo, useEffect } from 'react';
import { FOOD_DATABASE, CATEGORIES } from '../constants';
import { FoodItem, FoodItemVariation, PlateItem } from '../types';

interface PlateBuilderProps {
  onConsume: (totalCarbs: number) => void;
}

const PlateBuilder: React.FC<PlateBuilderProps> = ({ onConsume }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(CATEGORIES[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [plate, setPlate] = useState<PlateItem[]>([]);
  const [activeFood, setActiveFood] = useState<FoodItem | null>(null);
  
  // Estado para controlar as quantidades de cada variação do alimento ativo
  const [variationQuantities, setVariationQuantities] = useState<{[key: number]: number}>({});

  // Resetar quantidades quando o alimento ativo mudar
  useEffect(() => {
    if (activeFood) {
      const initialQuants: {[key: number]: number} = {};
      activeFood.variations.forEach((_, idx) => {
        initialQuants[idx] = 1;
      });
      setVariationQuantities(initialQuants);
    }
  }, [activeFood]);

  // Estado para inserção manual (Outros)
  const [isOtherMode, setIsOtherMode] = useState(false);
  const [customFoodName, setCustomFoodName] = useState('');
  const [customFoodCarbs, setCustomFoodCarbs] = useState('');

  const filteredFoods = useMemo(() => {
    let list = FOOD_DATABASE;
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      list = list.filter(f => f.name.toLowerCase().includes(term));
    } else {
      list = list.filter(f => f.category === selectedCategory);
    }
    return list.sort((a, b) => a.name.localeCompare(b.name));
  }, [selectedCategory, searchTerm]);

  const addToPlate = (food: FoodItem, variation: FoodItemVariation, quantity: number) => {
    if (quantity <= 0) return;
    
    const newItem: PlateItem = {
      foodId: food.id,
      foodName: food.name,
      variationLabel: variation.label,
      quantity,
      totalCarbs: Math.round((variation.carbsPerUnit * quantity) * 10) / 10
    };
    setPlate([...plate, newItem]);
    setActiveFood(null);
    setSearchTerm('');
  };

  const handleQuantityChange = (index: number, val: string) => {
    const num = parseFloat(val);
    setVariationQuantities(prev => ({
      ...prev,
      [index]: isNaN(num) ? 0 : num
    }));
  };

  const handleAddCustom = () => {
    if (!customFoodName || !customFoodCarbs) return;
    const newItem: PlateItem = {
      foodId: 'custom-' + Date.now(),
      foodName: customFoodName,
      variationLabel: 'Manual',
      quantity: 1,
      totalCarbs: parseFloat(customFoodCarbs)
    };
    setPlate([...plate, newItem]);
    setCustomFoodName('');
    setCustomFoodCarbs('');
    setIsOtherMode(false);
  };

  const removeFromPlate = (index: number) => {
    setPlate(plate.filter((_, i) => i !== index));
  };

  const totalCarbs = Math.round(plate.reduce((acc, item) => acc + item.totalCarbs, 0) * 10) / 10;

  const handleOpenOther = () => {
    setIsOtherMode(true);
    setActiveFood(null);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Selector Area */}
      <div className="lg:col-span-2 space-y-5">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <h2 className="text-base font-black flex items-center gap-2 text-slate-800">
              <span>🛒</span> Lista de Alimentos
            </h2>
            
            <div className="relative flex-1 md:max-w-[280px]">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
              <input
                type="text"
                placeholder="Qual alimento você busca?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500 p-1">✕</button>
              )}
            </div>
          </div>

          {!searchTerm && (
            <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide mb-6">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => { setSelectedCategory(cat); setIsOtherMode(false); setActiveFood(null); }}
                  className={`px-4 py-2 rounded-full text-xs whitespace-nowrap transition-all border uppercase tracking-wider
                    ${selectedCategory === cat ? 'bg-blue-600 text-white border-blue-600 font-black shadow-md' : 'bg-white text-slate-500 border-slate-200 hover:border-blue-300 font-bold'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[450px] overflow-y-auto pr-2">
            {filteredFoods.map(food => (
              <button
                key={food.id}
                onClick={() => { setActiveFood(food); setIsOtherMode(false); }}
                className={`p-4 border rounded-xl text-left transition-all flex justify-between items-center group bg-white shadow-sm
                  ${activeFood?.id === food.id ? 'border-blue-500 bg-blue-50/30' : 'border-slate-100 hover:border-blue-300 hover:bg-blue-50/20'}`}
              >
                <div>
                  <span className="font-bold text-slate-700 text-sm block">{food.name}</span>
                  {searchTerm && <span className="text-[10px] text-slate-400 uppercase tracking-tighter font-bold">{food.category}</span>}
                </div>
                <span className="text-blue-500 text-xs opacity-0 group-hover:opacity-100 font-bold">VER OPÇÕES</span>
              </button>
            ))}
            
            <button
                onClick={handleOpenOther}
                className={`p-4 border border-dashed rounded-xl text-left transition-all font-black text-sm flex justify-between items-center
                  ${isOtherMode ? 'border-blue-500 bg-blue-50 text-blue-600' : 'border-slate-200 bg-slate-50/50 text-slate-400 hover:border-blue-400 hover:bg-slate-50'}`}
            >
                <span>➕ Outros / Inserir Manualmente</span>
                {isOtherMode && <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full">ATIVO</span>}
            </button>
          </div>
        </div>

        {/* Formulário de Inserção Manual (Outros) */}
        {isOtherMode && (
          <div className="bg-white p-6 rounded-2xl border-2 border-blue-100 shadow-xl animate-in slide-in-from-bottom-3 duration-300">
            <div className="flex justify-between items-center mb-6">
               <h3 className="text-sm font-black text-blue-700 uppercase tracking-wider">Adicionar Alimento Personalizado</h3>
               <button onClick={() => setIsOtherMode(false)} className="text-slate-400 hover:text-slate-600">✕</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase mb-2">Nome do Alimento</label>
                <input 
                  type="text" 
                  value={customFoodName}
                  onChange={(e) => setCustomFoodName(e.target.value)}
                  placeholder="Ex: Torta de Limão"
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase mb-2">Carboidratos (g)</label>
                <input 
                  type="number" 
                  value={customFoodCarbs}
                  onChange={(e) => setCustomFoodCarbs(e.target.value)}
                  placeholder="0"
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <button 
              onClick={handleAddCustom}
              disabled={!customFoodName || !customFoodCarbs}
              className="w-full mt-6 py-4 bg-blue-600 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 disabled:opacity-30"
            >
              Adicionar ao Prato
            </button>
          </div>
        )}

        {/* Variações do Alimento Selecionado */}
        {activeFood && (
          <div className="bg-blue-600 p-6 rounded-2xl text-white shadow-2xl animate-in slide-in-from-bottom-3 duration-300 border border-blue-500">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-sm font-black uppercase tracking-wider">{activeFood.name}</h3>
                <p className="text-[10px] text-blue-200 font-bold uppercase">{activeFood.category}</p>
              </div>
              <button onClick={() => setActiveFood(null)} className="bg-blue-700 p-2 rounded-full hover:bg-blue-800 transition-colors">
                <span className="text-sm font-bold">✕</span>
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {activeFood.variations.map((v, i) => (
                <div key={i} className="bg-white/10 p-4 rounded-2xl flex items-center justify-between border border-white/10 hover:bg-white/20 transition-colors group">
                  <div className="flex-1">
                    <div className="font-black text-white text-sm">{v.label}</div>
                    <div className="text-blue-100 font-bold text-xs">{v.carbsPerUnit}g por unidade</div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <label className="text-[9px] font-black text-blue-200 uppercase mb-1 tracking-widest">Qtd</label>
                      <input 
                        type="number"
                        min="0.1"
                        step="0.1"
                        value={variationQuantities[i] || 1}
                        onChange={(e) => handleQuantityChange(i, e.target.value)}
                        className="w-16 p-2 bg-white/20 border border-white/30 rounded-xl text-center text-xs font-black text-white outline-none focus:ring-2 focus:ring-white transition-all"
                      />
                    </div>
                    
                    <button
                      onClick={() => addToPlate(activeFood, v, variationQuantities[i] || 1)}
                      className="bg-white text-blue-700 px-5 py-3 rounded-xl text-[10px] font-black hover:bg-blue-50 transition-all shadow-md active:scale-95 uppercase tracking-widest"
                    >
                      ADICIONAR
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Plate / Summary Area */}
      <div className="space-y-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full overflow-hidden max-h-[650px]">
          <div className="px-5 py-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-xs font-black text-slate-700 uppercase tracking-widest">Resumo do Prato</h2>
            {plate.length > 0 && (
               <button onClick={() => setPlate([])} className="text-[10px] font-bold text-red-400 hover:text-red-500 uppercase">LIMPAR TUDO</button>
            )}
          </div>
          <div className="flex-1 p-5 space-y-4 overflow-y-auto">
            {plate.length === 0 ? (
              <div className="text-center py-20 text-slate-300">
                <div className="text-4xl mb-3 opacity-50">🍽️</div>
                <p className="text-xs font-black uppercase tracking-tight">Prato Vazio</p>
                <p className="text-[10px] mt-1 text-slate-400">Selecione alimentos ao lado</p>
              </div>
            ) : (
              plate.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center group animate-in fade-in slide-in-from-right-3 duration-300">
                  <div className="flex-1 min-w-0 pr-3">
                    <div className="font-black text-slate-700 text-sm truncate">{item.foodName}</div>
                    <div className="text-[10px] text-slate-400 font-bold">{item.quantity}x {item.variationLabel}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-black text-slate-800 text-sm bg-slate-100 px-2.5 py-1 rounded-lg">{item.totalCarbs}g</span>
                    <button onClick={() => removeFromPlate(idx)} className="text-slate-300 hover:text-red-500 text-lg transition-colors p-1">✕</button>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="p-6 border-t border-slate-100 bg-blue-50/40">
            <div className="flex justify-between items-center mb-5">
              <span className="text-slate-400 text-xs font-black uppercase tracking-widest">Total Geral:</span>
              <span className="text-2xl font-black text-blue-700">{totalCarbs}g</span>
            </div>
            <button
              onClick={() => onConsume(totalCarbs)}
              disabled={plate.length === 0}
              className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-700 transition-all disabled:opacity-30 shadow-xl shadow-blue-100 active:scale-95"
            >
              VOU CONSUMIR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlateBuilder;
