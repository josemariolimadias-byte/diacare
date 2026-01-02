
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

export const CATEGORIES = ['Grãos e Feijões', 'Pães e Farináceos', 'Frutas', 'Vegetais e Raízes', 'Laticínios', 'Proteínas', 'Bebidas'];

export const FOOD_DATABASE: FoodItem[] = [
  // --- GRÃOS E FEIJÕES (SBD pág. 91-92) ---
  {
    id: 'rice-white',
    name: 'Arroz Branco Cozido',
    category: 'Grãos e Feijões',
    variations: [
      { label: '1 colher de servir (45g)', carbsPerUnit: 15, caloriesPerUnit: 74 },
      { label: '1 colher de sopa cheia (20g)', carbsPerUnit: 6, caloriesPerUnit: 26 }
    ]
  },
  {
    id: 'bean-carioquinha',
    name: 'Feijão Carioquinha (Grão+Caldo)',
    category: 'Grãos e Feijões',
    variations: [
      { label: '1 concha média rasa (80g)', carbsPerUnit: 14, caloriesPerUnit: 89 },
      { label: '1 colher de sopa cheia (17g)', carbsPerUnit: 3, caloriesPerUnit: 19 }
    ]
  },
  {
    id: 'lentil-cooked',
    name: 'Lentilha Cozida',
    category: 'Grãos e Feijões',
    variations: [
      { label: '1 colher de sopa cheia (18g)', carbsPerUnit: 3, caloriesPerUnit: 17 }
    ]
  },
  {
    id: 'chickpea-cooked',
    name: 'Grão de Bico Cozido',
    category: 'Grãos e Feijões',
    variations: [
      { label: '1 concha cheia (120g)', carbsPerUnit: 25, caloriesPerUnit: 138 }
    ]
  },

  // --- PÃES E FARINÁCEOS (SBD pág. 121-127) ---
  {
    id: 'bread-french',
    name: 'Pão Francês',
    category: 'Pães e Farináceos',
    variations: [
      { label: '1 unidade (50g)', carbsPerUnit: 29, caloriesPerUnit: 135 }
    ]
  },
  {
    id: 'tapioca-flour',
    name: 'Tapioca (Goma)',
    category: 'Pães e Farináceos',
    variations: [
      { label: '1 colher de sopa (16g)', carbsPerUnit: 14, caloriesPerUnit: 57 },
      { label: '1 unidade pequena (80g)', carbsPerUnit: 50, caloriesPerUnit: 282 }
    ]
  },
  {
    id: 'cuscuz-corn',
    name: 'Cuscuz de Milho',
    category: 'Pães e Farináceos',
    variations: [
      { label: '1 pedaço médio (135g)', carbsPerUnit: 34, caloriesPerUnit: 152 }
    ]
  },
  {
    id: 'pao-queijo',
    name: 'Pão de Queijo',
    category: 'Pães e Farináceos',
    variations: [
      { label: '1 unidade tradicional (25g)', carbsPerUnit: 11, caloriesPerUnit: 109 }
    ]
  },

  // --- FRUTAS (SBD pág. 49-56, 111-113) ---
  {
    id: 'acai-pure',
    name: 'Açaí (Polpa natural)',
    category: 'Frutas',
    variations: [
      { label: '1 copo pequeno (150g)', carbsPerUnit: 55, caloriesPerUnit: 220 }
    ]
  },
  {
    id: 'banana-prata',
    name: 'Banana Prata',
    category: 'Frutas',
    variations: [
      { label: '1 unidade média (55g)', carbsPerUnit: 14, caloriesPerUnit: 54 }
    ]
  },
  {
    id: 'apple-gala',
    name: 'Maçã com casca',
    category: 'Frutas',
    variations: [
      { label: '1 unidade pequena (90g)', carbsPerUnit: 14, caloriesPerUnit: 58 }
    ]
  },
  {
    id: 'papaya-formosa',
    name: 'Mamão Formosa',
    category: 'Frutas',
    variations: [
      { label: '1 fatia média (100g)', carbsPerUnit: 12, caloriesPerUnit: 47 }
    ]
  },
  {
    id: 'orange-lima',
    name: 'Laranja Lima',
    category: 'Frutas',
    variations: [
      { label: '1 unidade média (180g)', carbsPerUnit: 20, caloriesPerUnit: 82 }
    ]
  },

  // --- VEGETAIS E RAÍZES (SBD pág. 61, 113-114, 121) ---
  {
    id: 'cassava-boiled',
    name: 'Mandioca (Aipim) Cozida',
    category: 'Vegetais e Raízes',
    variations: [
      { label: '1 pedaço médio (60g)', carbsPerUnit: 18, caloriesPerUnit: 75 },
      { label: '1 colher de sopa (20g)', carbsPerUnit: 6, caloriesPerUnit: 25 }
    ]
  },
  {
    id: 'sweet-potato-boiled',
    name: 'Batata Doce Cozida',
    category: 'Vegetais e Raízes',
    variations: [
      { label: '1 colher de sopa cheia (42g)', carbsPerUnit: 10, caloriesPerUnit: 43 }
    ]
  },
  {
    id: 'potato-english-boiled',
    name: 'Batata Inglesa Cozida',
    category: 'Vegetais e Raízes',
    variations: [
      { label: '1 colher de sopa cheia (30g)', carbsPerUnit: 6, caloriesPerUnit: 26 }
    ]
  },
  {
    id: 'carrot-boiled',
    name: 'Cenoura Cozida',
    category: 'Vegetais e Raízes',
    variations: [
      { label: '1 colher de sopa cheia (25g)', carbsPerUnit: 2, caloriesPerUnit: 8 }
    ]
  },
  {
    id: 'beet-boiled',
    name: 'Beterraba Cozida',
    category: 'Vegetais e Raízes',
    variations: [
      { label: '1 colher de sopa cheia (20g)', carbsPerUnit: 2, caloriesPerUnit: 9 }
    ]
  },

  // --- LATICÍNIOS (SBD pág. 110, 134-135) ---
  {
    id: 'milk-whole',
    name: 'Leite Integral',
    category: 'Laticínios',
    variations: [
      { label: '1 copo (200ml)', carbsPerUnit: 10, caloriesPerUnit: 120 }
    ]
  },
  {
    id: 'yogurt-natural',
    name: 'Iogurte Natural',
    category: 'Laticínios',
    variations: [
      { label: '1 pote (170g)', carbsPerUnit: 22, caloriesPerUnit: 122 }
    ]
  },
  {
    id: 'cheese-minas',
    name: 'Queijo Minas Frescal',
    category: 'Laticínios',
    variations: [
      { label: '1 fatia média (30g)', carbsPerUnit: 1, caloriesPerUnit: 73 }
    ]
  },

  // --- PROTEÍNAS (CARNES VERMELHAS, BRANCAS E PEIXES) (SBD pág. 72-73, 111, 139) ---
  {
    id: 'beef-grilled',
    name: 'Carne Bovina Grelhada (Média)',
    category: 'Proteínas',
    variations: [
      { label: '1 bife médio (100g)', carbsPerUnit: 0, caloriesPerUnit: 228 }
    ]
  },
  {
    id: 'chicken-grilled',
    name: 'Filé de Frango Grelhado',
    category: 'Proteínas',
    variations: [
      { label: '1 filé pequeno (100g)', carbsPerUnit: 0, caloriesPerUnit: 163 }
    ]
  },
  {
    id: 'fish-hake-boiled',
    name: 'Peixe (Abadejo/Tilápia) Assado',
    category: 'Proteínas',
    variations: [
      { label: '1 filé médio (100g)', carbsPerUnit: 0, caloriesPerUnit: 112 }
    ]
  },
  {
    id: 'egg-boiled',
    name: 'Ovo de Galinha Cozido',
    category: 'Proteínas',
    variations: [
      { label: '1 unidade média (45g)', carbsPerUnit: 0, caloriesPerUnit: 71 }
    ]
  },
  {
    id: 'liver-grilled',
    name: 'Fígado de Boi Grelhado',
    category: 'Proteínas',
    variations: [
      { label: '1 bife médio (110g)', carbsPerUnit: 5, caloriesPerUnit: 239 }
    ]
  },

  // --- BEBIDAS (CAFÉS, SUCOS, CHÁS) (SBD pág. 110, 146-147) ---
  {
    id: 'coffee-with-sugar',
    name: 'Café Coado com Açúcar',
    category: 'Bebidas',
    variations: [
      { label: '1 xícara de chá (200ml)', carbsPerUnit: 20, caloriesPerUnit: 76 },
      { label: '1 xícara de café (50ml)', carbsPerUnit: 5, caloriesPerUnit: 19 }
    ]
  },
  {
    id: 'coffee-pure',
    name: 'Café Coado sem Açúcar',
    category: 'Bebidas',
    variations: [
      { label: '1 xícara de chá (200ml)', carbsPerUnit: 0, caloriesPerUnit: 4 }
    ]
  },
  {
    id: 'juice-orange-natural',
    name: 'Suco de Laranja Natural',
    category: 'Bebidas',
    variations: [
      { label: '1 copo (200ml)', carbsPerUnit: 21, caloriesPerUnit: 84 }
    ]
  },
  {
    id: 'juice-grape-integral',
    name: 'Suco de Uva Integral',
    category: 'Bebidas',
    variations: [
      { label: '1 copo duplo (240ml)', carbsPerUnit: 35, caloriesPerUnit: 146 }
    ]
  },
  {
    id: 'tea-mate-sugar',
    name: 'Chá Mate com Açúcar',
    category: 'Bebidas',
    variations: [
      { label: '1 xícara de chá (200ml)', carbsPerUnit: 16, caloriesPerUnit: 64 }
    ]
  },
  {
    id: 'coconut-water',
    name: 'Água de Coco',
    category: 'Bebidas',
    variations: [
      { label: '1 copo (200ml)', carbsPerUnit: 11, caloriesPerUnit: 44 }
    ]
  }
];
