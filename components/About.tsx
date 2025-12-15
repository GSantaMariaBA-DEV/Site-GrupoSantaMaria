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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: The Manifesto */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <span className="text-brand-gold font-sans font-bold uppercase tracking-[0.2em] text-xs block mb-4">
                Filosofia Grupo Santa Maria
              </span>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                Urbanismo de <br/> 
                <span className="text-brand-gold italic">Alma & Propósito</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-300 font-sans font-light text-lg leading-relaxed text-justify">
              <p>
                Acreditamos que um loteamento não é apenas demarcação de terra, mas a criação de cenários para a vida acontecer. 
                Nossa assinatura une a <strong>segurança jurídica absoluta</strong> com um respeito profundo pela topografia e flora local.
              </p>
              <p>
                No Bairro Santa Cruz, não construímos apenas ruas; desenhamos caminhos para um futuro próspero, onde cada metro quadrado 
                é pensado para valorizar seu patrimônio e elevar sua experiência de morar.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10">
                <p className="font-serif text-2xl text-white italic">"Sofisticação é viver cercado pelo que é natural."</p>
            </div>
          </div>

          {/* Right Column: Visual Pillars */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-sm hover:bg-brand-gold/10 transition-colors duration-500 group">
                    <Gem className="text-brand-gold mb-6 h-10 w-10 group-hover:scale-110 transition-transform" />
                    <h3 className="font-serif text-xl mb-3">Alto Padrão</h3>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">
                        Infraestrutura completa, paisagismo assinado e acabamentos de primeira linha.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-sm hover:bg-brand-gold/10 transition-colors duration-500 group">
                    <Shield className="text-brand-gold mb-6 h-10 w-10 group-hover:scale-110 transition-transform" />
                    <h3 className="font-serif text-xl mb-3">100% Legalizado</h3>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">
                        Escritura pública e matrículas individualizadas. Segurança para investir e construir.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-sm hover:bg-brand-gold/10 transition-colors duration-500 group">
                    <Leaf className="text-brand-gold mb-6 h-10 w-10 group-hover:scale-110 transition-transform" />
                    <h3 className="font-serif text-xl mb-3">Eco-Integração</h3>
                    <p className="text-gray-400 text-sm font-light leading-relaxed">
                        Projetos que abraçam a vegetação nativa, criando microclimas agradáveis e exclusivos.
                    </p>
                </div>
            </div>
            
            {/* Context Image */}
            <div className="mt-8 h-64 w-full overflow-hidden rounded-sm relative opacity-80 mix-blend-overlay">
                 <img src="https://images.unsplash.com/photo-1621293954908-351529e962e5?auto=format&fit=crop&q=80&w=1200" alt="Texture" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"/>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};