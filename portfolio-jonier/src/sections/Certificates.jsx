import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    if (selectedCertificate) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCertificate]);

  const handleDownload = (certificate) => {
    const link = document.createElement('a');
    link.href = certificate.image;
    link.download = `${certificate.title.replace(/\s+/g, '_')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
                onClick={() => setSelectedCertificate(cert)}
              className="bg-gray-900 md:bg-gradient-to-br md:from-gray-900 md:to-gray-800 border border-gray-700 rounded-2xl p-4 md:p-6 md:hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-video bg-gray-800 rounded-lg mb-3 md:mb-4 overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
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
                  Clic para ver el certificado completo
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full bg-gray-900 rounded-2xl overflow-hidden border-4 border-cyan-500 cursor-default"
            >
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white font-bold text-xl transition shadow-lg"
              >
                ×
              </button>

              <button
                onClick={() => handleDownload(selectedCertificate)}
                className="absolute top-4 right-16 z-10 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg flex items-center gap-2 text-white font-semibold transition shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Descargar
              </button>
              
              <div className="overflow-auto max-h-[90vh] p-4">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="w-full h-auto"
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 pointer-events-none">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedCertificate.title}
                </h3>
                <p className="text-cyan-400 font-semibold">
                  {selectedCertificate.issuer} - {selectedCertificate.date}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
