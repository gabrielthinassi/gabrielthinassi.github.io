import { useState, useEffect } from "react";

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string;
  size: number;
  fork: boolean;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: {
    key: string;
    name: string;
  } | null;
}

interface UseGitHubReposReturn {
  repos: GitHubRepo[];
  loading: boolean;
  error: string | null;
  totalRepos: number;
}

const CACHE_KEY = "github_repos_cache";
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

interface CacheData {
  repos: GitHubRepo[];
  timestamp: number;
}

export const useGitHubRepos = (username: string): UseGitHubReposReturn => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [totalRepos, setTotalRepos] = useState<number>(0);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        setError(null);

        // Verificar cache
        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
          const parsed: CacheData = JSON.parse(cachedData);
          const now = Date.now();

          // Se o cache ainda é válido, usar dados do cache
          if (now - parsed.timestamp < CACHE_DURATION) {
            setRepos(parsed.repos);
            setTotalRepos(parsed.repos.length);
            setLoading(false);
            return;
          }
        }

        // Buscar todos os repositórios (paginação)
        let allRepos: GitHubRepo[] = [];
        let page = 1;
        let hasMore = true;

        while (hasMore) {
          const response = await fetch(
            `https://api.github.com/users/${username}/repos?per_page=100&page=${page}&sort=updated&type=owner`,
            {
              headers: {
                Accept: "application/vnd.github.v3+json",
              },
            }
          );

          if (!response.ok) {
            if (response.status === 404) {
              throw new Error("Usuário não encontrado no GitHub");
            } else if (response.status === 403) {
              throw new Error(
                "Limite de requisições atingido. Tente novamente em alguns minutos."
              );
            }
            throw new Error(`Erro ao buscar repositórios: ${response.status}`);
          }

          const data: GitHubRepo[] = await response.json();

          if (data.length === 0) {
            hasMore = false;
          } else {
            allRepos = [...allRepos, ...data];
            page++;

            // Se retornou menos que 100, não há mais páginas
            if (data.length < 100) {
              hasMore = false;
            }
          }
        }

        // Filtrar repositórios arquivados e forks (opcional)
        const filteredRepos = allRepos.filter(
          (repo) => !repo.archived && !repo.fork
        );

        // Ordenar por data de atualização (mais recentes primeiro)
        const sortedRepos = filteredRepos.sort(
          (a, b) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );

        setRepos(sortedRepos);
        setTotalRepos(sortedRepos.length);

        // Salvar no cache
        const cacheData: CacheData = {
          repos: sortedRepos,
          timestamp: Date.now(),
        };
        localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Erro desconhecido ao buscar repositórios"
        );
        console.error("Erro ao buscar repositórios do GitHub:", err);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchRepos();
    }
  }, [username]);

  return { repos, loading, error, totalRepos };
};
