"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { articoli } from "../../../../data/Articoli";

const ArticoloDetail = () => {
  const { id } = useParams(); // Ottieni l'ID dalla URL
  const [articolo, setArticolo] = useState<any>(null);

  useEffect(() => {
    if (id) {
      // Se id è un array, prendi il primo valore
      const idString = Array.isArray(id) ? id[0] : id;

      // Trova l'articolo corrispondente all'ID
      const articoloSelezionato = articoli.find(
        (articolo) => articolo.id === parseInt(idString)
      );
      setArticolo(articoloSelezionato);
    }
  }, [id]);

  if (!articolo) return <div>Caricamento...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 text-gray-800 dark:text-gray-200 dark:from-gray-800 dark:to-gray-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">
          {articolo.titolo}
        </h1>
        <div className="flex justify-center mb-6">
          <img
            src={articolo.immagine}
            alt={articolo.titolo}
            className="w-full md:w-2/3 h-64 object-cover rounded-md"
          />
        </div>
        <p className="text-lg text-center mb-6">{articolo.descrizione}</p>
        <div className="text-lg">
          <p>
            <strong>Tipologia:</strong> {articolo.tipologia}
          </p>
          <p>
            <strong>Materiale:</strong> {articolo.materiale}
          </p>
          <p>
            <strong>Prezzo:</strong> {articolo.prezzo}€
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticoloDetail;
