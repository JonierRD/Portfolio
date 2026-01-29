import { motion } from "framer-motion";
import CircularGallery from "../components/CircularGallery";
import { skills } from "../data/skills";
import { useLazyLoad } from "../hooks/useLazyLoad";

export default function Skills() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const [containerRef, isVisible] = useLazyLoad({ threshold: 0.1 });

  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-6 relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={isMobile ? {} : { opacity: 0, y: 20 }}
          whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
        >
          Habilidades Técnicas
        </motion.h2>

        {/* Versión móvil: Grid simple */}
        <div className="block md:hidden">
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-700 rounded-xl p-4 flex flex-col items-center justify-center gap-3 transition"
              >
                <img 
                  src={skill.image} 
                  alt={skill.text}
                  className="w-16 h-16 object-contain"
                  loading="lazy"
                />
                <span className="text-white text-sm font-semibold text-center">{skill.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Versión desktop: CircularGallery 3D */}
        <div className="hidden md:block" style={{ height: '500px', position: 'relative', marginTop: '-50px' }}>
          {isVisible && (
            <CircularGallery
              items={skills}
              bend={1}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollSpeed={2}
              scrollEase={0.05}
            />
          )}
        </div>

        <motion.p
          initial={isMobile ? {} : { opacity: 0 }}
          whileInView={isMobile ? {} : { opacity: 1 }}
          viewport={{ once: true }}
          transition={isMobile ? {} : { delay: 0.8 }}
          className="text-center text-gray-400 mt-8 md:mt-12 text-base md:text-lg px-4"
        >
          Siempre aprendiendo nuevas tecnologías y mejorando mis habilidades 🚀
        </motion.p>
      </div>
    </section>
  );
}