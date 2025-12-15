# Documentação do Projeto

## Visão Geral

Este projeto é uma aplicação web de página única (SPA) desenvolvida com React e Vite. O objetivo principal da aplicação é servir como um site institucional para o Grupo Santa Maria, apresentando seus projetos, conceito e informações de contato.

## Tecnologias Utilizadas

- **React:** Uma biblioteca JavaScript para construir interfaces de usuário.
- **Vite:** Um build tool que visa fornecer uma experiência de desenvolvimento mais rápida e enxuta para projetos web modernos.
- **TypeScript:** Um superset do JavaScript que adiciona tipagem estática opcional.
- **Lucide-React:** Uma biblioteca de ícones SVG.

## Estrutura do Projeto

O projeto segue uma estrutura de diretórios padrão para aplicações React:

- **`public/`**: Contém os arquivos estáticos que são servidos diretamente pelo servidor.
- **`src/`**: Contém o código-fonte da aplicação.
  - **`components/`**: Contém os componentes React reutilizáveis.
    - **`ui/`**: Contém componentes de UI genéricos, como botões.
    - **`About.tsx`**: Seção "Sobre" da aplicação.
    - **`Contact.tsx`**: Seção de contato.
    - **`FAQ.tsx`**: Seção de perguntas frequentes.
    - **`Hero.tsx`**: A seção principal (hero) da página inicial.
    - **`Navbar.tsx`**: A barra de navegação.
    - **`Projects.tsx`**: Seção de projetos.
    - **`Region.tsx`**: Seção sobre a região.
    - **`WhatsAppBtn.tsx`**: Botão flutuante do WhatsApp.
  - **`App.tsx`**: O componente principal que reúne todos os outros componentes.
  - **`index.tsx`**: O ponto de entrada da aplicação.

## Como Executar o Projeto Localmente

1. **Instale as dependências:**
   ```bash
   npm install
   ```
2. **Configure as variáveis de ambiente:**
   - Crie um arquivo `.env` na raiz do projeto.
   - Adicione a seguinte variável de ambiente ao arquivo `.env`:
     ```
     GEMINI_API_KEY=SUA_CHAVE_DE_API_AQUI
     ```
3. **Execute o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
4. **Abra o navegador em `http://localhost:3000`**

## Scripts Disponíveis

- **`npm run dev`**: Inicia o servidor de desenvolvimento.
- **`npm run build`**: Compila a aplicação para produção.
- **`npm run preview`**: Inicia um servidor local para visualizar a build de produção.
