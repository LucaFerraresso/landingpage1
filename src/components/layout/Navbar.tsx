"use client";

import Link from "next/link";
import { useTheme } from "../../../Context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full px-8 py-4 bg-white dark:bg-gray-900 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
        Negozio di Componenti
      </h1>
      <nav className="flex gap-4">
        <Link
          href="/"
          className="hover:underline text-gray-600 dark:text-gray-300"
        >
          Home
        </Link>
        <Link
          href="/Articoli"
          className="hover:underline text-gray-600 dark:text-gray-300"
        >
          Articoli
        </Link>
        <Link
          href="/Contatti"
          className="hover:underline text-gray-600 dark:text-gray-300"
        >
          Contatti
        </Link>
      </nav>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded shadow-md focus:outline-none hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        {theme === "light" ? "🌙 Scuro" : "☀️ Chiaro"}
      </button>
    </header>
  );
};

export default Navbar;
