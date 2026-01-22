# Colégio Imperatrice

A high-performance, modern school website built with **Astro 5** and **React**, serving as a real-world **Rush CMS** showcase. This project demonstrates Rush CMS's capabilities in managing dynamic content, menus, and SEO configurations for complex institutional websites.

## Technologies

- **Framework**: [Astro v5](https://astro.build), static website
- **CMS**: [Rush CMS](https://rushcms.com), the Headless CMS with static deploy button
- **UI**: [React](https://react.dev), used only for islands like Contact Form
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Icons**: Lucide React & Unplugin Icons

## Features & Rush CMS Integration

This project uses Rush CMS as the single source for content. Key integrations include:

### Dynamic Content Management
- **Events and Highlights**: Paginated listings (`/eventos`, `/destaques`) with cover images, galleries, and rich text
- **Blog**: Full-featured news system with **Rich Text** rendering (Tiptap JSON) transformed into static HTML for maximum performance and SEO
- **Pagination**: Full pagination control (e.g., 6 items per page) configured on the front-end and powered by the Rush API

### Data Structure (`rush.config.ts`)
The configuration file centralizes the mapping between routes and CMS collections:
- **Route Maps**: Associates URLs (`/blog`, `/eventos`) with Rush collection IDs
- **Internationalization**: Support configured for `pt_BR`
- **Dynamic IDs**: Uses environment variables for menu, form, and category IDs

### Optimized Components
- **Images**: Integration with `astro:assets` and optimized images served from the CMS
- **Forms**: Contact form integrated directly with the Rush CMS [API SDK](https://github.com/rush-cms/sdk)

## License

This project is a proprietary showcase. All content and design rights reserved to Colégio Imperatrice. Source code available for educational and Rush CMS demonstration purposes.
