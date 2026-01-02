
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
  // --- GRÃOS E FEIJÕES ---
  {
    id: 'rice-white',
    name: 'Arroz Branco Cozido',
    category: 'Grãos e Feijões',
    variations: [
      { label: '1 colher de servir (45g)', carbsPerUnit: 15, caloriesPerUnit: 74 },
      { label: '1 colher de sopa cheia (20g)', carbsPerUnit: 6, caloriesPerUnit: 26 },
      { label: '1 xícara de chá (140g)', carbsPerUnit: 43, caloriesPerUnit: 100 }
    ]
  },
  {
    id: 'rice-integral',
    name: 'Arroz Integral Cozido',
    category: 'Grãos e Feijões',
    variations: [
      { label: '1 colher de sopa cheia (20g)', carbsPerUnit: 5, caloriesPerUnit: 25 },
      { label: '1 colher de servir (45g)', carbsPerUnit: 11, caloriesPerUnit: 56 }
    ]
  },
  {
    id: 'bean-carioquinha',
    name: 'Feijão Carioquinha (Grão + Caldo)',
    category: 'Grãos e Feijões',
    variations: [
      { label: '1 concha média rasa (80g)', carbsPerUnit: 14, caloriesPerUnit: 89 },
      { label: '1 colher de sopa cheia (17g)', carbsPerUnit: 3, caloriesPerUnit: 19 }
    ]
  },
  {
    id: 'bean-black',
    name: 'Feijão Preto (Grão + Caldo)',
    category: 'Grãos e Feijões',
    variations: [
      { label: '1 concha média rasa (80g)', carbsPerUnit: 10, caloriesPerUnit: 61 },
      { label: '1 concha média cheia (140g)', carbsPerUnit: 18, caloriesPerUnit: 107 }
    ]
  },
  {
    id: 'lentil',
    name: 'Lentilha Cozida',
    category: 'Grãos e Feijões',
    variations: [
      { label: '1 colher de sopa cheia (18g)', carbsPerUnit: 3, caloriesPerUnit: 17 }
    ]
  },
  {
    id: 'chickpea',
    name: 'Grão de Bico Cozido',
    category: 'Grãos e Feijões',
    variations: [
      { label: '1 concha cheia (120g)', carbsPerUnit: 25, caloriesPerUnit: 138 }
    ]
  },

  // --- PÃES E FARINÁCEOS ---
  {
    id: 'bread-french',
    name: 'Pão Francês',
    category: 'Pães e Farináceos',
    variations: [
      { label: '1 unidade (50g)', carbsPerUnit: 29, caloriesPerUnit: 135 },
      { label: 'Miolo (25g)', carbsPerUnit: 14, caloriesPerUnit: 68 }
    ]
  },
  {
    id: 'bread-sliced-integral',
    name: 'Pão de Forma Integral',
    category: 'Pães e Farináceos',
    variations: [
      { label: '1 fatia (25g)', carbsPerUnit: 8, caloriesPerUnit: 68 }
    ]
  },
  {
    id: 'tapioca',
    name: 'Tapioca (Goma)',
    category: 'Pães e Farináceos',
    variations: [
      { label: '1 colher de sopa cheia (17g)', carbsPerUnit: 10, caloriesPerUnit: 37 },
      { label: '1 unidade média (80g)', carbsPerUnit: 50, caloriesPerUnit: 282 }
    ]
  },
  {
    id: 'cuscuz-corn',
    name: 'Cuscuz de Milho',
    category: 'Pães e Farináceos',
    variations: [
      { label: '1 pedaço médio (135g)', carbsPerUnit: 34, caloriesPerUnit: 152 },
      { label: '1 pedaço pequeno (85g)', carbsPerUnit: 21, caloriesPerUnit: 96 }
    ]
  },
  {
    id: 'biscuit-cracker',
    name: 'Biscoito Cream Cracker',
    category: 'Pães e Farináceos',
    variations: [
      { label: '1 unidade (5g)', carbsPerUnit: 4, caloriesPerUnit: 22 }
    ]
  },
  {
    id: 'flour-cassava',
    name: 'Farinha de Mandioca',
    category: 'Pães e Farináceos',
    variations: [
      { label: '1 colher de sopa cheia (16g)', carbsPerUnit: 14, caloriesPerUnit: 57 }
    ]
  },
  {
    id: 'pasta-cooked',
    name: 'Macarrão Cozido (sem molho)',
    category: 'Pães e Farináceos',
    variations: [
      { label: '1 escumadeira cheia (110g)', carbsPerUnit: 30, caloriesPerUnit: 138 }
    ]
  },

  // --- FRUTAS ---
  {
    id: 'avocado',
    name: 'Abacate',
    category: 'Frutas',
    variations: [
      { label: '1 fatia (90g)', carbsPerUnit: 5, caloriesPerUnit: 86 }
    ]
  },
  {
    id: 'pineapple',
    name: 'Abacaxi',
    category: 'Frutas',
    variations: [
      { label: '1 fatia média (75g)', carbsPerUnit: 10, caloriesPerUnit: 44 }
    ]
  },
  {
    id: 'banana-prata',
    name: 'Banana Prata',
    category: 'Frutas',
    variations: [
      { label: '1 unidade média (55g)', carbsPerUnit: 14, caloriesPerUnit: 54 },
      { label: '1 unidade pequena (40g)', carbsPerUnit: 10, caloriesPerUnit: 39 }
    ]
  },
  {
    id: 'banana-caturra',
    name: 'Banana Caturra (Nanica)',
    category: 'Frutas',
    variations: [
      { label: '1 unidade média (86g)', carbsPerUnit: 20, caloriesPerUnit: 79 }
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
  {
    id: 'apple-gala',
    name: 'Maçã com casca',
    category: 'Frutas',
    variations: [
      { label: '1 unidade pequena (90g)', carbsPerUnit: 14, caloriesPerUnit: 58 }
    ]
  },
  {
    id: 'papaya',
    name: 'Mamão Papaia',
    category: 'Frutas',
    variations: [
      { label: '1/2 unidade (160g)', carbsPerUnit: 16, caloriesPerUnit: 68 },
      { label: '1 fatia média (100g)', carbsPerUnit: 10, caloriesPerUnit: 43 }
    ]
  },
  {
    id: 'watermelon',
    name: 'Melancia',
    category: 'Frutas',
    variations: [
      { label: '1 fatia média (200g)', carbsPerUnit: 13, caloriesPerUnit: 58 }
    ]
  },
  {
    id: 'strawberry',
    name: 'Morango',
    category: 'Frutas',
    variations: [
      { label: '1 unidade (12g)', carbsPerUnit: 1, caloriesPerUnit: 4 },
      { label: '1 xícara (123g)', carbsPerUnit: 15, caloriesPerUnit: 64 }
    ]
  },
  {
    id: 'grape-niagara',
    name: 'Uva Niágara',
    category: 'Frutas',
    variations: [
      { label: '1 cacho pequeno (100g)', carbsPerUnit: 17, caloriesPerUnit: 68 }
    ]
  },
  {
    id: 'mango-palmer',
    name: 'Manga Palmer',
    category: 'Frutas',
    variations: [
      { label: '1 porção média (100g)', carbsPerUnit: 19, caloriesPerUnit: 77 }
    ]
  },

  // --- VEGETAIS E RAÍZES ---
  {
    id: 'lettuce',
    name: 'Alface (todos os tipos)',
    category: 'Vegetais e Raízes',
    variations: [
      { label: '1 folha média (10g)', carbsPerUnit: 0, caloriesPerUnit: 1 }
    ]
  },
  {
    id: 'pumpkin',
    name: 'Abóbora Cozida',
    category: 'Vegetais e Raízes',
    variations: [
      { label: '1 colher de sopa (36g)', carbsPerUnit: 3, caloriesPerUnit: 14 }
    ]
  },
  {
    id: 'potato-english-boiled',
    name: 'Batata Inglesa Cozida',
    category: 'Vegetais e Raízes',
    variations: [
      { label: '1 colher de sopa cheia (30g)', carbsPerUnit: 6, caloriesPerUnit: 26 },
      { label: '1 unidade média (150g)', carbsPerUnit: 30, caloriesPerUnit: 130 }
    ]
  },
  {
    id: 'potato-sweet-boiled',
    name: 'Batata Doce Cozida',
    category: 'Vegetais e Raízes',
    variations: [
      { label: '1 colher de sopa cheia (42g)', carbsPerUnit: 10, caloriesPerUnit: 43 }
    ]
  },
  {
    id: 'beet-cooked',
    name: 'Beterraba Cozida',
    category: 'Vegetais e Raízes',
    variations: [
      { label: '1 colher de sopa cheia (20g)', carbsPerUnit: 2, caloriesPerUnit: 9 }
    ]
  },
  {
    id: 'carrot-cooked',
    name: 'Cenoura Cozida',
    category: 'Vegetais e Raízes',
    variations: [
      { label: '1 colher de sopa cheia (25g)', carbsPerUnit: 2, caloriesPerUnit: 8 }
    ]
  },
  {
    id: 'kale-sauteed',
    name: 'Couve Manteiga Refogada',
    category: 'Vegetais e Raízes',
    variations: [
      { label: '1 colher de sopa (20g)', carbsPerUnit: 1, caloriesPerUnit: 18 }
    ]
  },
  {
    id: 'cassava-boiled',
    name: 'Mandioca (Aipim) Cozida',
    category: 'Vegetais e Raízes',
    variations: [
      { label: '1 pedaço médio (60g)', carbsPerUnit: 18, caloriesPerUnit: 75 },
      { label: '1 pedaço grande (100g)', carbsPerUnit: 30, caloriesPerUnit: 125 }
    ]
  },
  {
    id: 'tomato',
    name: 'Tomate',
    category: 'Vegetais e Raízes',
    variations: [
      { label: '1 unidade pequena (50g)', carbsPerUnit: 2, caloriesPerUnit: 10 }
    ]
  },

  // --- LATICÍNIOS ---
  {
    id: 'milk-whole',
    name: 'Leite Integral',
    category: 'Laticínios',
    variations: [
      { label: '1 copo (200ml)', carbsPerUnit: 10, caloriesPerUnit: 120 }
    ]
  },
  {
    id: 'milk-skimmed',
    name: 'Leite Desnatado',
    category: 'Laticínios',
    variations: [
      { label: '1 copo (200ml)', carbsPerUnit: 10, caloriesPerUnit: 70 }
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
  {
    id: 'cheese-mozzarella',
    name: 'Queijo Muçarela',
    category: 'Laticínios',
    variations: [
      { label: '1 fatia fina (20g)', carbsPerUnit: 0, caloriesPerUnit: 65 }
    ]
  },
  {
    id: 'requeijao',
    name: 'Requeijão Comum',
    category: 'Laticínios',
    variations: [
      { label: '1 colher de sopa cheia (30g)', carbsPerUnit: 1, caloriesPerUnit: 106 }
    ]
  },

  // --- PROTEÍNAS (CARNES E OVOS) ---
  {
    id: 'beef-grilled',
    name: 'Carne Bovina Grelhada (Média)',
    category: 'Proteínas',
    variations: [
      { label: '1 bife médio (100g)', carbsPerUnit: 0, caloriesPerUnit: 228 },
      { label: '1 colher de sopa picada (25g)', carbsPerUnit: 0, caloriesPerUnit: 57 }
    ]
  },
  {
    id: 'chicken-breast',
    name: 'Frango (Peito Grelhado)',
    category: 'Proteínas',
    variations: [
      { label: '1 filé pequeno (100g)', carbsPerUnit: 0, caloriesPerUnit: 163 }
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
    id: 'fish-hake',
    name: 'Peixe (Abadejo/Tilápia) Assado',
    category: 'Proteínas',
    variations: [
      { label: '1 filé médio (100g)', carbsPerUnit: 0, caloriesPerUnit: 112 }
    ]
  },
  {
    id: 'sardine-canned',
    name: 'Sardinha em Óleo',
    category: 'Proteínas',
    variations: [
      { label: '1 unidade média (41g)', carbsPerUnit: 0, caloriesPerUnit: 116 }
    ]
  },
  {
    id: 'pork-steak',
    name: 'Carne de Porco (Bisteca)',
    category: 'Proteínas',
    variations: [
      { label: '1 filé médio (100g)', carbsPerUnit: 0, caloriesPerUnit: 280 }
    ]
  },

  // --- BEBIDAS ---
  {
    id: 'coffee-sugar',
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
      { label: '1 copo duplo cheio (240ml)', carbsPerUnit: 35, caloriesPerUnit: 146 }
    ]
  },
  {
    id: 'coconut-water',
    name: 'Água de Coco',
    category: 'Bebidas',
    variations: [
      { label: '1 copo (200ml)', carbsPerUnit: 11, caloriesPerUnit: 44 }
    ]
  },
  {
    id: 'tea-mate-sweet',
    name: 'Chá Mate com Açúcar',
    category: 'Bebidas',
    variations: [
      { label: '1 xícara de chá (200ml)', carbsPerUnit: 16, caloriesPerUnit: 64 }
    ]
  }
];
