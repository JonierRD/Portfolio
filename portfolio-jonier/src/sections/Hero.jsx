import { motion } from "framer-motion";
import ProfileCard from "../components/ProfileCard";
import Antigravity from "../components/Antigravity";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-start md:items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      
      {typeof window !== 'undefined' && window.innerWidth >= 768 && (
        <div className="absolute inset-0 opacity-60" style={{ pointerEvents: 'auto' }}>
          <Antigravity
            count={200}
            magnetRadius={6}
            ringRadius={7}
            waveSpeed={0.4}
            waveAmplitude={1}
            particleSize={1.5}
            lerpSpeed={0.05}
            color="#5227FF"
            autoAnimate
            particleVariance={1}
            rotationSpeed={0}
            depthFactor={1}
            pulseSpeed={3}
            particleShape="capsule"
            fieldStrength={10}
          />
        </div>
      )}

      <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto px-4 md:px-6 pt-32 md:pt-0" style={{ pointerEvents: 'none' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left order-2 md:order-1"
          style={{ pointerEvents: 'auto' }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 md:mb-6"
          >
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Jonier Esneider
            </span>
            <br />
            <span className="text-white">Rendon Chamorro</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-8 max-w-lg mx-auto md:mx-0"
          >
            Estudiante de Ingeniería en Sistemas  -
            <br /> Formándome como Desarrollador Junior. 
            <br />
            Tengo conocimientos en front-end y back-end, manejo de bases de datos y desarrollo de proyectos web, siempre buscando ampliar mis habilidades y crear soluciones funcionales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition font-semibold text-sm sm:text-base text-center"
            >
              Ver proyectos
            </motion.a>

            <motion.a
              href="https://github.com/JonierRD"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition font-semibold text-sm sm:text-base text-center"
            >
              GitHub
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          style={{ pointerEvents: 'auto' }}
          className="flex justify-center items-center order-1 md:order-2"
        >
          {/* Versión móvil: imagen estática */}
          <div className="block md:hidden">
            <div className="relative w-64 h-80 rounded-2xl overflow-hidden border-4 border-cyan-400 shadow-2xl">
              <img 
                src="/avatar.webp" 
                alt="Jonier Rendon"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4">
                <h3 className="text-white font-bold text-xl mb-1">Jonier Rendon</h3>
                <p className="text-cyan-400 text-sm mb-2">Desarrollador Junior</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-500 text-xs">Disponible</span>
                </div>
              </div>
            </div>
          </div>

          {/* Versión desktop: ProfileCard 3D */}
          <div className="hidden md:block">
            <ProfileCard
              name="Jonier Rendon"
              title="Desarrollador Junior"
              handle="Jonier117"
              status="Disponible"
              contactText="Contacto"
              avatarUrl="/avatar.webp"
              miniAvatarUrl="/avatar.webp"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => window.location.href = '#contact'}
              behindGlowColor="rgba(125, 190, 255, 0.67)"
              innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-cyan-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
