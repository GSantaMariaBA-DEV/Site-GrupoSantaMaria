import React from 'react';
import { Leaf, Shield, Gem } from 'lucide-react';

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
                Urbanismo de <br className="hidden md:block" />
                <span className="text-brand-gold italic">Alma & Propósito</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-300 font-sans font-light text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              <p>
                Acreditamos que um loteamento não é apenas demarcação de terra, mas a criação de cenários para a vida acontecer.
                Nossa assinatura une a <strong>segurança jurídica absoluta</strong> com um respeito profundo pela topografia e flora local.
              </p>
              <p>
                No Bairro Santa Cruz, não construímos apenas ruas; desenhamos caminhos para um futuro próspero, onde cada metro quadrado
                é pensado para valorizar seu patrimônio e elevar sua experiência de morar.
              </p>
            </div>

            <div className="pt-10 border-t border-white/10 w-full max-w-2xl mx-auto">
              <p className="font-serif text-2xl md:text-3xl text-white italic">"Sofisticação é viver cercado pelo que é natural."</p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-sm hover:bg-brand-gold/10 transition-all duration-500 group flex flex-col items-center text-center">
                <Gem className="text-brand-gold mb-6 h-12 w-12 group-hover:scale-110 transition-transform" />
                <h3 className="font-serif text-xl mb-3 text-white">Alto Padrão</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  Infraestrutura completa, paisagismo assinado e acabamentos de primeira linha.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-sm hover:bg-brand-gold/10 transition-all duration-500 group flex flex-col items-center text-center">
                <Shield className="text-brand-gold mb-6 h-12 w-12 group-hover:scale-110 transition-transform" />
                <h3 className="font-serif text-xl mb-3 text-white">100% Legalizado</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  Escritura pública e matrículas individualizadas. Segurança para investir e construir.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-sm hover:bg-brand-gold/10 transition-all duration-500 group flex flex-col items-center text-center">
                <Leaf className="text-brand-gold mb-6 h-12 w-12 group-hover:scale-110 transition-transform" />
                <h3 className="font-serif text-xl mb-3 text-white">Eco-Integração</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  Projetos que abraçam a vegetação nativa, criando microclimas agradáveis e exclusivos.
                </p>
              </div>
            </div>


          </div>

        </div>
      </div>
    </section>
  );
};