import type { FeaturedProject } from "./types";

export const cookingclub: FeaturedProject = {
    slug: "cooking-club",
    title: "Cooking Club",
    subtitle:
        "A personal project for organizing recipes, tracking attempts, and documenting improvements over time.",
    badges: ["Web", "Content"],
    links: [{ label: "GitHub", url: "https://github.com/ebarr10" }],
    tabs: [
        {
            id: "overview",
            label: "Overview",
            paragraphs: [
                "Cooking Club started as a way to keep recipes and notes in one place.",
                "It’s designed around iteration: attempt → notes → improvements → repeat.",
            ],
        },
        {
            id: "features",
            label: "Features",
            bullets: [
                "Recipe pages with notes and revisions",
                "Simple browsing and organization",
                "Room to expand into ratings and categories",
            ],
        },
        {
            id: "tech",
            label: "Tech",
            tags: ["Next.js", "React", "TypeScript"],
        },
    ],
};
