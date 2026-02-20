import { motion } from "framer-motion";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "Vue.js", level: 70 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 90 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: ".Net", level: 95 },
        { name: "Node.js", level: 90 },
        { name: "Python", level: 70 },
        { name: "Java", level: 50 },
      ],
    },
    {
      title: "Outros Frameworks & Ferramentas",
      skills: [
        { name: "Delphi", level: 95 },
        { name: "Android", level: 80 },
        { name: "Xamarin/Maui", level: 95 },
        { name: "LowCode/NoCode", level: 90 },
      ],
    },
    {
      title: "Banco de Dados",
      skills: [
        { name: "Oracle", level: 95 },
        { name: "MySQL/PostgreSQL", level: 90 },
        { name: "SQLite/MongoDB", level: 95 },
        { name: "Firebird", level: 90 },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS/Azure", level: 90 },
        { name: "Docker/Kubernetes", level: 95 },
        { name: "CI/CD", level: 95 },
        { name: "Monitoring", level: 90 },
      ],
    },
    {
      title: "Liderança & Metodologias",
      skills: [
        { name: "Arquitetura de Software", level: 95 },
        { name: "Mentoria/Comunicação", level: 95 },
        { name: "Scrum/Agile", level: 90 },
        { name: "Gestão de Projetos", level: 90 },
      ],
    },
  ];

  return (
    <section
      id="skills"
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
            Habilidades & Tecnologias
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Domínio em diversas tecnologias e metodologias, com foco em
            desenvolvimento full-stack e liderança técnica.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-gray-700 rounded-lg p-8 shadow-sm"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Outras Competências
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Git",
              "Jest",
              "Cypress",
              "GraphQL",
              "REST APIs",
              "Microservices",
              "Design Patterns",
              "SOLID Principles",
              "Clean Code",
              "TDD",
              "Figma",
              "Jira",
              "Confluence",
              "Slack",
              "VS Code",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
