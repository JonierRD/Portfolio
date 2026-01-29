import { motion } from "framer-motion";
import Stepper, { Step } from "../components/Stepper";

export default function Education() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const educationData = [
    {
      image: "/JEGA.webp",
      alt: "Institución Educativa Jorge Eliécer Gaitán",
      title: "Bachiller Académico",
      institution: "Institución Educativa Jorge Eliécer Gaitán",
      period: "2019 - 2024",
      description: "Formación académica integral con énfasis en ciencias y tecnología."
    },
    {
      image: "/SENA.webp",
      alt: "SENA",
      title: "Técnico en Monitoreo Ambiental",
      institution: "Servicio Nacional de Aprendizaje - SENA",
      period: "2021 - 2023",
      description: "Técnico en Monitoreo Ambiental, desarrollando competencias en seguimiento y evaluación de parámetros ambientales."
    },
    {
      image: "/UTP.webp",
      alt: "Universidad Tecnológica del Putumayo",
      title: "Ingeniería en Sistemas",
      institution: "Universidad Tecnológica del Putumayo",
      period: "2025 - Presente",
      description: "Cursando Ingeniería en Sistemas, enfocándome en desarrollo web, bases de datos y programación."
    }
  ];

  return (
    <section id="education" className="pt-16 md:pt-24 pb-16 md:pb-24 px-4 md:px-6 relative" style={{ scrollMarginTop: '120px' }}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={isMobile ? {} : { opacity: 0, y: 20 }}
          whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
        >
          Educación
        </motion.h2>

        {/* Versión móvil: Lista simple */}
        {isMobile ? (
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-2xl p-4 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-white p-2">
                    <img 
                      src={edu.image} 
                      alt={edu.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white mb-1">{edu.title}</h3>
                    <p className="text-sm text-cyan-400">{edu.period}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-300 mb-1">{edu.institution}</p>
                  <p className="text-sm text-gray-400">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Versión desktop: Stepper original */
          <Stepper
            initialStep={1}
            onStepChange={() => {}}
            onFinalStepCompleted={() => {}}
          >
          <Step>
            <div className="education-step-content">
              <div className="education-image-container">
                <img 
                  src="/JEGA.webp" 
                  alt="Institución Educativa Jorge Eliécer Gaitán"
                />
              </div>
              <div className="education-info">
                <h2>Educación Básica y Media</h2>
                <p className="institution">Institución Educativa Jorge Eliécer Gaitán</p>
                <p className="period">2011 - Diciembre 2023 | Orito, Putumayo</p>
                <p className="description">
                  Educación integral desde primaria hasta bachillerato con énfasis ambiental. 
                  Formación enfocada en la conservación del medio ambiente, desarrollo de proyectos 
                  ecológicos y conciencia ambiental. Graduado el 1 de diciembre de 2023.
                </p>
              </div>
            </div>
          </Step>

          <Step>
            <div className="education-step-content">
              <div className="education-image-container">
                <img 
                  src="/SENA.webp" 
                  alt="SENA"
                />
              </div>
              <div className="education-info">
                <h2>Técnico en Monitoreo Ambiental</h2>
                <p className="institution">SENA - Servicio Nacional de Aprendizaje</p>
                <p className="period">2021 - Diciembre 2023 | Orito, Putumayo</p>
                <p className="description">
                  Formación técnica especializada en monitoreo y control ambiental. 
                  Aprendizaje de técnicas de medición de calidad del aire, agua y suelo. 
                  Manejo de equipos de monitoreo y análisis de datos ambientales. 
                  Graduado el 1 de diciembre de 2023.
                </p>
              </div>
            </div>
          </Step>

          <Step>
            <div className="education-step-content">
              <div className="education-image-container">
                <img 
                  src="/UTP.webp" 
                  alt="Universidad Tecnológica del Putumayo"
                />
              </div>
              <div className="education-info">
                <h2>Tecnología en Desarrollo de Software</h2>
                <p className="institution">UTP - Universidad Tecnológica del Putumayo</p>
                <p className="period">2024 - Presente | Putumayo, Colombia</p>
                <p className="description">
                  Formación profesional en desarrollo de software con enfoque en análisis, diseño, 
                  codificación y pruebas de aplicaciones. Especialización en bases de datos, redes 
                  de comunicaciones y soporte TI. Desarrollo de competencias en trabajo en equipo, 
                  resolución de problemas complejos, pensamiento crítico y sostenibilidad ambiental 
                  desde el ejercicio profesional.
                </p>
              </div>
            </div>
          </Step>
        </Stepper>
        )}
      </div>
    </section>
  );
}