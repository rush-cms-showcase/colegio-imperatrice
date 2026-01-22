# Colégio Imperatrice - Rush CMS Showcase

A high-performance, modern project built with **Astro 5** and **React**, serving as a real-world **Rush CMS** showcase. This project demonstrates Rush CMS's capabilities in managing dynamic content, menus, and SEO configurations for complex institutional websites.

## 🚀 Technologies

- **Framework**: [Astro v5](https://astro.build) (Server-side Rendering & Static Generation)
- **CMS**: [Rush CMS](https://rushcms.com) (Headless CMS)
- **UI Framework**: [React](https://react.dev)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Icons**: Lucide React & Unplugin Icons

## 🌟 Features & Rush CMS Integration

This project uses Rush CMS as the single source of truth for content. Key integrations include:

### 1. Dynamic Content Management
- **Events and Highlights**: Paginated listings (`/eventos`, `/destaques`) with cover images, galleries, and rich text.
- **Blog**: Full-featured news system with **Rich Text** rendering (Tiptap JSON) transformed into static HTML for maximum performance and SEO.
- **Pagination**: Full pagination control (e.g., 6 items per page) configured on the front-end and powered by the Rush API.

### 2. Data Structure (`rush.config.ts`)
The configuration file centralizes the mapping between routes and CMS collections:
- **Route Maps**: Associates URLs (`/blog`, `/eventos`) with Rush collection IDs.
- **Internationalization**: Support configured for `pt_BR`.
- **Dynamic IDs**: Uses environment variables for menu, form, and category IDs.

### 3. Optimized Components
- **Images**: Integration with `astro:assets` and optimized images served from the CMS.
- **Forms**: Contact form integrated directly with the Rush CMS API (`src/lib/client/forms.ts`).

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+
- PNPM (recommended)

### Step-by-step

1. **Clone the repository**
   ```bash
   git clone https://github.com/rush-cms-showcase/colegio-imperatrice.git
   cd colegio-imperatrice
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory based on `.env.example` and fill in your Rush CMS credentials:
   ```env
   RUSH_BASE_URL=https://app.rushcms.com
   RUSH_API_TOKEN=your_token_here
   RUSH_SITE_SLUG=colegio-imperatrice
   # Menu and Route IDs (check Rush CMS dashboard)
   PUBLIC_RUSH_ROUTE_BLOG_ID=...
   PUBLIC_RUSH_NAV_MAIN_ID=...
   ```

4. **Start the development server**
   ```bash
   pnpm dev
   ```
   Access `http://localhost:4321`

## 📁 Project Structure

```text
src/
├── components/       # UI Components (React/Astro)
│   ├── home/         # Home Sections (Hero, Events, etc.)
│   └── gallery/      # Image galleries (Masonry)
├── layouts/          # Base Layouts (Header, Footer)
├── lib/              # Rush CMS SDK Client and utilities
├── pages/            # File-based routing
│   ├── blog/         # Dynamic blog routes
│   ├── destaques/    # Highlight routes
│   └── eventos/      # Event routes
└── utils/            # General utilities (e.g., rich-text.ts)
```

## 📄 License

This project is a proprietary showcase. All content and design rights reserved to Colégio Imperatrice. Source code available for educational and Rush CMS demonstration purposes.
