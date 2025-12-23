import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { CheckCircle2, Hammer, Zap, Droplets, TreePine, Footprints, Route, Lightbulb, Home, ShieldCheck } from 'lucide-react';
import patiBg from '../assets/pati.jpg';

export const Projects: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const carouselImages = [
    "https://files.gruposantamariaba.com.br/Projeto/Portal_06.webp",
    "https://files.gruposantamariaba.com.br/Projeto/Projeto_01.webp",
    "https://files.gruposantamariaba.com.br/Projeto/Projeto_02_Quadras.webp",
    "https://files.gruposantamariaba.com.br/Projeto/Projeto_04_Casas.webp",
    "https://files.gruposantamariaba.com.br/Projeto/Projeto_05_Interior.webp"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(timer);
  }, [carouselImages.length]);

  return (
    <section id="empreendimentos" className="bg-brand-sand relative overflow-hidden">

      {/* =========================================
          PART 1: THE MAIN EVENT - HEADER
         ========================================= */}
      <div className="pt-24 pb-12 text-center relative z-10 px-6">
        <span className="bg-brand-gold/10 text-brand-gold px-4 py-2 rounded-full uppercase tracking-[0.2em] text-xs font-bold inline-block mb-4 reveal">
          O Futuro Chegou
        </span>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-brand-green reveal">
          Vila Santa Maria
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto font-light text-lg reveal">
          O primeiro bairro planejado de alto padrão em Livramento. <br className="hidden md:block" />
          Infraestrutura para você construir seu sonho.
        </p>
      </div>

      {/* =========================================
          PART 2: THE SHOWCASE (Dynamic Layout)
         ========================================= */}
      <div className="w-full max-w-[1920px] mx-auto mb-20">
        <div className="grid grid-cols-1 xl:grid-cols-12 min-h-[70vh] items-center">

          {/* Left: Dynamic Image Carousel (Larger) */}
          <div className="xl:col-span-8 relative h-[50vh] xl:h-[80vh] overflow-hidden group rounded-r-3xl shadow-2xl reveal">
            {carouselImages.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
              >
                <img
                  src={src}
                  alt={`Vila Santa Maria View ${index + 1}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-linear ${index === currentImage ? 'scale-110' : 'scale-100'}`}
                />
              </div>
            ))}

            <div className="absolute inset-0 bg-gradient-to-r from-brand-green/30 to-transparent z-10"></div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-8 right-8 flex space-x-2 z-20">
              {carouselImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 shadow-md ${idx === currentImage ? 'w-10 bg-brand-gold' : 'w-5 bg-white/50 hover:bg-white'}`}
                  aria-label={`View image ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Pitch & CTA */}
          <div className="xl:col-span-4 p-10 xl:pl-16 flex flex-col justify-center reveal">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Hammer className="text-brand-gold" size={20} />
                <span className="text-brand-gold uppercase tracking-widest text-xs font-bold">Construção & Vendas</span>
              </div>
              <h3 className="text-4xl font-serif font-medium text-brand-text mb-6">
                Seu Patrimônio <br />
                <span className="text-brand-green">Em Sua Melhor Versão</span>
              </h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Localizado na parte mais alta do <strong>Bairro Santa Cruz</strong>, o projeto reúne tudo o que define um loteamento realmente superior: conforto, segurança, charme e um enorme potencial de valorização.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="text-brand-gold h-5 w-5" />
                  <span>Urbanismo Qualificado</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="text-brand-gold h-5 w-5" />
                  <span>Infraestrutura</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="text-brand-gold h-5 w-5" />
                  <span>Ambiente Premium</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="text-brand-gold h-5 w-5" />
                  <span>Valorização Acelerada</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <Button
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-5 text-lg shadow-xl hover:-translate-y-1 transform transition-transform"
              >
                Garantir Minha Unidade
              </Button>

            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          PART 3: PARALLAX BREAK (The Emotion)
         ========================================= */}
      <div className="relative h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center reveal"
        style={{ backgroundImage: `url(${patiBg})` }}>
        <div className="absolute inset-0 bg-brand-green/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h3 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
            “O que é único não espera.
            Garanta seu lugar agora.”

          </h3>
        </div>
      </div>

      {/* =========================================
          PART 4: INFRASTRUCTURE GRID
         ========================================= */}
      <div className="py-24 px-6 lg:px-12 max-w-[1920px] mx-auto bg-white relative z-10 -mt-20 rounded-t-3xl shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.1)]">
        <div className="text-center mb-16 reveal">
          <span className="text-brand-green uppercase tracking-[0.2em] text-sm font-bold">Detalhes Técnicos</span>
          <h3 className="text-3xl font-serif mt-3 text-brand-text">Infraestrutura</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {[
            { icon: ShieldCheck, title: "Segurança", desc: "Bairro Residencial Tranquilo e Seguro" },
            { icon: TreePine, title: "Paisagismo Assinado", desc: "Palmeiras, Áreas Verdes e Estética Padronizada" },
            { icon: Route, title: "Ruas Calçadas Premium", desc: "Pavimentação Impecável e Durável" },
            { icon: Zap, title: "Energia Coelba Confiável", desc: "Estabilidade e Segurança no Fornecimento" },
            { icon: Droplets, title: "Água Embasa Estruturada", desc: "Abastecimento Regular e Eficiente" },
            { icon: Lightbulb, title: "Iluminação Elegante", desc: "Luzes Modernas que Valorizam o Ambiente" },
            { icon: Footprints, title: "Lazer Natural", desc: "Acesso a Trilhas e Cachoeiras com Facilidade" },
            { icon: Home, title: "Ambiente de Vila Contemporânea", desc: "Exclusivo, Charmoso e com Identidade Própria" },
          ].map((item, idx) => (
            <div key={idx} className="text-center group cursor-default reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-sand mb-6 group-hover:bg-brand-green transition-colors duration-500">
                <item.icon className="h-8 w-8 text-brand-green group-hover:text-brand-gold transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <h4 className="font-serif text-lg text-brand-text mb-2 font-bold">{item.title}</h4>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================
          PART 5: FUTURE PROJECTS (Distinct)
         ========================================= */}
      <div className="bg-gray-900 py-24 border-t border-gray-800 text-white">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <div className="mb-12 reveal text-center md:text-left">
            <h3 className="text-3xl font-serif text-white">Novos Movimentos</h3>
            <p className="text-gray-400 mt-2 font-light">O Vila Santa Maria eleva o padrão do bairro, introduzindo um novo nível de organização, beleza e sofisticação.</p>
            <p className="text-gray-400 mt-2 font-light">Um marco que valoriza tudo ao redor, confira o que vem por ai!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Vila Santa Maria II", status: "Breve Lançamento", img: "https://files.gruposantamariaba.com.br/empreendimentos/01.webp" },
              { name: "Vila Santa Maria III", status: "Em Planejamento", img: "https://files.gruposantamariaba.com.br/empreendimentos/02.webp" },
              { name: "Vila Santa Maria IV", status: "Em Planejamento", img: "https://files.gruposantamariaba.com.br/empreendimentos/03.webp" },
              { name: "Vila Santa Maria V", status: "Em Planejamento", img: "https://files.gruposantamariaba.com.br/empreendimentos/04.webp" },
            ].map((project, idx) => (
              <div key={idx} className="group cursor-pointer relative overflow-hidden rounded-sm reveal" style={{ transitionDelay: `${idx * 150}ms` }}>
                <div className="absolute top-4 left-4 z-20 bg-brand-gold text-brand-green text-[10px] font-bold uppercase px-3 py-1 rounded-sm">
                  {project.status}
                </div>
                <div className="h-80 overflow-hidden relative">
                  <img src={project.img} alt={project.name} loading="lazy" decoding="async" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>

                  <div className="absolute bottom-6 left-6">
                    <h4 className="text-2xl font-serif text-white group-hover:text-brand-gold transition-colors">{project.name}</h4>
                    <span className="text-xs text-gray-300 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 block mt-2">Saiba Mais</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};