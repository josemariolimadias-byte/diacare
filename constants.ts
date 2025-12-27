
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
  'Frutas',
  'Verduras e Legumes',
  'Carnes e Ovos',
  'Massas e Grãos',
  'Leguminosas',
  'Laticínios',
  'Padaria',
  'Lanches e Pratos',
  'Bebidas',
  'Doces e Sobremesas',
  'Fast Food & Restaurantes'
];

export const FOOD_DATABASE: FoodItem[] = [
  // --- FRUTAS (SBD) ---
  { id: 'sbd-f1', name: 'Abacate', category: 'Frutas', variations: [{ label: '1 fatia (90g)', carbsPerUnit: 5 }, { label: '1 colher sopa (45g)', carbsPerUnit: 3 }] },
  { id: 'sbd-f2', name: 'Abacaxi', category: 'Frutas', variations: [{ label: '1 fatia média (75g)', carbsPerUnit: 10 }, { label: 'Em calda (1 fatia)', carbsPerUnit: 19 }, { label: 'Polpa congelada (100g)', carbsPerUnit: 8 }] },
  { id: 'sbd-f3', name: 'Abricó-do-pará', category: 'Frutas', variations: [{ label: '1 fatia média (100g)', carbsPerUnit: 13 }] },
  { id: 'sbd-f4', name: 'Acerola', category: 'Frutas', variations: [{ label: '1 unidade (12g)', carbsPerUnit: 1 }] },
  { id: 'sbd-f5', name: 'Ameixa Fresca', category: 'Frutas', variations: [{ label: '1 unidade média (42g)', carbsPerUnit: 4 }] },
  { id: 'sbd-f6', name: 'Ameixa Seca', category: 'Frutas', variations: [{ label: '1 unidade média (5g)', carbsPerUnit: 2 }] },
  { id: 'sbd-f7', name: 'Amora', category: 'Frutas', variations: [{ label: '1 unidade média (8g)', carbsPerUnit: 1 }] },
  { id: 'sbd-f8', name: 'Banana Prata', category: 'Frutas', variations: [{ label: '1 unid média (55g)', carbsPerUnit: 14 }, { label: '1 unid pequena (40g)', carbsPerUnit: 10 }] },
  { id: 'sbd-f9', name: 'Banana Nanica', category: 'Frutas', variations: [{ label: '1 unidade média (86g)', carbsPerUnit: 20 }] },
  { id: 'sbd-f10', name: 'Banana da Terra', category: 'Frutas', variations: [{ label: '1 unidade grande (100g)', carbsPerUnit: 27 }, { label: 'Frita (1 fatia)', carbsPerUnit: 10 }] },
  { id: 'sbd-f11', name: 'Caju', category: 'Frutas', variations: [{ label: '1 unidade média (90g)', carbsPerUnit: 9 }] },
  { id: 'sbd-f12', name: 'Caqui', category: 'Frutas', variations: [{ label: '1 unidade média (110g)', carbsPerUnit: 21 }, { label: '1 unidade pequena (85g)', carbsPerUnit: 16 }] },
  { id: 'sbd-f13', name: 'Goiaba Inteira', category: 'Frutas', variations: [{ label: '1 unidade média (100g)', carbsPerUnit: 14 }] },
  { id: 'sbd-f14', name: 'Laranja Baía/Lima', category: 'Frutas', variations: [{ label: '1 unidade média (180g)', carbsPerUnit: 20 }] },
  { id: 'sbd-f15', name: 'Maçã com Casca', category: 'Frutas', variations: [{ label: '1 unidade pequena (90g)', carbsPerUnit: 14 }, { label: 'Maçã Verde (130g)', carbsPerUnit: 19 }] },
  { id: 'sbd-f16', name: 'Mamão Formosa', category: 'Frutas', variations: [{ label: '1 fatia grande (170g)', carbsPerUnit: 20 }, { label: '1 fatia média (100g)', carbsPerUnit: 12 }] },
  { id: 'sbd-f17', name: 'Mamão Papaia', category: 'Frutas', variations: [{ label: '1 fatia média (100g)', carbsPerUnit: 10 }, { label: '1/2 unidade (160g)', carbsPerUnit: 16 }] },
  { id: 'sbd-f18', name: 'Melancia', category: 'Frutas', variations: [{ label: '1 fatia média (200g)', carbsPerUnit: 13 }] },
  { id: 'sbd-f19', name: 'Melão', category: 'Frutas', variations: [{ label: '1 fatia grande (115g)', carbsPerUnit: 9 }] },
  { id: 'sbd-f20', name: 'Morango', category: 'Frutas', variations: [{ label: '1 unidade (12g)', carbsPerUnit: 1 }] },
  { id: 'sbd-f21', name: 'Pera', category: 'Frutas', variations: [{ label: '1 unidade média (130g)', carbsPerUnit: 19 }] },
  { id: 'sbd-f22', name: 'Uva Niágara/Vitória', category: 'Frutas', variations: [{ label: '1 cacho pequeno (100g)', carbsPerUnit: 17 }, { label: '1 unidade', carbsPerUnit: 1 }] },

  // --- VERDURAS E LEGUMES (SBD) ---
  { id: 'sbd-v1', name: 'Abóbora Cozida', category: 'Verduras e Legumes', variations: [{ label: '1 colher sopa (36g)', carbsPerUnit: 3 }] },
  { id: 'sbd-v2', name: 'Abobrinha Cozida', category: 'Verduras e Legumes', variations: [{ label: '1 colher sopa (20g)', carbsPerUnit: 0 }] },
  { id: 'sbd-v3', name: 'Acelga Picada', category: 'Verduras e Legumes', variations: [{ label: '1 colher sopa cheia (6g)', carbsPerUnit: 0 }] },
  { id: 'sbd-v4', name: 'Agrião', category: 'Verduras e Legumes', variations: [{ label: 'Picado (1 colher sopa)', carbsPerUnit: 0 }, { label: 'Refogado (1 colher sopa)', carbsPerUnit: 1 }] },
  { id: 'sbd-v5', name: 'Alface (Todas)', category: 'Verduras e Legumes', variations: [{ label: '1 folha média (10g)', carbsPerUnit: 0 }] },
  { id: 'sbd-v6', name: 'Beterraba Cozida', category: 'Verduras e Legumes', variations: [{ label: '1 colher sopa cheia (20g)', carbsPerUnit: 2 }] },
  { id: 'sbd-v7', name: 'Brócolis Cozido', category: 'Verduras e Legumes', variations: [{ label: '1 colher sopa cheia (10g)', carbsPerUnit: 0 }] },
  { id: 'sbd-v8', name: 'Cenoura Cozida', category: 'Verduras e Legumes', variations: [{ label: '1 colher sopa (25g)', carbsPerUnit: 2 }] },
  { id: 'sbd-v9', name: 'Chuchu Cozido', category: 'Verduras e Legumes', variations: [{ label: '1 colher sopa (20g)', carbsPerUnit: 1 }] },
  { id: 'sbd-v10', name: 'Couve Manteiga', category: 'Verduras e Legumes', variations: [{ label: 'Crua (1 colher sopa)', carbsPerUnit: 1 }, { label: 'Refogada (1 colher sopa)', carbsPerUnit: 1 }] },
  { id: 'sbd-v11', name: 'Espinafre Cozido', category: 'Verduras e Legumes', variations: [{ label: '1 colher sopa (25g)', carbsPerUnit: 2 }] },
  { id: 'sbd-v12', name: 'Jiló', category: 'Verduras e Legumes', variations: [{ label: '1 colher sopa cheia (60g)', carbsPerUnit: 4 }] },
  { id: 'sbd-v13', name: 'Quiabo Cozido', category: 'Verduras e Legumes', variations: [{ label: '1 colher sopa (15g)', carbsPerUnit: 1 }] },
  { id: 'sbd-v14', name: 'Tomate', category: 'Verduras e Legumes', variations: [{ label: '1 unidade pequena (50g)', carbsPerUnit: 2 }] },
  { id: 'sbd-v15', name: 'Vagem Cozida', category: 'Verduras e Legumes', variations: [{ label: '1 colher sopa cheia (20g)', carbsPerUnit: 2 }] },

  // --- MASSAS E GRÃOS (SBD) ---
  { id: 'sbd-m1', name: 'Arroz Branco Cozido', category: 'Massas e Grãos', variations: [{ label: '1 colher servir (45g)', carbsPerUnit: 15 }, { label: '1 colher sopa cheia (20g)', carbsPerUnit: 6 }] },
  { id: 'sbd-m2', name: 'Arroz Integral Cozido', category: 'Massas e Grãos', variations: [{ label: '1 colher sopa cheia (20g)', carbsPerUnit: 5 }] },
  { id: 'sbd-m3', name: 'Arroz à Grega', category: 'Massas e Grãos', variations: [{ label: '1 colher servir (60g)', carbsPerUnit: 18 }, { label: '1 colher sopa cheia (25g)', carbsPerUnit: 7 }] },
  { id: 'sbd-m4', name: 'Batata Inglesa Cozida', category: 'Massas e Grãos', variations: [{ label: '1 colher sopa cheia (30g)', carbsPerUnit: 6 }] },
  { id: 'sbd-m5', name: 'Batata Doce Cozida', category: 'Massas e Grãos', variations: [{ label: '1 colher sopa cheia (42g)', carbsPerUnit: 10 }] },
  { id: 'sbd-m6', name: 'Cuscuz de Milho', category: 'Massas e Grãos', variations: [{ label: '1 pedaço médio (135g)', carbsPerUnit: 34 }, { label: '1 pedaço pequeno (85g)', carbsPerUnit: 21 }] },
  { id: 'sbd-m7', name: 'Espaguete Cozido', category: 'Massas e Grãos', variations: [{ label: '1 pegador médio (110g)', carbsPerUnit: 39 }, { label: '1 xícara (220g)', carbsPerUnit: 43 }] },
  { id: 'sbd-m8', name: 'Mandioca Cozida', category: 'Massas e Grãos', variations: [{ label: '1 pedaço médio (60g)', carbsPerUnit: 18 }, { label: '1 colher sopa (20g)', carbsPerUnit: 6 }] },
  { id: 'sbd-m9', name: 'Milho Verde', category: 'Massas e Grãos', variations: [{ label: '1 unid grande (100g)', carbsPerUnit: 29 }, { label: 'Cozido debulhado (1 colher sopa)', carbsPerUnit: 6 }] },
  { id: 'sbd-m10', name: 'Tapioca (Goma)', category: 'Massas e Grãos', variations: [{ label: '1 unidade pequena (80g)', carbsPerUnit: 50 }, { label: '1 colher sopa (16g)', carbsPerUnit: 14 }] },
  { id: 'sbd-m11', name: 'Farofa de Mandioca', category: 'Massas e Grãos', variations: [{ label: '1 colher sopa cheia (25g)', carbsPerUnit: 20 }, { label: '1 colher arroz cheia (75g)', carbsPerUnit: 60 }] },

  // --- LEGUMINOSAS (SBD) ---
  { id: 'sbd-l1', name: 'Feijão Preto/Carioca', category: 'Leguminosas', variations: [{ label: '1 concha média rasa (80g)', carbsPerUnit: 10 }, { label: '1 concha média cheia (140g)', carbsPerUnit: 18 }, { label: '1 colher sopa cheia (17g)', carbsPerUnit: 2 }] },
  { id: 'sbd-l2', name: 'Feijão Branco', category: 'Leguminosas', variations: [{ label: '1 concha média rasa (80g)', carbsPerUnit: 21 }] },
  { id: 'sbd-l3', name: 'Lentilha Cozida', category: 'Leguminosas', variations: [{ label: '1 colher sopa cheia (18g)', carbsPerUnit: 3 }] },
  { id: 'sbd-l4', name: 'Grão de Bico Cozido', category: 'Leguminosas', variations: [{ label: '1 concha cheia (120g)', carbsPerUnit: 25 }, { label: '1 colher sopa cheia (22g)', carbsPerUnit: 5 }] },

  // --- PADARIA (SBD) ---
  { id: 'sbd-p1', name: 'Pão Francês', category: 'Padaria', variations: [{ label: '1 unidade (50g)', carbsPerUnit: 29 }, { label: '1/2 unidade', carbsPerUnit: 14 }] },
  { id: 'sbd-p2', name: 'Pão de Forma Branco', category: 'Padaria', variations: [{ label: '1 fatia (25g)', carbsPerUnit: 12 }] },
  { id: 'sbd-p3', name: 'Pão de Forma Integral', category: 'Padaria', variations: [{ label: '1 fatia (25g)', carbsPerUnit: 11 }, { label: 'Wickbold 100% (1 fatia)', carbsPerUnit: 8 }] },
  { id: 'sbd-p4', name: 'Pão de Queijo', category: 'Padaria', variations: [{ label: '1 unid tradicional (25g)', carbsPerUnit: 11 }, { label: '1 unid lanche (45g)', carbsPerUnit: 20 }, { label: '1 unid pequena (20g)', carbsPerUnit: 9 }] },
  { id: 'sbd-p5', name: 'Bisnaguinha', category: 'Padaria', variations: [{ label: '1 unidade (20g)', carbsPerUnit: 11 }, { label: 'Seven Boys (1 unidade)', carbsPerUnit: 9 }] },
  { id: 'sbd-p6', name: 'Torrada de Pão Francês', category: 'Padaria', variations: [{ label: '1 unidade (8g)', carbsPerUnit: 6 }] },

  // --- CARNES E OVOS (VALORES CHO GERALMENTE 0) ---
  { id: 'sbd-c1', name: 'Bife de Boi', category: 'Carnes e Ovos', variations: [{ label: '1 unidade média (100g)', carbsPerUnit: 0 }] },
  { id: 'sbd-c2', name: 'Frango Grelhado', category: 'Carnes e Ovos', variations: [{ label: '1 filé médio (100g)', carbsPerUnit: 0 }] },
  { id: 'sbd-c3', name: 'Ovo de Galinha', category: 'Carnes e Ovos', variations: [{ label: 'Cozido (1 unid)', carbsPerUnit: 0 }, { label: 'Frito (1 unid)', carbsPerUnit: 0 }, { label: 'Mexido (1 unid)', carbsPerUnit: 0 }] },
  { id: 'sbd-c4', name: 'Peixe Grelhado', category: 'Carnes e Ovos', variations: [{ label: '1 posta ou filé (100g)', carbsPerUnit: 0 }] },
  { id: 'sbd-c5', name: 'Linguiça Calabresa', category: 'Carnes e Ovos', variations: [{ label: '1 unidade (50g)', carbsPerUnit: 0 }] },

  // --- LANCHES E PRATOS (SBD) ---
  { id: 'sbd-lp1', name: 'Acarajé', category: 'Lanches e Pratos', variations: [{ label: '1 unidade média (100g)', carbsPerUnit: 22 }] },
  { id: 'sbd-lp2', name: 'Baião de Dois', category: 'Lanches e Pratos', variations: [{ label: '1 escumadeira cheia (100g)', carbsPerUnit: 20 }] },
  { id: 'sbd-lp3', name: 'Coxinha de Frango', category: 'Lanches e Pratos', variations: [{ label: '1 unidade grande (110g)', carbsPerUnit: 38 }, { label: '1 unidade média (50g)', carbsPerUnit: 17 }, { label: '1 unidade pequena (20g)', carbsPerUnit: 7 }] },
  { id: 'sbd-lp4', name: 'Esfiha de Carne', category: 'Lanches e Pratos', variations: [{ label: '1 unidade média (80g)', carbsPerUnit: 29 }, { label: 'Habib\'s (1 unidade)', carbsPerUnit: 18 }] },
  { id: 'sbd-lp5', name: 'Lasanha à Bolonhesa', category: 'Lanches e Pratos', variations: [{ label: '1 escumadeira (170g)', carbsPerUnit: 28 }] },
  { id: 'sbd-lp6', name: 'Pizza Mussarela', category: 'Lanches e Pratos', variations: [{ label: '1 fatia média (100g)', carbsPerUnit: 22 }] },
  { id: 'sbd-lp7', name: 'Pizza Calabresa', category: 'Lanches e Pratos', variations: [{ label: '1 fatia média (100g)', carbsPerUnit: 21 }] },
  { id: 'sbd-lp8', name: 'Quibe Frito', category: 'Lanches e Pratos', variations: [{ label: '1 unidade média (50g)', carbsPerUnit: 9 }, { label: 'Habib\'s (1 unidade)', carbsPerUnit: 14 }] },

  // --- DOCES E SOBREMESAS (SBD) ---
  { id: 'sbd-d1', name: 'Brigadeiro', category: 'Doces e Sobremesas', variations: [{ label: '1 unidade média (30g)', carbsPerUnit: 16 }, { label: '1 unidade pequena (15g)', carbsPerUnit: 9 }] },
  { id: 'sbd-d2', name: 'Pudim de Leite', category: 'Doces e Sobremesas', variations: [{ label: '1 fatia média (50g)', carbsPerUnit: 12 }] },
  { id: 'sbd-d3', name: 'Gelatina Comum', category: 'Doces e Sobremesas', variations: [{ label: '1 potinho (100g)', carbsPerUnit: 13 }] },
  { id: 'sbd-d4', name: 'Sorvete (Média)', category: 'Doces e Sobremesas', variations: [{ label: '1 bola média (60g)', carbsPerUnit: 19 }] },
  { id: 'sbd-d5', name: 'Goiabada', category: 'Doces e Sobremesas', variations: [{ label: '1 fatia média (40g)', carbsPerUnit: 25 }] },

  // --- BEBIDAS (SBD) ---
  { id: 'sbd-b1', name: 'Suco de Laranja Natural', category: 'Bebidas', variations: [{ label: '1 copo (200ml)', carbsPerUnit: 21 }] },
  { id: 'sbd-b2', name: 'Suco de Uva Integral', category: 'Bebidas', variations: [{ label: '1 copo duplo (240ml)', carbsPerUnit: 35 }] },
  { id: 'sbd-b3', name: 'Refrigerante Comum', category: 'Bebidas', variations: [{ label: '1 copo duplo (240ml)', carbsPerUnit: 24 }] },
  { id: 'sbd-b4', name: 'Água de Coco', category: 'Bebidas', variations: [{ label: '1 copo (200ml)', carbsPerUnit: 11 }] },
  { id: 'sbd-b5', name: 'Leite Integral Vaca', category: 'Bebidas', variations: [{ label: '1 copo (200ml)', carbsPerUnit: 10 }] },

  // --- FAST FOOD (SBD) ---
  { id: 'sbd-ff1', name: 'Big Mac (McDonald\'s)', category: 'Fast Food & Restaurantes', variations: [{ label: '1 unidade (210g)', carbsPerUnit: 41 }] },
  { id: 'sbd-ff2', name: 'McFritas Média', category: 'Fast Food & Restaurantes', variations: [{ label: '1 porção', carbsPerUnit: 35 }] },
  { id: 'sbd-ff3', name: 'Whopper (Burger King)', category: 'Fast Food & Restaurantes', variations: [{ label: '1 unidade', carbsPerUnit: 52 }] },
  { id: 'sbd-ff4', name: 'Sanduíche BMT (Subway)', category: 'Fast Food & Restaurantes', variations: [{ label: '1 porção 15cm', carbsPerUnit: 47 }] },
];
