import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import GooeyNav from "./GooeyNav";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "#hero" },
    { label: "Sobre mí", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Proyectos", href: "#projects" },
    { label: "Educación", href: "#education" },
    { label: "Certificados", href: "#certificates" },
    { label: "Contacto", href: "#contact" }
  ];

  useEffect(() => {
    const sections = navItems.map(item => 
      document.querySelector(item.href)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.findIndex(section => section === entry.target);
            if (index !== -1) {
              setActiveSection(index);
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-80px 0px -40% 0px'
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-[60] bg-black md:bg-black/80 md:backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-3 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            JR
          </motion.div>

          <div className="hidden md:flex">
            <GooeyNav
              items={navItems}
              particleCount={10}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={activeSection}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
              autoAnimate={true}
            />
          </div>

          <div className="flex items-center gap-3">
            <motion.a
              href="https://github.com/JonierRD"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:block px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium text-sm"
            >
              GitHub
            </motion.a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    setTimeout(() => {
                      const element = document.querySelector(item.href);
                      if (element) {
                        const navbarHeight = 100;
                        const offsetPosition = element.offsetTop - navbarHeight;
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                      }
                    }, 400);
                  }}
                  className={`block px-4 py-3 rounded-lg transition ${
                    activeSection === index
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                      : "text-gray-300 hover:bg-gray-800"
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="https://github.com/JonierRD"
                target="_blank"
                rel="noopener noreferrer"
                className="block sm:hidden px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center font-medium"
                whileTap={{ scale: 0.95 }}
              >
                GitHub
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}