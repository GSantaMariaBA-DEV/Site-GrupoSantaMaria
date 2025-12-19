import React, { useState } from 'react';
import { MapPin, Mountain, Car, School, HeartPulse, ShoppingBag, Palmtree, Navigation } from 'lucide-react';

export const Region: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'nature' | 'urban'>('nature');

  const locations = {
    nature: [
      { name: "Cachoeira do Fraga", time: "10 min", distance: "4 km", icon: DropletsIcon },
      { name: "Centro Histórico Rio de Contas", time: "25 min", distance: "12 km", icon: Mountain },
      { name: "Pico das Almas (Base)", time: "45 min", distance: "22 km", icon: Mountain },
      { name: "Cachoeira Véu da Noiva", time: "20 min", distance: "9 km", icon: Palmtree },
    ],
    urban: [
      { name: "Centro de Livramento", time: "5 min", distance: "2 km", icon: ShoppingBag },
      { name: "Hospital Municipal", time: "7 min", distance: "3 km", icon: HeartPulse },
      { name: "Colégios e Faculdades", time: "6 min", distance: "2.5 km", icon: School },
      { name: "Bancos e Comércio", time: "5 min", distance: "2 km", icon: Car },
    ]
  };

  const galleryImages = [
    { url: "https://files.gruposantamariaba.com.br/Regiao/01_livramento_H.webp", title: "Livramento" },
    { url: "https://files.gruposantamariaba.com.br/Regiao/02_Pico_das_Almas_H.webp", title: "Pico das Almas" },
    { url: "https://files.gruposantamariaba.com.br/Regiao/03_VeuDeNoiv_H.webp", title: "Cachoeira Véu da Noiva" },
    { url: "https://files.gruposantamariaba.com.br/Regiao/04_Livramento_H.webp", title: "Livramento" },
    { url: "https://files.gruposantamariaba.com.br/Regiao/05_Pico_do_Itobira_H.webp", title: "Pico do Itobira" },
    { url: "https://files.gruposantamariaba.com.br/Regiao/06_Morro_da_Torre_H.webp", title: "Morro da Torre" },
    { url: "https://files.gruposantamariaba.com.br/Regiao/07_Vista_Cachoeira_Veu_de_Noiva_H.webp", title: "Vista Acima da Cachoeira Véu da Noiva" },
    { url: "https://files.gruposantamariaba.com.br/Regiao/08_Fazenda_Vaccaro_H.webp", title: "Fazenda Vaccaro" },
    { url: "https://files.gruposantamariaba.com.br/Regiao/09_Caminho_do_Fraga_H.webp", title: "Caminho do Fraga" },
    { url: "https://files.gruposantamariaba.com.br/Regiao/10_Vale_do_Pati_H.webp", title: "Vale do Pati" },
  ];

  const slideshowLayouts = [
    {
      className: "md:row-span-2 relative group overflow-hidden rounded-sm cursor-zoom-in reveal",
      isWide: false
    },
    {
      className: "relative group overflow-hidden rounded-sm cursor-zoom-in reveal",
      isWide: false
    },
    {
      className: "relative group overflow-hidden rounded-sm cursor-zoom-in reveal",
      isWide: false
    },
    {
      className: "md:col-span-2 relative group overflow-hidden rounded-sm cursor-zoom-in reveal",
      isWide: true
    }
  ];

  // Initialize with the first 4 images
  const [visibleIndices, setVisibleIndices] = useState([0, 1, 2, 3]);
  const [nextImgIndex, setNextImgIndex] = useState(4);
  const [slotToUpdate, setSlotToUpdate] = useState(0);

  // Preload all images to ensure smooth transitions
  React.useEffect(() => {
    galleryImages.forEach((image) => {
      const img = new Image();
      img.src = image.url;
    });
  }, []); // Run ONCE on mount

  React.useEffect(() => {
    const timer = setInterval(() => {
      setVisibleIndices((currentIndices) => {
        const newIndices = [...currentIndices];
        newIndices[slotToUpdate] = nextImgIndex;
        return newIndices;
      });

      setNextImgIndex((prev) => (prev + 1) % galleryImages.length);
      setSlotToUpdate((prev) => (prev + 1) % 4); // There are 4 slots
    }, 3000); // Update one image every 3 seconds

    return () => clearInterval(timer);
  }, [nextImgIndex, slotToUpdate]); // Clean dependency array

  return (
    <section id="regiao" className="py-24 bg-brand-sand relative">
      <div className="w-full max-w-[1920px] mx-auto px-6 lg:px-12">

        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 reveal">
          <span className="text-brand-gold font-sans font-bold uppercase tracking-[0.2em] text-xs">Localização Estratégica</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-green mt-4 mb-6">
            O Portal da Chapada
          </h2>
          <p className="text-gray-600 text-lg font-light leading-relaxed">
            O Vila Santa Maria está posicionado no vetor de crescimento mais nobre da cidade.
            A poucos minutos da conveniência urbana, mas com o clima ameno e a vista eterna para as montanhas de <strong>Rio de Contas</strong>.
          </p>
        </div>

        {/* =========================================
            INTERACTIVE MAP SECTION
           ========================================= */}
        <div className="bg-white rounded-sm shadow-2xl overflow-hidden mb-24 reveal">
          <div className="grid grid-cols-1 lg:grid-cols-3">

            {/* Left Panel: Points of Interest */}
            <div className="p-8 lg:p-12 bg-brand-green text-white flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <Navigation className="text-brand-gold animate-bounce" />
                  <h3 className="text-2xl font-serif">Radar de Proximidade</h3>
                </div>

                {/* Tabs */}
                <div className="flex bg-white/10 p-1 rounded-lg mb-8">
                  <button
                    onClick={() => setActiveTab('nature')}
                    className={`flex-1 py-2 text-sm font-bold uppercase tracking-wide rounded-md transition-all ${activeTab === 'nature' ? 'bg-brand-gold text-brand-green shadow-lg' : 'text-gray-300 hover:text-white'}`}
                  >
                    Turismo & Lazer
                  </button>
                  <button
                    onClick={() => setActiveTab('urban')}
                    className={`flex-1 py-2 text-sm font-bold uppercase tracking-wide rounded-md transition-all ${activeTab === 'urban' ? 'bg-brand-gold text-brand-green shadow-lg' : 'text-gray-300 hover:text-white'}`}
                  >
                    Dia a Dia
                  </button>
                </div>

                {/* List */}
                <div className="space-y-6">
                  {locations[activeTab].map((loc, idx) => (
                    <div key={idx} className="flex items-center justify-between group cursor-default border-b border-white/10 pb-4 last:border-0">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-white/10 rounded-full text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-green transition-colors">
                          <loc.icon size={20} />
                        </div>
                        <div>
                          <p className="font-bold text-lg leading-none group-hover:text-brand-gold transition-colors">{loc.name}</p>
                          <p className="text-xs text-gray-400 font-light mt-1 uppercase tracking-wider">Carro</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-serif font-bold text-white">{loc.time}</p>
                        <p className="text-xs text-gray-400">{loc.distance}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-sm font-light text-gray-300 italic">
                  *Tempos estimados de carro a partir da portaria do loteamento.
                </p>
              </div>
            </div>

            {/* Right Panel: Google Map Embed */}
            <div className="lg:col-span-2 h-[500px] lg:h-auto relative bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.621764684628!2d-41.84365792404097!3d-13.655869486718165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x743058097b79213%3A0x889895123456789!2sLivramento%20de%20Nossa%20Senhora%2C%20BA!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0%) contrast(1.1)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Localização"
                className="w-full h-full"
              ></iframe>

              {/* Map Overlay Badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-4 py-2 rounded shadow-lg pointer-events-none border-l-4 border-brand-green">
                <span className="text-xs font-bold uppercase text-gray-500 block">Região</span>
                <span className="text-brand-green font-bold text-lg flex items-center gap-1">
                  <MapPin size={16} /> Sertão Produtivo
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================
            LIFESTYLE GALLERY (Existing)
           ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Gallery Slideshow */}
          {(() => {
            const galleryImages = [
              { url: "https://i.ibb.co/8Lj1Ybp2/01-livramento-H.png", title: "Livramento" },
              { url: "https://i.ibb.co/Fbdxp6q4/02-Pico-das-Almas-H.png", title: "Pico das Almas" },
              { url: "https://i.ibb.co/FkhtzfS0/03-Livramento-H.png", title: "Cachoeira Véu da Noiva" },
              { url: "https://i.ibb.co/LhrCLmP6/04-Livramento-H.png", title: "Livramento" },
              { url: "https://i.ibb.co/bgt5xFXT/05-Pico-do-Itobira-H.png", title: "Pico do Itobira" },
              { url: "https://i.ibb.co/zTwZwbHC/06-Morro-da-Torre-H.png", title: "Morro da Torre" },
              { url: "https://i.ibb.co/VcrmFCzd/07-Vista-Cachoeira-Veu-de-Noiva-H.png", title: "Vista Acima da Cachoeira Véu da Noiva" },
              { url: "https://i.ibb.co/9HbGV8Qh/08-Fazenda-Vaccaro-H.png", title: "Fazenda Vaccaro" },
              { url: "https://i.ibb.co/0yMhzPVN/09-Caminho-do-Fraga-H.png", title: "Caminho do Fraga" },
              { url: "https://i.ibb.co/gL5SF3Gs/10-Vale-do-Pati-H.png", title: "Vale do Pati" },
            ];

            // Initialize with the first 4 images
            const [visibleIndices, setVisibleIndices] = useState([0, 1, 2, 3]);
            const [nextImgIndex, setNextImgIndex] = useState(4);
            const [slotToUpdate, setSlotToUpdate] = useState(0);

            // Preload all images to ensure smooth transitions
            React.useEffect(() => {
              galleryImages.forEach((image) => {
                const img = new Image();
                img.src = image.url;
              });
            }, []);

            React.useEffect(() => {
              const timer = setInterval(() => {
                setVisibleIndices((currentIndices) => {
                  const newIndices = [...currentIndices];
                  newIndices[slotToUpdate] = nextImgIndex;
                  return newIndices;
                });

                setNextImgIndex((prev) => (prev + 1) % galleryImages.length);
                setSlotToUpdate((prev) => (prev + 1) % 4); // There are 4 slots
              }, 3000); // Update one image every 3 seconds

              return () => clearInterval(timer);
            }, [nextImgIndex, slotToUpdate, galleryImages.length]);

            const layouts = [
              {
                className: "md:row-span-2 relative group overflow-hidden rounded-sm cursor-zoom-in reveal",
                isWide: false
              },
              {
                className: "relative group overflow-hidden rounded-sm cursor-zoom-in reveal",
                isWide: false
              },
              {
                className: "relative group overflow-hidden rounded-sm cursor-zoom-in reveal",
                isWide: false
              },
              {
                className: "md:col-span-2 relative group overflow-hidden rounded-sm cursor-zoom-in reveal",
                isWide: true
              }
            ];

            return (
              <>
                <style>{`
                  @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                  }
                `}</style>
                {layouts.map((layout, i) => {
                  const imageIndex = visibleIndices[i];
                  const item = galleryImages[imageIndex];

                  return (
                    <div key={i} className={layout.className}>
                      <img
                        key={`${item.url}-${imageIndex}`} // changing key triggers re-mount and animation
                        src={item.url}
                        alt={item.title}
                        style={{ animation: 'fadeIn 2s ease-in-out forwards' }}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                      {/* Overlay Gradient */}
                      {layout.isWide && <div className="absolute inset-0 bg-brand-green/10 mix-blend-overlay"></div>}

                      <div className={`absolute bottom-0 left-0 p-6 md:p-8 w-full bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                        <h3 className={`text-white font-serif ${layout.isWide ? 'text-2xl mt-1' : 'text-xl'}`}>{item.title}</h3>
                      </div>
                    </div>
                  );
                })}
              </>
            );
          })()}
        </div>

      </div>
    </section>
  );
};

// Helper Icon for Drops (to avoid import conflict if Lucide doesn't export distinct DropletsIcon)
const DropletsIcon = ({ size, className }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.8-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" /><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.356" />
  </svg>
);