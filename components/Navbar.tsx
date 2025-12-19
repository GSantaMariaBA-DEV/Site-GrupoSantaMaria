import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'O Grupo', href: '#grupo' },
    { name: 'Empreendimentos', href: '#empreendimentos' },
    { name: 'Região', href: '#regiao' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-gold/20">
      <div className="w-full max-w-[1920px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">

          {/* Logo Section */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <img
              src="/Public/logo-navbar.png"
              alt="Grupo Santa Maria Logo"
              className="h-14 w-auto object-contain"
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-brand-green font-serif font-bold text-lg leading-tight tracking-wide">GRUPO</span>
              <span className="text-brand-green font-serif text-sm leading-tight tracking-widest">SANTA MARIA</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-brand-text hover:text-brand-gold font-sans font-medium transition-colors duration-300 text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contato"
              className="flex items-center gap-2 bg-brand-green text-white px-5 py-2 rounded-full hover:bg-opacity-90 transition-all shadow-md font-bold text-sm"
            >
              <Phone size={16} />
              <span>Fale Conosco</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-green hover:text-brand-gold transition-colors focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-brand-text hover:text-brand-gold font-sans font-semibold text-lg py-2 border-b border-gray-100"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="block text-center w-full bg-brand-green text-white py-3 rounded-md font-bold mt-4"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};