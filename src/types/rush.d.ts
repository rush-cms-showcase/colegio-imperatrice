export interface NavItem {
  title: string
  url: string
  target?: string
  children?: NavItem[]
}

export interface NavConfig {
  main?: string
  topbar?: string
  footer?: string
  [key: string]: string | undefined
}


export interface TaxonomyPaths {
  categories: string
  tags: string
}

export interface FormsConfig {
  [key: string]: string
}

export interface LocaleConfig {
  code: string
  label: string
  path: string
  navs?: NavConfig
  forms?: FormsConfig
  taxonomies: TaxonomyPaths
  pagination: string
}

export interface RushSiteConfig {
  url?: string
  locales: Record<string, LocaleConfig>
  defaultLocale: string
  routes: Record<string, number | number[]>
  defaults: {
    perPage: number
  }
}
