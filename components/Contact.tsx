import React, { useState } from 'react';
import { Phone, Mail, Instagram, Facebook, MapPin } from 'lucide-react';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'vendas',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Obrigado pelo interesse! Entraremos em contato em breve.');
  };

  return (
    <footer id="contato" className="relative text-white overflow-hidden">
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1445510861639-5652673c7000?auto=format&fit=crop&q=80&w=2000" 
            alt="Dark Nature Background" 
            className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-brand-green/90 mix-blend-multiply"></div>
         <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-6 lg:px-12 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Contact Form */}
          <div>
            <h2 className="text-4xl font-serif font-bold mb-4">Fale Conosco</h2>
            <p className="text-gray-300 mb-10 font-light text-lg">
              Preencha o formulário abaixo para receber informações exclusivas sobre o Vila Santa Maria ou futuros lançamentos.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold uppercase tracking-wider text-brand-gold mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-sm px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-brand-gold focus:bg-white/20 transition-colors backdrop-blur-sm"
                  placeholder="Seu nome"
                  onChange={handleChange}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold uppercase tracking-wider text-brand-gold mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-sm px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-brand-gold focus:bg-white/20 transition-colors backdrop-blur-sm"
                    placeholder="(77) 99999-9999"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-bold uppercase tracking-wider text-brand-gold mb-2">Assunto</label>
                  <select 
                    id="subject"
                    name="subject"
                    className="w-full bg-white/10 border border-white/20 rounded-sm px-6 py-4 text-white focus:outline-none focus:border-brand-gold focus:bg-white/20 transition-colors backdrop-blur-sm [&>option]:text-gray-800"
                    onChange={handleChange}
                  >
                    <option value="vendas">Quero Comprar</option>
                    <option value="informacoes">Mais Informações</option>
                    <option value="parceria">Parceria</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold uppercase tracking-wider text-brand-gold mb-2">Mensagem</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full bg-white/10 border border-white/20 rounded-sm px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-brand-gold focus:bg-white/20 transition-colors backdrop-blur-sm"
                  placeholder="Como podemos ajudar?"
                  onChange={handleChange}
                ></textarea>
              </div>

              <Button variant="secondary" className="w-full py-5 font-bold text-lg uppercase tracking-widest shadow-xl">
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Contact Info & Socials */}
          <div className="flex flex-col justify-between">
            <div className="space-y-10">
              <div className="flex items-center space-x-3 text-brand-gold text-3xl font-serif font-bold">
                 <span>GRUPO SANTA MARIA</span>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-5 group cursor-default">
                  <div className="bg-brand-gold p-3 rounded-sm text-brand-green group-hover:bg-white transition-colors duration-300">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xl mb-1">Sede Administrativa</h4>
                    <p className="text-gray-300 text-lg font-light">Av. Presidente Vargas, 123 - Centro</p>
                    <p className="text-gray-300 text-lg font-light">Livramento de Nossa Senhora - BA</p>
                  </div>
                </div>

                <div className="flex items-start space-x-5 group cursor-default">
                  <div className="bg-brand-gold p-3 rounded-sm text-brand-green group-hover:bg-white transition-colors duration-300">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xl mb-1">Central de Vendas</h4>
                    <p className="text-gray-300 text-lg font-light">(77) 99999-0000</p>
                    <p className="text-sm text-brand-gold uppercase tracking-widest mt-1">Seg a Sex: 08h às 18h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-5 group cursor-default">
                  <div className="bg-brand-gold p-3 rounded-sm text-brand-green group-hover:bg-white transition-colors duration-300">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xl mb-1">E-mail</h4>
                    <p className="text-gray-300 text-lg font-light">contato@gruposantamaria.com.br</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex space-x-6">
                  <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all transform hover:-translate-y-1">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all transform hover:-translate-y-1">
                    <Facebook size={24} />
                  </a>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-gray-400 text-sm font-light">&copy; {new Date().getFullYear()} Grupo Santa Maria. Todos os direitos reservados.</p>
                  <p className="text-brand-gold text-base font-serif italic mt-2">Construindo sonhos em Livramento</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};