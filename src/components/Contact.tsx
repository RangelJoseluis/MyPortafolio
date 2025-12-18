'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí puedes agregar la lógica para enviar el formulario
    alert('¡Gracias por tu mensaje! Pronto nos comunicaremos.');
    setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contacto" className="w-full h-screen bg-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-8 flex flex-col justify-center relative z-10">
        {/* Título */}
        <div className="text-center mb-8 md:mb-10 animate-on-scroll">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            <span className="text-cyan-400">Contacto</span>
          </h2>
          <div className="w-10 md:w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded"></div>
        </div>

        {/* Contenedor principal */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 w-full animate-on-scroll-delay-1">
          {/* Formulario */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 md:p-7 animate-on-scroll-delay-1">
            <h3 className="text-lg md:text-xl font-bold text-white mb-5 md:mb-6">Envíame un Mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              {/* Nombre */}
              <div>
                <label className="block text-white font-semibold mb-1 text-sm">Tu Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Juan Pérez"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all duration-300"
                  required
                />
              </div>

              {/* Teléfono */}
              <div>
                <label className="block text-white font-semibold mb-1 text-sm">Teléfono</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+506 8765-4321"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white font-semibold mb-1 text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all duration-300"
                  required
                />
              </div>

              {/* Asunto */}
              <div>
                <label className="block text-white font-semibold mb-1 text-sm">Asunto</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Consulta sobre servicios"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all duration-300"
                  required
                />
              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-white font-semibold mb-1 text-sm">Mensaje</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tu mensaje aquí..."
                  rows={3}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>

              {/* Botón */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-bold py-2 px-6 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm"
              >
                <span>Enviar Mensaje</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>

          {/* Información de Contacto */}
          <div className="space-y-5 md:space-y-6 animate-on-scroll-delay-2">
            {/* Mapa */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden h-48 md:h-56 animate-on-scroll-delay-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.654723410893!2d-84.11183562346181!3d9.933363654235478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e0800000001%3A0x8f8f8f8f8f8f8f8f!2sSan%20Jos%C3%A9%2C%20Costa%20Rica!5e0!3m2!1ses!2scr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>

            {/* Información de Contacto */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5 md:p-6 space-y-4 animate-on-scroll-delay-3">
              <h3 className="text-lg md:text-xl font-bold text-white mb-4">Información de Contacto</h3>

              {/* Ubicación */}
              <div className="flex gap-3">
                <div className="text-xl">📍</div>
                <div>
                  <p className="text-cyan-400 font-semibold text-sm">Ubicación</p>
                  <p className="text-gray-300 text-xs">Maicao, La Guajira</p>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex gap-3">
                <div className="text-xl">📱</div>
                <div>
                  <p className="text-cyan-400 font-semibold text-sm">Teléfono</p>
                  <p className="text-gray-300 text-xs">+57 30054508661</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <div className="text-xl">✉️</div>
                <div>
                  <p className="text-cyan-400 font-semibold text-sm">Email</p>
                  <p className="text-gray-300 text-xs">zerepjosxd@gmail.com</p>
                </div>
              </div>

              {/* Redes Sociales */}
              <div className="pt-2 md:pt-3 border-t border-white/10">
                <p className="text-cyan-400 font-semibold mb-2 text-sm">Sígueme en Redes</p>
                <div className="flex gap-2">
                  <a href="https://www.facebook.com/joseluis.riverarangel.71?locale=es_LA" className="w-8 h-8 bg-white/10 hover:bg-cyan-400/20 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110" title="Facebook">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  </a>
                  <a href="https://x.com/Luis42359435" className="w-8 h-8 bg-white/10 hover:bg-cyan-400/20 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110" title="Twitter">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 002.856-3.51 10 10 0 01-2.836.856 4.958 4.958 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/joseluisrangelperez/" className="w-8 h-8 bg-white/10 hover:bg-cyan-400/20 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110" title="LinkedIn">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.047-8.842 0-9.769h3.554v1.383c.43-.664 1.199-1.61 2.920-1.61 2.135 0 3.731 1.39 3.731 4.377v5.619zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.953.77-1.715 1.958-1.715 1.188 0 1.915.762 1.915 1.715 0 .953-.727 1.715-1.958 1.715zm1.581 11.597H3.756V9.538h3.162v10.914zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>
                  </a>
                  <a href="https://github.com/RangelJoseluis" className="w-8 h-8 bg-white/10 hover:bg-cyan-400/20 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110" title="GitHub">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
