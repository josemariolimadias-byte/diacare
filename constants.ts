
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
  'Grãos, Massas e Tubérculos',
  'Feijões e Leguminosas',
  'Leites e Iogurtes',
  'Pães e Biscoitos',
  'Doces e Sobremesas',
  'Bebidas e Sucos',
  'Fast Food e Restaurantes',
  'Carnes e Proteínas'
];

export const FOOD_DATABASE: FoodItem[] = [
  // --- FRUTAS ---
  { id: 'sbd-f1', name: 'Abacate', category: 'Frutas', variations: [{ label: '1 fatia (90g)', carbsPerUnit: 5 }, { label: '1 colher sopa picado (45g)', carbsPerUnit: 3 }] },
  { id: 'sbd-f2', name: 'Abacaxi', category: 'Frutas', variations: [{ label: '1 fatia média (75g)', carbsPerUnit: 10 }, { label: 'Em calda (64g)', carbsPerUnit: 19 }, { label: 'Polpa congelada (100g)', carbsPerUnit: 8 }] },
  { id: 'sbd-f3', name: 'Abiu cru', category: 'Frutas', variations: [{ label: '1 unidade (100g)', carbsPerUnit: 15 }] },
  { id: 'sbd-f4', name: 'Abricó-do-pará', category: 'Frutas', variations: [{ label: '1 fatia média (100g)', carbsPerUnit: 13 }] },
  { id: 'sbd-f5', name: 'Acerola', category: 'Frutas', variations: [{ label: '1 unidade (12g)', carbsPerUnit: 1 }] },
  { id: 'sbd-f6', name: 'Ameixa Fresca', category: 'Frutas', variations: [{ label: 'Preta (42g)', carbsPerUnit: 4 }, { label: 'Vermelha (5g)', carbsPerUnit: 2 }] },
  { id: 'sbd-f7', name: 'Ameixa Seca/Passa', category: 'Frutas', variations: [{ label: 'Seca (5g)', carbsPerUnit: 2 }, { label: 'Passa (15g)', carbsPerUnit: 10 }] },
  { id: 'sbd-f8', name: 'Amora', category: 'Frutas', variations: [{ label: '1 unidade média (8g)', carbsPerUnit: 1 }] },
  { id: 'sbd-f9', name: 'Banana Nanica', category: 'Frutas', variations: [{ label: '1 unidade média (86g)', carbsPerUnit: 20 }] },
  { id: 'sbd-f10', name: 'Banana Prata', category: 'Frutas', variations: [{ label: '1 unidade média (55g)', carbsPerUnit: 14 }, { label: '1 unidade pequena (40g)', carbsPerUnit: 10 }] },
  { id: 'sbd-f11', name: 'Banana da Terra', category: 'Frutas', variations: [{ label: 'Crua (100g)', carbsPerUnit: 27 }, { label: 'Frita (31g)', carbsPerUnit: 10 }] },
  { id: 'sbd-f12', name: 'Caju', category: 'Frutas', variations: [{ label: '1 unidade média (90g)', carbsPerUnit: 9 }] },
  { id: 'sbd-f13', name: 'Caqui', category: 'Frutas', variations: [{ label: '1 unidade média (110g)', carbsPerUnit: 21 }, { label: '1 unidade pequena (85g)', carbsPerUnit: 16 }] },
  { id: 'sbd-f14', name: 'Cereja', category: 'Frutas', variations: [{ label: 'Fresca (7g)', carbsPerUnit: 1 }, { label: 'Em calda (7g)', carbsPerUnit: 2 }] },
  { id: 'sbd-f15', name: 'Coco', category: 'Frutas', variations: [{ label: 'In natura (40g)', carbsPerUnit: 4 }, { label: 'Fresco ralado (9g)', carbsPerUnit: 1 }] },
  { id: 'sbd-f16', name: 'Figo', category: 'Frutas', variations: [{ label: 'Fresco (55g)', carbsPerUnit: 8 }, { label: 'Seco (30g)', carbsPerUnit: 20 }, { label: 'Cristalizado (30g)', carbsPerUnit: 22 }] },
  { id: 'sbd-f17', name: 'Goiaba', category: 'Frutas', variations: [{ label: '1 unidade média (100g)', carbsPerUnit: 14 }] },
  { id: 'sbd-f18', name: 'Graviola', category: 'Frutas', variations: [{ label: '1 pedaço médio (80g)', carbsPerUnit: 13 }] },
  { id: 'sbd-f19', name: 'Jaca', category: 'Frutas', variations: [{ label: '1 bago médio (12g)', carbsPerUnit: 3 }, { label: 'Cozida (50g)', carbsPerUnit: 13 }] },
  { id: 'sbd-f20', name: 'Kiwi', category: 'Frutas', variations: [{ label: '1 unidade média (94g)', carbsPerUnit: 11 }] },
  { id: 'sbd-f21', name: 'Laranja', category: 'Frutas', variations: [{ label: 'Baía/Lima (180g)', carbsPerUnit: 20 }] },
  { id: 'sbd-f22', name: 'Maçã', category: 'Frutas', variations: [{ label: 'Com casca (90g)', carbsPerUnit: 14 }, { label: 'Verde (130g)', carbsPerUnit: 19 }, { label: 'Do amor (110g)', carbsPerUnit: 31 }] },
  { id: 'sbd-f23', name: 'Mamão Formosa', category: 'Frutas', variations: [{ label: '1 fatia média (100g)', carbsPerUnit: 12 }, { label: '1 fatia grande (170g)', carbsPerUnit: 20 }] },
  { id: 'sbd-f24', name: 'Mamão Papaia', category: 'Frutas', variations: [{ label: '1 fatia média (100g)', carbsPerUnit: 10 }, { label: '1/2 unidade (160g)', carbsPerUnit: 16 }] },
  { id: 'sbd-f25', name: 'Manga', category: 'Frutas', variations: [{ label: 'Palmer (100g)', carbsPerUnit: 19 }, { label: 'Espada/Haden (100g)', carbsPerUnit: 17 }, { label: 'Média (100g)', carbsPerUnit: 16 }] },
  { id: 'sbd-f26', name: 'Melancia', category: 'Frutas', variations: [{ label: '1 fatia média (200g)', carbsPerUnit: 13 }] },
  { id: 'sbd-f27', name: 'Melão', category: 'Frutas', variations: [{ label: '1 fatia grande (115g)', carbsPerUnit: 9 }] },
  { id: 'sbd-f28', name: 'Morango', category: 'Frutas', variations: [{ label: '1 unidade (12g)', carbsPerUnit: 1 }] },
  { id: 'sbd-f29', name: 'Pera', category: 'Frutas', variations: [{ label: '1 unidade média (130g)', carbsPerUnit: 19 }] },
  { id: 'sbd-f30', name: 'Pêssego', category: 'Frutas', variations: [{ label: 'Amarelo (60g)', carbsPerUnit: 6 }, { label: 'Em calda (30g)', carbsPerUnit: 10 }] },
  { id: 'sbd-f31', name: 'Pitaya', category: 'Frutas', variations: [{ label: '1 unidade (80g)', carbsPerUnit: 10 }] },
  { id: 'sbd-f32', name: 'Tangerina/Ponkã', category: 'Frutas', variations: [{ label: 'Ponkã (135g)', carbsPerUnit: 13 }, { label: 'Mexerica (100g)', carbsPerUnit: 15 }] },
  { id: 'sbd-f33', name: 'Uva', category: 'Frutas', variations: [{ label: 'Niágara/Comum (100g)', carbsPerUnit: 17 }, { label: 'Itália (30g)', carbsPerUnit: 0.6 }, { label: 'Passa (15g)', carbsPerUnit: 12 }] },

  // --- VERDURAS E LEGUMES ---
  { id: 'sbd-v1', name: 'Abóbora', category: 'Verduras e Legumes', variations: [{ label: 'Cabotian cozida (36g)', carbsPerUnit: 3 }, { label: 'Doce picada (36g)', carbsPerUnit: 4 }, { label: 'D\'água picada (36g)', carbsPerUnit: 0 }] },
  { id: 'sbd-v2', name: 'Abobrinha', category: 'Verduras e Legumes', variations: [{ label: 'Italiana cozida (20g)', carbsPerUnit: 0 }, { label: 'Paulista crua (20g)', carbsPerUnit: 2 }, { label: 'Recheada (100g)', carbsPerUnit: 6 }] },
  { id: 'sbd-v3', name: 'Acelga', category: 'Verduras e Legumes', variations: [{ label: '1 colher sopa cheia (6g)', carbsPerUnit: 0 }] },
  { id: 'sbd-v4', name: 'Agrião', category: 'Verduras e Legumes', variations: [{ label: 'Picado (7g)', carbsPerUnit: 0 }, { label: 'Refogado (25g)', carbsPerUnit: 1 }] },
  { id: 'sbd-v5', name: 'Alface', category: 'Verduras e Legumes', variations: [{ label: 'Americana/Crespa/Lisa (10g)', carbsPerUnit: 0 }] },
  { id: 'sbd-v6', name: 'Berinjela', category: 'Verduras e Legumes', variations: [{ label: 'Cozida (25g)', carbsPerUnit: 2 }, { label: 'Ensopada (75g)', carbsPerUnit: 6 }, { label: 'Frita (13g)', carbsPerUnit: 1 }] },
  { id: 'sbd-v7', name: 'Beterraba', category: 'Verduras e Legumes', variations: [{ label: 'Cozida picada (20g)', carbsPerUnit: 2 }, { label: 'Crua (16g)', carbsPerUnit: 1 }] },
  { id: 'sbd-v8', name: 'Brócolis', category: 'Verduras e Legumes', variations: [{ label: 'Cozido picado (10g)', carbsPerUnit: 0 }] },
  { id: 'sbd-v9', name: 'Cenoura', category: 'Verduras e Legumes', variations: [{ label: 'Cozida (25g)', carbsPerUnit: 2 }, { label: 'Crua ralada (12g)', carbsPerUnit: 1 }] },
  { id: 'sbd-v10', name: 'Chuchu', category: 'Verduras e Legumes', variations: [{ label: 'Cozido picado (20g)', carbsPerUnit: 1 }, { label: 'À milanesa (70g)', carbsPerUnit: 10 }, { label: 'Molho branco (30g)', carbsPerUnit: 3 }] },
  { id: 'sbd-v11', name: 'Couve Manteiga', category: 'Verduras e Legumes', variations: [{ label: 'Crua (20g)', carbsPerUnit: 1 }, { label: 'Refogada (20g)', carbsPerUnit: 1 }] },
  { id: 'sbd-v12', name: 'Couve-Flor', category: 'Verduras e Legumes', variations: [{ label: 'Cozida (25g)', carbsPerUnit: 1 }, { label: 'À milanesa (90g)', carbsPerUnit: 11 }] },
  { id: 'sbd-v13', name: 'Espinafre', category: 'Verduras e Legumes', variations: [{ label: 'Cru (20g)', carbsPerUnit: 0 }, { label: 'Refogado (25g)', carbsPerUnit: 2 }] },
  { id: 'sbd-v14', name: 'Jiló', category: 'Verduras e Legumes', variations: [{ label: 'Cozido (60g)', carbsPerUnit: 4 }, { label: 'Frito (60g)', carbsPerUnit: 5 }] },
  { id: 'sbd-v15', name: 'Palmito', category: 'Verduras e Legumes', variations: [{ label: 'Juçara (15g)', carbsPerUnit: 0 }, { label: 'Em conserva (15g)', carbsPerUnit: 1 }] },
  { id: 'sbd-v16', name: 'Pepino', category: 'Verduras e Legumes', variations: [{ label: 'Cru (3g)', carbsPerUnit: 0 }, { label: 'Com casca/Picles (50g)', carbsPerUnit: 2 }] },
  { id: 'sbd-v17', name: 'Pimentão', category: 'Verduras e Legumes', variations: [{ label: 'Amarelo/Verde/Vermelho (20g)', carbsPerUnit: 1 }] },
  { id: 'sbd-v18', name: 'Quiabo', category: 'Verduras e Legumes', variations: [{ label: 'Cozido (15g)', carbsPerUnit: 1 }] },
  { id: 'sbd-v19', name: 'Repolho', category: 'Verduras e Legumes', variations: [{ label: 'Cozido (10g)', carbsPerUnit: 0 }, { label: 'Cru (10g)', carbsPerUnit: 0 }] },
  { id: 'sbd-v20', name: 'Tomate', category: 'Verduras e Legumes', variations: [{ label: '1 unidade pequena (50g)', carbsPerUnit: 2 }] },
  { id: 'sbd-v21', name: 'Vagem cozida', category: 'Verduras e Legumes', variations: [{ label: '1 colher sopa (20g)', carbsPerUnit: 2 }] },

  // --- GRÃOS, MASSAS E TUBÉRCULOS ---
  { id: 'sbd-m1', name: 'Arroz Branco Cozido', category: 'Grãos, Massas e Tubérculos', variations: [{ label: '1 colher arroz (45g)', carbsPerUnit: 15 }, { label: '1 colher sopa (20g)', carbsPerUnit: 6 }] },
  { id: 'sbd-m2', name: 'Arroz Integral Cozido', category: 'Grãos, Massas e Tubérculos', variations: [{ label: '1 colher sopa (20g)', carbsPerUnit: 5 }] },
  { id: 'sbd-m3', name: 'Arroz à Grega', category: 'Grãos, Massas e Tubérculos', variations: [{ label: '1 colher servir (60g)', carbsPerUnit: 18 }, { label: '1 colher sopa (25g)', carbsPerUnit: 7 }] },
  { id: 'sbd-m4', name: 'Arroz Carreteiro', category: 'Grãos, Massas e Tubérculos', variations: [{ label: '1 colher servir (45g)', carbsPerUnit: 5 }] },
  { id: 'sbd-m5', name: 'Aipim/Mandioca/Macaxeira', category: 'Grãos, Massas e Tubérculos', variations: [{ label: 'Cozido (100g)', carbsPerUnit: 30 }, { label: 'Frito (100g)', carbsPerUnit: 50 }, { label: 'Cozido (20g)', carbsPerUnit: 6 }] },
  { id: 'sbd-m6', name: 'Batata Inglesa', category: 'Grãos, Massas e Tubérculos', variations: [{ label: 'Cozida (30g)', carbsPerUnit: 6 }, { label: 'Frita (65g)', carbsPerUnit: 39 }, { label: 'Sauté (25g)', carbsPerUnit: 4 }] },
  { id: 'sbd-m7', name: 'Batata Doce Cozida', category: 'Grãos, Massas e Tubérculos', variations: [{ label: '1 colher sopa (42g)', carbsPerUnit: 10 }, { label: 'Amarela assada (30g)', carbsPerUnit: 10 }, { label: 'Branca cozida (30g)', carbsPerUnit: 8 }] },
  { id: 'sbd-m8', name: 'Cuscuz de Milho', category: 'Grãos, Massas e Tubérculos', variations: [{ label: 'Com sal (135g)', carbsPerUnit: 34 }, { label: 'Pequeno (85g)', carbsPerUnit: 21 }, { label: 'Paulista (150g)', carbsPerUnit: 34 }] },
  { id: 'sbd-m9', name: 'Espaguete Cozido', category: 'Grãos, Massas e Tubérculos', variations: [{ label: 'Ao sugo (110g)', carbsPerUnit: 24 }, { label: 'Com molho tomate (110g)', carbsPerUnit: 23 }, { label: 'Cozido simples (110g)', carbsPerUnit: 39 }] },
  { id: 'sbd-m10', name: 'Farinha de Mandioca', category: 'Grãos, Massas e Tubérculos', variations: [{ label: 'Crua (16g)', carbsPerUnit: 14 }, { label: 'D\'água Pará (50g)', carbsPerUnit: 41 }] },
  { id: 'sbd-m11', name: 'Farofa', category: 'Grãos, Massas e Tubérculos', variations: [{ label: 'Com linguiça (45g)', carbsPerUnit: 21 }, { label: 'Simples (45g)', carbsPerUnit: 36 }, { label: 'De mandioca (25g)', carbsPerUnit: 20 }] },
  { id: 'sbd-m12', name: 'Inhame Cozido', category: 'Grãos, Massas e Tubérculos', variations: [{ label: '1 fatia média (100g)', carbsPerUnit: 28 }, { label: 'Assado (35g)', carbsPerUnit: 8 }] },
  { id: 'sbd-m13', name: 'Milho Verde', category: 'Grãos, Massas e Tubérculos', variations: [{ label: '1 unidade grande (100g)', carbsPerUnit: 29 }, { label: 'Cozido debulhado (24g)', carbsPerUnit: 6 }, { label: 'Em conserva (24g)', carbsPerUnit: 5 }] },
  { id: 'sbd-m14', name: 'Nhoque', category: 'Grãos, Massas e Tubérculos', variations: [{ label: '1 escumadeira (100g)', carbsPerUnit: 37 }, { label: '1 colher sopa (30g)', carbsPerUnit: 7 }] },
  { id: 'sbd-m15', name: 'Purê de Batata', category: 'Grãos, Massas e Tubérculos', variations: [{ label: '1 concha (140g)', carbsPerUnit: 22 }, { label: '1 colher sopa (45g)', carbsPerUnit: 8 }] },
  { id: 'sbd-m16', name: 'Tapioca (Goma)', category: 'Grãos, Massas e Tubérculos', variations: [{ label: 'Com manteiga (80g)', carbsPerUnit: 50 }, { label: 'Leite condensado (110g)', carbsPerUnit: 67 }, { label: 'Queijo coalho (110g)', carbsPerUnit: 57 }] },

  // --- FEIJÕES E LEGUMINOSAS ---
  { id: 'sbd-l1', name: 'Feijão Preto/Carioca', category: 'Feijões e Leguminosas', variations: [{ label: 'Concha média rasa (80g)', carbsPerUnit: 10 }, { label: 'Concha média cheia (140g)', carbsPerUnit: 18 }, { label: '1 colher sopa (17g)', carbsPerUnit: 2 }] },
  { id: 'sbd-l2', name: 'Feijão Branco', category: 'Feijões e Leguminosas', variations: [{ label: '1 concha média (80g)', carbsPerUnit: 21 }, { label: '1 colher sopa (17g)', carbsPerUnit: 4 }] },
  { id: 'sbd-l3', name: 'Feijão Tropeiro', category: 'Feijões e Leguminosas', variations: [{ label: '1 concha média (70g)', carbsPerUnit: 33 }, { label: '1 colher sopa (15g)', carbsPerUnit: 7 }] },
  { id: 'sbd-l4', name: 'Feijoada caseira', category: 'Feijões e Leguminosas', variations: [{ label: '1 concha média (225g)', carbsPerUnit: 24 }, { label: '1 colher sopa (35g)', carbsPerUnit: 4 }] },
  { id: 'sbd-l5', name: 'Grão de Bico Cozido', category: 'Feijões e Leguminosas', variations: [{ label: 'Sem caldo (120g)', carbsPerUnit: 25 }, { label: '1 colher sopa (22g)', carbsPerUnit: 5 }] },
  { id: 'sbd-l6', name: 'Lentilha Cozida', category: 'Feijões e Leguminosas', variations: [{ label: '1 colher sopa cheia (18g)', carbsPerUnit: 3 }] },
  { id: 'sbd-l7', name: 'Ervilha em conserva', category: 'Feijões e Leguminosas', variations: [{ label: '1 colher sopa (27g)', carbsPerUnit: 4 }, { label: '1 colher arroz (38g)', carbsPerUnit: 6 }] },

  // --- LEITES E IOGURTES ---
  { id: 'sbd-i1', name: 'Leite de Vaca', category: 'Leites e Iogurtes', variations: [{ label: 'Integral (200ml)', carbsPerUnit: 10 }, { label: 'Desnatado (240ml)', carbsPerUnit: 11 }, { label: 'Semi-desnatado (240ml)', carbsPerUnit: 11 }] },
  { id: 'sbd-i2', name: 'Iogurte Natural', category: 'Leites e Iogurtes', variations: [{ label: 'Integral (170g)', carbsPerUnit: 10 }, { label: 'Desnatado (170g)', carbsPerUnit: 11 }] },
  { id: 'sbd-i3', name: 'Activia Morango (Danone)', category: 'Leites e Iogurtes', variations: [{ label: '1 garrafinha (150g)', carbsPerUnit: 19 }, { label: '1 copo (200g)', carbsPerUnit: 25 }] },
  { id: 'sbd-i4', name: 'Iogurte Grego (Vigor)', category: 'Leites e Iogurtes', variations: [{ label: 'Tradicional (90g)', carbsPerUnit: 16 }, { label: 'Zero (90g)', carbsPerUnit: 5 }] },
  { id: 'sbd-i5', name: 'YoPRO (Danone)', category: 'Leites e Iogurtes', variations: [{ label: '15g proteína (250g)', carbsPerUnit: 19 }, { label: '25g proteína (250g)', carbsPerUnit: 13 }] },
  { id: 'sbd-i6', name: 'Yorgus Natural', category: 'Leites e Iogurtes', variations: [{ label: '0% gordura (130g)', carbsPerUnit: 3 }, { label: 'Sem lactose (130g)', carbsPerUnit: 2.6 }] },

  // --- PÃES E BISCOITOS ---
  { id: 'sbd-p1', name: 'Pão Francês', category: 'Pães e Biscoitos', variations: [{ label: '1 unidade (50g)', carbsPerUnit: 29 }, { label: 'Integral (50g)', carbsPerUnit: 23 }] },
  { id: 'sbd-p2', name: 'Pão de Forma', category: 'Pães e Biscoitos', variations: [{ label: 'Branco (25g)', carbsPerUnit: 12 }, { label: 'Integral (25g)', carbsPerUnit: 11 }, { label: 'Wickbold 100% (25g)', carbsPerUnit: 8 }] },
  { id: 'sbd-p3', name: 'Pão de Queijo', category: 'Pães e Biscoitos', variations: [{ label: 'Tradicional (25g)', carbsPerUnit: 11 }, { label: 'Lanche (45g)', carbsPerUnit: 20 }, { label: 'Super lanche (90g)', carbsPerUnit: 40 }] },
  { id: 'sbd-p4', name: 'Bisnaguinha', category: 'Pães e Biscoitos', variations: [{ label: 'Pullman (20g)', carbsPerUnit: 11 }, { label: 'Seven Boys (17g)', carbsPerUnit: 9 }, { label: 'Integral (17g)', carbsPerUnit: 8 }] },
  { id: 'sbd-p5', name: 'Biscoito Recheado', category: 'Pães e Biscoitos', variations: [{ label: 'Bono Chocolate (10g)', carbsPerUnit: 6 }, { label: 'Passatempo (10g)', carbsPerUnit: 7 }] },
  { id: 'sbd-p6', name: 'Biscoito Maria/Maisena', category: 'Pães e Biscoitos', variations: [{ label: 'Nestlé (6g)', carbsPerUnit: 4 }, { label: 'Zero açúcar (8g)', carbsPerUnit: 3 }] },
  { id: 'sbd-p7', name: 'Torrada', category: 'Pães e Biscoitos', variations: [{ label: 'Pão francês caseira (8g)', carbsPerUnit: 6 }, { label: 'Magic Toast Integral (18g)', carbsPerUnit: 12 }] },

  // --- DOCES E SOBREMESAS ---
  { id: 'sbd-d1', name: 'Brigadeiro', category: 'Doces e Sobremesas', variations: [{ label: 'Médio (30g)', carbsPerUnit: 16 }, { label: 'Pequeno (15g)', carbsPerUnit: 9 }] },
  { id: 'sbd-d2', name: 'Beijinho', category: 'Doces e Sobremesas', variations: [{ label: 'Médio (25g)', carbsPerUnit: 11 }, { label: 'Pequeno (6g)', carbsPerUnit: 3 }] },
  { id: 'sbd-d3', name: 'Bolo de Cenoura', category: 'Doces e Sobremesas', variations: [{ label: 'Dona Benta (60g)', carbsPerUnit: 28 }, { label: 'Comum (60g)', carbsPerUnit: 38 }] },
  { id: 'sbd-d4', name: 'Bolo de Chocolate', category: 'Doces e Sobremesas', variations: [{ label: 'Com recheio (100g)', carbsPerUnit: 54 }, { label: 'Dona Benta (60g)', carbsPerUnit: 30 }] },
  { id: 'sbd-d5', name: 'Bombom', category: 'Doces e Sobremesas', variations: [{ label: 'Sonho de Valsa (20g)', carbsPerUnit: 13 }, { label: 'Ouro Branco (20g)', carbsPerUnit: 12 }, { label: 'Alpino (13g)', carbsPerUnit: 8 }] },
  { id: 'sbd-d6', name: 'Gelatina', category: 'Doces e Sobremesas', variations: [{ label: 'Com açúcar (100g)', carbsPerUnit: 13 }, { label: 'Diet (100g)', carbsPerUnit: 1 }] },
  { id: 'sbd-d7', name: 'Pudim de Leite', category: 'Doces e Sobremesas', variations: [{ label: 'Fatia média (50g)', carbsPerUnit: 12 }, { label: 'Condensado (70g)', carbsPerUnit: 24 }] },
  { id: 'sbd-d8', name: 'Sorvete de Casquinha', category: 'Doces e Sobremesas', variations: [{ label: 'McDonald\'s (100g)', carbsPerUnit: 31 }, { label: 'Bob\'s Baunilha (100g)', carbsPerUnit: 28 }] },
  { id: 'sbd-d9', name: 'Sorvete Massa', category: 'Doces e Sobremesas', variations: [{ label: 'Kibon Napolitano (60g)', carbsPerUnit: 16 }, { label: 'Linha Zero (60g)', carbsPerUnit: 6 }] },

  // --- BEBIDAS E SUCOS ---
  { id: 'sbd-b1', name: 'Refrigerante', category: 'Bebidas e Sucos', variations: [{ label: 'Cola/Guaraná (240ml)', carbsPerUnit: 24 }, { label: 'Zero/Diet (240ml)', carbsPerUnit: 0 }] },
  { id: 'sbd-b2', name: 'Suco de Laranja', category: 'Bebidas e Sucos', variations: [{ label: 'Natural (200ml)', carbsPerUnit: 21 }, { label: 'Sem açúcar (200ml)', carbsPerUnit: 21 }] },
  { id: 'sbd-b3', name: 'Suco de Uva', category: 'Bebidas e Sucos', variations: [{ label: 'Integral (240ml)', carbsPerUnit: 35 }, { label: 'Kapo (200ml)', carbsPerUnit: 19 }] },
  { id: 'sbd-b4', name: 'Água de Coco', category: 'Bebidas e Sucos', variations: [{ label: 'Natural (200ml)', carbsPerUnit: 11 }, { label: 'Industrial (200ml)', carbsPerUnit: 11 }] },
  { id: 'sbd-b5', name: 'Cerveja', category: 'Bebidas e Sucos', variations: [{ label: 'Lata (350ml)', carbsPerUnit: 12 }, { label: '0% Carbo Bruder (350ml)', carbsPerUnit: 0 }, { label: 'Low Carb (350ml)', carbsPerUnit: 2 }] },
  { id: 'sbd-b6', name: 'Café', category: 'Bebidas e Sucos', variations: [{ label: 'Coado com açúcar (200ml)', carbsPerUnit: 20 }, { label: 'Sem açúcar (200ml)', carbsPerUnit: 0 }] },

  // --- FAST FOOD E RESTAURANTES ---
  { id: 'sbd-ff1', name: 'McDonald\'s Burguers', category: 'Fast Food e Restaurantes', variations: [{ label: 'Big Mac (210g)', carbsPerUnit: 41 }, { label: 'McChicken (185g)', carbsPerUnit: 37 }, { label: 'Quarteirão (195g)', carbsPerUnit: 34 }] },
  { id: 'sbd-ff2', name: 'McDonald\'s Acompanhamentos', category: 'Fast Food e Restaurantes', variations: [{ label: 'McFritas Média', carbsPerUnit: 35 }, { label: 'McNuggets 10 un.', carbsPerUnit: 24 }] },
  { id: 'sbd-ff3', name: 'Habib\'s Esfihas', category: 'Fast Food e Restaurantes', variations: [{ label: 'Carne Aberta (75g)', carbsPerUnit: 18 }, { label: 'Queijo (75g)', carbsPerUnit: 22 }, { label: 'Calabresa (70g)', carbsPerUnit: 19 }] },
  { id: 'sbd-ff4', name: 'Subway Sanduíches (15cm)', category: 'Fast Food e Restaurantes', variations: [{ label: 'BMT Italiano', carbsPerUnit: 47 }, { label: 'Frango Teriyaki', carbsPerUnit: 61 }, { label: 'Carne e Queijo', carbsPerUnit: 48 }] },
  { id: 'sbd-ff5', name: 'Bob\'s Burguers', category: 'Fast Food e Restaurantes', variations: [{ label: 'Big Bob (200g)', carbsPerUnit: 38 }, { label: 'Double Cheese (200g)', carbsPerUnit: 25 }] },
  { id: 'sbd-ff6', name: 'Pizza Habib\'s', category: 'Fast Food e Restaurantes', variations: [{ label: 'Mussarela (fatia)', carbsPerUnit: 28 }] },

  // --- CARNES E PROTEÍNAS (MAIORIA 0 CHO) ---
  { id: 'sbd-c1', name: 'Carne Bovina', category: 'Carnes e Proteínas', variations: [{ label: 'Grelhada/Assada (100g)', carbsPerUnit: 0 }, { label: 'Moída cozida (25g)', carbsPerUnit: 0 }] },
  { id: 'sbd-c2', name: 'Frango', category: 'Carnes e Proteínas', variations: [{ label: 'Filé grelhado (100g)', carbsPerUnit: 0 }, { label: 'Coxa assada (65g)', carbsPerUnit: 0 }] },
  { id: 'sbd-c3', name: 'Peixe', category: 'Carnes e Proteínas', variations: [{ label: 'Grelhado (100g)', carbsPerUnit: 0 }, { label: 'Sardinha óleo (41g)', carbsPerUnit: 0 }] },
  { id: 'sbd-c4', name: 'Ovos', category: 'Carnes e Proteínas', variations: [{ label: 'Cozido/Frito (1 unid)', carbsPerUnit: 0 }, { label: 'Omelete (65g)', carbsPerUnit: 2 }] },
  { id: 'sbd-c5', name: 'Embutidos', category: 'Carnes e Proteínas', variations: [{ label: 'Presunto cozido (15g)', carbsPerUnit: 0 }, { label: 'Peito peru (20g)', carbsPerUnit: 0 }, { label: 'Salame (5g)', carbsPerUnit: 0 }] },
];
