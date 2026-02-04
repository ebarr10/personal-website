import type { FeaturedProject } from "./types";

export const changelogscribe: FeaturedProject = {
    slug: "changelogscribe",
    title: "ChangeLogScribe",
    subtitle:
        "AI-assisted changelog generation for GitHub releases with a focus on clean, consistent summaries.",
    badges: ["Product", "LLM", "Web"],
    links: [
        { label: "Website", url: "https://changelogscribe.com" },
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
                "ChangeLogScribe is a small product built to make release notes easier to write and easier to keep correct over time.",
                "Instead of manually curating changelogs, it turns pull requests and commit history into structured, human-readable entries that can be reused across releases, sprints, and updates.",
                "The goal is to reduce the friction between shipping code and communicating what actually changed.",
            ],
        },
        {
            id: "features",
            label: "Features",
            bullets: [
                "Generate release notes directly from PR and commit history",
                "Group changes into clear categories like features, fixes, and improvements",
                "Support multiple repositories and flexible date ranges",
                "Customize tone and structure with reusable templates",
                "Export to Markdown, PDF, or plain text for docs and announcements",
            ],
        },
        {
            id: "tech",
            label: "Tech",
            sections: [
                { label: "Frontend", items: ["Next.js", "TypeScript"] },
                { label: "AI", items: ["OpenAI API"] },
                { label: "Integrations", items: ["GitHub API"] },
                { label: "Payments", items: ["Stripe"] },
                { label: "Infra", items: ["Netlify"] },
            ],
        },
        {
            id: "learnings",
            label: "Learnings",
            bullets: [
                "Designing LLM workflows that are predictable enough for tooling, not just demos",
                "Separating content extraction from formatting to keep outputs reusable",
                "Balancing automation with user control to maintain trust in generated output",
                "Shipping a paid product early instead of over-polishing before validation",
                "Designing pricing tiers (e.g., Pro and Scale) to align technical limits with perceived value",
                "Building a dedicated testing environment to safely iterate on features without impacting production users",
                "Learning how to frame and communicate value for developers, not just build features",
                "Understanding how launch surfaces (Product Hunt, docs, landing pages) shape perception",
                "Iterating on copy and positioning is as important as iterating on code",
            ],
        },
    ],
};
