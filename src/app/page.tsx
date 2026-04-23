"use client";

import { useState } from "react";
import { foods } from "../data/mockFoods";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Key } from "lucide-react";

export default function Home() {
  const [busqueda, setBusqueda] = useState("");

  const alimentosFiltrados = foods.filter((alimento) =>
    alimento.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Buscador de Alimentos</h1>
      <input
        type="text"
        placeholder="Busca un alimento..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <div className="space-y-4">
        {alimentosFiltrados.length > 0 ? (
          alimentosFiltrados.map((alimento) => (
            <Link href={`alimento/${alimento.id}`} key={alimento.id} className="block outline-none">
              <Card key={alimento.id} className="group hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden">
                <CardHeader className="pb-2 bg-white group-hover:bg-gray-50/50 transition-colors">
                  <CardTitle className="text-lg font-bold text-gray-800">{alimento.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-2 pb-4">
                  <div className="flex gap-4 text-sm text-gray-600 font-medium">
                    <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-md">🔥 {alimento.calories} kcal</span>
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded-md">🥩 {alimento.protein} g</span>
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md">🥑 {alimento.fat} g</span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md">🍚 {alimento.carbs} g</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <p>No se encontraron alimentos.</p>
        )}
      </div>
    </div>
  );
}