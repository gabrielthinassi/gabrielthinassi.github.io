import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:gabriel.m.thinassi@gmail.com",
      label: "Email",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/gabrielthinassi",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/gabrielthinassi",
      label: "GitHub",
    },
  ];

  const quickLinks = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Habilidades", href: "#skills" },
    { name: "Experiência", href: "#experience" },
    { name: "Educação", href: "#education" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold">Gabriel Thinassi</h3>
            <p className="text-gray-300 dark:text-gray-400 leading-relaxed">
              Tech Lead apaixonado por tecnologia e desenvolvimento de pessoas.
              Construindo o futuro através de código e liderança.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-2 text-gray-300 dark:text-gray-400">
              <p>gabriel.m.thinassi@gmail.com</p>
              <p>+55 (32) 99956-6663</p>
              <p>Ubá, MG - Brasil</p>
            </div>
            <div className="pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:gabriel.m.thinassi@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
              >
                <Mail size={16} />
                Vamos Conversar
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              © {currentYear} Gabriel Thinassi. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 dark:text-gray-500 text-sm flex items-center gap-1">
              Feito com <Heart size={16} className="text-red-500" /> usando
              React + TypeScript
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
