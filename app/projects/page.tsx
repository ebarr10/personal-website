type Project = {
  title: string;
  description: string;
  link: string;
  tags?: string[];
  services?: string[];
};

export default function ProjectPage() {
  const projects: Project[] = [
    {
      title: "Discord Bots",
      description:
        "A collection of Discord bots I built in my free time for use in a private server with friends.",
      link: "https://github.com/ebarr10/discord-bots",
      tags: ["Javascript"],
    },
    {
      title: "Gatsby Blog",
      description:
        "Built and deployed a simple Gatsby blog as part of a course module to explore static site generation and deployment with Netlify.",
      link: "https://github.com/ebarr10/gatsby-blog",
      tags: ["Gatsby", "Javascript", "Typescript", "CSS"],
      services: ["Netlify"],
    },
    {
      title: "DRF",
      description:
        "A practice repository for learning Django REST Framework by following the BugBytes course series.",
      link: "https://github.com/ebarr10/django-rest-framework",
      tags: ["Python", "Django", "Django Rest Frameword"],
    },
    {
      title: "Redux Toolkit",
      description:
        "Exploring Redux Toolkit after previously working with Redux-Saga in another project.",
      link: "https://github.com/ebarr10/crwn-clothing-v2-redux-toolkit",
      tags: ["React", "Redux", "Javascript", "SCSS", "HTML"],
    },
    {
      title: "Jest Understanding",
      description:
        "Small project built to gain hands-on experience with Jest testing framework.",
      link: "https://github.com/ebarr10/jest-testing",
      tags: ["Javascript"],
    },
    {
      title: "Webpack and Babel",
      description:
        "A straightforward introduction to Webpack, Babel and there common use cases.",
      link: "https://github.com/ebarr10/webpack-from-scratch",
      tags: ["Webpack", "Babel"],
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

              {proj.services && (
                <div className="mt-2 text-xs text-blue-600">
                  Uses: {proj.services.join(", ")}
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
