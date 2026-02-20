import { motion } from "framer-motion";
import { Calendar, MapPin, Building2 } from "lucide-react";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Tech Lead",
      company: "TechCorp Solutions",
      location: "São Paulo, SP",
      period: "2022 - Presente",
      type: "Tempo Integral",
      description:
        "Lidero uma equipe de 8 desenvolvedores na criação de soluções escaláveis para e-commerce. Responsável pela arquitetura técnica e mentoria da equipe.",
      achievements: [
        "Reduzi o tempo de deploy em 60% implementando CI/CD",
        "Mentorei 5 desenvolvedores júnior que foram promovidos",
        "Implementei arquitetura de microserviços que suporta 1M+ usuários",
        "Introduzi práticas de code review que reduziram bugs em 40%",
      ],
      technologies: [
        "React",
        "Node.js",
        "AWS",
        "Docker",
        "Kubernetes",
        "PostgreSQL",
      ],
    },
    {
      title: "Senior Full Stack Developer",
      company: "InnovaTech",
      location: "Rio de Janeiro, RJ",
      period: "2020 - 2022",
      type: "Tempo Integral",
      description:
        "Desenvolvi aplicações web complexas e APIs robustas. Participei ativamente do processo de recrutamento e onboarding de novos desenvolvedores.",
      achievements: [
        "Desenvolvi sistema de pagamentos que processa R$ 50M+ mensais",
        "Criei biblioteca interna de componentes reutilizáveis",
        "Implementei testes automatizados aumentando cobertura para 90%",
        "Otimizei performance reduzindo tempo de carregamento em 50%",
      ],
      technologies: [
        "Vue.js",
        "Python",
        "Django",
        "MongoDB",
        "Redis",
        "Docker",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "São Paulo, SP",
      period: "2018 - 2020",
      type: "Tempo Integral",
      description:
        "Primeiro desenvolvedor da empresa, responsável por construir a plataforma do zero. Trabalhei diretamente com o CEO e CTO na definição da arquitetura.",
      achievements: [
        "Construí MVP em 3 meses que atraiu R$ 2M em investimento",
        "Implementei sistema de autenticação e autorização robusto",
        "Criou dashboard de analytics em tempo real",
        "Estabeleceu padrões de código e documentação",
      ],
      technologies: [
        "React",
        "Express.js",
        "PostgreSQL",
        "AWS",
        "Jest",
        "Figma",
      ],
    },
  ];

  return (
    <section
      id="experience"
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
            Experiência Profissional
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Jornada de crescimento constante, sempre buscando novos desafios e
            oportunidades de liderança.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Basic Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold">
                    <Building2 size={20} />
                    {exp.company}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin size={16} />
                      {exp.location}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {exp.type}
                    </div>
                  </div>
                </div>

                {/* Right Column - Description and Details */}
                <div className="lg:col-span-2 space-y-6">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Principais Conquistas:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                        >
                          <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Tecnologias Utilizadas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
