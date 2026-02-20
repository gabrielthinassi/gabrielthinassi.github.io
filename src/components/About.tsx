import { motion } from "framer-motion";
import { Code, Users, Target, Award } from "lucide-react";

const About: React.FC = () => {
  const stats = [
    { icon: Code, label: "Projetos Concluídos", value: "30+" },
    { icon: Users, label: "Equipes Lideradas", value: "3+" },
    { icon: Target, label: "Anos de Experiência", value: "15+" },
    { icon: Award, label: "Certificações", value: "12+" },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre Mim
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Desenvolvedor apaixonado por tecnologia e liderança, com foco em
            criar soluções inovadoras e desenvolver equipes de alta performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Minha Jornada
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Comecei minha carreira por volta de 2007~8, lá quando meu irmão
                levou um livro de HTML para casa, quando tive meu primeiro
                contato com desenvolvimento web. Desde então, me apaixonei por
                criar coisas na internet e explorar as possibilidades da
                tecnologia. Com o tempo, meu interesse evoluiu para o
                desenvolvimento full-stack e, rapidamente me apaixonei pela
                arquitetura de software e liderança técnica. Hoje, como Tech
                Lead, combino minha paixão por código com a responsabilidade de
                desenvolver e guiar equipes.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Atualmente minha Stack principal é C# (.NET), em todas suas
                vertentes (Mobile, Web, Desktop), além de ter experiência sólida
                com JavaScript/TypeScript, React, Node.js e arquiteturas de
                microserviços. Tenho experiência sólida em cloud computing (AWS,
                Azure) e metodologias ágeis.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                Valores Profissionais
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Colaboração e trabalho em equipe
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Aprendizado contínuo e inovação
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Qualidade e boas práticas de desenvolvimento
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  Mentoria e desenvolvimento de pessoas
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
