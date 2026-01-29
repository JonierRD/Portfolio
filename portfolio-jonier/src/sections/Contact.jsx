import { motion } from "framer-motion";
import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const whatsappMessage = `*Nuevo contacto desde Portfolio*%0A%0A*Nombre:* ${formData.name}%0A*Email:* ${formData.email}%0A*Asunto:* ${formData.subject}%0A%0A*Mensaje:*%0A${formData.message}`;
    const whatsappUrl = `https://wa.me/573133865275?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const socialLinks = [
    { name: "GitHub", logo: "/Github.webp", link: "https://github.com/JonierRD" },
    { name: "Gmail", logo: "/gmail.webp", text: "rendonchamorro@gmail.com", isEmail: true },
    { name: "Facebook", logo: "/facebook.webp", link: "https://www.facebook.com/Jonier.rd" }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-6 pb-32 md:pb-24 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={isMobile ? {} : { opacity: 0, y: 20 }}
          whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
        >
          Contacto
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-container"
          >
            <div className="contact-form-card rounded-2xl p-8">
              <div className="contact-title">
                <h3 className="contact-title-text">
                  Envíame un mensaje
                </h3>
              </div>

              <div className="contact-form-wrapper">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="contact-input-group">
                    <label className="contact-label">Nombre</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="contact-input rounded-lg"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>

                  <div className="contact-input-group">
                    <label className="contact-label">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="contact-input rounded-lg"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>

                  <div className="contact-input-group">
                    <label className="contact-label">Asunto</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="contact-input rounded-lg"
                      placeholder="¿En qué puedo ayudarte?"
                      required
                    />
                  </div>

                  <div className="contact-input-group">
                    <label className="contact-label">Mensaje</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="contact-textarea rounded-lg"
                      placeholder="Tu mensaje..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="contact-submit-btn rounded-xl"
                  >
                    <span>Enviar por WhatsApp</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Redes sociales */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="social-card-brutalist rounded-2xl p-4 md:p-8">
              <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-wider">
                Encuéntrame en
              </h3>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  social.isEmail ? (
                    <motion.div
                      key={social.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="social-link-brutalist flex items-center gap-2 md:gap-4 p-3 md:p-4 rounded-xl"
                    >
                      <div className="social-icon-box w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white flex items-center justify-center p-2">
                        <img src={social.logo} alt={social.name} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-black font-black block text-sm md:text-base">{social.name}</span>
                        <span className="text-black text-xs md:text-sm font-bold break-all">{social.text}</span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="social-link-brutalist flex items-center gap-2 md:gap-4 p-3 md:p-4 rounded-xl"
                    >
                      <div className="social-icon-box w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white flex items-center justify-center p-2">
                        <img src={social.logo} alt={social.name} className="w-full h-full object-contain" />
                      </div>
                      <span className="text-black font-black text-sm md:text-base">
                        {social.name}
                      </span>
                    </motion.a>
                  )
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="info-card-brutalist rounded-2xl p-8"
            >
              <h3 className="text-xl font-black text-white mb-4 uppercase tracking-wide">
                📍 Ubicación
              </h3>
              <p className="text-black font-bold text-lg">
                Colombia 
              </p>

              <h3 className="text-xl font-black text-white mt-6 mb-4 uppercase tracking-wide">
                🕐 Disponibilidad
              </h3>
              <p className="text-black font-bold text-lg">
                Disponible
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Llamada a la acción final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 md:mt-16 text-center px-4"
        >
          <p className="text-xl sm:text-2xl text-gray-400 mb-3 md:mb-4">
            ¿Tienes un proyecto en mente?
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            ¡Trabajemos juntos! 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
}