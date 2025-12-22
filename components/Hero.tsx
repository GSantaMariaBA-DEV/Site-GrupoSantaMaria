import React from 'react';
import { Button } from './ui/Button';
import { ChevronDown, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Slow Zoom Effect */}
      <div
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-[65%_center] md:bg-center bg-no-repeat animate-scale-slow"
          style={{
            backgroundImage: `url('/Public/Hero.webp')`
          }}
        />
        {/* Sophisticated Gradient: Darker at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 lg:px-12 text-center flex flex-col items-center justify-center h-full pt-20">

        <div className="animate-fade-in-up space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-4 text-white/90 uppercase tracking-[0.3em] text-xs md:text-sm font-sans font-medium">
            <span className="w-12 h-[1px] bg-brand-gold"></span>
            <span>Livramento de Nossa Senhora</span>
            <span className="w-12 h-[1px] bg-brand-gold"></span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-white leading-tight drop-shadow-2xl">
            A Natureza como <br />
            <span className="italic font-light text-brand-gold">Obra de Arte</span>
          </h1>

          <p className="text-gray-100 text-lg md:text-xl font-sans font-light max-w-2xl mx-auto leading-relaxed opacity-90 drop-shadow-lg">
            Um loteamento de alto padrão criado para quem busca mais do que morar: busca <strong>Um Privilégio.</strong>
          </p>

          <p className="text-gray-200 text-base md:text-lg font-sans font-light max-w-3xl mx-auto leading-relaxed opacity-90 drop-shadow-lg">
            Aqui, o ar é mais puro, o silêncio é real e cada detalhe foi planejado para oferecer leveza, exclusividade e a sensação de estar vivendo exatamente onde sempre sonhou.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 py-2 text-brand-gold">
            {[
              "Local elevado.",
              "Área super nobre.",
              "Vista privilegiada.",
              "Exclusividade verdadeira."
            ].map((text, index) => (
              <div key={index} className="flex items-center gap-2">
                <Star size={16} fill="currentColor" className="text-brand-gold" />
                <span className="text-sm md:text-base font-medium tracking-wide">{text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              variant="secondary"
              onClick={() => document.getElementById('empreendimentos')?.scrollIntoView({ behavior: 'smooth' })}
              className="min-w-[200px] py-4 text-sm tracking-widest uppercase bg-brand-gold/90 hover:bg-brand-gold backdrop-blur-sm border-none shadow-2xl"
            >
              Conhecer Agora
            </Button>

            <Button
              variant="outline"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="min-w-[200px] py-4 text-sm tracking-widest uppercase border-white/40 text-white hover:bg-white hover:text-brand-green backdrop-blur-sm shadow-2xl"
            >
              Fale Com Especialista
            </Button>
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce flex flex-col items-center gap-2 text-white/70 cursor-pointer"
        onClick={() => document.getElementById('grupo')?.scrollIntoView({ behavior: 'smooth' })}>
        <span className="text-[10px] uppercase tracking-widest shadow-black drop-shadow-lg">Explore</span>
        <ChevronDown size={24} className="text-brand-gold drop-shadow-lg" />
      </div>
    </section>
  );
};