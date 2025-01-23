const Footer = () => {
  return (
    <footer className="w-full px-8 py-4 bg-gray-100 dark:bg-gray-800 text-center text-sm text-gray-600 dark:text-gray-300">
      <p>&copy; 2025 Negozio di Componenti. Tutti i diritti riservati.</p>
      <p>
        <a
          href="#"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Privacy Policy
        </a>
        &nbsp;|&nbsp;
        <a
          href="#"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Termini di Servizio
        </a>
      </p>
    </footer>
  );
};
export default Footer;
