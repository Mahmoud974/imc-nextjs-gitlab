"use client";
import { useState } from "react";

export default function Home() {
  const [poids, setPoids] = useState("");
  const [taille, setTaille] = useState("");
  const [imc, setImc] = useState<number | null>(null);
  const [resultat, setResultat] = useState("");

  const calculerIMC = () => {
    const p = parseFloat(poids);
    const t = parseFloat(taille) / 100;
    if (p > 0 && t > 0) {
      const calcul = p / (t * t);
      setImc(calcul);
      if (calcul < 18.5) setResultat("Insuffisance pondérale");
      else if (calcul < 25) setResultat("Poids normal");
      else if (calcul < 30) setResultat("Surpoids");
      else setResultat("Obésité");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Calculateur d'IMC
        </h1>
        <div className="space-y-4">
          <input
            type="number"
            placeholder="Poids en kg"
            value={poids}
            onChange={(e) => setPoids(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Taille en cm"
            value={taille}
            onChange={(e) => setTaille(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={calculerIMC}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Calculer
          </button>
        </div>
        {imc && (
          <div className="mt-6 text-center">
            <p className="text-lg font-semibold text-gray-700">
              IMC : {imc.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500">{resultat}</p>
          </div>
        )}
      </div>
    </main>
  );
}
