
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

export const FOOD_DATABASE: FoodItem[] = [
  {
    id: 'f1',
    name: 'Abacate',
    category: 'Frutas',
    variations: [
      { label: 'Fatia média', carbsPerUnit: 3 },
      { label: 'Unidade pequena', carbsPerUnit: 12 },
      { label: 'Colher de sopa cheia', carbsPerUnit: 2 }
    ]
  },
  {
    id: 'f2',
    name: 'Arroz Branco',
    category: 'Massas e Grãos',
    variations: [
      { label: 'Colher de sopa rasa', carbsPerUnit: 5 },
      { label: 'Colher de sopa cheia', carbsPerUnit: 7 },
      { label: 'Escumadeira média', carbsPerUnit: 25 }
    ]
  },
  {
    id: 'f3',
    name: 'Arroz Integral',
    category: 'Massas e Grãos',
    variations: [
      { label: 'Colher de sopa cheia', carbsPerUnit: 6 },
      { label: 'Escumadeira média', carbsPerUnit: 22 }
    ]
  },
  {
    id: 'f4',
    name: 'Banana Prata',
    category: 'Frutas',
    variations: [
      { label: 'Unidade pequena', carbsPerUnit: 12 },
      { label: 'Unidade média', carbsPerUnit: 18 },
      { label: 'Unidade grande', carbsPerUnit: 25 }
    ]
  },
  {
    id: 'f5',
    name: 'Café (sem açúcar)',
    category: 'Bebidas',
    variations: [
      { label: 'Xícara/Copo', carbsPerUnit: 0 }
    ]
  },
  {
    id: 'f6',
    name: 'Feijão Preto',
    category: 'Leguminosas',
    variations: [
      { label: 'Concha pequena', carbsPerUnit: 14 },
      { label: 'Concha média', carbsPerUnit: 21 },
      { label: 'Concha grande', carbsPerUnit: 28 },
      { label: 'Colher de sopa cheia', carbsPerUnit: 5 }
    ]
  },
  {
    id: 'f7',
    name: 'Maçã',
    category: 'Frutas',
    variations: [
      { label: 'Unidade pequena', carbsPerUnit: 15 },
      { label: 'Unidade média', carbsPerUnit: 20 },
      { label: 'Unidade grande', carbsPerUnit: 30 }
    ]
  },
  {
    id: 'f8',
    name: 'Pão de Sal (Francês)',
    category: 'Padaria',
    variations: [
      { label: 'Unidade (50g)', carbsPerUnit: 28 },
      { label: 'Metade', carbsPerUnit: 14 }
    ]
  },
  {
    id: 'f9',
    name: 'Leite Integral',
    category: 'Laticínios',
    variations: [
      { label: 'Copo (200ml)', carbsPerUnit: 10 }
    ]
  },
  {
    id: 'f10',
    name: 'Iogurte Natural',
    category: 'Laticínios',
    variations: [
      { label: 'Pote (170g)', carbsPerUnit: 9 }
    ]
  }
];

export const CATEGORIES = [
  'Frutas',
  'Verduras',
  'Carnes e Ovos',
  'Massas e Grãos',
  'Leguminosas',
  'Laticínios',
  'Padaria',
  'Lanches',
  'Bebidas'
];
