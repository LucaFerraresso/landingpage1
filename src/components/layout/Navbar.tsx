"use client";

import Link from "next/link";
import { useTheme } from "../../../Context/ThemeContext";
import { Switch } from "@/components/ui/switch";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSwitchClicked, setIsSwitchClicked] = useState(false);

  // Riferimento alla navbar con tipo HTMLElement
  const navbarRef = useRef<HTMLElement | null>(null);

  // Funzione per gestire l'apertura del menu a tendina
  const toggleDropdown = () => {
    setIsDropdownOpen(true);
  };

  // Funzione per gestire il clic sullo switch per evitare che chiuda il menu
  const handleSwitchClick = () => {
    setIsSwitchClicked(true);
    toggleTheme();
    setTimeout(() => {
      setIsDropdownOpen(false); // Chiude il menu dopo un piccolo ritardo
      setIsSwitchClicked(false);
    }, 600); // Ritardo di 300ms
  };

  // Aggiungi il listener per i clic al di fuori della navbar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false); // Chiudi il menu a tendina se il clic è fuori
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header
      ref={navbarRef} // Imposta il ref sulla navbar
      className="w-full px-8 py-6 bg-gradient-to-r from-indigo-600 to-indigo-800 dark:from-gray-800 dark:to-gray-900 shadow-lg flex justify-between items-center transition-all ease-in-out duration-300"
    >
      {/* Logo */}
      <h1 className="text-3xl font-extrabold text-white tracking-tight">
        Negozio di Componenti
      </h1>

      {/* Navbar Links */}
      <nav className="flex gap-6 items-center">
        <div
          className="relative"
          onMouseEnter={toggleDropdown} // Mostra il menu a tendina al passaggio del mouse
        >
          {/* Home Link with Dropdown */}
          <Link
            href="/"
            className="text-lg font-medium text-white hover:text-indigo-200 dark:text-gray-300 dark:hover:text-gray-100 transition-colors duration-300"
          >
            Home
          </Link>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg w-48 p-4 flex flex-col gap-4 text-center">
              <span className="text-lg text-gray-800 dark:text-gray-300">
                Cambia Tema
              </span>
              <div
                className="flex items-center justify-between"
                onClick={(e) => e.stopPropagation()} // Impedisce che il click chiuda il menu
              >
                <span className="text-lg text-gray-800 dark:text-gray-300">
                  🌙
                </span>
                <Switch
                  checked={theme === "dark"}
                  onClick={handleSwitchClick} // Gestisce il click sullo switch
                  className="transition-all duration-300"
                />
                <span className="text-lg text-gray-800 dark:text-gray-300">
                  ☀️
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Other Links */}
        <Link
          href="/Articoli"
          className="text-lg font-medium text-white hover:text-indigo-200 dark:text-gray-300 dark:hover:text-gray-100 transition-colors duration-300"
        >
          Articoli
        </Link>
        <Link
          href="/Contatti"
          className="text-lg font-medium text-white hover:text-indigo-200 dark:text-gray-300 dark:hover:text-gray-100 transition-colors duration-200"
        >
          Contatti
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
