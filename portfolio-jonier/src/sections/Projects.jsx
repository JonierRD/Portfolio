import { motion } from "framer-motion";
import { useState } from "react";
import CardSwap, { Card } from '../components/CardSwap';
import { projects } from '../data/projects';

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="pt-20 md:pt-32 pb-8 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-52 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent relative z-10"
        >
          Proyectos Destacados
        </motion.h2>

        {/* Versión móvil: Carrusel simple */}
        <div className="block md:hidden">
          <div className="relative">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 border border-gray-700 rounded-2xl p-4 min-h-[500px] flex flex-col"
            >
              {projects[currentProject].image && (
                <div className="relative h-48 overflow-hidden rounded-xl mb-4">
                  <img 
                    src={projects[currentProject].image} 
                    alt={`Proyecto ${projects[currentProject].title}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-2 mb-4">
                <img 
                  src={projects[currentProject].logo} 
                  alt={`Logo ${projects[currentProject].title}`}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {projects[currentProject].title}
              </h3>

              <p className="text-sm text-gray-300 mb-4 flex-grow">
                {projects[currentProject].description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {projects[currentProject].tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-blue-600/20 border border-blue-500/30 rounded-lg text-cyan-400 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href={projects[currentProject].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`py-2 rounded-xl bg-gradient-to-r ${projects[currentProject].gradient} text-white font-semibold text-center text-sm`}
                >
                  Ver proyecto
                </a>
                <a
                  href={projects[currentProject].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 rounded-xl border-2 border-cyan-500 text-cyan-400 font-semibold text-center text-sm"
                >
                  GitHub
                </a>
              </div>
            </motion.div>

            {/* Controles del carrusel */}
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={prevProject}
                className="p-3 rounded-full bg-cyan-500/20 border border-cyan-500 text-cyan-400 transition"
                aria-label="Proyecto anterior"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-2 h-2 rounded-full transition ${
                      index === currentProject ? 'bg-cyan-400 w-6' : 'bg-gray-600'
                    }`}
                    aria-label={`Ir a proyecto ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextProject}
                className="p-3 rounded-full bg-cyan-500/20 border border-cyan-500 text-cyan-400 transition"
                aria-label="Proyecto siguiente"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Versión desktop: CardSwap 3D */}
        <div className="hidden md:flex h-[600px] relative items-center justify-center">
          <CardSwap
            width={typeof window !== 'undefined' && window.innerWidth < 768 ? 480 : 750}
            height={400}
            cardDistance={typeof window !== 'undefined' && window.innerWidth < 768 ? 45 : 60}
            verticalDistance={typeof window !== 'undefined' && window.innerWidth < 768 ? 55 : 70}
            delay={999999999}
            pauseOnHover={false}
            skewAmount={2}
            onCardClick={(index) => {}}
          >
            {projects.map((project, index) => (
              <Card key={index}>
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-4 sm:p-6 md:p-8 h-full flex flex-col overflow-hidden">
                  {project.image && (
                    <div className="absolute inset-0 overflow-hidden rounded-2xl">
                      <img 
                        src={project.image} 
                        alt={`Proyecto ${project.title}`}
                        loading="lazy"
                        className="w-full h-full object-cover opacity-20"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
                    </div>
                  )}

                  <div className="relative z-10 flex flex-col h-full">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-white flex items-center justify-center p-2 mb-4 md:mb-6 overflow-hidden`}>
                      <img 
                        src={project.logo} 
                        alt={`Logo ${project.title}`}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 md:mb-3">
                      {project.title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-300 mb-4 md:mb-6 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 md:px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-lg text-cyan-400 text-xs sm:text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 py-2 md:py-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white font-semibold text-center hover:shadow-lg transition text-sm sm:text-base`}
                      >
                        Ver proyecto
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 md:px-6 py-2 md:py-3 rounded-xl border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition font-semibold text-center text-sm sm:text-base"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  );
}
