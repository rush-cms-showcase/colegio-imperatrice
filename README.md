# Colégio Imperatrice - Rush CMS Showcase

Um projeto moderno e de alta performance desenvolvido com **Astro 5** e **React**, servindo como um caso de uso real (showcase) para o **Rush CMS**. Este projeto demonstra a capacidade do Rush CMS em gerenciar conteúdo dinâmico, menus e configurações de SEO para sites institucionais complexos.

## 🚀 Tecnologias

- **Framework**: [Astro v5](https://astro.build) (Server-side Rendering & Static Generation)
- **CMS**: [Rush CMS](https://rushcms.com) (Headless CMS)
- **UI Framework**: [React](https://react.dev)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Icons**: Lucide React & Unplugin Icons

## 🌟 Funcionalidades & Integração Rush CMS

Este projeto utiliza o Rush CMS como única fonte de verdade para o conteúdo. Principais integrações:

### 1. Gestão de Conteúdo Dinâmico
- **Eventos e Destaques**: Listagens paginadas (`/eventos`, `/destaques`) com imagens de capa, galerias e textos ricos.
- **Blog**: Sistema de notícias completo com renderização de **Rich Text** (Tiptap JSON) transformado em HTML estático para máxima performance e SEO.
- **Paginação**: Controle total de paginação (ex: 6 itens por página) configurado no front-end e alimentado pela API do Rush.

### 2. Estrutura de Dados (`rush.config.ts`)
O arquivo de configuração centraliza o mapeamento entre rotas e coleções do CMS:
- **Mapas de Rotas**: Associa URLs (`/blog`, `/eventos`) aos IDs de coleção no Rush.
- **Internacionalização**: Suporte configurado para `pt_BR`.
- **IDs Dinâmicos**: Utiliza variáveis de ambiente para IDs de menus, formulários e categorias.

### 3. Componentes Otimizados
- **Imagens**: Integração com `astro:assets` e imagens otimizadas vindas do CMS.
- **Formulários**: Formulário de contato integrado diretamente com a API do Rush CMS (`src/lib/client/forms.ts`).

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 18+
- PNPM (recomendado)

### Passo a passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/rush-cms-showcase/colegio-imperatrice.git
   cd colegio-imperatrice
   ```

2. **Instale as dependências**
   ```bash
   pnpm install
   ```

3. **Configuração de Ambiente**
   Crie um arquivo `.env` na raiz baseado no `.env.example` e preencha com suas credenciais do Rush CMS:
   ```env
   RUSH_BASE_URL=https://app.rushcms.com
   RUSH_API_TOKEN=seu_token_aqui
   RUSH_SITE_SLUG=colegio-imperatrice
   # IDs de Menus e Rotas (consulte o painel do Rush CMS)
   PUBLIC_RUSH_ROUTE_BLOG_ID=...
   PUBLIC_RUSH_NAV_MAIN_ID=...
   ```

4. **Inicie o servidor de desenvolvimento**
   ```bash
   pnpm dev
   ```
   Acesse `http://localhost:4321`

## 📁 Estrutura do Projeto

```text
src/
├── components/       # Componentes UI (React/Astro)
│   ├── home/         # Seções da Home (Hero, Events, etc.)
│   └── gallery/      # Galerias de imagens (Masonry)
├── layouts/          # Layouts base (Header, Footer)
├── lib/              # Cliente SDK do Rush CMS e utilitários
├── pages/            # Roteamento baseado em arquivos
│   ├── blog/         # Rotas dinâmicas de blog
│   ├── destaques/    # Rotas de destaques
│   └── eventos/      # Rotas de eventos
└── utils/            # Utilitários gerais (ex: rich-text.ts)
```

## 📄 Licença

Este projeto é um showcase proprietário. Todos os direitos de conteúdo e design reservados ao Colégio Imperatrice. Código fonte disponível para fins educacionais e de demonstração do Rush CMS.
