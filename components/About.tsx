import React from 'react';
import { Leaf, Gem, Wind, Waves } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="grupo" className="py-32 bg-brand-green relative overflow-hidden text-white">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>

      {/* Ornamental Circle */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 border border-brand-gold/20 rounded-full opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 border border-brand-gold/20 rounded-full opacity-50"></div>

      <div className="w-full max-w-[1920px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center">

          {/* Centered Content: The Manifesto */}
          <div className="w-full max-w-4xl mx-auto text-center space-y-10 mb-20">
            <div>
              <span className="text-brand-gold font-sans font-bold uppercase tracking-[0.2em] text-xs block mb-6">
                Filosofia Grupo Santa Maria
              </span>
              <h2 className="text-4xl md:text-6xl font-serif leading-tight text-white mb-6">
                Urbanismo Com <br className="hidden md:block" />
                <span className="text-brand-gold italic">Essência, Alma & Precisão</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-300 font-sans font-light text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              <p>
                O <span>Vila Santa Maria</span> nasce com propósito: Criar um ambiente de alto padrão onde estética, natureza e organização convivem em absoluta harmonia.
              </p>
            </div>

            <div className="pt-10 border-t border-white/10 w-full max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-center items-center gap-6 lg:gap-12">
                <div className="flex items-center gap-3 whitespace-nowrap">
                  <Leaf className="text-brand-gold w-5 h-5 shrink-0" />
                  <span className="text-white font-sans font-light text-lg">Ruas arborizadas.</span>
                </div>
                <div className="flex items-center gap-3 whitespace-nowrap">
                  <Leaf className="text-brand-gold w-5 h-5 shrink-0" />
                  <span className="text-white font-sans font-light text-lg">Canteiros paisagísticos planejados.</span>
                </div>
                <div className="flex items-center gap-3 whitespace-nowrap">
                  <Leaf className="text-brand-gold w-5 h-5 shrink-0" />
                  <span className="text-white font-sans font-light text-lg">Ventilação natural constante.</span>
                </div>
                <div className="flex items-center gap-3 whitespace-nowrap">
                  <Leaf className="text-brand-gold w-5 h-5 shrink-0" />
                  <span className="text-white font-sans font-light text-lg">Atmosfera leve e elegante.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-sm hover:bg-brand-gold/10 transition-all duration-500 group flex flex-col items-center text-center">
                <Gem className="text-brand-gold mb-6 h-12 w-12 group-hover:scale-110 transition-transform" />
                <h3 className="font-serif text-xl mb-3 text-white">Área Super Nobre</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  Reconhecida como uma das mais valiosas da cidade.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-sm hover:bg-brand-gold/10 transition-all duration-500 group flex flex-col items-center text-center">
                <Wind className="text-brand-gold mb-6 h-12 w-12 group-hover:scale-110 transition-transform" />
                <h3 className="font-serif text-xl mb-3 text-white">Ventilação Perfeita</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  Local alto, fresco e silencioso.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-sm hover:bg-brand-gold/10 transition-all duration-500 group flex flex-col items-center text-center">
                <Waves className="text-brand-gold mb-6 h-12 w-12 group-hover:scale-110 transition-transform" />
                <h3 className="font-serif text-xl mb-3 text-white">Vista Exclusiva Para A Cachoeira</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  Um privilégio reservado a poucos.
                </p>
              </div>
            </div>


          </div>

        </div>
      </div>
    </section>
  );
};