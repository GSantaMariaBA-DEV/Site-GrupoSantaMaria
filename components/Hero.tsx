import React from 'react';
import { Button } from './ui/Button';
import { ChevronDown, Star } from 'lucide-react';
import heroBg from '../assets/Hero.webp';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] mt-20 flex items-center justify-center overflow-hidden py-16 md:py-0">
      {/* Background Image with Slow Zoom Effect */}
      <div
        className="absolute inset-0 z-0 bg-brand-green"
      >
        <img
          src={heroBg}
          alt="Villa Santa Maria"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-[center_top_10%] md:object-center animate-scale-slow"
        />
        {/* Sophisticated Gradient: Darker at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/90"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 lg:px-12 text-center flex flex-col items-center justify-center">

        <div className="animate-fade-in-up space-y-4 md:space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-4 text-white/90 uppercase tracking-[0.3em] text-[10px] md:text-sm font-sans font-medium">
            <span className="w-8 md:w-12 h-[1px] bg-brand-gold"></span>
            <span>VILA SANTA MARIA — A OBRA-PRIMA DO SANTA CRUZ</span>
            <span className="w-8 md:w-12 h-[1px] bg-brand-gold"></span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-serif font-medium text-white leading-tight drop-shadow-2xl">
            A Natureza como <br />
            <span className="italic font-light text-brand-gold">Obra de Arte</span>
          </h1>

          <p className="text-gray-100 text-sm sm:text-base md:text-xl font-sans font-light max-w-2xl mx-auto leading-relaxed opacity-90 drop-shadow-lg">
            Um loteamento de alto padrão criado para quem busca mais do que morar: busca <strong>Um Privilégio.</strong>
          </p>

          <p className="hidden sm:block text-gray-200 text-sm md:text-lg font-sans font-light max-w-3xl mx-auto leading-relaxed opacity-90 drop-shadow-lg">
            Aqui, o ar é mais puro, o silêncio é real e cada detalhe foi planejado para oferecer leveza, exclusividade e a sensação de estar vivendo exatamente onde sempre sonhou.
          </p>

          <div className="flex flex-wrap justify-center gap-3 md:gap-8 py-2 text-brand-gold">
            {[
              "Local elevado.",
              "Área super nobre.",
              "Vista privilegiada.",
              "Exclusividade verdadeira."
            ].map((text, index) => (
              <div key={index} className="flex items-center gap-1 md:gap-2">
                <Star size={14} fill="currentColor" className="text-brand-gold" />
                <span className="text-xs sm:text-sm md:text-base font-medium tracking-wide">{text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Button
              variant="secondary"
              onClick={() => document.getElementById('empreendimentos')?.scrollIntoView({ behavior: 'smooth' })}
              className="min-w-[180px] md:min-w-[200px] py-3 md:py-4 text-xs md:text-sm tracking-widest uppercase bg-brand-gold/90 hover:bg-brand-gold backdrop-blur-sm border-none shadow-2xl"
            >
              Conhecer Agora
            </Button>

            <Button
              variant="outline"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="min-w-[180px] md:min-w-[200px] py-3 md:py-4 text-xs md:text-sm tracking-widest uppercase border-white/40 text-white hover:bg-white hover:text-brand-green backdrop-blur-sm shadow-2xl"
            >
              Fale Com Especialista
            </Button>
          </div>

          {/* Scroll Indicator - Repositioned for better flow and visibility */}
          <div
            className="flex flex-col items-center gap-2 text-white/70 cursor-pointer mt-8 md:mt-12 animate-bounce hover:text-white transition-colors duration-300 z-20 pb-4 md:pb-0"
            onClick={() => document.getElementById('grupo')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-[10px] uppercase tracking-widest shadow-black drop-shadow-lg">Explore</span>
            <ChevronDown size={20} className="text-brand-gold drop-shadow-lg md:w-6 md:h-6" />
          </div>
        </div>

      </div>
    </section>
  );
};