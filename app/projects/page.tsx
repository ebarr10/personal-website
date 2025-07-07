type Project = {
  title: string;
  description: string;
  link: string;
  tags?: string[];
  resources?: { label: string; url: string }[];
};

export default function ProjectPage() {
  const projects: Project[] = [
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

  return (
    <main>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Side Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <a
              key={proj.title}
              href={proj.link}
              target="_blank"
              className="block p-4 border rounded-2xl hover:shadow-md transition bg-white"
            >
              <h2 className="text-xl font-semibold">{proj.title}</h2>
              <p className="text-gray-600 mt-1 text-sm">{proj.description}</p>

              {proj.tags && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-3 flex flex-wrap gap-2">
                {proj.resources &&
                  proj.resources.map((resource) => (
                    <a
                      key={resource.url}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 transition"
                    >
                      {resource.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M18 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h6m3-3h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
