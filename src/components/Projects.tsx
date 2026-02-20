import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Star,
  GitFork,
  Clock,
  Loader2,
  AlertCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useGitHubRepos } from "../hooks/useGitHubRepos";

const Projects: React.FC = () => {
  const GITHUB_USERNAME = "gabrielthinassi";
  const INITIAL_DISPLAY_COUNT = 3;
  const { repos, loading, error, totalRepos } = useGitHubRepos(GITHUB_USERNAME);
  const [showAll, setShowAll] = useState(false);

  // Determinar quantos repos mostrar
  const displayedRepos = showAll
    ? repos
    : repos.slice(0, INITIAL_DISPLAY_COUNT);
  const hasMore = repos.length > INITIAL_DISPLAY_COUNT;

  // Função para formatar data relativa
  const getRelativeTime = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) return "Hoje";
    if (diffInDays === 1) return "Ontem";
    if (diffInDays < 7) return `${diffInDays} dias atrás`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} semanas atrás`;
    if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} meses atrás`;
    return `${Math.floor(diffInDays / 365)} anos atrás`;
  };

  // Cores para diferentes linguagens
  const getLanguageColor = (language: string | null): string => {
    const colors: Record<string, string> = {
      JavaScript: "#f1e05a",
      TypeScript: "#3178c6",
      Python: "#3572A5",
      Java: "#b07219",
      "C#": "#178600",
      PHP: "#4F5D95",
      Ruby: "#701516",
      Go: "#00ADD8",
      Rust: "#dea584",
      Swift: "#ffac45",
      Kotlin: "#A97BFF",
      Dart: "#00B4AB",
      HTML: "#e34c26",
      CSS: "#563d7c",
      Vue: "#41b883",
      Shell: "#89e051",
    };
    return colors[language || ""] || "#858585";
  };

  return (
    <section
      id="projects"
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
            Meus Projetos no GitHub
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Projetos e repositórios públicos do meu GitHub - {totalRepos}{" "}
            repositórios encontrados
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-blue-600 dark:text-blue-400 animate-spin mb-4" />
            <p className="text-gray-600 dark:text-gray-400">
              Carregando repositórios do GitHub...
            </p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 flex items-start gap-4"
          >
            <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-red-900 dark:text-red-300 mb-2">
                Erro ao carregar repositórios
              </h3>
              <p className="text-red-700 dark:text-red-400">{error}</p>
              <p className="text-red-600 dark:text-red-400 text-sm mt-2">
                Tente novamente mais tarde ou visite diretamente:{" "}
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-red-800"
                >
                  github.com/{GITHUB_USERNAME}
                </a>
              </p>
            </div>
          </motion.div>
        )}

        {/* Projects Grid */}
        {!loading && !error && repos.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedRepos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 flex flex-col"
                >
                  {/* Header com gradiente baseado na linguagem */}
                  <div
                    className="h-32 relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${getLanguageColor(
                        repo.language,
                      )}dd, ${getLanguageColor(repo.language)}55)`,
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Github className="w-16 h-16 text-white opacity-20" />
                    </div>
                    <div className="absolute bottom-3 left-4 right-4">
                      <h3 className="text-xl font-bold text-white truncate drop-shadow-lg">
                        {repo.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-grow min-h-[60px]">
                      {repo.description || "Sem descrição disponível"}
                    </p>

                    {/* Topics/Tags */}
                    {repo.topics && repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {repo.topics.slice(0, 5).map((topic) => (
                          <span
                            key={topic}
                            className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-xs font-medium"
                          >
                            #{topic}
                          </span>
                        ))}
                        {repo.topics.length > 5 && (
                          <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs">
                            +{repo.topics.length - 5}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400 pb-4 border-b border-gray-100 dark:border-gray-700">
                      {repo.language && (
                        <div className="flex items-center gap-1.5">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{
                              backgroundColor: getLanguageColor(repo.language),
                            }}
                          />
                          <span className="font-medium">{repo.language}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        <span>{repo.forks_count}</span>
                      </div>
                    </div>

                    {/* Updated date */}
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mb-4">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Atualizado {getRelativeTime(repo.updated_at)}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-auto">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                      >
                        <Github size={16} />
                        Ver Código
                      </motion.a>
                      {repo.homepage && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Botão Ver Mais / Ver Menos */}
            {hasMore && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-12 text-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowAll(!showAll)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 dark:hover:from-blue-600 dark:hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg"
                >
                  {showAll ? (
                    <>
                      <ChevronUp size={24} />
                      Ver Menos
                    </>
                  ) : (
                    <>
                      <ChevronDown size={24} />
                      Ver Todos os {totalRepos} Projetos
                    </>
                  )}
                </motion.button>
                {!showAll && (
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-3">
                    Mostrando {INITIAL_DISPLAY_COUNT} de {totalRepos} projetos
                  </p>
                )}
              </motion.div>
            )}
          </>
        )}

        {/* Empty State */}
        {!loading && !error && repos.length === 0 && (
          <div className="text-center py-20">
            <Github className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Nenhum repositório encontrado
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Visite o GitHub para ver todos os projetos
            </p>
          </div>
        )}

        {/* Call to Action */}
        {!loading && repos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Quer ver mais projetos e contribuições?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Visite meu perfil no GitHub para explorar todos os {totalRepos}{" "}
              repositórios, contribuições e atividades.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
            >
              <Github size={20} />
              github.com/{GITHUB_USERNAME}
            </motion.a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
