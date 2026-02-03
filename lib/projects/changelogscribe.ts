import type { FeaturedProject } from "./types";

export const changelogscribe: FeaturedProject = {
    slug: "changelogscribe",
    title: "ChangeLogScribe",
    subtitle:
        "AI-assisted changelog generation for GitHub releases with a focus on clean, consistent summaries.",
    badges: ["Product", "LLM", "Web"],
    links: [
        { label: "GitHub", url: "https://github.com/ebarr10" },
        {
            label: "Product Hunt",
            url: "https://www.producthunt.com/posts/changelogscribe?utm_source=other&utm_medium=social",
        },
    ],
    tabs: [
        {
            id: "overview",
            label: "Overview",
            paragraphs: [
                "ChangeLogScribe is a small product built to make release notes easier to write and easier to maintain.",
                "The core goal is to turn PRs and commit history into structured, readable changelog entries that can be reused across releases.",
            ],
        },
        {
            id: "features",
            label: "Features",
            bullets: [
                "Generate release notes from PR history",
                "Support consistent formatting via templates",
                "Quick iteration on tone and structure",
            ],
        },
        {
            id: "tech",
            label: "Tech",
            tags: ["Next.js", "TypeScript", "LLM", "GitHub API"],
        },
        {
            id: "learnings",
            label: "Learnings",
            bullets: [
                "Designing LLM workflows that stay predictable enough for tooling",
                "Separating content extraction from formatting/presentation",
            ],
        },
    ],
};
