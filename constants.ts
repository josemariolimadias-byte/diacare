
import { FoodItem, DiabetesType } from './types';

export const RAPID_INSULINS = [
  'Humalog (Lispro)', 'NovoRapid (Aspart)', 'Apidra (Glulisine)', 'Fiasp (Aspart Fast-acting)',
  'Lyumjev (Lispro)', 'Admelog', 'Outra'
];

export const BASAL_INSULINS = [
  'Lantus (Glargina 100 U/mL)', 'Levemir (Detemir)', 'Toujeo (Glargina 300 U/mL)',
  'Tresiba (Degludeca)', 'Basaglar (Glargina)', 'NPH', 'Outra'
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
  'Doces, Chocolates e Sobremesas',
  'Bebidas e Sucos',
  'Fast Food e Restaurantes',
  'Suplementos e Industrializados'
];

export const FOOD_DATABASE: FoodItem[] = [
  // --- A ---
  { id: 'sbd-001', name: 'Abacate', category: 'Frutas e Derivados', variations: [{ label: '1 fatia (90g)', carbsPerUnit: 5 }, { label: '1 colher sopa picado (45g)', carbsPerUnit: 3 }] },
  { id: 'sbd-002', name: 'Abacaxi', category: 'Frutas e Derivados', variations: [{ label: '1 fatia média (75g)', carbsPerUnit: 10 }, { label: 'Em calda (64g)', carbsPerUnit: 19 }, { label: 'Polpa congelada (100g)', carbsPerUnit: 8 }, { label: 'Suco c/ açúcar (240ml)', carbsPerUnit: 25 }] },
  { id: 'sbd-003', name: 'Abadejo assado', category: 'Carnes e Ovos', variations: [{ label: '1 filé médio (100g)', carbsPerUnit: 0 }] },
  { id: 'sbd-004', name: 'Abará', category: 'Leguminosas e Pratos Típicos', variations: [{ label: '1 unidade média (170g)', carbsPerUnit: 24 }] },
  { id: 'sbd-005', name: 'Abiu cru', category: 'Frutas e Derivados', variations: [{ label: '1 unidade (100g)', carbsPerUnit: 15 }] },
  { id: 'sbd-006', name: 'Abóbora', category: 'Verduras e Legumes', variations: [{ label: 'Cabotian cozida (36g)', carbsPerUnit: 3 }, { label: 'Moranga picada (36g)', carbsPerUnit: 1 }, { label: 'Doce picada (36g)', carbsPerUnit: 4 }, { label: 'D\'água picada (36g)', carbsPerUnit: 0 }] },
  { id: 'sbd-007', name: 'Abobrinha', category: 'Verduras e Legumes', variations: [{ label: 'Italiana cozida (20g)', carbsPerUnit: 0 }, { label: 'Paulista crua (20g)', carbsPerUnit: 2 }, { label: 'Recheada (100g)', carbsPerUnit: 6 }] },
  { id: 'sbd-008', name: 'Açaí Frooty ®', category: 'Frutas e Derivados', variations: [{ label: 'Natural bola (60g)', carbsPerUnit: 13 }, { label: 'Zero bola (60g)', carbsPerUnit: 10 }] },
  { id: 'sbd-009', name: 'Açaí Polpa', category: 'Frutas e Derivados', variations: [{ label: 'C/ farinha mandioca (150g)', carbsPerUnit: 85 }, { label: 'C/ farinha tapioca (150g)', carbsPerUnit: 85 }, { label: 'Natural concentrada (150g)', carbsPerUnit: 55 }, { label: 'C/ xarope guaraná (100g)', carbsPerUnit: 21 }, { label: 'Suco (240ml)', carbsPerUnit: 72 }] },
  { id: 'sbd-010', name: 'Achocolatado em pó', category: 'Suplementos e Industrializados', variations: [{ label: 'Nescau Tradicional (10g)', carbsPerUnit: 9 }, { label: 'Nescau Light (10g)', carbsPerUnit: 8 }, { label: 'Toddy Tradicional (10g)', carbsPerUnit: 9 }, { label: 'Diet Gold (5g)', carbsPerUnit: 3 }, { label: 'Diet Linea (5g)', carbsPerUnit: 3 }] },
  { id: 'sbd-011', name: 'Açúcar', category: 'Doces, Chocolates e Sobremesas', variations: [{ label: 'Branco refinado (30g)', carbsPerUnit: 30 }, { label: 'Cristal (24g)', carbsPerUnit: 24 }, { label: 'Mascavo (19g)', carbsPerUnit: 17 }, { label: 'De coco (5g)', carbsPerUnit: 5 }] },
  { id: 'sbd-012', name: 'Aguardente', category: 'Bebidas e Sucos', variations: [{ label: '1 dose (50ml)', carbsPerUnit: 0 }] },
  { id: 'sbd-013', name: 'Aipim/Mandioca', category: 'Grãos, Massas e Tubérculos', variations: [{ label: 'Cozido (100g)', carbsPerUnit: 30 }, { label: 'Frito (100g)', carbsPerUnit: 50 }] },
  { id: 'sbd-014', name: 'Alfajor', category: 'Doces, Chocolates e Sobremesas', variations: [{ label: 'Cacau Show ao leite (40g)', carbsPerUnit: 23 }, { label: 'Brasil Cacau Doce Leite (25g)', carbsPerUnit: 15 }] },
  { id: 'sbd-015', name: 'Almôndega bovina', category: 'Carnes e Ovos', variations: [{ label: '1 unidade média (50g)', carbsPerUnit: 4 }] },
  { id: 'sbd-016', name: 'Amendoim', category: 'Grãos, Massas e Tubérculos', variations: [{ label: 'Torrado salgado (34g)', carbsPerUnit: 5 }, { label: 'Caramelizado (20g)', carbsPerUnit: 14 }] },
  { id: 'sbd-017', name: 'Arroz Branco Cozido', category: 'Grãos, Massas e Tubérculos', variations: [{ label: '1 colher arroz (45g)', carbsPerUnit: 15 }, { label: '1 colher sopa (20g)', carbsPerUnit: 6 }] },
  { id: 'sbd-018', name: 'Arroz Pratos Variados', category: 'Grãos, Massas e Tubérculos', variations: [{ label: 'À Grega (60g)', carbsPerUnit: 18 }, { label: 'Carreteiro (45g)', carbsPerUnit: 5 }, { label: 'Piamontese (55g)', carbsPerUnit: 11 }, { label: 'Negro (25g)', carbsPerUnit: 8 }, { label: 'Para Sushi (25g)', carbsPerUnit: 7 }] },
  { id: 'sbd-019', name: 'Aveia', category: 'Pães, Biscoitos e Bolos', variations: [{ label: 'Flocos crua (15g)', carbsPerUnit: 10 }, { label: 'Farinha crua (18g)', carbsPerUnit: 12 }, { label: 'Flocos finos Quaker (15g)', carbsPerUnit: 8 }] },

  // --- B ---
  { id: 'sbd-020', name: 'Bacalhau', category: 'Leguminosas e Pratos Típicos', variations: [{ label: 'Gomes de Sá (100g)', carbsPerUnit: 13 }, { label: 'Com Natas (100g)', carbsPerUnit: 13 }, { label: 'Espiritual (100g)', carbsPerUnit: 20 }, { label: 'Refogado (100g)', carbsPerUnit: 1 }] },
  { id: 'sbd-021', name: 'Banana', category: 'Frutas e Derivados', variations: [{ label: 'Nanica (86g)', carbsPerUnit: 20 }, { label: 'Prata média (55g)', carbsPerUnit: 14 }, { label: 'Maçã (65g)', carbsPerUnit: 17 }, { label: 'Terra crua (100g)', carbsPerUnit: 27 }, { label: 'Terra frita (31g)', carbsPerUnit: 10 }, { label: 'À milanesa (100g)', carbsPerUnit: 24 }] },
  { id: 'sbd-022', name: 'Barra de Cereais', category: 'Suplementos e Industrializados', variations: [{ label: 'Linea Cookies (20g)', carbsPerUnit: 13 }, { label: 'Linea Banana/Aveia (20g)', carbsPerUnit: 13 }, { label: 'Magrinha Castanha (15g)', carbsPerUnit: 6.2 }, { label: 'Trio Avelã/Choc (20g)', carbsPerUnit: 9.1 }] },
  { id: 'sbd-023', name: 'Barra de Proteína', category: 'Suplementos e Industrializados', variations: [{ label: 'Bold Cookies (54g)', carbsPerUnit: 14 }, { label: 'Bold Thin Caramelo (40g)', carbsPerUnit: 12 }, { label: 'YoPro Nutrata (55g)', carbsPerUnit: 15 }, { label: 'Win Stage Choc/Amend (54g)', carbsPerUnit: 20 }] },
  { id: 'sbd-024', name: 'Batata', category: 'Grãos, Massas e Tubérculos', variations: [{ label: 'Inglesa cozida (30g)', carbsPerUnit: 6 }, { label: 'Inglesa frita (65g)', carbsPerUnit: 23 }, { label: 'Doce cozida (42g)', carbsPerUnit: 10 }, { label: 'Doce assada (30g)', carbsPerUnit: 10 }, { label: 'Palha (13g)', carbsPerUnit: 6 }, { label: 'Pringles (25g)', carbsPerUnit: 13 }] },
  { id: 'sbd-025', name: 'Beirute Habib\'s ®', category: 'Fast Food e Restaurantes', variations: [{ label: 'Frango Crocante (553g)', carbsPerUnit: 84 }, { label: 'Habibão (636g)', carbsPerUnit: 45 }, { label: 'Rosbife (418g)', carbsPerUnit: 56 }] },
  { id: 'sbd-026', name: 'Bib\'s Sfiha (Habib\'s) ®', category: 'Fast Food e Restaurantes', variations: [{ label: 'Carne (75g)', carbsPerUnit: 23 }, { label: 'Queijo (70g)', carbsPerUnit: 22 }, { label: 'Calabresa (70g)', carbsPerUnit: 19 }, { label: 'Cheddar Burger (296g)', carbsPerUnit: 34 }] },
  { id: 'sbd-027', name: 'Biscoito Amanteigado', category: 'Pães, Biscoitos e Bolos', variations: [{ label: 'Banana e Canela (5g)', carbsPerUnit: 4 }, { label: 'Castanha do Pará (9g)', carbsPerUnit: 7 }] },
  { id: 'sbd-028', name: 'Biscoito Salgado', category: 'Pães, Biscoitos e Bolos', variations: [{ label: 'Cream Cracker (5g)', carbsPerUnit: 4 }, { label: 'Água e Sal (8g)', carbsPerUnit: 5 }, { label: 'Polvilho (3g)', carbsPerUnit: 2 }, { label: 'Arroz Camil (2g)', carbsPerUnit: 2 }] },
  { id: 'sbd-029', name: 'Biscoito Doce', category: 'Pães, Biscoitos e Bolos', variations: [{ label: 'Maisena Nestlé (5g)', carbsPerUnit: 4 }, { label: 'Maria Nestlé (6g)', carbsPerUnit: 4 }, { label: 'Passatempo s/ recheio (6g)', carbsPerUnit: 4 }, { label: 'Recheado Chocolate (13g)', carbsPerUnit: 9 }, { label: 'Wafer média (7g)', carbsPerUnit: 5 }] },
  { id: 'sbd-030', name: 'Bisnaguinha', category: 'Pães, Biscoitos e Bolos', variations: [{ label: 'Pullman (20g)', carbsPerUnit: 11 }, { label: 'Seven Boys (17g)', carbsPerUnit: 9 }, { label: 'Wickbold Integral (17g)', carbsPerUnit: 8 }] },
  { id: 'sbd-031', name: 'Bolos Dona Benta ®', category: 'Pães, Biscoitos e Bolos', variations: [{ label: 'Baunilha (60g)', carbsPerUnit: 30 }, { label: 'Chocolate (60g)', carbsPerUnit: 29 }, { label: 'Fubá (60g)', carbsPerUnit: 30 }, { label: 'Aipim (60g)', carbsPerUnit: 33 }, { label: 'Brownie (60g)', carbsPerUnit: 36 }] },
  { id: 'sbd-032', name: 'Bolos Diversos', category: 'Pães, Biscoitos e Bolos', variations: [{ label: 'Simples s/ cobertura (60g)', carbsPerUnit: 31 }, { label: 'Cenoura (60g)', carbsPerUnit: 38 }, { label: 'Chocolate c/ recheio (100g)', carbsPerUnit: 54 }, { label: 'Festa recheado (100g)', carbsPerUnit: 65 }, { label: 'Mandioca/Aipim (100g)', carbsPerUnit: 48 }] },
  { id: 'sbd-033', name: 'Bombom', category: 'Doces, Chocolates e Sobremesas', variations: [{ label: 'Sonho de Valsa (20g)', carbsPerUnit: 13 }, { label: 'Ouro Branco (20g)', carbsPerUnit: 12 }, { label: 'Serenata de Amor (20g)', carbsPerUnit: 12 }, { label: 'Alpino (13g)', carbsPerUnit: 8 }, { label: 'Ferrero Rocher (12g)', carbsPerUnit: 6 }] },
  { id: 'sbd-034', name: 'Burger King ®', category: 'Fast Food e Restaurantes', variations: [{ label: 'BK Burger (197g)', carbsPerUnit: 32 }, { label: 'Whopper JR (1 unidade)', carbsPerUnit: 31 }, { label: 'Chicken Crispy (1 unidade)', carbsPerUnit: 42 }, { label: 'Onion Rings (porção)', carbsPerUnit: 52 }] },

  // --- C ---
  { id: 'sbd-035', name: 'Café', category: 'Bebidas e Sucos', variations: [{ label: 'Coado c/ açúcar (200ml)', carbsPerUnit: 20 }, { label: 'C/ leite e açúcar (200ml)', carbsPerUnit: 17 }, { label: 'Sem açúcar (200ml)', carbsPerUnit: 0 }] },
  { id: 'sbd-036', name: 'Caldo de Cana', category: 'Bebidas e Sucos', variations: [{ label: '1 copo (200ml)', carbsPerUnit: 36 }] },
  { id: 'sbd-037', name: 'Canja de galinha', category: 'Leguminosas e Pratos Típicos', variations: [{ label: '1 concha (130ml)', carbsPerUnit: 12 }, { label: 'Prato fundo (520ml)', carbsPerUnit: 49 }] },
  { id: 'sbd-038', name: 'Cappuccino 3 Corações ®', category: 'Bebidas e Sucos', variations: [{ label: 'Classic pó (10g)', carbsPerUnit: 7 }, { label: 'Chocolate pó (10g)', carbsPerUnit: 7 }, { label: 'Diet pó (10g)', carbsPerUnit: 4 }, { label: 'Pronto garrafinha (260ml)', carbsPerUnit: 39 }] },
  { id: 'sbd-039', name: 'Cereal Matinal', category: 'Suplementos e Industrializados', variations: [{ label: 'Sucrilhos (30g)', carbsPerUnit: 26 }, { label: 'Nesfit (30g)', carbsPerUnit: 21 }, { label: 'Corn Flakes (30g)', carbsPerUnit: 24 }, { label: 'All Bran (40g)', carbsPerUnit: 134 }] },
  { id: 'sbd-040', name: 'Cerveja', category: 'Bebidas e Sucos', variations: [{ label: 'Regular lata (350ml)', carbsPerUnit: 12 }, { label: '0% Álcool (350ml)', carbsPerUnit: 20 }, { label: '0% Carbo Bruder (350ml)', carbsPerUnit: 0 }, { label: 'Malzbier (350ml)', carbsPerUnit: 49 }] },
  { id: 'sbd-041', name: 'Chocolate', category: 'Doces, Chocolates e Sobremesas', variations: [{ label: 'Ao leite média (25g)', carbsPerUnit: 15 }, { label: 'Meio Amargo (25g)', carbsPerUnit: 16 }, { label: 'Branco Galak (25g)', carbsPerUnit: 14 }, { label: 'Batom (16g)', carbsPerUnit: 8 }, { label: 'Bis (6g)', carbsPerUnit: 4 }] },
  { id: 'sbd-042', name: 'Coca-Cola ®', category: 'Bebidas e Sucos', variations: [{ label: 'Regular (200ml)', carbsPerUnit: 21 }, { label: 'Zero (200ml)', carbsPerUnit: 0 }] },
  { id: 'sbd-043', name: 'Coxinha de frango', category: 'Leguminosas e Pratos Típicos', variations: [{ label: 'Grande (110g)', carbsPerUnit: 38 }, { label: 'Média (50g)', carbsPerUnit: 17 }, { label: 'Festa (20g)', carbsPerUnit: 7 }] },
  { id: 'sbd-044', name: 'Cuscuz', category: 'Grãos, Massas e Tubérculos', variations: [{ label: 'Milho c/ sal (135g)', carbsPerUnit: 34 }, { label: 'Paulista (150g)', carbsPerUnit: 34 }, { label: 'Tapioca médio (120g)', carbsPerUnit: 65 }] },

  // --- E ---
  { id: 'sbd-045', name: 'Energético', category: 'Bebidas e Sucos', variations: [{ label: 'Red Bull (250ml)', carbsPerUnit: 28 }, { label: 'Red Bull Sugar Free', carbsPerUnit: 2 }, { label: 'Monster Ultra Zero', carbsPerUnit: 2.3 }, { label: 'Baly Tradicional (250ml)', carbsPerUnit: 25 }] },
  { id: 'sbd-046', name: 'Ensure ®', category: 'Suplementos e Industrializados', variations: [{ label: 'Pó (10g)', carbsPerUnit: 1 }, { label: 'Plus (200ml)', carbsPerUnit: 40 }, { label: 'Protein (220ml)', carbsPerUnit: 36 }] },

  // --- F ---
  { id: 'sbd-047', name: 'Farinha', category: 'Pães, Biscoitos e Bolos', variations: [{ label: 'Mandioca (16g)', carbsPerUnit: 14 }, { label: 'Milho (15g)', carbsPerUnit: 12 }, { label: 'Trigo (20g)', carbsPerUnit: 15 }, { label: 'Tapioca (16g)', carbsPerUnit: 14 }] },
  { id: 'sbd-048', name: 'Feijão Cozido', category: 'Leguminosas e Pratos Típicos', variations: [{ label: 'Preto (140g)', carbsPerUnit: 18 }, { label: 'Preto (80g)', carbsPerUnit: 10 }, { label: 'Carioquinha (80g)', carbsPerUnit: 14 }, { label: 'Branco (80g)', carbsPerUnit: 21 }, { label: 'Tropeiro (70g)', carbsPerUnit: 33 }] },

  // --- IOGURTES (SBD PÁGS 101-106) ---
  { id: 'sbd-049', name: 'Iogurte Activia ®', category: 'Leites e Iogurtes', variations: [{ label: 'Aveia (170g)', carbsPerUnit: 22 }, { label: 'Morango garrafa (150g)', carbsPerUnit: 19 }, { label: 'Natural (170g)', carbsPerUnit: 22 }, { label: 'Zero Ameixa (170g)', carbsPerUnit: 6.5 }] },
  { id: 'sbd-050', name: 'Iogurte Grego Vigor ®', category: 'Leites e Iogurtes', variations: [{ label: 'Tradicional (90g)', carbsPerUnit: 16 }, { label: 'Zero (90g)', carbsPerUnit: 5 }] },
  { id: 'sbd-051', name: 'Iogurte Molico ®', category: 'Leites e Iogurtes', variations: [{ label: 'Líquido Morango (170g)', carbsPerUnit: 8 }, { label: 'Triplo Zero (170g)', carbsPerUnit: 7 }] },
  { id: 'sbd-052', name: 'Iogurte YoPRO ®', category: 'Leites e Iogurtes', variations: [{ label: '15g Prot (250ml)', carbsPerUnit: 19 }, { label: '25g Prot (250ml)', carbsPerUnit: 13 }, { label: 'Doce de Leite (250ml)', carbsPerUnit: 13 }] },
  { id: 'sbd-053', name: 'Iogurte Yorgus ®', category: 'Leites e Iogurtes', variations: [{ label: 'Natural 0% (130g)', carbsPerUnit: 3 }, { label: 'Kyds Baunilha (100g)', carbsPerUnit: 11 }, { label: 'Coco (130g)', carbsPerUnit: 13 }] },

  // --- MACARRÃO ---
  { id: 'sbd-054', name: 'Macarrão Cozido', category: 'Grãos, Massas e Tubérculos', variations: [{ label: 'Simples (110g)', carbsPerUnit: 30 }, { label: 'Ao Sugo (110g)', carbsPerUnit: 24 }, { label: 'À Bolonhesa (110g)', carbsPerUnit: 25 }, { label: 'Integral (110g)', carbsPerUnit: 28 }, { label: 'Instantâneo Nissin (85g)', carbsPerUnit: 50 }] },

  // --- MCDONALDS (SBD PÁGS 115-116) ---
  { id: 'sbd-055', name: 'McDonald\'s Burgers', category: 'Fast Food e Restaurantes', variations: [{ label: 'Big Mac (210g)', carbsPerUnit: 41 }, { label: 'Quarteirão (195g)', carbsPerUnit: 34 }, { label: 'McChicken (180g)', carbsPerUnit: 37 }, { label: 'CBO (240g)', carbsPerUnit: 56 }, { label: 'Cheddar McMelt (1 unidade)', carbsPerUnit: 31 }] },
  { id: 'sbd-056', name: 'McDonald\'s Acomp.', category: 'Fast Food e Restaurantes', variations: [{ label: 'McFritas Média', carbsPerUnit: 35 }, { label: 'McNuggets 10 un', carbsPerUnit: 24 }] },
  { id: 'sbd-057', name: 'McDonald\'s Sobremesas', category: 'Fast Food e Restaurantes', variations: [{ label: 'Sundae Chocolate', carbsPerUnit: 44 }, { label: 'Casquinha Baunilha', carbsPerUnit: 31 }, { label: 'McFlurry M&M', carbsPerUnit: 86 }, { label: 'McShake Morango (400ml)', carbsPerUnit: 81 }] },

  // --- PÃES ---
  { id: 'sbd-058', name: 'Pão Francês', category: 'Pães, Biscoitos e Bolos', variations: [{ label: '1 unidade (50g)', carbsPerUnit: 29 }, { label: 'Integral (50g)', carbsPerUnit: 23 }] },
  { id: 'sbd-059', name: 'Pão de Forma', category: 'Pães, Biscoitos e Bolos', variations: [{ label: 'Branco (25g)', carbsPerUnit: 12 }, { label: '100% Integral Wickbold (25g)', carbsPerUnit: 8 }, { label: 'Centeninho (25g)', carbsPerUnit: 13 }] },
  { id: 'sbd-060', name: 'Pão de Queijo', category: 'Pães, Biscoitos e Bolos', variations: [{ label: 'Tradicional (25g)', carbsPerUnit: 11 }, { label: 'Lanche (45g)', carbsPerUnit: 20 }, { label: 'Super Lanche (90g)', carbsPerUnit: 40 }] },

  // --- PIZZAS ---
  { id: 'sbd-061', name: 'Pizza (Fatia 100g)', category: 'Fast Food e Restaurantes', variations: [{ label: 'Mussarela', carbsPerUnit: 22 }, { label: 'Calabresa', carbsPerUnit: 21 }, { label: 'Portuguesa', carbsPerUnit: 24 }, { label: 'Frango c/ Catupiry', carbsPerUnit: 25 }, { label: 'Doce Chocolate', carbsPerUnit: 54 }] },

  // --- SUBWAY (SBD PÁG 140) ---
  { id: 'sbd-062', name: 'Subway (15cm)', category: 'Fast Food e Restaurantes', variations: [{ label: 'BMT Italiano', carbsPerUnit: 47 }, { label: 'Frango Teriyaki', carbsPerUnit: 61 }, { label: 'Carne e Queijo', carbsPerUnit: 48 }, { label: 'Atum', carbsPerUnit: 47 }, { label: 'Vegetariano', carbsPerUnit: 48 }] },

  // --- WHEY ---
  { id: 'sbd-063', name: 'Whey Protein', category: 'Suplementos e Industrializados', variations: [{ label: 'Concentrado (30g)', carbsPerUnit: 3 }, { label: 'Isolado (30g)', carbsPerUnit: 2 }] },
];
