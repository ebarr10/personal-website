import type { FeaturedProject } from "./types";

export const clothingstore: FeaturedProject = {
    slug: "clothing-store",
    title: "Clothing Store Prototype",
    subtitle:
        "A capstone React project exploring state management, routing, and real-world frontend patterns.",
    badges: ["Frontend", "Learning"],
    links: [
        {
            label: "Live Demo",
            url: "https://ebarr10-react-capstone.netlify.app/",
        },
        {
            label: "GitHub",
            url: "https://github.com/ebarr10/ztm-capstone-clothing-store",
        },
    ],
    tabs: [
        {
            id: "overview",
            label: "Overview",
            paragraphs: [
                "This project is a capstone-style React application built to practice assembling a complete frontend from scratch.",
                "The focus was on combining routing, state management, async data flows, and reusable components into something that feels closer to a real-world app rather than isolated exercises.",
            ],
        },
        {
            id: "concepts",
            label: "Concepts",
            bullets: [
                "Component composition and prop-driven design",
                "Client-side routing and page-level state",
                "Managing async data flows and side effects",
                "Global vs local state tradeoffs",
                "Structuring a frontend project for readability and reuse",
            ],
        },
        {
            id: "tech",
            label: "Tech",
            sections: [
                {
                    label: "Frontend",
                    items: ["React", "TypeScript", "SCSS"],
                },
                {
                    label: "State Management",
                    items: ["Redux", "Reducers", "Middleware"],
                },
                {
                    label: "Backend & Services",
                    items: ["Netlify Functions", "Firebase (Auth / Data)"],
                },
                {
                    label: "Payments",
                    items: ["Stripe"],
                },
                {
                    label: "Infra",
                    items: ["Netlify"],
                },
            ],
        },
        {
            id: "learnings",
            label: "Learnings",
            bullets: [
                "Understanding when global state is helpful versus when local component state is sufficient",
                "Learning how routing decisions influence component structure",
                "Seeing how small state decisions compound as an app grows",
                "Gaining confidence reading and reasoning about larger React component trees",
                "Recognizing the importance of consistent patterns over clever abstractions",
            ],
        },
    ],
};
