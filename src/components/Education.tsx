import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";

const Education: React.FC = () => {
  const education = [
    {
      type: "Formação Acadêmica",
      items: [
        {
          title: "Pós-graduação em Arquitetura de Software",
          institution: "Universidade de São Paulo (USP)",
          period: "2021 - 2022",
          status: "Concluído",
          description:
            "Especialização em arquiteturas escaláveis, microserviços e padrões de design avançados.",
        },
        {
          title: "Bacharelado em Ciência da Computação",
          institution: "Instituto Tecnológico de São Paulo",
          period: "2016 - 2019",
          status: "Concluído",
          description:
            "Formação sólida em fundamentos da computação, algoritmos e estruturas de dados.",
        },
      ],
    },
    {
      type: "Certificações Profissionais",
      items: [
        {
          title: "AWS Solutions Architect Professional",
          institution: "Amazon Web Services",
          period: "2023",
          status: "Ativo",
          description:
            "Certificação avançada em arquitetura de soluções na nuvem AWS.",
        },
        {
          title: "Certified Scrum Master (CSM)",
          institution: "Scrum Alliance",
          period: "2022",
          status: "Ativo",
          description:
            "Certificação em metodologias ágeis e liderança de equipes Scrum.",
        },
        {
          title: "Google Cloud Professional Developer",
          institution: "Google Cloud",
          period: "2021",
          status: "Ativo",
          description:
            "Desenvolvimento de aplicações escaláveis na plataforma Google Cloud.",
        },
      ],
    },
    {
      type: "Cursos e Especializações",
      items: [
        {
          title: "Advanced React Patterns",
          institution: "Frontend Masters",
          period: "2023",
          status: "Concluído",
          description:
            "Padrões avançados de React, performance optimization e arquitetura de componentes.",
        },
        {
          title: "System Design Interview",
          institution: "Educative",
          period: "2022",
          status: "Concluído",
          description:
            "Design de sistemas distribuídos e arquiteturas de alta escala.",
        },
        {
          title: "Leadership in Tech",
          institution: "Pluralsight",
          period: "2022",
          status: "Concluído",
          description:
            "Liderança técnica, gestão de equipes e desenvolvimento de pessoas.",
        },
        {
          title: "Machine Learning Fundamentals",
          institution: "Coursera - Stanford",
          period: "2021",
          status: "Concluído",
          description:
            "Fundamentos de machine learning e aplicações práticas em Python.",
        },
      ],
    },
  ];

  return (
    <section
      id="education"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
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
            Educação & Certificações
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Investimento contínuo em aprendizado e desenvolvimento profissional
            para me manter atualizado com as melhores práticas.
          </p>
        </motion.div>

        <div className="space-y-16">
          {education.map((section, sectionIndex) => (
            <motion.div
              key={section.type}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: sectionIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-8">
                {section.type === "Formação Acadêmica" && (
                  <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                )}
                {section.type === "Certificações Profissionais" && (
                  <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                )}
                {section.type === "Cursos e Especializações" && (
                  <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                )}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {section.type}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-4 border-blue-200 dark:border-blue-700 pl-6 py-4 hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
                  >
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h4>
                      <div className="text-blue-600 dark:text-blue-400 font-medium">
                        {item.institution}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {item.period}
                        </div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            item.status === "Concluído" ||
                            item.status === "Ativo"
                              ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                              : "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Learning */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Aprendizado Contínuo
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                50+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Cursos Online
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                6000+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Horas de Estudo
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                15+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Conferências
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                17+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Anos Estudando
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
