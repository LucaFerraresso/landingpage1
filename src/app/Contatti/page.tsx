"use client";
import { useState } from "react";

const Contatti = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 text-gray-800 dark:text-gray-200 dark:from-gray-800 dark:to-gray-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Contatti</h1>
        <p className="text-lg text-center mb-8">
          Contattaci per qualsiasi domanda o informazione sui nostri prodotti e
          servizi.
        </p>

        {/* Informazioni Aziendali - Statico */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Informazioni Aziendali
          </h2>
          <p className="text-lg">
            Nome Azienda: <strong>TechStore</strong>
          </p>
          <p className="text-lg">
            Telefono CEO: <strong>(+39) 123 456 7890</strong>
          </p>
          <p className="text-lg">
            Indirizzo: <strong>Via delle Tecnologie, 10, Milano, Italia</strong>
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="text-blue-600 hover:text-blue-800"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="text-blue-400 hover:text-blue-600"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              className="text-pink-600 hover:text-pink-800"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Form di Contatto */}
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow-md"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
              placeholder="Il tuo nome"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
              placeholder="La tua email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Messaggio
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-green-300 dark:focus:ring-green-600"
              placeholder="Il tuo messaggio"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Invia
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contatti;
