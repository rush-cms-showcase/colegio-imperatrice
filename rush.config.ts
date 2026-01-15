import type { RushSiteConfig } from './src/types/rush'

export const rushConfig: RushSiteConfig = {
    url: 'https://colegioimperatrice.com.br',
    defaultLocale: 'pt_BR',

    locales: {
		pt_BR: {
			code: 'pt_BR',
			label: 'Português',
			path: '/',
			navs: {
				main: import.meta.env.PUBLIC_RUSH_NAV_MAIN_ID,
				topbar: import.meta.env.PUBLIC_RUSH_NAV_TOPBAR_ID,
				footer: import.meta.env.PUBLIC_RUSH_NAV_FOOTER_ID,
			},
			forms: {
				contact: import.meta.env.PUBLIC_RUSH_FORM_CONTACT_ID,
			},
			taxonomies: {
				categories: 'categorias',
				tags: 'tags',
			},
			pagination: 'pagina',
		},
    },

    routes: {
        '/': Number(import.meta.env.PUBLIC_RUSH_ROUTE_ROOT_ID),
        '/eventos': Number(import.meta.env.PUBLIC_RUSH_ROUTE_EVENTS_ID),
        '/blog': Number(import.meta.env.PUBLIC_RUSH_ROUTE_BLOG_ID),
        '/destaques': Number(import.meta.env.PUBLIC_RUSH_ROUTE_HIGHLIGHTS_ID),
    },

    defaults: {
        perPage: 12,
    },
}
