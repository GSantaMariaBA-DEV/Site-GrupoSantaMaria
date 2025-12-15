import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Os loteamentos do Grupo Santa Maria são 100% legalizados?",
      answer: "Sim! A segurança jurídica é nosso pilar principal. Todos os nossos empreendimentos possuem Escritura Pública, matrícula individualizada e aprovação na Prefeitura e órgãos ambientais. Você compra com a certeza de que o imóvel é seu."
    },
    {
      question: "Existe financiamento próprio? Quais as condições?",
      answer: "Oferecemos financiamento direto com a incorporadora, sem burocracia bancária. Trabalhamos com entrada facilitada e parcelamento em até 120 meses. Consulte nossos corretores para uma simulação personalizada."
    },
    {
      question: "Qual o prazo para liberação para construção?",
      answer: "No Vila Santa Maria, a liberação é imediata após a assinatura do contrato e pagamento da entrada, pois a infraestrutura básica já está concluída. Para os lançamentos futuros, seguimos o cronograma de obras estipulado em contrato."
    },
    {
      question: "Onde ficam localizados os empreendimentos?",
      answer: "Nossos empreendimentos estão situados em vetores de crescimento estratégico de Livramento de Nossa Senhora, priorizando áreas com boa ventilação, vista para as montanhas e fácil acesso ao centro da cidade."
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-brand-sand">
      <div className="w-full max-w-[1920px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Image Filler */}
            <div className="relative h-[600px] hidden lg:block rounded-sm overflow-hidden group">
                <img 
                    src="https://images.unsplash.com/photo-1621293954908-351529e962e5?auto=format&fit=crop&q=80&w=1200" 
                    alt="Tranquilidade e Planejamento" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-green/10 mix-blend-multiply"></div>
                <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur p-8 border-l-4 border-brand-gold">
                    <p className="font-serif text-brand-green text-xl italic">
                        "Investir em terra é investir na única coisa que dura para sempre."
                    </p>
                </div>
            </div>

            {/* Right Column: Content */}
            <div className="max-w-2xl">
                <div className="mb-12">
                    <div className="inline-flex items-center justify-center p-3 bg-brand-sand rounded-full mb-4">
                        <HelpCircle className="text-brand-gold" size={24} />
                    </div>
                    <h2 className="text-brand-green font-serif font-bold text-4xl mb-4 leading-tight">Dúvidas Frequentes</h2>
                    <p className="text-gray-600 text-lg">
                        Transparência absoluta em cada etapa do seu investimento com o Grupo Santa Maria.
                    </p>
                </div>

                <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div 
                    key={index} 
                    className={`border rounded-sm transition-all duration-300 ${openIndex === index ? 'border-brand-gold bg-brand-sand/30 shadow-sm' : 'border-gray-100 hover:border-brand-gold/50'}`}
                    >
                    <button
                        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    >
                        <span className={`font-serif font-bold text-lg ${openIndex === index ? 'text-brand-green' : 'text-gray-700'}`}>
                        {faq.question}
                        </span>
                        {openIndex === index ? (
                        <ChevronUp className="text-brand-gold flex-shrink-0 ml-4" />
                        ) : (
                        <ChevronDown className="text-gray-400 flex-shrink-0 ml-4" />
                        )}
                    </button>
                    
                    <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        <div className="p-6 pt-0 text-gray-600 font-light leading-relaxed border-t border-dashed border-brand-gold/20 mt-2">
                        {faq.answer}
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};