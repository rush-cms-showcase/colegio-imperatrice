import { rushConfig } from "../../rush.config";

export function getRouteForCollection(collectionId: number): string {
    const route = Object.entries(rushConfig.routes).find(([path, id]) => {
        if (Array.isArray(id)) return id.includes(collectionId);
        return id === collectionId;
    });
    return route ? route[0] : '';
}

export function resolveUrl(item: any, locale: string = 'pt_BR'): string {
    if (item.type === 'url') {
        return item.url || '#';
    }

    if (item.type === 'collection') {
        const collectionId = item.collection?.id;
        if (!collectionId) return '#';
        return getRouteForCollection(collectionId);
    }

    if (item.type === 'entry') {
        const entry = item.entry;
        if (!entry) return '#';
        
        // Try to find collection context if possible, otherwise assume root or need more info.
        // For now, let's treat it as a root page or try to match.
        // Actually, without collection ID on the entry in the menu response, 
        // we can't be 100% sure of the prefix unless we know the entry's collection.
        // But commonly in this project, pages like 'aluno' might be single entries or generic pages.
        // Let's assume root-level pages or simple slug usage for now.
        // IMPROVEMENT: API should return collection_id or full url.
        const slug = entry.slug?.[locale] || entry.slug;
        if (typeof slug === 'string') return `/${slug}`;
        return '#';
    }

    return '#';
}

export function mapMenuItem(item: any, locale: string = 'pt_BR') {
    return {
        title: item.title,
        url: resolveUrl(item, locale),
        target: item.target,
        children: item.children ? item.children.map((child: any) => mapMenuItem(child, locale)) : []
    };
}
