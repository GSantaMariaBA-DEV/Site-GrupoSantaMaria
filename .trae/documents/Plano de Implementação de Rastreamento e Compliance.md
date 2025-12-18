# Plano de Implementação de Rastreamento e Compliance

Este plano detalha as etapas para implementar o rastreamento de dados (Google Analytics 4, Meta Pixel), captura de localização (IP/Cidade) e gestão de consentimento de cookies (LGPD) no projeto React atual.

## 1. Análise do Projeto
O projeto é uma Landing Page em React (Vite) + TypeScript.
- **Estrutura:** Componentes modulares (`Hero`, `Contact`, `WhatsAppBtn`, etc.).
- **Estado Atual:** Sem scripts de rastreamento instalados.
- **Pontos de Conversão Identificados:**
    - Botão Flutuante do WhatsApp.
    - Formulário de Contato.
    - Botões de Ação na Hero Section ("Descobrir", "Agendar Visita").
    - Botão "Fale Conosco" no Menu.

## 2. Estratégia de Implementação

### 2.1. Gestão de Consentimento (Cookies)
Criaremos um componente `CookieConsent` que:
- Exibe um banner no rodapé informando sobre a coleta de dados.
- Oferece opções "Aceitar" e "Rejeitar".
- Salva a preferência no `localStorage`.
- Bloqueia o disparo dos scripts de rastreamento até que o usuário aceite.

### 2.2. Captura de Localização (IP e Cidade)
Criaremos um Hook personalizado `useGeoLocation`:
- Utilizará uma API pública (ex: `ipapi.co` ou similar) para buscar IP, Cidade e Estado.
- Os dados serão armazenados no navegador (SessionStorage) para serem enviados junto com os eventos de formulário ou rastreamento.

### 2.3. Rastreamento (Tracking)
Recomendamos a instalação via **Google Tag Manager (GTM)** ou injeção direta condicional. Para este projeto, faremos uma **injeção direta controlada pelo componente de Cookies** para garantir simplicidade e compliance.

**Mapeamento de IDs para Rastreamento:**
Adicionaremos IDs únicos aos elementos para facilitar o disparo de eventos:
- `btn-whatsapp-float`: Botão flutuante do WhatsApp.
- `btn-hero-discover`: Botão "Descobrir" na Hero.
- `btn-hero-schedule`: Botão "Agendar Visita" na Hero.
- `btn-nav-contact`: Botão "Fale Conosco" no Menu.
- `form-contact-submit`: Botão de envio do formulário.

## 3. Etapas de Execução

1.  **Documentação:**
    - Criar pasta `Plan/`.
    - Gerar arquivo `Plan/implementation_plan.md` com este conteúdo detalhado.

2.  **Preparação do Código (IDs):**
    - Editar `components/WhatsAppBtn.tsx`.
    - Editar `components/Hero.tsx`.
    - Editar `components/Navbar.tsx`.
    - Editar `components/Contact.tsx`.

3.  **Desenvolvimento de Funcionalidades:**
    - Criar `components/CookieConsent.tsx`.
    - Criar `hooks/useGeoLocation.ts`.

4.  **Integração Global:**
    - Atualizar `App.tsx` ou `index.html` para incluir o Banner de Cookies.
    - Configurar os scripts do GA4 e Meta Pixel para iniciarem apenas se `cookie_consent === 'accepted'`.

## 4. Validação
- Verificar se o Banner aparece.
- Verificar se os scripts **não** carregam antes do aceite.
- Verificar se o clique nos botões dispara os eventos (console log para teste).
