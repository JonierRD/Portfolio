import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Certificates() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Bloquear clic derecho y arrastrar sobre las imágenes de certificados (siempre)
  useEffect(() => {
    const prevent = (e) => e.preventDefault();
    const imgs = () => Array.from(document.querySelectorAll('.certificate-image'));

    const addListeners = () => imgs().forEach(i => {
      i.addEventListener('contextmenu', prevent);
      i.addEventListener('dragstart', prevent);
    });

    const removeListeners = () => imgs().forEach(i => {
      i.removeEventListener('contextmenu', prevent);
      i.removeEventListener('dragstart', prevent);
    });

    addListeners();
    return () => removeListeners();
  }, []);



  const certificates = [
    {
      title: "Bachiller Académico con Énfasis Ambiental",
      issuer: "Institución Educativa Jorge Eliécer Gaitán",
      date: "Diciembre 2023",
      description: "Título de Bachiller Académico otorgado por la Institución Educativa Jorge Eliécer Gaitán de Orito, Putumayo.",
      image: "/BachillerAcademico.webp"
    },
    {
      title: "Técnico en Monitoreo Ambiental",
      issuer: "SENA",
      date: "Diciembre 2023",
      description: "Certificado de técnico en Monitoreo Ambiental del Servicio Nacional de Aprendizaje - SENA.",
      image: "/MonitoreoAmbiental.webp"
    },
    {
      title: "Introducción a las Bases de Datos",
      issuer: "Meta - Coursera",
      date: "Mayo 2025",
      description: "Curso completado de Introducción a las bases de datos, autorizado por Meta y ofrecido a través de Coursera.",
      image: "/IntroduccionBD.webp"
    },
    {
      title: "Inglés Nivel A1",
      issuer: "Edutin Academy",
      date: "Noviembre 2025",
      description: "Certificado de inglés nivel A1 (180 horas de estudio) otorgado por Edutin Academy.",
      image: "/Inglescurso.webp"
    }
  ];

  return (
    <>
      <section id="certificates" className="py-16 md:py-24 px-4 md:px-6 relative" style={{ scrollMarginTop: '120px' }}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={isMobile ? {} : { opacity: 0, y: 20 }}
            whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
          >
            Certificados
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={isMobile ? {} : { opacity: 0, y: 50 }}
                whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={isMobile ? {} : { delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gray-900 md:bg-gradient-to-br md:from-gray-900 md:to-gray-800 border border-gray-700 rounded-2xl p-4 md:p-6 md:hover:border-cyan-500/50 transition-all duration-300"
            >
              {cert.issuer === 'Edutin Academy' ? (
                <div className="h-48 bg-gray-800 rounded-lg mb-3 md:mb-4 overflow-hidden relative">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-bottom certificate-image select-none"
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                  {/* Overlay para ocultar código/QR en la esquina inferior izquierda */}
                  <div className="absolute left-2 bottom-2 w-20 h-20 bg-gray-900 rounded-md shadow-lg" />
                </div>
              ) : (
                <div className="h-48 bg-gray-800 rounded-lg mb-3 md:mb-4 overflow-hidden relative">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover object-top certificate-image select-none"
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>
              )}
                
                <h3 className="text-xl font-bold text-white mb-2">
                  {cert.title}
                </h3>
                
                <p className="text-cyan-400 font-semibold mb-2">
                  {cert.issuer}
                </p>
                
                <p className="text-gray-500 text-sm mb-3">
                  {cert.date}
                </p>
                
                <p className="text-gray-400 text-sm">
                  {cert.description}
                </p>

                <p className="text-cyan-500 text-sm mt-4 font-semibold">
                  Vista parcial del certificado
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {/* modal removed: certificates now show partial previews without opening */}
    </>
  );
}
