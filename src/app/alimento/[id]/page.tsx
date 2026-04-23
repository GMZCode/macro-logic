"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { foods } from "../../../data/mockFoods";
import { Card, CardContent } from "@/components/ui/card";

export default function CalculadoraAlimento() {
  const params = useParams();
  const idAlimento = params.id;

  const alimento = foods.find((f) => f.id === idAlimento);

  const [gramos, setGramos] = useState<number>(100);

  if (!alimento) {
    return (
      <div className="p-8 text-center mt-20">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Alimento no encontrado</h1>
        <Link href="/" className="text-orange-600 font-bold hover:underline">
          ← Volver al buscador
        </Link>
      </div>
    );
  }

  const multiplicador = gramos / 100;
  const caloriasCalculadas = (alimento.calories * multiplicador).toFixed(0);
  const proteinaCalculada = (alimento.protein * multiplicador).toFixed(1);
  const grasaCalculada = (alimento.fat * multiplicador).toFixed(1);
  const carbosCalculados = (alimento.carbs * multiplicador).toFixed(1);

  return (
    <main className="p-4 max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Link href="/" className="inline-block mb-6 text-gray-500 hover:text-gray-900 font-semibold transition-colors">
        ← Volver
      </Link>

      <h1 className="text-3xl font-bold text-gray-800 mb-1">{alimento.name}</h1>
      <p className="text-gray-500 mb-6 font-medium">Valores base por 100g</p>

      <Card className="mb-6 border-orange-200 shadow-sm overflow-hidden">
        <CardContent className="p-6 bg-white">
          <label className="block text-sm font-bold text-gray-700 mb-3">
            ¿Cuántos gramos tienes/quieres comer?
          </label>
          <div className="flex items-center gap-3">
            <input
              type="number"
              min="0"
              value={gramos}
              onChange={(e) => setGramos(Number(e.target.value))}
              className="w-full text-3xl font-bold p-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-0 outline-none transition-colors"
            />
            <span className="text-2xl font-bold text-gray-400">g</span>
          </div>
        </CardContent>
      </Card>

      <h2 className="text-lg font-bold text-gray-800 mb-4">Aporte Nutricional Total</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 shadow-sm hover:-translate-y-1 transition-transform">
          <p className="text-orange-600 text-sm font-bold mb-1">Calorías</p>
          <p className="text-3xl font-extrabold text-orange-950">{caloriasCalculadas}</p>
        </div>
        <div className="bg-red-50 p-4 rounded-2xl border border-red-100 shadow-sm hover:-translate-y-1 transition-transform">
          <p className="text-red-600 text-sm font-bold mb-1">Proteína</p>
          <p className="text-3xl font-extrabold text-red-950">{proteinaCalculada}g</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-2xl border border-yellow-100 shadow-sm hover:-translate-y-1 transition-transform">
          <p className="text-yellow-600 text-sm font-bold mb-1">Grasas</p>
          <p className="text-3xl font-extrabold text-yellow-950">{grasaCalculada}g</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 shadow-sm hover:-translate-y-1 transition-transform">
          <p className="text-blue-600 text-sm font-bold mb-1">Carbohidratos</p>
          <p className="text-3xl font-extrabold text-blue-950">{carbosCalculados}g</p>
        </div>
      </div>
    </main>
  );
}