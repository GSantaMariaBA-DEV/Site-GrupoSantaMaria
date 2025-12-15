<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Grupo Santa Maria - Site Institucional

Este é o repositório para o site institucional do Grupo Santa Maria, uma aplicação web de página única (SPA) desenvolvida com React e Vite. A aplicação apresenta os projetos, conceito e informações de contato do Grupo Santa Maria.

## Documentação

- **[Documentação do Projeto](PROJECT_DOCUMENTATION.md):** Uma visão geral completa do projeto, incluindo seu propósito, tecnologias utilizadas e estrutura de componentes.
- **[Guia de Geração de Código para Agentes de IA](Agents/CODE_GENERATION.md):** Um guia para agentes de IA sobre como gerar e manter a base de código.

## Como Executar o Projeto Localmente

**Pré-requisitos:** [Node.js](https://nodejs.org/)

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/grupo-santa-maria.git
    cd grupo-santa-maria
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    - Crie um arquivo `.env` na raiz do projeto.
    - Adicione a seguinte variável de ambiente ao arquivo `.env`:
      ```
      GEMINI_API_KEY=SUA_CHAVE_DE_API_AQUI
      ```
    > **Nota:** Você pode obter uma chave de API do Gemini em [AI Studio](https://ai.studio/apps/drive/1-wLvYVU1FBOZtihvNalVkkc4rrdWIgzY).

4.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  Abra seu navegador e acesse `http://localhost:3000`.

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila a aplicação para produção.
- `npm run preview`: Inicia um servidor local para visualizar a build de produção.
