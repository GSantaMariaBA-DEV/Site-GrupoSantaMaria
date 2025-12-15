import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppBtn: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5577999999999" // Replace with actual number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      aria-label="Falar com corretor no WhatsApp"
    >
      <span className="bg-white text-brand-text px-4 py-2 rounded-lg shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
        Falar com Corretor
      </span>
      <div className="bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#20bd5a] transition-all duration-300 hover:scale-110 animate-bounce">
        <MessageCircle size={28} fill="white" />
      </div>
    </a>
  );
};