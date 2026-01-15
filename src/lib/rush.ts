import { RushCMS } from "./client";

export const rush = new RushCMS({
    baseUrl: import.meta.env.RUSH_BASE_URL,
    apiToken: import.meta.env.RUSH_API_TOKEN,
    siteSlug: import.meta.env.RUSH_SITE_SLUG
});
