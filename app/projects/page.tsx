import { projects } from "./data/projects";
export default function ProjectPage() {
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
