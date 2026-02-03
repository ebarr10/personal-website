import type { FeaturedProject } from "./types";

export const clothingstore: FeaturedProject = {
    slug: "clothing-store",
    title: "Clothing Store Prototype",
    subtitle:
        "A capstone React project exploring state management, routing, and real-world frontend patterns.",
    badges: ["Frontend", "Learning"],
    links: [{ label: "GitHub", url: "https://github.com/ebarr10" }],
    tabs: [
        {
            id: "overview",
            label: "Overview",
            paragraphs: [
                "This project was built to practice building a more complete React application end-to-end.",
                "It includes common patterns like routing, state management, async workflows, and reusable components.",
            ],
        },
        {
            id: "concepts",
            label: "Concepts",
            bullets: [
                "Component design & props",
                "Client-side routing",
                "Async workflows and side effects",
                "State management patterns",
            ],
        },
        {
            id: "tech",
            label: "Tech",
            tags: ["React", "Redux", "TypeScript", "SCSS"],
        },
    ],
};
