import { RushCMS } from "./client"
import { rushConfig } from "../../rush.config"

export const rush = new RushCMS({
    baseUrl: import.meta.env.RUSH_BASE_URL,
    apiToken: import.meta.env.RUSH_API_TOKEN,
    siteSlug: import.meta.env.RUSH_SITE_SLUG
})

export type RouteKey = keyof typeof rushConfig.routes

export function getCollectionId(route: RouteKey): string {
    const id = rushConfig.routes[route]
    if (isNaN(id)) {
        throw new Error(`Invalid collection ID for route "${route}". Check your environment variables.`)
    }
    return String(id)
}
