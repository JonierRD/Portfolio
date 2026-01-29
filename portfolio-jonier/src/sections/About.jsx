import { motion } from "framer-motion";
import { useState } from "react";
import "./About.css";
import { projects } from "../data/projects";
import { skills } from "../data/skills";

export default function About() {
  const [showPlayer, setShowPlayer] = useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const containerVariants = {
    hidden: isMobile ? {} : { opacity: 0 },
    visible: isMobile ? {} : {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: isMobile ? {} : { opacity: 0, y: 20 },
    visible: isMobile ? {} : { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
        >
          Sobre mí
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 md:gap-8"
        >
          {/* Tarjeta principal */}
          <motion.div
            variants={itemVariants}
            className="gradient-card-wrapper"
          >
            <div className="gradient-card">
              <div className="gradient-card-inner">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-400">
                    <img src="/avatar.webp" alt="Jonier Rendon" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Jonier Rendon</h3>
                    <p className="text-cyan-400">Full Stack Developer</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Tengo 18 años y vivo en Colombia. Actualmente estudio Ingeniería en Sistemas en la 
                  Universidad Tecnológica del Putumayo (UTP). Me apasiona la tecnología y el desarrollo 
                  de aplicaciones web que sean funcionales y atractivas. Además de mis estudios, he trabajado 
                  como recepcionista, lo que me ha permitido desarrollar habilidades de atención al cliente, 
                  organización y trabajo en equipo. Disfruto aprender cosas nuevas, enfrentar retos, crear 
                  soluciones prácticas y también relajarme jugando videojuegos, lo que me inspira creatividad 
                  y estrategia. Me interesa seguir creciendo como desarrollador y contribuir a proyectos que 
                  marquen la diferencia.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Estadísticas */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 md:gap-4">
            {[
              { label: "Proyectos", value: `${projects.length}`, icon: "💻" },
              { label: "Tecnologías", value: `${skills.length}`, icon: "🚀" },
              { label: "En formación", value: "Experiencia", icon: "⏱️", shortLabel: "Experiencia" },
              { label: "Música Favorita", isMusic: true, shortLabel: "Música Favorita" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="gradient-card-wrapper"
              >
                <div 
                  className={`gradient-card ${stat.isMusic ? 'cursor-pointer hover:scale-105 transition-transform' : ''}`}
                  onClick={stat.isMusic ? () => setShowPlayer(true) : undefined}
                >
                  <div className="gradient-card-inner text-center">
                    {stat.icon && <div className="text-4xl mb-2">{stat.icon}</div>}
                    {stat.isMusic ? (
                      <div className="flex justify-center mb-1">
                        <img src="/reproducir.webp" alt="Play" className="w-16 h-16 object-contain brightness-0 invert" />
                      </div>
                    ) : (
                      <div className="text-1xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </div>
                    )}
                    <div className={stat.isMusic ? "text-1xl sm:text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent px-2" : "text-gray-400 text-sm"}>{stat.shortLabel || stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Intereses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 gradient-card-wrapper"
        >
          <div className="gradient-card">
            <div className="gradient-card-inner">
              <h3 className="text-2xl font-bold mb-6 text-white">Áreas de Interés</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Desarrollo Web",
                  "Interfaces 3D",
                  "Animaciones",
                  "Diseño UI/UX",
                  "Bases de datos",
                  "React",
                  "Tailwind CSS",
                  "JavaScript"
                ].map((interest, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-lg text-cyan-400 hover:bg-blue-600/30 transition cursor-default"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal Reproductor de Música */}
      {showPlayer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setShowPlayer(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative bg-gray-900 rounded-2xl p-4 max-w-2xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPlayer(false)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl transition z-10"
            >
              ×
            </button>
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/mYvEM-SKIYk?autoplay=1"
                title="Música Favorita"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
