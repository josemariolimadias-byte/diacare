
export enum Gender {
  MALE = 'Masculino',
  FEMALE = 'Feminino',
  OTHER = 'Outro'
}

export enum DiabetesType {
  TYPE_1 = 'Diabetes Tipo 1',
  TYPE_2 = 'Diabetes Tipo 2',
  GESTATIONAL = 'Diabetes Gestacional',
  LADA = 'LADA (Latent Autoimmune Diabetes in Adults)',
  MODY = 'MODY (Maturity-Onset Diabetes of the Young)',
  OTHER = 'Outro'
}

export enum GlucoseUnit {
  MG_DL = 'mg/dL',
  MMOL_L = 'mmol/L'
}

export enum CarbUnit {
  GRAMS = 'Gramas (g)',
  EQUIVALENTS = 'Equivalentes (Eq)'
}

export interface AuthUser {
  id: string;
  email: string;
}

export interface UserProfile {
  userId: string;
  fullName: string;
  birthDate: string;
  gender: Gender;
  diagnosisYear: string;
  diabetesType: DiabetesType;
  rapidInsulin: string;
  basalInsulin: string;
  glucoseUnit: GlucoseUnit;
  carbUnit: CarbUnit;
  targetGlucose: number;
  hyperThreshold: number;
  hypoThreshold: number;
  targetRangeMin: number;
  targetRangeMax: number;
}

export interface LogEntry {
  id: string;
  userId: string;
  date: string;
  time: string;
  glucose: number;
  carbAmount: number;
  mealInsulin: number;
  correctionInsulin: number;
  basalInsulin: number;
  pills: number;
  notes?: string;
}

export interface FoodItemVariation {
  label: string;
  carbsPerUnit: number;
}

export interface FoodItem {
  id: string;
  name: string;
  category: string;
  variations: FoodItemVariation[];
}

export interface PlateItem {
  foodId: string;
  foodName: string;
  variationLabel: string;
  quantity: number;
  totalCarbs: number;
}
