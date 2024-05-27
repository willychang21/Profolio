// interfaces.ts
export interface ContentItem {
    title: string;
    date: string;
    duration: string;
    image?: string;
    tags?: string[];
}

export interface ContentYear {
    year: string;
    items: ContentItem[];
}
