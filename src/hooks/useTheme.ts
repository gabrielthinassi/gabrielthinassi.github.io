import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Verificar tema salvo no localStorage
    const savedTheme = localStorage.getItem("theme") as Theme | null;

    // Se não houver tema salvo, verificar preferência do sistema
    if (!savedTheme) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    return savedTheme;
  });

  useEffect(() => {
    const root = window.document.documentElement;

    // Remover classe anterior
    root.classList.remove("light", "dark");

    // Adicionar nova classe
    root.classList.add(theme);

    // Salvar no localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};
