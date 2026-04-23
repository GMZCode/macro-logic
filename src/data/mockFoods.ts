export interface FoodItem {
  id: string;
  name: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}

export const foods: FoodItem[] = [
    {
        id: '1',
        name: 'Pechuga de Pollo',
        calories: 165,
        protein: 31,
        fat: 3.6,
        carbs: 0
    },
    {
        id: '2',
        name: 'Huevo entero',
        calories: 155,
        protein: 13,
        fat: 11,
        carbs: 1.1
    },
    {
        id: '3',
        name: 'Arroz Blanco (Cocido)',
        calories: 130,
        protein: 2.7,
        fat: 0.3,
        carbs: 28
    },
    {
        id: '4',
        name: 'Aceite de Oliva',
        calories: 884,
        protein: 0,
        fat: 100,
        carbs: 0
    },
    {
        id: '5',
        name: 'Manzana',
        calories: 52,
        protein: 0.3,
        fat: 0.2,
        carbs: 14
    }
];