
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

export const CATEGORIES = [];

export const FOOD_DATABASE: FoodItem[] = [];
