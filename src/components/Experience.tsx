import { motion } from "framer-motion";
import { Calendar, MapPin, Building2 } from "lucide-react";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Tech Lead",
      company: "Energisa SA",
      location: "Ubá, MG",
      period: "2021 - Presente",
      type: "Tempo Integral",
      description:
        "Atuo como Tech Lead em uma equipe de 10 desenvolvedores na criação de soluções escaláveis. Responsável pela arquitetura técnica e mentoria da equipe, além de atuar também como desenvolvedor hands-on em projetos críticos.",
      achievements: [
        "Dezenas de projetos entregues com sucesso, incluindo sistemas de missão crítica do setor de energia, alguns destes com equipes internacionais",
        "Atuei como desenvolvedor hands-on em projetos críticos, garantindo a entrega de soluções de alta qualidade",
        "Liderei tecnicamente projetos de modernização tecnológica, migrando sistemas legados para arquiteturas modernas baseadas em microserviços",
        "Implantei práticas de DevOps e automação, reduzindo o tempo de deploy",
        "Mentorei diversos desenvolvedores júnior e pleno, apoiando seu crescimento técnico e profissional",
        "Atualização de Sistema legado Delphi XE8 para 12.3",
        "Migração do Sistema de mobilidade Xamarin para .NET MAUI",
      ],
      technologies: [
        "C#, .NET Core",
        "ReactJS",
        "NextJS",
        "TypeScript",
        "Docker",
        "Kubernetes",
        "OpenShift",
        "PostgreSQL",
        "Oracle",
        "SQLite",
        "Elastic Stack",
        "Confluence",
        "Sensedia",
        "Xamarin/Maui",
        "Delphi",
        "Power Designer",
        "AWS Cloud Services",
        "Azure Cloud Services",
        "Azure DevOps",
        "Android",
        "Android Studio",
        "Figma",
        "Git",
        "GraphQL",
      ],
    },
    {
      title: "Developer",
      company: "Tek-System",
      location: "Ubá, MG",
      period: "2011 - 2021",
      type: "Tempo Integral",
      description:
        "Iniciei na empresa ainda como suporte e passei por todas as áreas ao longo dos anos, adquirindo uma visão completa do negócio e das operações. Mais ao final atuando como desenvolvedor Delphi.",
      achievements: [
        "Manutenção e evolução de sistema ERP com módulos diversos (financeiro, vendas, faturamento, etc)",
        "Manipulação e evolução em banco de dados Firebird",
        "Manipulação de bibliotecas Integradoras de pagamento, emissão de notas fiscais eletrônicas e outros serviços",
        "Integração com sistemas de terceiros e APIs externas como ecommerce, sistemas de contabilidade, etc",
        "Migração e Implantação de sistemas ERPs completos em dezenas de clientes, desde pequenas empresas até grandes indústrias",
        "Entendimento e evolução de melhorias regulatórias e de mercado, como por exemplo NF-e, SPED, EFD, etc",
      ],
      technologies: ["Delphi", "Firebird"],
    },
    {
      title: "CEO & Full Stack Developer",
      company: "YZTech",
      location: "Ubá, MG",
      period: "2016 - Presente",
      type: "Tempo Integral",
      description:
        "Fundador e CEO de startup de tecnologia focada em soluções de automação. Responsável por liderar a visão estratégica, desenvolvimento de produtos e operações diárias da empresa.",
      achievements: [
        "Atuação em consultoria e desenvolvimento de soluções personalizadas para clientes diversos, desde pequenas empresas até grandes corporações",
        "Implementei sistema de autenticação e autorização robusto",
        "Desenvolvi e lancei plataforma de automação de marketing, resultando em aumento significativo de engajamento para os clientes",
        "Desenvolvi e lancei plataforma de automação de processos internos, aumentando a eficiência operacional dos clientes",
        "Desenvolvi e lancei plataforma de análise de custos, proporcionando insights valiosos para os clientes",
        "Criei dashboard de analytics em tempo real",
        "Estabeleci padrões de código e documentação",
        "Estabeleci práticas de DevOps e automação",
      ],
      technologies: [
        "ReactJS",
        "TypeScript",
        "Node.js",
        "NextJS",
        "AWS",
        "Azure",
        "Figma",
        "MySql",
        "PostgreSQL",
        ".NET Core",
        "C#",
        "Supabase",
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
