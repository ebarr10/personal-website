export type ProjectLink = { label: string; url: string };

export type ProjectTab = {
    id: string;
    label: string;
    paragraphs?: string[];
    bullets?: string[];
    tags?: string[];
    links?: ProjectLink[];
};

export type FeaturedProject = {
    slug: string; // route: /projects/:slug
    title: string;
    subtitle: string;
    badges?: string[]; // small tags like “Product”, “LLM”, etc.
    links?: ProjectLink[]; // live, github, producthunt, etc.
    tabs: ProjectTab[];
};

export type MiscProject = {
    title: string;
    description: string;
    repoUrl?: string;
    liveUrl?: string;
    tags?: string[];
    kind?: "tool" | "experiment" | "course" | "app";
    isPrivate?: boolean;
};
