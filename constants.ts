
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
  // GRÃOS E FEIJÕES (Fonte: SBD Págs 53, 91, 92)
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
    id: 'rice-integral',
    name: 'Arroz Integral Cozido',
    category: 'Grãos e Feijões',
    variations: [
      { label: '1 colher de sopa cheia (20g)', carbsPerUnit: 5, caloriesPerUnit: 25 }
    ]
  },
  {
    id: 'bean-carioquinha',
    name: 'Feijão Carioquinha Cozido (Grão+Caldo)',
    category: 'Grãos e Feijões',
    variations: [
      { label: '1 concha média rasa (80g)', carbsPerUnit: 14, caloriesPerUnit: 89 },
      { label: '1 colher de sopa cheia (17g)', carbsPerUnit: 3, caloriesPerUnit: 19 }
    ]
  },
  {
    id: 'bean-black',
    name: 'Feijão Preto Cozido',
    category: 'Grãos e Feijões',
    variations: [
      { label: '1 concha média rasa (80g)', carbsPerUnit: 10, caloriesPerUnit: 61 }
    ]
  },

  // PÃES E FARINÁCEOS (Fonte: SBD Págs 113, 126, 127, 149, 82)
  {
    id: 'bread-french',
    name: 'Pão Francês',
    category: 'Pães e Farináceos',
    variations: [
      { label: '1 unidade (50g)', carbsPerUnit: 29, caloriesPerUnit: 135 }
    ]
  },
  {
    id: 'tapioca',
    name: 'Tapioca (Goma seca)',
    category: 'Pães e Farináceos',
    variations: [
      { label: '1 unidade pequena (80g)', carbsPerUnit: 50, caloriesPerUnit: 282 },
      { label: '1 colher de sopa cheia (17g)', carbsPerUnit: 10, caloriesPerUnit: 37 }
    ]
  },
  {
    id: 'cuscuz-milho',
    name: 'Cuscuz de Milho',
    category: 'Pães e Farináceos',
    variations: [
      { label: '1 pedaço médio (135g)', carbsPerUnit: 34, caloriesPerUnit: 152 },
      { label: '1 pedaço pequeno (85g)', carbsPerUnit: 21, caloriesPerUnit: 96 }
    ]
  },
  {
    id: 'pao-queijo',
    name: 'Pão de Queijo',
    category: 'Pães e Farináceos',
    variations: [
      { label: '1 unidade tradicional (25g)', carbsPerUnit: 11, caloriesPerUnit: 109 },
      { label: '1 unidade pequena (cocktail - 20g)', carbsPerUnit: 9, caloriesPerUnit: 87 }
    ]
  },

  // FRUTAS (Fonte: SBD Págs 49, 56, 111, 113)
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
    id: 'apple-skin',
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
    id: 'pineapple',
    name: 'Abacaxi',
    category: 'Frutas',
    variations: [
      { label: '1 fatia média (75g)', carbsPerUnit: 10, caloriesPerUnit: 44 }
    ]
  },
  {
    id: 'orange',
    name: 'Laranja Lima',
    category: 'Frutas',
    variations: [
      { label: '1 unidade média (180g)', carbsPerUnit: 20, caloriesPerUnit: 82 }
    ]
  },

  // VEGETAIS E RAÍZES (Fonte: SBD Págs 61, 113, 114)
  {
    id: 'potato-english',
    name: 'Batata Inglesa Cozida',
    category: 'Vegetais e Raízes',
    variations: [
      { label: '1 colher de sopa cheia (30g)', carbsPerUnit: 6, caloriesPerUnit: 26 }
    ]
  },
  {
    id: 'sweet-potato',
    name: 'Batata Doce Cozida',
    category: 'Vegetais e Raízes',
    variations: [
      { label: '1 colher de sopa cheia (42g)', carbsPerUnit: 10, caloriesPerUnit: 43 }
    ]
  },
  {
    id: 'mandioca',
    name: 'Mandioca (Aipim) Cozida',
    category: 'Vegetais e Raízes',
    variations: [
      { label: '1 pedaço médio (60g)', carbsPerUnit: 18, caloriesPerUnit: 75 },
      { label: '1 pedaço grande (100g)', carbsPerUnit: 30, caloriesPerUnit: 125 }
    ]
  },

  // LATICÍNIOS (Fonte: SBD Págs 110, 134)
  {
    id: 'milk-whole',
    name: 'Leite Integral',
    category: 'Laticínios',
    variations: [
      { label: '1 copo (200ml)', carbsPerUnit: 10, caloriesPerUnit: 120 }
    ]
  },
  {
    id: 'cheese-minas',
    name: 'Queijo de Minas Frescal',
    category: 'Laticínios',
    variations: [
      { label: '1 fatia média (30g)', carbsPerUnit: 1, caloriesPerUnit: 73 }
    ]
  },

  // PROTEÍNAS (Carboidrato geralmente zero, mas importante para calorias)
  {
    id: 'egg-boiled',
    name: 'Ovo de Galinha Cozido',
    category: 'Proteínas',
    variations: [
      { label: '1 unidade média (45g)', carbsPerUnit: 0, caloriesPerUnit: 71 }
    ]
  },
  {
    id: 'chicken-grilled',
    name: 'Filé de Frango Grelhado',
    category: 'Proteínas',
    variations: [
      { label: '1 bife médio (100g)', carbsPerUnit: 0, caloriesPerUnit: 163 }
    ]
  },
  {
    id: 'steak-grilled',
    name: 'Carne Bovina Grelhada',
    category: 'Proteínas',
    variations: [
      { label: '1 bife médio (100g)', carbsPerUnit: 0, caloriesPerUnit: 289 }
    ]
  }
];
