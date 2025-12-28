
import { FoodItem, DiabetesType } from './types';

export const RAPID_INSULINS = [
  'Humalog (Lispro)',
  'NovoRapid (Aspart)',
  'Apidra (Glulisine)',
  'Fiasp (Aspart Fast-acting)',
  'Lyumjev (Lispro)',
  'Admelog',
  'Outra'
];

export const BASAL_INSULINS = [
  'Lantus (Glargina 100 U/mL)',
  'Levemir (Detemir)',
  'Toujeo (Glargina 300 U/mL)',
  'Tresiba (Degludeca)',
  'Basaglar (Glargina)',
  'NPH',
  'Outra'
];

export const DIABETES_TYPES = Object.values(DiabetesType);

export const CATEGORIES = [
  'Frutas e Derivados',
  'Verduras e Legumes',
  'Grãos, Massas e Tubérculos',
  'Leguminosas e Pratos Típicos',
  'Carnes e Ovos',
  'Leites e Iogurtes',
  'Pães, Biscoitos e Bolos',
  'Doces e Sobremesas',
  'Bebidas e Sucos',
  'Fast Food e Restaurantes',
  'Suplementos e Industrializados'
];

export const FOOD_DATABASE: FoodItem[] = [
  // --- A ---
  { id: 'sbd-001', name: 'Abacate', category: 'Frutas e Derivados', variations: [{ label: '1 fatia (90g)', carbsPerUnit: 5 }, { label: '1 colher sopa picado (45g)', carbsPerUnit: 3 }] },
  { id: 'sbd-002', name: 'Abacaxi', category: 'Frutas e Derivados', variations: [{ label: '1 fatia média (75g)', carbsPerUnit: 10 }, { label: 'Em calda (64g)', carbsPerUnit: 19 }, { label: 'Polpa (100g)', carbsPerUnit: 8 }, { label: 'Suco c/ açúcar (240ml)', carbsPerUnit: 25 }] },
  { id: 'sbd-003', name: 'Abóbora', category: 'Verduras e Legumes', variations: [{ label: 'Cabotian cozida (36g)', carbsPerUnit: 3 }, { label: 'Crua (36g)', carbsPerUnit: 4 }, { label: 'D\'água (36g)', carbsPerUnit: 0 }, { label: 'Doce picada (36g)', carbsPerUnit: 4 }, { label: 'Moranga (36g)', carbsPerUnit: 1 }] },
  { id: 'sbd-004', name: 'Abobrinha', category: 'Verduras e Legumes', variations: [{ label: 'Recheada (100g)', carbsPerUnit: 6 }, { label: 'Italiana cozida (20g)', carbsPerUnit: 0 }, { label: 'Paulista crua (20g)', carbsPerUnit: 2 }] },
  { id: 'sbd-005', name: 'Açaí', category: 'Frutas e Derivados', variations: [{ label: 'Polpa c/ farinha mandioca (150g)', carbsPerUnit: 85 }, { label: 'Polpa c/ farinha tapioca (150g)', carbsPerUnit: 85 }, { label: 'Natural concentrada (150g)', carbsPerUnit: 55 }, { label: 'C/ xarope guaraná (100g)', carbsPerUnit: 21 }, { label: 'Frooty (60g)', carbsPerUnit: 13 }, { label: 'Frooty Zero (60g)', carbsPerUnit: 10 }] },
  { id: 'sbd-006', name: 'Achocolatado', category: 'Suplementos e Industrializados', variations: [{ label: 'Diet Gold (5g)', carbsPerUnit: 3 }, { label: 'Diet Linea (5g)', carbsPerUnit: 3 }, { label: 'Nescau Light (10g)', carbsPerUnit: 8 }, { label: 'Toddy Light (10g)', carbsPerUnit: 8 }, { label: 'Nescau Tradicional (10g)', carbsPerUnit: 9 }, { label: 'Toddy Tradicional (10g)', carbsPerUnit: 9 }] },
  { id: 'sbd-007', name: 'Açúcar', category: 'Doces e Sobremesas', variations: [{ label: 'Branco refinado (30g)', carbsPerUnit: 30 }, { label: 'Cristal (24g)', carbsPerUnit: 24 }, { label: 'De coco (5g)', carbsPerUnit: 5 }, { label: 'Mascavo (19g)', carbsPerUnit: 17 }] },
  { id: 'sbd-008', name: 'Aipim/Mandioca', category: 'Grãos, Massas e Tubérculos', variations: [{ label: 'Cozido (100g)', carbsPerUnit: 30 }, { label: 'Frito (100g)', carbsPerUnit: 50 }] },
  { id: 'sbd-009', name: 'Arroz Branco Cozido', category: 'Grãos, Massas e Tubérculos', variations: [{ label: '1 colher arroz (45g)', carbsPerUnit: 15 }, { label: '1 colher sopa (20g)', carbsPerUnit: 6 }] },
  { id: 'sbd-010', name: 'Arroz Pratos Variados', category: 'Grãos, Massas e Tubérculos', variations: [{ label: 'À Grega (60g)', carbsPerUnit: 18 }, { label: 'Carreteiro (45g)', carbsPerUnit: 5 }, { label: 'Piamontese (55g)', carbsPerUnit: 11 }, { label: 'Negro (25g)', carbsPerUnit: 8 }, { label: 'Para Sushi (25g)', carbsPerUnit: 7 }] },
  
  // --- B ---
  { id: 'sbd-011', name: 'Bacalhau', category: 'Leguminosas e Pratos Típicos', variations: [{ label: 'Gomes de Sá (100g)', carbsPerUnit: 13 }, { label: 'Com Natas (100g)', carbsPerUnit: 13 }, { label: 'Espiritual (100g)', carbsPerUnit: 20 }, { label: 'Bacalhoada (30g)', carbsPerUnit: 2 }] },
  { id: 'sbd-012', name: 'Banana', category: 'Frutas e Derivados', variations: [{ label: 'À milanesa (100g)', carbsPerUnit: 24 }, { label: 'Caramelada (50g)', carbsPerUnit: 29 }, { label: 'Nanica (86g)', carbsPerUnit: 20 }, { label: 'Prata (55g)', carbsPerUnit: 14 }, { label: 'Da Terra Crua (100g)', carbsPerUnit: 27 }, { label: 'Da Terra Frita (31g)', carbsPerUnit: 10 }] },
  { id: 'sbd-013', name: 'Barra de Cereais', category: 'Suplementos e Industrializados', variations: [{ label: 'Línea (20g)', carbsPerUnit: 11 }, { label: 'Trio Light (20g)', carbsPerUnit: 14 }, { label: 'Nutry Original (30g)', carbsPerUnit: 11 }] },
  { id: 'sbd-014', name: 'Batata', category: 'Grãos, Massas e Tubérculos', variations: [{ label: 'Inglesa Cozida (30g)', carbsPerUnit: 6 }, { label: 'Inglesa Frita (65g)', carbsPerUnit: 23 }, { label: 'Doce Cozida (42g)', carbsPerUnit: 10 }, { label: 'Palha (13g)', carbsPerUnit: 6 }] },
  { id: 'sbd-015', name: 'Biscoito', category: 'Pães, Biscoitos e Bolos', variations: [{ label: 'Água e Sal (8g)', carbsPerUnit: 5 }, { label: 'Cream Cracker (5g)', carbsPerUnit: 4 }, { label: 'Maisena (5g)', carbsPerUnit: 4 }, { label: 'Recheado (10g)', carbsPerUnit: 7 }] },
  { id: 'sbd-016', name: 'Bolos', category: 'Pães, Biscoitos e Bolos', variations: [{ label: 'Simples s/ cobertura (60g)', carbsPerUnit: 31 }, { label: 'Cenoura (60g)', carbsPerUnit: 38 }, { label: 'Chocolate (100g)', carbsPerUnit: 54 }, { label: 'Festa c/ recheio (100g)', carbsPerUnit: 65 }] },
  
  // --- C ---
  { id: 'sbd-017', name: 'Café', category: 'Bebidas e Sucos', variations: [{ label: 'Com açúcar (200ml)', carbsPerUnit: 20 }, { label: 'Sem açúcar (200ml)', carbsPerUnit: 0 }] },
  { id: 'sbd-018', name: 'Cerveja', category: 'Bebidas e Sucos', variations: [{ label: 'Comum (350ml)', carbsPerUnit: 12 }, { label: '0% Carbo Bruder (350ml)', carbsPerUnit: 0 }, { label: 'Malzbier (350ml)', carbsPerUnit: 49 }] },
  { id: 'sbd-019', name: 'Chocolate', category: 'Doces e Sobremesas', variations: [{ label: 'Ao leite (25g)', carbsPerUnit: 15 }, { label: 'Amargo 70% (25g)', carbsPerUnit: 8 }, { label: 'Branco (25g)', carbsPerUnit: 14 }] },
  { id: 'sbd-020', name: 'Coxinha de Frango', category: 'Leguminosas e Pratos Típicos', variations: [{ label: 'Grande (110g)', carbsPerUnit: 38 }, { label: 'Média (50g)', carbsPerUnit: 17 }, { label: 'Pequena (20g)', carbsPerUnit: 7 }] },
  
  // --- FAST FOOD (Págs 115, 116, 140, 153) ---
  { id: 'sbd-ff1', name: 'McDonald\'s Burgers', category: 'Fast Food e Restaurantes', variations: [{ label: 'Big Mac', carbsPerUnit: 41 }, { label: 'Quarteirão', carbsPerUnit: 34 }, { label: 'McChicken', carbsPerUnit: 37 }, { label: 'CBO', carbsPerUnit: 56 }] },
  { id: 'sbd-ff2', name: 'McDonald\'s Acompanhamentos', category: 'Fast Food e Restaurantes', variations: [{ label: 'McFritas Média', carbsPerUnit: 35 }, { label: 'McNuggets 10 un', carbsPerUnit: 24 }] },
  { id: 'sbd-ff3', name: 'McDonald\'s Sobremesas', category: 'Fast Food e Restaurantes', variations: [{ label: 'Sundae Chocolate', carbsPerUnit: 44 }, { label: 'McFlurry M&M', carbsPerUnit: 86 }, { label: 'Casquinha Baunilha', carbsPerUnit: 31 }] },
  { id: 'sbd-ff4', name: 'Subway (15cm)', category: 'Fast Food e Restaurantes', variations: [{ label: 'BMT Italiano', carbsPerUnit: 47 }, { label: 'Frango Teriyaki', carbsPerUnit: 61 }, { label: 'Carne e Queijo', carbsPerUnit: 48 }] },
  { id: 'sbd-ff5', name: 'Habib\'s', category: 'Fast Food e Restaurantes', variations: [{ label: 'Esfiha Carne', carbsPerUnit: 23 }, { label: 'Esfiha Queijo', carbsPerUnit: 22 }, { label: 'Beirute Habibão', carbsPerUnit: 45 }] },

  // --- IOGURTES (Págs 101-106) ---
  { id: 'sbd-i1', name: 'Iogurte Activia', category: 'Leites e Iogurtes', variations: [{ label: 'Aveia (170g)', carbsPerUnit: 22 }, { label: 'Morango (200ml)', carbsPerUnit: 25 }, { label: 'Zero (170g)', carbsPerUnit: 6.5 }] },
  { id: 'sbd-i2', name: 'Iogurte Grego', category: 'Leites e Iogurtes', variations: [{ label: 'Vigor Tradicional (90g)', carbsPerUnit: 16 }, { label: 'Vigor Zero (90g)', carbsPerUnit: 5 }] },
  { id: 'sbd-i3', name: 'Iogurte YoPRO', category: 'Leites e Iogurtes', variations: [{ label: '15g Proteína (250ml)', carbsPerUnit: 19 }, { label: '25g Proteína (250ml)', carbsPerUnit: 13 }] },
  { id: 'sbd-i4', name: 'Iogurte Yorgus', category: 'Leites e Iogurtes', variations: [{ label: 'Natural 0% (130g)', carbsPerUnit: 3 }, { label: 'Sem Lactose (130g)', carbsPerUnit: 2.6 }] },

  // --- PROTEÍNAS (MAIORIA 0 CHO) ---
  { id: 'sbd-p1', name: 'Carne Bovina', category: 'Carnes e Ovos', variations: [{ label: 'Grelhada/Assada (100g)', carbsPerUnit: 0 }, { label: 'Moída (25g)', carbsPerUnit: 0 }] },
  { id: 'sbd-p2', name: 'Frango', category: 'Carnes e Ovos', variations: [{ label: 'Filé Grelhado (100g)', carbsPerUnit: 0 }, { label: 'Coxa Assada (65g)', carbsPerUnit: 0 }] },
  { id: 'sbd-p3', name: 'Ovos', category: 'Carnes e Ovos', variations: [{ label: 'Cozido/Frito (1 un)', carbsPerUnit: 0 }, { label: 'Omelete simples', carbsPerUnit: 2 }] },

  // --- PIZZAS (Fatia) ---
  { id: 'sbd-pz1', name: 'Pizza (Fatia 100g)', category: 'Fast Food e Restaurantes', variations: [{ label: 'Mussarela', carbsPerUnit: 22 }, { label: 'Calabresa', carbsPerUnit: 21 }, { label: 'Portuguesa', carbsPerUnit: 24 }, { label: 'Doce Chocolate', carbsPerUnit: 54 }] },
  
  // --- BEBIDAS (Sucos e Refris) ---
  { id: 'sbd-b1', name: 'Suco de Laranja', category: 'Bebidas e Sucos', variations: [{ label: 'Natural (200ml)', carbsPerUnit: 21 }, { label: 'Del Valle (200ml)', carbsPerUnit: 28 }] },
  { id: 'sbd-b2', name: 'Refrigerante', category: 'Bebidas e Sucos', variations: [{ label: 'Lata (350ml)', carbsPerUnit: 37 }, { label: 'Copo (200ml)', carbsPerUnit: 21 }, { label: 'Zero/Diet (qualquer)', carbsPerUnit: 0 }] },
];
