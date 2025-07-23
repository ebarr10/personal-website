type Project = {
  title: string;
  description: string;
  link: string;
  tags?: string[];
  resources?: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    title: "Discord Bots",
    description:
      "A collection of Discord bots I built in my free time for use in a private server with friends.",
    link: "https://github.com/ebarr10/discord-bots",
    tags: ["JavaScript", "Discord.js", "Bots", "Automation"],
  },
  {
    title: "Gatsby Blog",
    description:
      "Built and deployed a simple Gatsby blog as part of a course module to explore static site generation and deployment with Netlify.",
    link: "https://github.com/ebarr10/gatsby-blog",
    tags: [
      "Gatsby",
      "JavaScript",
      "TypeScript",
      "CSS",
      "Static Site Generation",
      "Netlify",
    ],
  },
  {
    title: "DRF",
    description:
      "A practice repository for learning Django REST Framework by following the BugBytes course series.",
    link: "https://github.com/ebarr10/django-rest-framework",
    tags: ["Python", "Django", "Django REST Framework", "API", "Backend"],
  },
  {
    title: "Redux Toolkit",
    description:
      "Exploring Redux Toolkit after previously working with Redux-Saga in another project.",
    link: "https://github.com/ebarr10/crwn-clothing-v2-redux-toolkit",
    tags: [
      "React",
      "Redux Toolkit",
      "Redux",
      "JavaScript",
      "SCSS",
      "State Management",
    ],
  },
  {
    title: "Jest Understanding",
    description:
      "Small project built to gain hands-on experience with Jest testing framework.",
    link: "https://github.com/ebarr10/jest-testing",
    tags: ["JavaScript", "Jest", "Unit Testing", "Testing"],
  },
  {
    title: "Webpack and Babel",
    description:
      "A straightforward introduction to Webpack, Babel and there common use cases.",
    link: "https://github.com/ebarr10/webpack-from-scratch",
    tags: ["Webpack", "Babel"],
  },
  {
    title: "ChatGPT Clone",
    description:
      "A functional ChatGPT-style Q&A app built with FastAPI to explore prompt engineering concepts.",
    link: "https://github.com/ebarr10/chatgpt-low-version-clone",
    tags: [
      "Python",
      "FastAPI",
      "OpenAI API",
      "Prompt Engineering",
      "Async",
      "REST",
    ],
  },
  {
    title: "Local Support Helper",
    description:
      "Given a structured JSON input, the app uses a language model to suggest potential steps for resolving user-submitted issues.",
    link: "https://github.com/ebarr10/local-support-helper",
    tags: [
      "Python",
      "JavaScript",
      "FastAPI",
      "LLM",
      "Prompt Engineering",
      "CSS",
      "AI Tools",
    ],
  },
  {
    title: "Job Search Engine (Frontend)",
    description:
      "A frontend interface for searching jobs across multiple locations, built using the JobSpy repository as a base. Backend functionality is handled in a separate repository.",
    link: "https://github.com/ebarr10/job-search-engine-frontend",
    tags: ["JavaScript", "HTML", "CSS", "Frontend", "Job Search", "Web App"],
    resources: [
      {
        label: "JobSpy Repository",
        url: "https://github.com/speedyapply/JobSpy",
      },
      {
        label: "Job Search Engine (Backend)",
        url: "https://github.com/ebarr10/job-search-engine-backend",
      },
    ],
  },
  {
    title: "Job Search Engine (Backend)",
    description:
      "this backend powers a website that lets you search jobs across multiple locations. The frontend is handled separately in another repository",
    link: "https://github.com/ebarr10/job-search-engine-backend",
    tags: ["Python", "Django", "Backend", "API"],
    resources: [
      {
        label: "Job Search Engine (Frontend)",
        url: "https://github.com/ebarr10/job-search-engine-frontend",
      },
    ],
  },
  {
    title: "Monster Rolodex",
    description:
      "A React app demonstrating component creation, searching, and API integration. Built as part of the Zero To Mastery React course.",
    link: "https://github.com/ebarr10/monster-rolodex",
    tags: ["JavaScript", "React", "Frontend", "API"],
    resources: [
      {
        label: "ZTM: Learn React",
        url: "https://zerotomastery.io/courses/learn-react/",
      },
    ],
  },
];
