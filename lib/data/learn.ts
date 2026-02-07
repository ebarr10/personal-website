export type ResourceRow = {
    label: string;
    href?: string;
    focus?: string;
    notes?: string;
};

export type ResourceSection = {
    title: string;
    columns: string[];
    rows: ResourceRow[];
};

export const learnSections: ResourceSection[] = [
    {
        title: "YouTube Channels",
        columns: ["Channel", "Focus", "Notes"],
        rows: [
            {
                label: "Zero to Mastery",
                href: "https://www.youtube.com/@ZeroToMastery",
                focus: "Many fields",
                notes: "Free resource covering many areas of software development",
            },
            {
                label: "Syntax",
                href: "https://www.youtube.com/@syntaxfm",
                focus: "Frontend",
                notes: "Entertaining coding discussions and tutorials",
            },
        ],
    },
    {
        title: "Websites & Platforms",
        columns: ["Website", "Description", "What I Use It For"],
        rows: [
            {
                label: "Zero To Mastery",
                href: "https://zerotomastery.io/",
                focus: "Courses and career roadmaps",
                notes: "Structured learning and side projects",
            },
            {
                label: "freeCodeCamp",
                href: "https://www.freecodecamp.org/",
                focus: "Free dev courses and articles",
                notes: "Reinforcing fundamentals",
            },
            {
                label: "MDN Web Docs",
                href: "https://developer.mozilla.org/",
                focus: "Frontend reference",
                notes: "HTML, CSS, and JavaScript documentation",
            },
            {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/",
                focus: "Developer Q&A",
                notes: "Debugging and quick answers",
            },
            {
                label: "GitHub",
                href: "https://github.com/",
                focus: "Code hosting and collaboration",
                notes: "Hosting projects, exploring tools, and learning from others",
            },
        ],
    },
    {
        title: "Newsletters & Blogs",
        columns: ["Source", "Type", "Notes"],
        rows: [
            {
                label: "The Pragmatic Programmer",
                href: "https://github.com/lighthousand/books/blob/master/the-pragmatic-programmer.pdf",
                focus: "Book",
                notes: "Timeless principles on software craftsmanship, responsibility, and adaptability",
            },
        ],
    },
    {
        title: "Podcasts",
        columns: ["Podcast", "Topics", "Notes"],
        rows: [
            {
                label: "Syntax.fm",
                href: "https://syntax.fm/",
                focus: "Frontend and dev life",
                notes: "Casual discussions on modern web development",
            },
        ],
    },
    {
        title: "Apps & Tools",
        columns: ["Tool", "Platform", "Why I Use It"],
        rows: [
            {
                label: "ChatGPT",
                href: "https://chatgpt.com/",
                focus: "Web",
                notes: "Quick answers, debugging help, learning new topics, and drafting ideas",
            },
        ],
    },
    {
        title: "Other Sources",
        columns: ["Source", "Focus", "Notes"],
        rows: [
            {
                label: "Reddit",
                focus: "Community discussions",
                notes: "r/webdev, r/learnprogramming, r/django",
            },
        ],
    },
];
