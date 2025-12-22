import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      let masked = numbers;
      if (numbers.length > 2) {
        masked = `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
      }
      if (numbers.length > 7) {
        masked = `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
      }
      return masked;
    }
    return value.slice(0, 15);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const finalValue = name === 'phone' ? formatPhone(value) : value;

    setFormData({
      ...formData,
      [name]: finalValue
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation for phone length (should be 15 chars: (XX) XXXXX-XXXX)
    if (formData.phone.length < 15) {
      alert('Por favor, insira um telefone válido com DDD e 9 dígitos.');
      return;
    }

    // Create the WhatsApp message
    const message = `Olá! Tenho interesse no Grupo Santa Maria.

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*E-mail:* ${formData.email}
*Mensagem:* ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5577999999999?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="relative text-white overflow-hidden">

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

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Contact Form */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-serif font-bold mb-4">Fale Conosco</h2>
            <p className="text-gray-300 mb-10 font-light text-lg">
              A exclusividade começa no atendimento.
              Receba a tabela atualizada, as últimas unidades disponíveis e condições especiais de lançamento.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div>
                <label htmlFor="name" className="block text-sm font-bold uppercase tracking-wider text-brand-gold mb-2">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-sm px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-brand-gold focus:bg-white/20 transition-colors backdrop-blur-sm"
                  placeholder="Seu nome"
                  value={formData.name}
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
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={15}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wider text-brand-gold mb-2">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-sm px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-brand-gold focus:bg-white/20 transition-colors backdrop-blur-sm"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
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
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <Button variant="secondary" className="w-full py-5 font-bold text-lg uppercase tracking-widest shadow-xl">
                Enviar Mensagem
              </Button>
            </form>
          </div>


          {/* Contact Info */}
          <div className="flex flex-col justify-center h-full lg:pl-12">
            <div className="space-y-12">
              <div className="flex items-center justify-center lg:justify-start space-x-3 text-brand-gold text-3xl font-serif font-bold">
                <span>GRUPO SANTA MARIA</span>
              </div>

              <div className="space-y-10">
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
                    <p className="text-gray-300 text-lg font-light">gruposantamariaba@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};