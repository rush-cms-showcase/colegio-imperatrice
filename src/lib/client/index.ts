import { RushClient, type RushClientConfig } from "./client";
import { Entries } from "./entries";

export class RushCMS extends RushClient {
    public entries: Entries;

    constructor(config: RushClientConfig) {
        super(config);
        this.entries = new Entries(config);
    }

    async getEntries(collection: string, params: Record<string, any> = {}) {
        return this.entries.get(collection, params);
    }
}
