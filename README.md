# Portfolio Tech Lead

Um portfólio pessoal moderno e responsivo para Tech Lead, desenvolvido com React, TypeScript e Vite.

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool rápida e moderna
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **Lucide React** - Ícones modernos

## ✨ Funcionalidades

- **Design Responsivo** - Adaptável a todos os dispositivos
- **Animações Suaves** - Transições e efeitos visuais elegantes
- **Navegação Intuitiva** - Menu mobile com hambúrguer
- **Seções Completas**:
  - Hero com apresentação pessoal
  - Sobre mim com estatísticas profissionais
  - Habilidades e tecnologias
  - Experiência profissional
  - Educação e certificações
  - Projetos realizados
  - Formulário de contato
  - Footer com links sociais

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/gabrielthinassi/myprofile.git

# Navegue para o diretório
cd myprofile

# Instale as dependências
npm install
```

### Execução

```bash
# Modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx      # Cabeçalho com navegação
│   ├── Hero.tsx        # Seção principal
│   ├── About.tsx       # Sobre mim
│   ├── Skills.tsx      # Habilidades
│   ├── Experience.tsx  # Experiência profissional
│   ├── Education.tsx   # Educação e cursos
│   ├── Projects.tsx    # Projetos
│   ├── Contact.tsx     # Contato
│   └── Footer.tsx      # Rodapé
├── App.tsx             # Componente principal
├── main.tsx           # Ponto de entrada
└── index.css          # Estilos globais
```

## 🎨 Personalização

### Cores

As cores principais podem ser personalizadas no arquivo `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    // ... outras variações
  }
}
```

### Conteúdo

Para personalizar o conteúdo, edite os componentes na pasta `src/components/`:

- **Hero.tsx**: Nome, título, descrição e links sociais
- **About.tsx**: Descrição pessoal e estatísticas
- **Skills.tsx**: Tecnologias e níveis de proficiência
- **Experience.tsx**: Histórico profissional
- **Education.tsx**: Formação acadêmica e certificações
- **Projects.tsx**: Projetos realizados
- **Contact.tsx**: Informações de contato

## 📱 Responsividade

O portfólio é totalmente responsivo e se adapta a:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Deploy

### GitHub Pages (Configurado)

Este projeto está configurado para deploy automático no GitHub Pages usando GitHub Actions.

#### Configuração Inicial (apenas uma vez)

1. **Acesse as configurações do repositório no GitHub**:
   - Vá para `Settings` > `Pages`
   - Em "Source", selecione `GitHub Actions`

2. **Primeiro Deploy**:

```bash
# Faça commit das mudanças
git add .
git commit -m "feat: add GitHub Pages deployment"
git push origin main
```

O GitHub Actions irá automaticamente fazer o build e deploy do seu site em `https://gabrielthinassi.github.io`

#### Deploy Manual (alternativa)

Se preferir fazer deploy manualmente:

```bash
# Build e deploy
npm run deploy
```

### Vercel (Alternativa)

1. Conecte seu repositório GitHub à Vercel
2. Configure o build command: `npm run build`
3. Configure o output directory: `dist`
4. Deploy automático a cada push

### Netlify (Alternativa)

1. Conecte seu repositório GitHub ao Netlify
2. Configure o build command: `npm run build`
3. Configure o publish directory: `dist`
4. Deploy automático a cada push

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📞 Contato

- **Email**: gabriel.m.thinassi@gmail.com
- **LinkedIn**: [linkedin.com/in/gabrielthinassi](https://linkedin.com/in/gabrielthinassi)
- **GitHub**: [github.com/gabrielthinassi](https://github.com/gabrielthinassi)

---

Desenvolvido com ❤️ por Gabriel Thinassi
