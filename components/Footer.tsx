import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-green text-white py-12 border-t border-white/10">
            <div className="w-full max-w-[1920px] mx-auto px-6 lg:px-12">
                <div className="flex flex-col justify-center items-center gap-8">
                    <div className="flex space-x-6">
                        <a
                            href="https://www.instagram.com/gruposantamariaba?igsh=YzMzbnJ2bTd5dGty"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all transform hover:-translate-y-1"
                        >
                            <Instagram size={24} />
                        </a>
                        <a
                            href="https://www.facebook.com/share/1AgTgXstbo/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all transform hover:-translate-y-1"
                        >
                            <Facebook size={24} />
                        </a>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-400 text-sm font-light">&copy; {new Date().getFullYear()} Grupo Santa Maria. Todos os direitos reservados.</p>
                        <p className="text-brand-gold text-base font-serif italic mt-2">Construindo sonhos em Livramento</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
