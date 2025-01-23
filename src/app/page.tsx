"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 text-gray-800 dark:text-gray-200 dark:from-gray-800 dark:to-gray-900">
      <main className="flex flex-col items-center justify-center text-center px-4 py-8">
        <h2 className="text-4xl font-bold mb-4 animate-fadeIn">
          Benvenuti nel nostro negozio
        </h2>
        <p className="text-lg mb-6 animate-fadeIn">
          Scopri i migliori componenti per i tuoi progetti tecnologici.
        </p>
        <Button
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 animate-bounce"
          onClick={() => (window.location.href = "/Articoli")}
        >
          Esplora gli Articoli
        </Button>
        <div className="mt-6">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
      </main>
    </div>
  );
}
