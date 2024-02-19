export interface Supplement {
  supplement_id: number;
  supplement_name: string;
  servings?: string;
  cost?: string;
  added_sugars_per_serving?: string;
  cholesterol_per_serving?: string;
  protein_per_serving?: string;
  sodium_per_serving?: string;
  sugar_per_serving?: string;
  saturated_fat_per_serving?: string;
  trans_fat_per_serving?: string;
}

export enum SupplementType {
  ProteinPowder = "Protein Powder",
  Preworkout = "Preworkout",
  Vitamin = "Vitamin"
}