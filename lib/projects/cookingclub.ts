import type { FeaturedProject } from "./types";

export const cookingclub: FeaturedProject = {
    slug: "cooking-club",
    title: "Cooking Club",
    subtitle:
        "A small internal project built around weekly cooking themes and shared food experiences.",
    badges: ["Web", "Content"],
    links: [
        {
            label: "Live Demo",
            url: "https://ebarr10.github.io/cooking-club/",
        },
        { label: "GitHub", url: "https://github.com/ebarr10/cooking-club" },
    ],
    tabs: [
        {
            id: "overview",
            label: "Overview",
            paragraphs: [
                "Cooking Club was an internal experiment to boost employee engagement through a shared weekly cooking theme.",
                "Each week, someone picked a category (e.g., Pasta, Soups & Stews), and everyone could cook something that matched the theme and share their results.",
                "The site served as a lightweight hub for browsing themes by week and viewing submitted dishes in a simple gallery format.",
            ],
        },
        {
            id: "features",
            label: "Features",
            bullets: [
                "Weekly cooking themes with date ranges",
                "Gallery of submissions per week with photos and recipe titles",
                "Lightweight browsing across weeks and themes",
                "Designed to be simple to participate: cook something → upload → share",
            ],
        },
        {
            id: "tech",
            label: "Tech",
            sections: [
                {
                    label: "Frontend",
                    items: ["React", "TypeScript"],
                },
                {
                    label: "Framework",
                    items: ["Next.js"],
                },
                {
                    label: "Deployment",
                    items: ["GitHub Pages"],
                },
            ],
        },
        {
            id: "learnings",
            label: "Learnings",
            bullets: [
                "Engagement tools only work when the underlying habit already exists or when participation is strongly incentivized",
                "Reducing friction helps, but it can’t replace motivation",
                "Community features benefit from a clear cadence and a low-effort contribution path",
            ],
        },
    ],
};
