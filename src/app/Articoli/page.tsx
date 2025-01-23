"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Assicurati che questi componenti siano correttamente importati

import { useState } from "react";
import Link from "next/link"; // Importa il componente Link

const ArticoliPage = () => {
  // Array degli articoli direttamente all'interno del file
  const Articoli = [
    {
      id: 1,
      titolo: "Articolo 1",
      descrizione: "Descrizione dell'articolo 1",
      immagine: "/images/articolo1.jpg",
      tipologia: "Tecnologia",
      materiale: "Metallo",
      prezzo: "199.99",
    },
    {
      id: 2,
      titolo: "Articolo 2",
      descrizione: "Descrizione dell'articolo 2",
      immagine: "/images/articolo2.jpg",
      tipologia: "Elettronica",
      materiale: "Plastica",
      prezzo: "89.99",
    },
    {
      id: 3,
      titolo: "Articolo 3",
      descrizione: "Descrizione dell'articolo 3",
      immagine: "/images/articolo3.jpg",
      tipologia: "Giocattolo",
      materiale: "Legno",
      prezzo: "49.99",
    },
    {
      id: 4,
      titolo: "Articolo 4",
      descrizione: "Descrizione dell'articolo 4",
      immagine: "/images/articolo4.jpg",
      tipologia: "Arredamento",
      materiale: "Legno",
      prezzo: "149.99",
    },
    {
      id: 5,
      titolo: "Articolo 5",
      descrizione: "Descrizione dell'articolo 5",
      immagine: "/images/articolo5.jpg",
      tipologia: "Sport",
      materiale: "Acciaio",
      prezzo: "99.99",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 text-gray-800 dark:text-gray-200 dark:from-gray-800 dark:to-gray-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Articoli</h1>
        <p className="text-lg text-center mb-8">
          Esplora i nostri articoli di alta qualità progettati per i tuoi
          progetti tecnologici.
        </p>

        {/* Carousel */}
        <Carousel>
          <CarouselContent>
            {Articoli.map((articolo) => (
              <CarouselItem key={articolo.id}>
                <div className="p-6 bg-white dark:bg-gray-800 rounded shadow-md">
                  <img
                    src={articolo.immagine}
                    alt={articolo.titolo}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h2 className="text-xl font-semibold mb-2">
                    {articolo.titolo}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {articolo.descrizione}
                  </p>
                  {/* Usa il componente Link di Next.js */}
                  <Link
                    href={`/Articoli/${articolo.id}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Scopri di più
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default ArticoliPage;
