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
				main: 'GhxYxmeyo8IIeXXipeXbWn1A',
				topbar: 'gYy6bmulXnmKhCX3hbBMcehc',
				footer: 'GhxYxmeyo8IIeXXipeXbWn1A',
			},
			forms: {
				contact: 'pVcDlmNCiFe2bQTxHisx2uK3',
			},
			taxonomies: {
				categories: 'categorias',
				tags: 'tags',
			},
			pagination: 'pagina',
		},
    },

    routes: {
        '/': 5,
        '/eventos': 6,
        '/blog': 4,
        '/destaques': 7,
    },

    defaults: {
        perPage: 12,
    },
}
