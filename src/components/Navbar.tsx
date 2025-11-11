import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useState } from 'react';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#sobre-mi', label: 'Sobre mí' },
    { href: '#habilidades', label: 'Habilidades' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <>
      {/* Esta es la barra de navegación principal */}
      <nav className="fixed top-0 left-0 w-full z-50 py-4 bg-white/80 backdrop-blur-md dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          
          <a href="#home" className="text-2xl font-bold text-gray-900 dark:text-white">
            Jasiel S. García
          </a>
          
          {/* Links Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition"
              aria-label="Cambiar tema"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          {/* Botones Móvil */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition"
              aria-label="Cambiar tema"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 dark:text-white"
              aria-label="Abrir menú"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Panel de Menú Móvil */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed top-[69px] left-0 w-full bg-white/95 backdrop-blur-md dark:bg-gray-900/95 z-40 py-4 border-b border-t border-gray-200 dark:border-gray-800"
        >
          <div className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-lg text-gray-700 dark:text-gray-200 hover:font-semibold transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;