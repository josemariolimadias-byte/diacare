
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
  'Pães, Torradas e Farinhas',
  'Biscoitos e Bolos',
  'Doces, Chocolates e Sobremesas',
  'Bebidas e Sucos',
  'Fast Food e Restaurantes',
  'Suplementos e Industrializados'
];

export const FOOD_DATABASE: FoodItem[] = [
  // --- A ---
  { id: 'sbd-001', name: 'Abacate', category: 'Frutas e Derivados', variations: [{ label: '1 fatia (90g)', carbsPerUnit: 5 }, { label: '1 colher sopa picado (45g)', carbsPerUnit: 3 }] },
  { id: 'sbd-002', name: 'Abacaxi', category: 'Frutas e Derivados', variations: [{ label: '1 fatia média (75g)', carbsPerUnit: 10 }, { label: 'Em calda (64g)', carbsPerUnit: 19 }, { label: 'Polpa (100g)', carbsPerUnit: 8 }, { label: 'Suco c/ açúcar (240ml)', carbsPerUnit: 25 }] },
  { id: 'sbd-003', name: 'Abiu cru', category: 'Frutas e Derivados', variations: [{ label: '1 unidade (100g)', carbsPerUnit: 15 }] },
  { id: 'sbd-004', name: 'Abóbora', category: 'Verduras e Legumes', variations: [{ label: 'Cabotian cozida (36g)', carbsPerUnit: 3 }, { label: 'Crua (36g)', carbsPerUnit: 4 }, { label: 'D\'água (36g)', carbsPerUnit: 0 }, { label: 'Doce picada (36g)', carbsPerUnit: 4 }, { label: 'Moranga (36g)', carbsPerUnit: 1 }] },
  { id: 'sbd-005', name: 'Abobrinha', category: 'Verduras e Legumes', variations: [{ label: 'Recheada (100g)', carbsPerUnit: 6 }, { label: 'Italiana cozida (20g)', carbsPerUnit: 0 }, { label: 'Paulista crua (20g)', carbsPerUnit: 2 }] },
  { id: 'sbd-006', name: 'Açaí', category: 'Frutas e Derivados', variations: [{ label: 'Polpa c/ mandioca (150ml)', carbsPerUnit: 85 }, { label: 'Polpa c/ tapioca (150ml)', carbsPerUnit: 85 }, { label: 'Natural (150ml)', carbsPerUnit: 55 }, { label: 'C/ xarope e guaraná (100ml)', carbsPerUnit: 21 }, { label: 'Frooty (60g)', carbsPerUnit: 13 }, { label: 'Frooty Zero (60g)', carbsPerUnit: 10 }, { label: 'Suco (240ml)', carbsPerUnit: 72 }] },
  { id: 'sbd-007', name: 'Acarajé', category: 'Leguminosas e Pratos Típicos', variations: [{ label: '1 unidade média (100g)', carbsPerUnit: 22 }] },
  { id: 'sbd-008', name: 'Acelga picada', category: 'Verduras e Legumes', variations: [{ label: '1 colher sopa cheia (6g)', carbsPerUnit: 0 }] },
  { id: 'sbd-009', name: 'Acerola', category: 'Frutas e Derivados', variations: [{ label: '1 unidade (12g)', carbsPerUnit: 1 }] },
  { id: 'sbd-010', name: 'Achocolatado', category: 'Suplementos e Industrializados', variations: [{ label: 'Diet Gold (5g)', carbsPerUnit: 3 }, { label: 'Diet Linea (5g)', carbsPerUnit: 3 }, { label: 'Nescau Light (10g)', carbsPerUnit: 8 }, { label: 'Nescau Tradicional (10g)', carbsPerUnit: 9 }, { label: 'Toddy Tradicional (10g)', carbsPerUnit: 9 }] },
  { id: 'sbd-011', name: 'Açúcar', category: 'Doces, Chocolates e Sobremesas', variations: [{ label: 'Branco refinado (30g)', carbsPerUnit: 30 }, { label: 'Cristal (24g)', carbsPerUnit: 24 }, { label: 'De coco (5g)', carbsPerUnit: 5 }, { label: 'Mascavo (19g)', carbsPerUnit: 17 }] },
  { id: 'sbd-012', name: 'Adoçante Forno e Fogão', category: 'Suplementos e Industrializados', variations: [{ label: 'Linea (1g)', carbsPerUnit: 1 }, { label: 'Tal e Qual (2g)', carbsPerUnit: 2 }, { label: 'Use Metade (10g)', carbsPerUnit: 9 }] },
  { id: 'sbd-013', name: 'Agrião', category: 'Verduras e Legumes', variations: [{ label: 'Picado (7g)', carbsPerUnit: 0 }, { label: 'Refogado (25g)', carbsPerUnit: 1 }] },
  { id: 'sbd-014', name: 'Água de coco', category: 'Bebidas e Sucos', variations: [{ label: 'Industrializada (200ml)', carbsPerUnit: 11 }, { label: 'Verde (200ml)', carbsPerUnit: 11 }] },
  { id: 'sbd-015', name: 'Água Tônica', category: 'Bebidas e Sucos', variations: [{ label: 'Regular (350ml)', carbsPerUnit: 17 }, { label: 'Zero (350ml)', carbsPerUnit: 0 }] },
  { id: 'sbd-016', name: 'Aipim/Mandioca/Macaxeira', category: 'Grãos, Massas e Tubérculos', variations: [{ label: 'Cozido (100g)', carbsPerUnit: 30 }, { label: 'Frito (100g)', carbsPerUnit: 50 }, { label: 'Cozido (20g)', carbsPerUnit: 6 }] },
  { id: 'sbd-017', name: 'Alcachofra cozida', category: 'Verduras e Legumes', variations: [{ label: '1 pedaço médio (90g)', carbsPerUnit: 11 }] },
  { id: 'sbd-018', name: 'Alface', category: 'Verduras e Legumes', variations: [{ label: 'Americana/Crespa/Lisa (10g)', carbsPerUnit: 0 }] },
  { id: 'sbd-019', name: 'Alfajor', category: 'Doces, Chocolates e Sobremesas', variations: [{ label: 'Cacau Show (40g)', carbsPerUnit: 23 }, { label: 'Brasil Cacau (25g)', carbsPerUnit: 15 }] },
  { id: 'sbd-020', name: 'Alfarroba em pó', category: 'Suplementos e Industrializados', variations: [{ label: 'Carob House (20g)', carbsPerUnit: 13 }] },
  { id: 'sbd-021', name: 'Algodão Doce', category: 'Doces, Chocolates e Sobremesas', variations: [{ label: 'Tradicional (30g)', carbsPerUnit: 30 }, { label: 'Mavalério (35g)', carbsPerUnit: 35 }, { label: 'Snow Sugar (5g)', carbsPerUnit: 5 }] },
  { id: 'sbd-022', name: 'Alho', category: 'Verduras e Legumes', variations: [{ label: 'Cru (2 dentes/6g)', carbsPerUnit: 2 }, { label: 'Poró (20g)', carbsPerUnit: 3 }] },
  { id: 'sbd-023', name: 'Almôndega bovina', category: 'Carnes e Ovos', variations: [{ label: '1 unidade média (50g)', carbsPerUnit: 4 }] },
  { id: 'sbd-024', name: 'Ameixa', category: 'Frutas e Derivados', variations: [{ label: 'De queijo (12g)', carbsPerUnit: 7 }, { label: 'Preta em calda (7g)', carbsPerUnit: 5 }, { label: 'Fresca (42g)', carbsPerUnit: 4 }, { label: 'Seca (5g)', carbsPerUnit: 2 }, { label: 'Passa (15g)', carbsPerUnit: 10 }] },
  { id: 'sbd-025', name: 'Amendoim', category: 'Grãos, Massas e Tubérculos', variations: [{ label: 'Caramelizado (20g)', carbsPerUnit: 14 }, { label: 'Cozido (34g)', carbsPerUnit: 7 }, { label: 'Torrado (34g)', carbsPerUnit: 5 }] },
  { id: 'sbd-026', name: 'Amido', category: 'Grãos, Massas e Tubérculos', variations: [{ label: 'De Arroz (20g)', carbsPerUnit: 17 }, { label: 'De Milho (20g)', carbsPerUnit: 17 }] },
  { id: 'sbd-027', name: 'Amora', category: 'Frutas e Derivados', variations: [{ label: 'Fresca (8g)', carbsPerUnit: 1 }, { label: 'Geléia c/ açúcar (40g)', carbsPerUnit: 23 }, { label: 'Geléia Linea (20g)', carbsPerUnit: 8 }] },
  { id: 'sbd-028', name: 'Arroz Cozido', category: 'Grãos, Massas e Tubérculos', variations: [{ label: 'Branco (colher servir/45g)', carbsPerUnit: 15 }, { label: 'Branco (colher sopa/20g)', carbsPerUnit: 6 }, { label: 'Integral (20g)', carbsPerUnit: 5 }, { label: 'À Grega (60g)', carbsPerUnit: 18 }, { label: 'Piamontese (55g)', carbsPerUnit: 11 }, { label: 'Carreteiro (45g)', carbsPerUnit: 5 }, { label: 'Negro (25g)', carbsPerUnit: 8 }, { label: 'Para Sushi (25g)', carbsPerUnit: 7 }, { label: 'Selvagem (55g)', carbsPerUnit: 12 }, { label: 'Sírio (45g)', carbsPerUnit: 13 }] },
  { id: 'sbd-029', name: 'Atum em água', category: 'Carnes e Ovos', variations: [{ label: '1 colher sopa (16g)', carbsPerUnit: 0 }] },
  { id: 'sbd-030', name: 'Aveia', category: 'Pães, Torradas e Farinhas', variations: [{ label: 'Em flocos (15g)', carbsPerUnit: 10 }, { label: 'Farinha (18g)', carbsPerUnit: 12 }, { label: 'Quaker Flocos Finos (15g)', carbsPerUnit: 8 }] },
  { id: 'sbd-031', name: 'Azeitona', category: 'Verduras e Legumes', variations: [{ label: 'Preta/Verde (3-4g)', carbsPerUnit: 0 }] },

  // --- B ---
  { id: 'sbd-032', name: 'Baba de moça', category: 'Doces, Chocolates e Sobremesas', variations: [{ label: '1 colher sopa (30g)', carbsPerUnit: 27 }] },
  { id: 'sbd-033', name: 'Bacalhau', category: 'Leguminosas e Pratos Típicos', variations: [{ label: 'Gomes de Sá (100g)', carbsPerUnit: 13 }, { label: 'Com natas (100g)', carbsPerUnit: 13 }, { label: 'Espiritual (100g)', carbsPerUnit: 20 }, { label: 'Refogado (100g)', carbsPerUnit: 1 }, { label: 'Bacalhoada (30g)', carbsPerUnit: 2 }, { label: 'Cozido (60g)', carbsPerUnit: 0 }] },
  { id: 'sbd-034', name: 'Baguete Qualitá', category: 'Pães, Torradas e Farinhas', variations: [{ label: '1 unidade pequena (50g)', carbsPerUnit: 25 }] },
  { id: 'sbd-035', name: 'Baião de dois', category: 'Leguminosas e Pratos Típicos', variations: [{ label: '1 escumadeira cheia (100g)', carbsPerUnit: 20 }] },
  { id: 'sbd-036', name: 'Bala', category: 'Doces, Chocolates e Sobremesas', variations: [{ label: '7 Belo (5g)', carbsPerUnit: 4 }, { label: 'Banana (17g)', carbsPerUnit: 4 }, { label: 'Caramelo (6g)', carbsPerUnit: 5 }, { label: 'Coco/Delícia (5g)', carbsPerUnit: 4 }, { label: 'Fini Bananas (6g)', carbsPerUnit: 5 }, { label: 'Fini Dentaduras (6g)', carbsPerUnit: 5 }, { label: 'Halls (3g)', carbsPerUnit: 3 }, { label: 'Jujuba (3g)', carbsPerUnit: 3 }, { label: 'Tic Tac (16g)', carbsPerUnit: 16 }] },
  { id: 'sbd-037', name: 'Banana', category: 'Frutas e Derivados', variations: [{ label: 'À milanesa (100g)', carbsPerUnit: 24 }, { label: 'Caramelada (50g)', carbsPerUnit: 29 }, { label: 'Caturra/Nanica (86g)', carbsPerUnit: 20 }, { label: 'Da terra crua (100g)', carbsPerUnit: 27 }, { label: 'Frita da terra (31g)', carbsPerUnit: 10 }, { label: 'Maçã (65g)', carbsPerUnit: 17 }, { label: 'Ouro (40g)', carbsPerUnit: 9 }, { label: 'Prata (55g)', carbsPerUnit: 14 }, { label: 'Prata pequena (40g)', carbsPerUnit: 10 }, { label: 'Pacova verde frita (35g)', carbsPerUnit: 30 }] },
  { id: 'sbd-038', name: 'Bananada', category: 'Doces, Chocolates e Sobremesas', variations: [{ label: '1 unidade média (40g)', carbsPerUnit: 27 }] },
  { id: 'sbd-039', name: 'Barra de Cereal', category: 'Suplementos e Industrializados', variations: [{ label: 'Línea (20g)', carbsPerUnit: 11 }, { label: 'Magrinha (15g)', carbsPerUnit: 10 }, { label: 'Magrinha Original (15g)', carbsPerUnit: 2 }, { label: 'Trio Zero (20g)', carbsPerUnit: 9 }, { label: 'Ritter Zero (25g)', carbsPerUnit: 16 }, { label: 'Taeq Light (22g)', carbsPerUnit: 14 }, { label: 'Nutry Original (30g)', carbsPerUnit: 11 }] },
  { id: 'sbd-040', name: 'Barra de Proteína', category: 'Suplementos e Industrializados', variations: [{ label: 'Bold (54g)', carbsPerUnit: 14 }, { label: 'YoPro (55g)', carbsPerUnit: 15 }, { label: 'Win Stage (54g)', carbsPerUnit: 20 }] },
  { id: 'sbd-041', name: 'Batata', category: 'Grãos, Massas e Tubérculos', variations: [{ label: 'Inglesa cozida (30g)', carbsPerUnit: 6 }, { label: 'Inglesa frita (65g)', carbsPerUnit: 23 }, { label: 'Inglesa Sauté (25g)', carbsPerUnit: 4 }, { label: 'Doce assada (30g)', carbsPerUnit: 10 }, { label: 'Doce cozida (42g)', carbsPerUnit: 10 }, { label: 'Doce frita (65g)', carbsPerUnit: 39 }, { label: 'Palha (30g)', carbsPerUnit: 13 }, { label: 'Pringles (25g)', carbsPerUnit: 13 }, { label: 'Smiles Mccain (21g)', carbsPerUnit: 7 }] },
  { id: 'sbd-042', name: 'Beijinho', category: 'Doces, Chocolates e Sobremesas', variations: [{ label: 'Tradicional (25g)', carbsPerUnit: 11 }, { label: 'Pequeno (6g)', carbsPerUnit: 3 }, { label: 'Diet (6g)', carbsPerUnit: 2 }] },
  { id: 'sbd-043', name: 'Beiju', category: 'Pães, Torradas e Farinhas', variations: [{ label: 'Tradicional (100g)', carbsPerUnit: 87 }, { label: 'C/ Coco (125g)', carbsPerUnit: 77 }, { label: 'C/ Queijo (150g)', carbsPerUnit: 87 }] },
  { id: 'sbd-044', name: 'Beirute Habib\'s', category: 'Fast Food e Restaurantes', variations: [{ label: 'Frango Crocante (553g)', carbsPerUnit: 84 }, { label: 'Habibão (636g)', carbsPerUnit: 45 }, { label: 'Rosbife (418g)', carbsPerUnit: 56 }] },
  { id: 'sbd-045', name: 'Beterraba', category: 'Verduras e Legumes', variations: [{ label: 'Cozida (20g)', carbsPerUnit: 2 }, { label: 'Crua (16g)', carbsPerUnit: 1 }] },
  { id: 'sbd-046', name: 'Bib\'s Sfiha (Habib\'s)', category: 'Fast Food e Restaurantes', variations: [{ label: 'Cheddar Burger (296g)', carbsPerUnit: 34 }, { label: 'Salad Burger (327g)', carbsPerUnit: 36 }, { label: 'Calabresa (70g)', carbsPerUnit: 19 }, { label: 'Carne (75g)', carbsPerUnit: 23 }, { label: 'Frango (75g)', carbsPerUnit: 23 }, { label: 'Queijo (70g)', carbsPerUnit: 22 }] },
  { id: 'sbd-047', name: 'Biscoito', category: 'Biscoitos e Bolos', variations: [{ label: '7 Grãos Magrinha (5g)', carbsPerUnit: 3 }, { label: 'Cracker Magrinha (4g)', carbsPerUnit: 2 }, { label: 'Cream Cracker (5g)', carbsPerUnit: 4 }, { label: 'Água e Sal (8g)', carbsPerUnit: 5 }, { label: 'Arroz (2g)', carbsPerUnit: 2 }, { label: 'Aveia e Mel Nestlé (6g)', carbsPerUnit: 4 }, { label: 'Coco Piraquê (5g)', carbsPerUnit: 3 }, { label: 'Polvilho (3g)', carbsPerUnit: 2 }, { label: 'Protein Cookie (3g)', carbsPerUnit: 2 }, { label: 'Maisena Nestlé (5g)', carbsPerUnit: 4 }, { label: 'Maisena Lowçucar (4g)', carbsPerUnit: 3 }, { label: 'Maria Nestlé (6g)', carbsPerUnit: 4 }, { label: 'Maria Lowçucar (8g)', carbsPerUnit: 3 }, { label: 'Passatempo Recheado (10g)', carbsPerUnit: 8 }, { label: 'Passatempo s/ recheio (6g)', carbsPerUnit: 4 }, { label: 'Prestígio Recheado (15g)', carbsPerUnit: 10 }, { label: 'Bono Chocolate (10g)', carbsPerUnit: 6 }, { label: 'Cookie Bauduco (10g)', carbsPerUnit: 6 }, { label: 'Wafer (7g)', carbsPerUnit: 5 }] },
  { id: 'sbd-048', name: 'Bisnaguinha', category: 'Pães, Torradas e Farinhas', variations: [{ label: 'Wickbold Integral (17g)', carbsPerUnit: 8 }, { label: 'Pullman (20g)', carbsPerUnit: 11 }, { label: 'Seven Boys (17g)', carbsPerUnit: 9 }] },
  { id: 'sbd-049', name: 'BK (Burger King)', category: 'Fast Food e Restaurantes', variations: [{ label: 'Burger BK (1 un)', carbsPerUnit: 31 }, { label: 'Chicken Crispy (1 un)', carbsPerUnit: 42 }, { label: 'Original (1 un)', carbsPerUnit: 32 }, { label: 'Original Cheddar (1 un)', carbsPerUnit: 33 }, { label: 'Onion Rings (porção)', carbsPerUnit: 52 }, { label: 'Stacker Duplo (1 un)', carbsPerUnit: 20 }, { label: 'Whopper JR (1 un)', carbsPerUnit: 31 }, { label: 'Whopper Regular (1 un)', carbsPerUnit: 52 }] },
  { id: 'sbd-050', name: 'Bob\'s', category: 'Fast Food e Restaurantes', variations: [{ label: 'Burgão (1 un)', carbsPerUnit: 51 }, { label: 'Burguer (1 un)', carbsPerUnit: 28 }, { label: 'Celebrativo (1 un)', carbsPerUnit: 35 }, { label: 'Costela (1 un)', carbsPerUnit: 52 }, { label: 'Big Bob (1 un)', carbsPerUnit: 38 }, { label: 'Franlitos (porção)', carbsPerUnit: 28 }, { label: 'Gran Picanha (1 un)', carbsPerUnit: 36 }] },
  { id: 'sbd-051', name: 'Bolo', category: 'Biscoitos e Bolos', variations: [{ label: 'Alemão (60g)', carbsPerUnit: 30 }, { label: 'Baunilha Dona Benta (60g)', carbsPerUnit: 30 }, { label: 'Com glacê/recheio (100g)', carbsPerUnit: 65 }, { label: 'Aipim Dona Benta (60g)', carbsPerUnit: 33 }, { label: 'Banana (70g)', carbsPerUnit: 33 }, { label: 'Batata-doce (90g)', carbsPerUnit: 43 }, { label: 'Brigadeiro (50g)', carbsPerUnit: 20 }, { label: 'Brownie Dona Benta (60g)', carbsPerUnit: 36 }, { label: 'Cenoura (60g)', carbsPerUnit: 38 }, { label: 'Chocolate s/ glacê (60g)', carbsPerUnit: 34 }, { label: 'Coco (100g)', carbsPerUnit: 54 }, { label: 'Festa (100g)', carbsPerUnit: 54 }, { label: 'Fubá (50g)', carbsPerUnit: 20 }, { label: 'Limão (60g)', carbsPerUnit: 37 }, { label: 'Mandioca (100g)', carbsPerUnit: 48 }, { label: 'Milho (60g)', carbsPerUnit: 32 }, { label: 'Mousse Chocolate (50g)', carbsPerUnit: 20 }, { label: 'Simples s/ cobertura (60g)', carbsPerUnit: 31 }] },
  { id: 'sbd-052', name: 'Bombom', category: 'Doces, Chocolates e Sobremesas', variations: [{ label: 'Alpino (13g)', carbsPerUnit: 8 }, { label: 'Avelã Kopenhagen (20g)', carbsPerUnit: 9 }, { label: 'Caribe (17g)', carbsPerUnit: 12 }, { label: 'Charge (40g)', carbsPerUnit: 23 }, { label: 'Ferrero Rocher (12g)', carbsPerUnit: 6 }, { label: 'Ouro Branco (20g)', carbsPerUnit: 12 }, { label: 'Sonho de Valsa (20g)', carbsPerUnit: 13 }, { label: 'Brigadeiro (15g)', carbsPerUnit: 7 }] },
  { id: 'sbd-053', name: 'Brigadeiro', category: 'Doces, Chocolates e Sobremesas', variations: [{ label: 'Médio (30g)', carbsPerUnit: 16 }, { label: 'Pequeno (15g)', carbsPerUnit: 9 }, { label: 'Meio Amargo (30g)', carbsPerUnit: 20 }, { label: 'Diet (10g)', carbsPerUnit: 4 }] },

  // --- C ---
  { id: 'sbd-054', name: 'Cacau em pó', category: 'Suplementos e Industrializados', variations: [{ label: '1 colher sopa (10g)', carbsPerUnit: 2 }, { label: 'Mãe Terra (10g)', carbsPerUnit: 2 }] },
  { id: 'sbd-055', name: 'Café', category: 'Bebidas e Sucos', variations: [{ label: 'Coado c/ açúcar (200ml)', carbsPerUnit: 20 }, { label: 'Coado s/ açúcar (200ml)', carbsPerUnit: 0 }, { label: 'Com leite e açúcar (200ml)', carbsPerUnit: 17 }, { label: 'Solúvel (4g)', carbsPerUnit: 1 }] },
  { id: 'sbd-056', name: 'Cajuzinho', category: 'Doces, Chocolates e Sobremesas', variations: [{ label: 'Pequeno (12g)', carbsPerUnit: 6 }, { label: 'Médio (25g)', carbsPerUnit: 13 }, { label: 'Grande (40g)', carbsPerUnit: 20 }] },
  { id: 'sbd-057', name: 'Caldo', category: 'Leguminosas e Pratos Típicos', variations: [{ label: 'Cana (200ml)', carbsPerUnit: 36 }, { label: 'Feijão (150ml)', carbsPerUnit: 16 }, { label: 'Mandioca (150ml)', carbsPerUnit: 21 }, { label: 'Verde (130ml)', carbsPerUnit: 7 }] },
  { id: 'sbd-058', name: 'Canja de galinha', category: 'Leguminosas e Pratos Típicos', variations: [{ label: 'Concha (130ml)', carbsPerUnit: 12 }, { label: 'Prato fundo (520ml)', carbsPerUnit: 49 }] },
  { id: 'sbd-059', name: 'Canjica pronta', category: 'Leguminosas e Pratos Típicos', variations: [{ label: 'Regular (120g)', carbsPerUnit: 28 }, { label: 'Diet (120g)', carbsPerUnit: 13 }] },
  { id: 'sbd-060', name: 'Capeletti', category: 'Grãos, Massas e Tubérculos', variations: [{ label: 'Carne (50g)', carbsPerUnit: 25 }, { label: 'Carne Massa Leve (100g)', carbsPerUnit: 44 }, { label: 'Frango (50g)', carbsPerUnit: 25 }, { label: 'Frango Massa Leve (100g)', carbsPerUnit: 51 }] },
  { id: 'sbd-061', name: 'Cappuccino 3 Corações', category: 'Bebidas e Sucos', variations: [{ label: 'Pó (10g)', carbsPerUnit: 7 }, { label: 'Cápsula (11g)', carbsPerUnit: 7 }, { label: 'Pronto (260ml)', carbsPerUnit: 39 }, { label: 'Diet (10g)', carbsPerUnit: 4 }] },
  { id: 'sbd-062', name: 'Carne Bovina', category: 'Carnes e Ovos', variations: [{ label: 'Grelhada/Assada (100g)', carbsPerUnit: 0 }, { label: 'Moída (25g)', carbsPerUnit: 0 }, { label: 'Ensopada c/ legumes (35g)', carbsPerUnit: 3 }, { label: 'Vegetal/Soja (50g)', carbsPerUnit: 10 }] },
  { id: 'sbd-063', name: 'Cereal Matinal', category: 'Suplementos e Industrializados', variations: [{ label: 'All Bran (40g)', carbsPerUnit: 134 }, { label: 'All Bran Flakes (30g)', carbsPerUnit: 20 }, { label: 'Corn Flakes (30g)', carbsPerUnit: 24 }, { label: 'Crunch (30g)', carbsPerUnit: 22 }, { label: 'Granola Kelloggs (40g)', carbsPerUnit: 24 }, { label: 'Nesfit (30g)', carbsPerUnit: 21 }, { label: 'Sucrilhos (30g)', carbsPerUnit: 26 }] },
  { id: 'sbd-064', name: 'Cerveja', category: 'Bebidas e Sucos', variations: [{ label: 'Regular (350ml)', carbsPerUnit: 12 }, { label: '0% Álcool (350ml)', carbsPerUnit: 20 }, { label: '0% Carbo Bruder (350ml)', carbsPerUnit: 0 }, { label: 'Stella Pure Gold (330ml)', carbsPerUnit: 1 }, { label: 'Noi Low Carb (350ml)', carbsPerUnit: 2 }, { label: 'Malzbier (350ml)', carbsPerUnit: 49 }] },
  { id: 'sbd-065', name: 'Chocolate', category: 'Doces, Chocolates e Sobremesas', variations: [{ label: '70% Lindt (25g)', carbsPerUnit: 3.5 }, { label: 'Alpino (25g)', carbsPerUnit: 14 }, { label: 'Ao leite (25g)', carbsPerUnit: 15 }, { label: 'Batom (16g)', carbsPerUnit: 8 }, { label: 'Bis (6g)', carbsPerUnit: 4 }, { label: 'Diamante Negro (25g)', carbsPerUnit: 17 }, { label: 'Talento (25g)', carbsPerUnit: 13 }, { label: 'Laka (25g)', carbsPerUnit: 15 }, { label: 'Meio amargo (25g)', carbsPerUnit: 16 }] },
  { id: 'sbd-066', name: 'Coca-Cola', category: 'Bebidas e Sucos', variations: [{ label: 'Regular (200ml)', carbsPerUnit: 21 }, { label: 'Zero (200ml)', carbsPerUnit: 0 }] },
  { id: 'sbd-067', name: 'Coxinha de frango', category: 'Leguminosas e Pratos Típicos', variations: [{ label: 'Grande (110g)', carbsPerUnit: 38 }, { label: 'Média (50g)', carbsPerUnit: 17 }, { label: 'Pequena (20g)', carbsPerUnit: 7 }] },
  { id: 'sbd-068', name: 'Cuscuz', category: 'Grãos, Massas e Tubérculos', variations: [{ label: 'Milho c/ sal (135g)', carbsPerUnit: 34 }, { label: 'Tapioca (120g)', carbsPerUnit: 65 }, { label: 'Paulista (150g)', carbsPerUnit: 34 }] },

  // --- D ---
  { id: 'sbd-069', name: 'Danoninho', category: 'Leites e Iogurtes', variations: [{ label: 'Potinho (40g)', carbsPerUnit: 5 }, { label: 'Sachê (70g)', carbsPerUnit: 8 }] },
  { id: 'sbd-070', name: 'Doce de Leite', category: 'Doces, Chocolates e Sobremesas', variations: [{ label: 'Regular (40g)', carbsPerUnit: 24 }, { label: 'Zero Flormel (20g)', carbsPerUnit: 9 }] },

  // --- E ---
  { id: 'sbd-071', name: 'Empada', category: 'Leguminosas e Pratos Típicos', variations: [{ label: 'Camarão (55g)', carbsPerUnit: 12 }, { label: 'Frango (55g)', carbsPerUnit: 26 }, { label: 'Palmito (55g)', carbsPerUnit: 14 }, { label: 'Queijo (25g)', carbsPerUnit: 5 }] },
  { id: 'sbd-072', name: 'Energético', category: 'Bebidas e Sucos', variations: [{ label: 'Baly Maçã Verde (250ml)', carbsPerUnit: 25 }, { label: 'Baly Zero (250ml)', carbsPerUnit: 0 }, { label: 'Monster Ultra Zero (200ml)', carbsPerUnit: 2.3 }, { label: 'Red Bull (250ml)', carbsPerUnit: 28 }, { label: 'Red Bull Sugar Free (250ml)', carbsPerUnit: 2 }] },
  { id: 'sbd-073', name: 'Ensure', category: 'Suplementos e Industrializados', variations: [{ label: 'Pó sabores (10g)', carbsPerUnit: 1 }, { label: 'Plus (200ml)', carbsPerUnit: 40 }, { label: 'Protein (220ml)', carbsPerUnit: 36 }] },

  // --- F ---
  { id: 'sbd-074', name: 'Farinha', category: 'Pães, Torradas e Farinhas', variations: [{ label: 'Mandioca (16g)', carbsPerUnit: 14 }, { label: 'Milho (15g)', carbsPerUnit: 12 }, { label: 'Trigo (20g)', carbsPerUnit: 15 }, { label: 'Tapioca (16g)', carbsPerUnit: 14 }, { label: 'Aveia (18g)', carbsPerUnit: 12 }] },
  { id: 'sbd-075', name: 'Feijão Cozido', category: 'Leguminosas e Pratos Típicos', variations: [{ label: 'Azuki (35g)', carbsPerUnit: 9 }, { label: 'Branco (80g)', carbsPerUnit: 21 }, { label: 'Carioquinha (80g)', carbsPerUnit: 14 }, { label: 'Preto (140g)', carbsPerUnit: 18 }, { label: 'Preto (80g)', carbsPerUnit: 10 }] },

  // --- I ---
  { id: 'sbd-076', name: 'Iogurte', category: 'Leites e Iogurtes', variations: [{ label: 'Activia Aveia (170g)', carbsPerUnit: 22 }, { label: 'Activia Morango (200g)', carbsPerUnit: 25 }, { label: 'Activia Natural (170g)', carbsPerUnit: 22 }, { label: 'Activia Zero (170g)', carbsPerUnit: 6.5 }, { label: 'Grego Vigor (90g)', carbsPerUnit: 16 }, { label: 'Grego Vigor Zero (90g)', carbsPerUnit: 5 }, { label: 'Molico Líquido (170g)', carbsPerUnit: 8 }, { label: 'Natural Integral (170g)', carbsPerUnit: 10 }, { label: 'YoPRO 15g Prot (250g)', carbsPerUnit: 19 }, { label: 'YoPRO 25g Prot (250g)', carbsPerUnit: 13 }, { label: 'Yorgus 0% (130g)', carbsPerUnit: 3 }, { label: 'Yorgus Ultra (300g)', carbsPerUnit: 21 }] },

  // --- M ---
  { id: 'sbd-077', name: 'Macarrão', category: 'Grãos, Massas e Tubérculos', variations: [{ label: 'À Bolonhesa (110g)', carbsPerUnit: 25 }, { label: 'Carbonara (110g)', carbsPerUnit: 14 }, { label: 'Cozido simples (110g)', carbsPerUnit: 39 }, { label: 'Integral (110g)', carbsPerUnit: 28 }, { label: 'Instantâneo Nissin (85g)', carbsPerUnit: 50 }] },
  { id: 'sbd-078', name: 'McDonald\'s Burgers', category: 'Fast Food e Restaurantes', variations: [{ label: 'Big Mac (210g)', carbsPerUnit: 41 }, { label: 'Big Tasty (337g)', carbsPerUnit: 41 }, { label: 'CBO (240g)', carbsPerUnit: 56 }, { label: 'McChicken (1 un)', carbsPerUnit: 37 }, { label: 'Quarteirão (1 un)', carbsPerUnit: 34 }] },
  { id: 'sbd-079', name: 'McDonald\'s Outros', category: 'Fast Food e Restaurantes', variations: [{ label: 'McFritas Média', carbsPerUnit: 35 }, { label: 'McNuggets 10 un.', carbsPerUnit: 24 }, { label: 'McShake Morango (400ml)', carbsPerUnit: 81 }, { label: 'McFlurry M&Ms', carbsPerUnit: 86 }, { label: 'Sundae Chocolate', carbsPerUnit: 44 }] },

  // --- P ---
  { id: 'sbd-080', name: 'Pão', category: 'Pães, Torradas e Farinhas', variations: [{ label: 'Francês (50g)', carbsPerUnit: 29 }, { label: 'Francês Integral (50g)', carbsPerUnit: 23 }, { label: 'De Forma Branco (25g)', carbsPerUnit: 12 }, { label: 'De Forma 100% Int (25g)', carbsPerUnit: 8 }, { label: 'De Queijo Trad (25g)', carbsPerUnit: 11 }, { label: 'De Queijo Lanche (45g)', carbsPerUnit: 20 }, { label: 'Hambúrguer (70g)', carbsPerUnit: 40 }, { label: 'Hot Dog (50g)', carbsPerUnit: 25 }, { label: 'Sírio (80g)', carbsPerUnit: 42 }] },
  { id: 'sbd-081', name: 'Pizza (fatia)', category: 'Fast Food e Restaurantes', variations: [{ label: 'Atum (100g)', carbsPerUnit: 21 }, { label: 'Calabresa (100g)', carbsPerUnit: 21 }, { label: 'Chocolate (100g)', carbsPerUnit: 54 }, { label: 'Frango c/ Catupiry (111g)', carbsPerUnit: 25 }, { label: 'Mussarela (100g)', carbsPerUnit: 22 }, { label: 'Portuguesa (125g)', carbsPerUnit: 24 }] },

  // --- S ---
  { id: 'sbd-082', name: 'Sorvete', category: 'Doces, Chocolates e Sobremesas', variations: [{ label: 'Casquinha McD', carbsPerUnit: 31 }, { label: 'Massa Kibon (60g)', carbsPerUnit: 14 }, { label: 'Massa Diet (60g)', carbsPerUnit: 10 }, { label: 'Itália Zero (60g)', carbsPerUnit: 6 }] },
  { id: 'sbd-083', name: 'Subway (15cm)', category: 'Fast Food e Restaurantes', variations: [{ label: 'BMT Italiano', carbsPerUnit: 47 }, { label: 'Frango Teriyaki', carbsPerUnit: 61 }, { label: 'Vegetariano', carbsPerUnit: 48 }, { label: 'Atum', carbsPerUnit: 47 }] },

  // --- T ---
  { id: 'sbd-084', name: 'Tapioca', category: 'Grãos, Massas e Tubérculos', variations: [{ label: 'Simples (80g)', carbsPerUnit: 50 }, { label: 'Goma seca (16g)', carbsPerUnit: 14 }] },

  // --- Y ---
  { id: 'sbd-085', name: 'YoPRO', category: 'Leites e Iogurtes', variations: [{ label: '15g Proteína (250g)', carbsPerUnit: 19 }, { label: '25g Proteína (250g)', carbsPerUnit: 13 }] }
];
