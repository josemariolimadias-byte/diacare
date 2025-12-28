
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
  const [variationQuantities, setVariationQuantities] = useState<{[key: number]: number}>({});

  useEffect(() => {
    if (activeFood) {
      const initialQuants: {[key: number]: number} = {};
      activeFood.variations.forEach((_, idx) => {
        initialQuants[idx] = 1;
      });
      setVariationQuantities(initialQuants);
    }
  }, [activeFood]);

  const [isOtherMode, setIsOtherMode] = useState(false);
  const [customFoodName, setCustomFoodName] = useState('');
  const [customFoodCarbs, setCustomFoodCarbs] = useState('');
  const [customFoodKcal, setCustomFoodKcal] = useState('');

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
      totalCarbs: Math.round((variation.carbsPerUnit * quantity) * 10) / 10,
      totalCalories: Math.round((variation.caloriesPerUnit * quantity) * 10) / 10
    };
    setPlate([...plate, newItem]);
    setActiveFood(null);
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
      totalCarbs: parseFloat(customFoodCarbs),
      totalCalories: parseFloat(customFoodKcal) || 0
    };
    setPlate([...plate, newItem]);
    setCustomFoodName('');
    setCustomFoodCarbs('');
    setCustomFoodKcal('');
    setIsOtherMode(false);
  };

  const removeFromPlate = (index: number) => {
    setPlate(plate.filter((_, i) => i !== index));
  };

  const totalCarbs = Math.round(plate.reduce((acc, item) => acc + item.totalCarbs, 0) * 10) / 10;
  const totalKcal = Math.round(plate.reduce((acc, item) => acc + item.totalCalories, 0) * 10) / 10;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-5">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <h2 className="text-base font-black flex items-center gap-2 text-slate-800">
              <span>🛒</span> Oficial SBD
            </h2>
            <div className="relative flex-1 md:max-w-[280px]">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
              <input
                type="text"
                placeholder="Buscar alimento oficial..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
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
                  <span className="text-[9px] text-slate-400 font-bold uppercase">{food.variations.length} OPÇÕES</span>
                </div>
                <span className="text-blue-500 text-[10px] font-black opacity-0 group-hover:opacity-100">SELECIONAR</span>
              </button>
            ))}
            
            <button
                onClick={() => { setIsOtherMode(true); setActiveFood(null); }}
                className="p-4 border border-dashed border-slate-300 rounded-xl text-left transition-all font-black text-sm text-slate-400 hover:border-blue-400 hover:bg-slate-50"
            >
                <span>➕ Inserir Manualmente</span>
            </button>
          </div>
        </div>

        {isOtherMode && (
          <div className="bg-white p-6 rounded-2xl border-2 border-blue-100 shadow-xl animate-in slide-in-from-bottom-3 duration-300">
            <h3 className="text-sm font-black text-blue-700 uppercase tracking-wider mb-6">Item Personalizado</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input type="text" value={customFoodName} onChange={(e) => setCustomFoodName(e.target.value)} placeholder="Nome" className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold" />
              <input type="number" value={customFoodCarbs} onChange={(e) => setCustomFoodCarbs(e.target.value)} placeholder="Carbos (g)" className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold" />
              <input type="number" value={customFoodKcal} onChange={(e) => setCustomFoodKcal(e.target.value)} placeholder="Kcal" className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold" />
            </div>
            <button onClick={handleAddCustom} className="w-full mt-6 py-4 bg-blue-600 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-700">ADICIONAR</button>
          </div>
        )}

        {activeFood && (
          <div className="bg-blue-600 p-6 rounded-2xl text-white shadow-2xl animate-in slide-in-from-bottom-3 duration-300 border border-blue-500">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-black uppercase tracking-wider">{activeFood.name}</h3>
              <button onClick={() => setActiveFood(null)} className="text-white opacity-50 hover:opacity-100">✕</button>
            </div>
            <div className="space-y-3">
              {activeFood.variations.map((v, i) => (
                <div key={i} className="bg-white/10 p-4 rounded-xl flex items-center justify-between border border-white/5">
                  <div className="flex-1">
                    <div className="font-black text-white text-sm">{v.label}</div>
                    <div className="text-blue-100 font-bold text-[10px]">{v.carbsPerUnit}g CHO | {v.caloriesPerUnit} kcal</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <input 
                      type="number" min="0.1" step="0.1" value={variationQuantities[i] || 1}
                      onChange={(e) => handleQuantityChange(i, e.target.value)}
                      className="w-12 p-2 bg-white/20 rounded-lg text-center text-xs font-black text-white outline-none"
                    />
                    <button onClick={() => addToPlate(activeFood, v, variationQuantities[i] || 1)} className="bg-white text-blue-700 px-4 py-2 rounded-lg text-[10px] font-black uppercase">ADD</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full overflow-hidden max-h-[650px]">
        <div className="px-5 py-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-xs font-black text-slate-700 uppercase tracking-widest">Seu Prato</h2>
          {plate.length > 0 && (
             <button onClick={() => setPlate([])} className="text-[10px] font-bold text-red-400 uppercase">Limpar</button>
          )}
        </div>
        <div className="flex-1 p-5 space-y-4 overflow-y-auto">
          {plate.length === 0 ? (
            <div className="text-center py-20 text-slate-300">
              <div className="text-4xl mb-3 opacity-50">🍽️</div>
              <p className="text-xs font-black uppercase tracking-tight">Vazio</p>
            </div>
          ) : (
            plate.map((item, idx) => (
              <div key={idx} className="flex justify-between items-start group">
                <div className="flex-1 min-w-0 pr-3">
                  <div className="font-black text-slate-700 text-sm truncate">{item.foodName}</div>
                  <div className="text-[10px] text-slate-400 font-bold">{item.quantity}x {item.variationLabel}</div>
                  <div className="text-[9px] text-blue-500 font-bold">{item.totalCalories} kcal</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-black text-slate-800 text-xs bg-slate-100 px-2 py-1 rounded-lg">{item.totalCarbs}g</span>
                  <button onClick={() => removeFromPlate(idx)} className="text-slate-300 hover:text-red-500">✕</button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="p-6 border-t border-slate-100 bg-blue-50/40">
          <div className="flex justify-between items-center mb-1">
            <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Total Carboidratos:</span>
            <span className="text-xl font-black text-blue-700">{totalCarbs}g</span>
          </div>
          <div className="flex justify-between items-center mb-5">
            <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Total Calorias:</span>
            <span className="text-sm font-bold text-slate-600">{totalKcal} kcal</span>
          </div>
          <button
            onClick={() => onConsume(totalCarbs)}
            disabled={plate.length === 0}
            className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-700 transition-all disabled:opacity-30 shadow-xl shadow-blue-100"
          >
            VOU CONSUMIR
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlateBuilder;
