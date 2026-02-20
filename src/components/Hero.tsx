import { motion } from "framer-motion";
import { Download, Mail, Linkedin, Github } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Olá, eu sou{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  Gabriel Thinassi
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-semibold">
                Tech Lead & Desenvolvedor Full Stack
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                Lidero equipes de desenvolvimento e construo soluções escaláveis
                usando as mais modernas tecnologias. Apaixonado por arquitetura
                de software e desenvolvimento de pessoas.
              </p>
            </div>
            {/* 
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
              >
                <Download size={20} />
                Baixar CV
              </motion.button>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors text-center"
              >
                Ver Projetos
              </motion.a>
            </div> */}

            {/* Social Links */}
            <div className="flex space-x-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="mailto:gabriel.m.thinassi@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://linkedin.com/in/gabrielthinassi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/gabrielthinassi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github size={24} />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-600 dark:from-blue-500 dark:to-indigo-700 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                <div className="w-72 h-72 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/profile.jpg"
                    alt="Gabriel Thinassi"
                    className="w-64 h-64 object-cover rounded-full"
                  />
                </div>
              </div>
              {/* Floating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold"
              >
                💻
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-white font-bold"
              >
                ⚡
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
